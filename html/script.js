const container = document.getElementById('weapon-wheel-container');
const wheel = document.getElementById('weapon-wheel');
const iconsContainer = document.getElementById('icons-container');
const mainIcon = document.getElementById('main-icon');
const weaponNameLabel = document.getElementById('selected-weapon-name');
const dotsContainer = document.getElementById('sub-weapon-dots');
const highlight = document.getElementById('wheel-highlight');

let activeWeaponIndex = -1;
let isOpen = false;
let activeCategories = [];

const categories = Config.categories;

const preloadContainer = document.createElement('div');
preloadContainer.style.width = '0';
preloadContainer.style.height = '0';
preloadContainer.style.overflow = 'hidden';
preloadContainer.style.position = 'absolute';
preloadContainer.style.opacity = '0';
preloadContainer.style.pointerEvents = 'none';
document.body.appendChild(preloadContainer);

function preloadImages() {
    categories.forEach(cat => {
        cat.items.forEach(item => {
            const img = new Image();
            img.src = item.image;
            preloadContainer.appendChild(img);
        });
    });
}
preloadImages();

function initIcons() {
    iconsContainer.innerHTML = '';
    const radius = 180;
    const slotCount = activeCategories.length;
    const wedgeAngle = 360 / slotCount;
    const halfWedge = wedgeAngle / 2;

    document.querySelectorAll('.divider').forEach(d => d.remove());

    activeCategories.forEach((cat, index) => {
        const divider = document.createElement('div');
        divider.className = 'divider dynamic-divider';
        divider.style.transform = `rotate(${cat.angle - halfWedge}deg)`;
        wheel.appendChild(divider);

        const btn = document.createElement('div');
        btn.className = cat.available ? 'weapon-icon-btn' : 'weapon-icon-btn hidden-slot';
        btn.id = index;

        const angleRad = (cat.angle - 90) * (Math.PI / 180);
        const x = radius * Math.cos(angleRad);
        const y = radius * Math.sin(angleRad);

        btn.style.left = `calc(50% + ${x}px)`;
        btn.style.top = `calc(50% + ${y}px)`;
        btn.style.transform = `translate(-50%, -50%)`;

        if (cat.available) {
            btn.innerHTML = `<img id="slot-icon-${index}" src="${cat.items[cat.currentIndex].image}" alt="${cat.label}">`;
        } else {
            btn.innerHTML = ``;
        }
        iconsContainer.appendChild(btn);
    });
}

window.addEventListener('resize', initIcons);

let virtualX = 0;
let virtualY = 0;

function handleMove(clientX, clientY) {
    const rect = wheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = clientX - centerX;
    const dy = clientY - centerY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < 15) return;

    let angle = Math.atan2(dx, -dy) * (180 / Math.PI);
    if (angle < 0) angle += 360;

    const slotCount = activeCategories.length;
    const wedgeAngle = 360 / slotCount;

    const adjustedAngle = (angle + (wedgeAngle / 2)) % 360;
    const wedgeIndex = Math.floor(adjustedAngle / wedgeAngle);
    const targetIndex = wedgeIndex;

    if (targetIndex !== activeWeaponIndex) {
        selectCategory(targetIndex, (wedgeIndex * wedgeAngle) - (wedgeAngle / 2));
    }
}

let soundConfig = { name: "NAV_UP_DOWN", set: "HUD_FRONTEND_DEFAULT_SOUNDSET" };

window.addEventListener('message', (event) => {
    const data = event.data;
    if (data.action === "setVisible") {
        if (data.visible) {
            const rect = wheel.getBoundingClientRect();
            virtualX = rect.left + rect.width / 2;
            virtualY = rect.top + rect.height / 2;

            activeWeaponIndex = -1;
            highlight.style.opacity = '0';
            weaponNameLabel.innerText = '';
            mainIcon.style.opacity = '0';
            dotsContainer.innerHTML = '';

            if (data.sound) {
                soundConfig = data.sound;
            }

            if (data.inventory) {
                activeCategories = Config.categories.map(cat => {
                    const availableItems = cat.items.filter(item => data.inventory[item.hash] === true);
                    return {
                        ...cat,
                        items: availableItems,
                        currentIndex: availableItems.length > 0 ? 0 : -1,
                        available: availableItems.length > 0
                    };
                });
            } else {
                activeCategories = Config.categories.map(cat => ({ ...cat, available: true, currentIndex: 0 }));
            }

            container.classList.remove('hidden');
            isOpen = true;
            initIcons();
        } else {
            container.classList.add('hidden');
            isOpen = false;

            if (activeWeaponIndex !== -1) {
                const category = activeCategories[activeWeaponIndex];
                if (category && category.available && category.currentIndex !== -1) {
                    const selected = category.items[category.currentIndex];
                    fetch(`https://${GetParentResourceName()}/selectWeapon`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify({ weaponHash: selected.hash })
                    });
                }
            }
        }
    } else if (data.action === "moveMouse") {
        if (!isOpen) return;

        const sensitivity = 100;
        virtualX += data.x * sensitivity;
        virtualY += data.y * sensitivity;

        const rect = wheel.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const dx = virtualX - centerX;
        const dy = virtualY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);

        const maxRadius = 200;
        if (dist > maxRadius) {
            virtualX = centerX + (dx / dist) * maxRadius;
            virtualY = centerY + (dy / dist) * maxRadius;
        }

        handleMove(virtualX, virtualY);
    }
});

document.addEventListener('wheel', (e) => {
    if (!isOpen || activeWeaponIndex === -1) return;

    const category = activeCategories[activeWeaponIndex];
    if (!category || !category.available) return;

    if (e.deltaY < 0) {
        category.currentIndex = (category.currentIndex - 1 + category.items.length) % category.items.length;
    } else {
        category.currentIndex = (category.currentIndex + 1) % category.items.length;
    }

    fetch(`https://${GetParentResourceName()}/playSound`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: soundConfig.name, set: soundConfig.set })
    });

    updateCurrentSelection();
});

function selectCategory(index, highlightAngle) {
    activeWeaponIndex = index;

    const category = activeCategories[activeWeaponIndex];
    if (!category || !category.available) {
        highlight.style.opacity = '0';
        return;
    }

    fetch(`https://${GetParentResourceName()}/playSound`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: soundConfig.name, set: soundConfig.set })
    });

    document.querySelectorAll('.weapon-icon-btn').forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(index);
    if (activeBtn) activeBtn.classList.add('active');

    highlight.style.background = `conic-gradient(from ${highlightAngle}deg, var(--highlight-start) 0deg, var(--highlight-end) ${360 / activeCategories.length}deg, transparent ${360 / activeCategories.length}deg, transparent 360deg)`;
    highlight.style.opacity = '1';

    updateCurrentSelection();
}

function updateCurrentSelection() {
    if (activeWeaponIndex === -1) return;

    const category = activeCategories[activeWeaponIndex];
    if (!category || !category.items || category.items.length === 0) {
        weaponNameLabel.innerText = '';
        mainIcon.style.opacity = '0';
        dotsContainer.innerHTML = '';
        return;
    }

    const item = category.items[category.currentIndex];

    if (weaponNameLabel.innerText !== item.name) {
        weaponNameLabel.innerText = item.name;
    }

    if (mainIcon.src !== item.image) {
        mainIcon.src = item.image;
        mainIcon.style.opacity = '1';
    }

    const slotIcon = document.getElementById(`slot-icon-${activeWeaponIndex}`);
    if (slotIcon && slotIcon.src !== item.image) {
        slotIcon.src = item.image;
    }

    const existingDots = dotsContainer.children;
    const itemsCount = category.items.length;

    if (itemsCount <= 1) {
        dotsContainer.innerHTML = '';
    } else {
        if (existingDots.length !== itemsCount) {
            dotsContainer.innerHTML = '';
            for (let i = 0; i < itemsCount; i++) {
                const dot = document.createElement('div');
                dot.className = i === category.currentIndex ? 'dot active' : 'dot';
                dotsContainer.appendChild(dot);
            }
        } else {
            for (let i = 0; i < itemsCount; i++) {
                existingDots[i].className = i === category.currentIndex ? 'dot active' : 'dot';
            }
        }
    }
}
