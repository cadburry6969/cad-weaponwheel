local config = lib.load('config')
local isOpen = false

local function toggleWheel(open)
    isOpen = open
    SetNuiFocus(open, false)
    SetNuiFocusKeepInput(open)

    local inventoryData = {}
    if open then
        local ped = PlayerPedId()

        for _, weapon in ipairs(config.weapons) do
            inventoryData[weapon] = (HasPedGotWeapon(ped, GetHashKey(weapon), false) == 1) and true or false
        end

        inventoryData["armor"] = true
        inventoryData["oxy"] = true
    end

    SendNUIMessage({
        action = "setVisible",
        visible = open,
        inventory = inventoryData,
        sound = config.sound
    })
end
exports('toggleWheel', toggleWheel)

local function doAction(data)
    local health = GetEntityHealth(cache.ped)
    local maxHealth = GetEntityMaxHealth(cache.ped)
    local armour = GetPedArmour(cache.ped)
    if data.type == "heal" and health == maxHealth then return end
    if data.type == "armor" and armour == 100 then return end

    local success = lib.progressCircle({
        duration = data.duration,
        position = 'middle',
        useWhileDead = false,
        canCancel = true,
        disable = {
            combat = true,
        }
    })
    if success then
        if data.type == "heal" then
            SetPedMaxTimeUnderwater(cache.ped, 200.0)
            SetPlayerUnderwaterTimeRemaining(cache.playerId, 200.0)
            SetEntityHealth(cache.ped, maxHealth)
        elseif data.type == "armor" then
            SetPedArmour(cache.ped, 100)
        end
    end
end

local function updateMouseMove()
    local x = GetDisabledControlNormal(0, 1)
    local y = GetDisabledControlNormal(0, 2)
    if x ~= 0 or y ~= 0 then
        SendNUIMessage({
            action = "moveMouse",
            x = x,
            y = y
        })
    end
end

if config.keybind then
    lib.addKeybind({
        name = 'utilwheel',
        description = 'Utilities Wheel',
        defaultKey = 'TAB',
        onPressed = function(self)
            toggleWheel(true)
            CreateThread(function()
                while isOpen do
                    Wait(0)
                    HudWeaponWheelIgnoreSelection()
                    DisablePlayerFiring(cache.ped, true)
                    DisableControlAction(0, 1, true)
                    DisableControlAction(0, 2, true)
                    DisableControlAction(0, 24, true)
                    DisableControlAction(0, 25, true)
                    DisableControlAction(0, 37, true)

                    updateMouseMove()
                end
            end)
        end,
        onReleased = function(self)
            toggleWheel(false)
        end
    })
else
    CreateThread(function()
        while true do
            Wait(0)
            HudWeaponWheelIgnoreSelection()
            DisableControlAction(0, 37, true)

            if IsDisabledControlJustPressed(0, 37) then
                toggleWheel(true)
                CreateThread(function()
                    while isOpen do
                        Wait(0)
                        DisablePlayerFiring(cache.ped, true)
                        DisableControlAction(0, 1, true)
                        DisableControlAction(0, 2, true)
                        DisableControlAction(0, 24, true)
                        DisableControlAction(0, 25, true)

                        updateMouseMove()

                        if IsDisabledControlJustReleased(0, 37) then
                            toggleWheel(false)
                        end
                    end
                end)
            end
        end
    end)
end

RegisterNUICallback('selectWeapon', function(data, cb)
    local hash = data.weaponHash
    if not hash then return cb('ok') end

    if hash == "armor" then
        doAction({ type = "armor", duration = config.armorTime })
    elseif hash == "oxy" then
        doAction({ type = "heal", duration = config.healTime })
    else
        local weaponHash = GetHashKey(hash)
        GiveWeaponToPed(cache.ped, weaponHash, 0, false, true)
        SetCurrentPedWeapon(cache.ped, weaponHash, true)
    end

    cb('ok')
end)

RegisterNUICallback('playSound', function(data, cb)
    PlaySoundFrontend(-1, data.name, data.set, true)
    cb('ok')
end)

RegisterNUICallback('close', function(data, cb)
    toggleWheel(false)
    cb('ok')
end)
