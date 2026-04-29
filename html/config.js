const Config = {
    // Categories and their items (weapons/items)
    // Categories are arranged as slots in the 360-degree circle (0, 36, 72, 108, 144, 180, 216, 252, 288, 324)
    categories: [
        {
            label: "Pistols",
            angle: 0,
            items: [
                { name: "Pistol", hash: "WEAPON_PISTOL", image: "https://docs.fivem.net/weapons/WEAPON_PISTOL.png" },
                { name: "Pistol Mk2", hash: "WEAPON_PISTOL_MK2", image: "https://docs.fivem.net/weapons/WEAPON_PISTOL_MK2.png" },
                { name: "Combat Pistol", hash: "WEAPON_COMBATPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_COMBATPISTOL.png" },
                { name: "AP Pistol", hash: "WEAPON_APPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_APPISTOL.png" },
                { name: "Stun Gun", hash: "WEAPON_STUNGUN", image: "https://docs.fivem.net/weapons/WEAPON_STUNGUN.png" },
                { name: "Pistol .50", hash: "WEAPON_PISTOL50", image: "https://docs.fivem.net/weapons/WEAPON_PISTOL50.png" },
                { name: "SNS Pistol", hash: "WEAPON_SNSPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_SNSPISTOL.png" },
                { name: "SNS Pistol Mk2", hash: "WEAPON_SNSPISTOL_MK2", image: "https://docs.fivem.net/weapons/WEAPON_SNSPISTOL_MK2.png" },
                { name: "Heavy Pistol", hash: "WEAPON_HEAVYPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_HEAVYPISTOL.png" },
                { name: "Vintage Pistol", hash: "WEAPON_VINTAGEPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_VINTAGEPISTOL.png" },
                { name: "Flare Gun", hash: "WEAPON_FLAREGUN", image: "https://docs.fivem.net/weapons/WEAPON_FLAREGUN.png" },
                { name: "Marksman Pistol", hash: "WEAPON_MARKSMANPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_MARKSMANPISTOL.png" },
                { name: "Heavy Revolver", hash: "WEAPON_REVOLVER", image: "https://docs.fivem.net/weapons/WEAPON_REVOLVER.png" },
                { name: "Heavy Revolver Mk2", hash: "WEAPON_REVOLVER_MK2", image: "https://docs.fivem.net/weapons/WEAPON_REVOLVER_MK2.png" },
                { name: "Double Action Revolver", hash: "WEAPON_DOUBLEACTION", image: "https://docs.fivem.net/weapons/WEAPON_DOUBLEACTION.png" },
                { name: "Ceramic Pistol", hash: "WEAPON_CERAMICPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_CERAMICPISTOL.png" },
                { name: "Navy Revolver", hash: "WEAPON_NAVYREVOLVER", image: "https://docs.fivem.net/weapons/WEAPON_NAVYREVOLVER.png" },
                { name: "Gadget Pistol", hash: "WEAPON_GADGETPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_GADGETPISTOL.png" },
                { name: "Up-N-Atomizer", hash: "WEAPON_RAYPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_RAYPISTOL.png" },
                { name: "Pistol XM3", hash: "WEAPON_PISTOLXM3", image: "https://docs.fivem.net/weapons/WEAPON_PISTOLXM3.png" }
            ]
        },
        {
            label: "SMGs",
            angle: 36,
            items: [
                { name: "Micro SMG", hash: "WEAPON_MICROSMG", image: "https://docs.fivem.net/weapons/WEAPON_MICROSMG.png" },
                { name: "SMG", hash: "WEAPON_SMG", image: "https://docs.fivem.net/weapons/WEAPON_SMG.png" },
                { name: "SMG Mk2", hash: "WEAPON_SMG_MK2", image: "https://docs.fivem.net/weapons/WEAPON_SMG_MK2.png" },
                { name: "Assault SMG", hash: "WEAPON_ASSAULTSMG", image: "https://docs.fivem.net/weapons/WEAPON_ASSAULTSMG.png" },
                { name: "Combat PDW", hash: "WEAPON_COMBATPDW", image: "https://docs.fivem.net/weapons/WEAPON_COMBATPDW.png" },
                { name: "Machine Pistol", hash: "WEAPON_MACHINEPISTOL", image: "https://docs.fivem.net/weapons/WEAPON_MACHINEPISTOL.png" },
                { name: "Mini SMG", hash: "WEAPON_MINISMG", image: "https://docs.fivem.net/weapons/WEAPON_MINISMG.png" },
                { name: "Tactical SMG", hash: "WEAPON_TACTICALSMG", image: "https://docs.fivem.net/weapons/WEAPON_TACTICALSMG.png" }
            ]
        },
        {
            label: "Assault Rifles",
            angle: 72,
            items: [
                { name: "Assault Rifle", hash: "WEAPON_ASSAULTRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_ASSAULTRIFLE.png" },
                { name: "Assault Rifle Mk2", hash: "WEAPON_ASSAULTRIFLE_MK2", image: "https://docs.fivem.net/weapons/WEAPON_ASSAULTRIFLE_MK2.png" },
                { name: "Carbine Rifle", hash: "WEAPON_CARBINERIFLE", image: "https://docs.fivem.net/weapons/WEAPON_CARBINERIFLE.png" },
                { name: "Carbine Rifle Mk2", hash: "WEAPON_CARBINERIFLE_MK2", image: "https://docs.fivem.net/weapons/WEAPON_CARBINERIFLE_MK2.png" },
                { name: "Advanced Rifle", hash: "WEAPON_ADVANCEDRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_ADVANCEDRIFLE.png" },
                { name: "Special Carbine", hash: "WEAPON_SPECIALCARBINE", image: "https://docs.fivem.net/weapons/WEAPON_SPECIALCARBINE.png" },
                { name: "Special Carbine Mk2", hash: "WEAPON_SPECIALCARBINE_MK2", image: "https://docs.fivem.net/weapons/WEAPON_SPECIALCARBINE_MK2.png" },
                { name: "Bullpup Rifle", hash: "WEAPON_BULLPUPRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_BULLPUPRIFLE.png" },
                { name: "Bullpup Rifle Mk2", hash: "WEAPON_BULLPUPRIFLE_MK2", image: "https://docs.fivem.net/weapons/WEAPON_BULLPUPRIFLE_MK2.png" },
                { name: "Compact Rifle", hash: "WEAPON_COMPACTRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_COMPACTRIFLE.png" },
                { name: "Military Rifle", hash: "WEAPON_MILITARYRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_MILITARYRIFLE.png" },
                { name: "Heavy Rifle", hash: "WEAPON_HEAVYRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_HEAVYRIFLE.png" },
                { name: "Tactical Rifle", hash: "WEAPON_TACTICALRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_TACTICALRIFLE.png" }
            ]
        },
        {
            label: "Snipers",
            angle: 108,
            items: [
                { name: "Sniper Rifle", hash: "WEAPON_SNIPERRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_SNIPERRIFLE.png" },
                { name: "Heavy Sniper", hash: "WEAPON_HEAVYSNIPER", image: "https://docs.fivem.net/weapons/WEAPON_HEAVYSNIPER.png" },
                { name: "Heavy Sniper Mk2", hash: "WEAPON_HEAVYSNIPER_MK2", image: "https://docs.fivem.net/weapons/WEAPON_HEAVYSNIPER_MK2.png" },
                { name: "Marksman Rifle", hash: "WEAPON_MARKSMANRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_MARKSMANRIFLE.png" },
                { name: "Marksman Rifle Mk2", hash: "WEAPON_MARKSMANRIFLE_MK2", image: "https://docs.fivem.net/weapons/WEAPON_MARKSMANRIFLE_MK2.png" },
                { name: "Precision Rifle", hash: "WEAPON_PRECISIONRIFLE", image: "https://docs.fivem.net/weapons/WEAPON_PRECISIONRIFLE.png" }
            ]
        },
        {
            label: "Machine Guns",
            angle: 144,
            items: [
                { name: "MG", hash: "WEAPON_MG", image: "https://docs.fivem.net/weapons/WEAPON_MG.png" },
                { name: "Combat MG", hash: "WEAPON_COMBATMG", image: "https://docs.fivem.net/weapons/WEAPON_COMBATMG.png" },
                { name: "Combat MG Mk2", hash: "WEAPON_COMBATMG_MK2", image: "https://docs.fivem.net/weapons/WEAPON_COMBATMG_MK2.png" },
                { name: "Gusenberg Sweeper", hash: "WEAPON_GUSENBERG", image: "https://docs.fivem.net/weapons/WEAPON_GUSENBERG.png" }
            ]
        },
        {
            label: "Shotguns",
            angle: 180,
            items: [
                { name: "Pump Shotgun", hash: "WEAPON_PUMPSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_PUMPSHOTGUN.png" },
                { name: "Pump Shotgun Mk2", hash: "WEAPON_PUMPSHOTGUN_MK2", image: "https://docs.fivem.net/weapons/WEAPON_PUMPSHOTGUN_MK2.png" },
                { name: "Sawed-Off Shotgun", hash: "WEAPON_SAWNOFFSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_SAWNOFFSHOTGUN.png" },
                { name: "Assault Shotgun", hash: "WEAPON_ASSAULTSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_ASSAULTSHOTGUN.png" },
                { name: "Bullpup Shotgun", hash: "WEAPON_BULLPUPSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_BULLPUPSHOTGUN.png" },
                { name: "Musket", hash: "WEAPON_MUSKET", image: "https://docs.fivem.net/weapons/WEAPON_MUSKET.png" },
                { name: "Heavy Shotgun", hash: "WEAPON_HEAVYSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_HEAVYSHOTGUN.png" },
                { name: "Double Barrel Shotgun", hash: "WEAPON_DBSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_DBSHOTGUN.png" },
                { name: "Sweeper Shotgun", hash: "WEAPON_AUTOSHOTGUN", image: "https://docs.fivem.net/weapons/WEAPON_AUTOSHOTGUN.png" }
            ]
        },
        {
            label: "Heavy",
            angle: 216,
            items: [
                { name: "RPG", hash: "WEAPON_RPG", image: "https://docs.fivem.net/weapons/WEAPON_RPG.png" },
                { name: "Grenade Launcher", hash: "WEAPON_GRENADELAUNCHER", image: "https://docs.fivem.net/weapons/WEAPON_GRENADELAUNCHER.png" },
                { name: "Smoke Grenade Launcher", hash: "WEAPON_GRENADELAUNCHER_SMOKE", image: "https://docs.fivem.net/weapons/WEAPON_GRENADELAUNCHER_SMOKE.png" },
                { name: "Minigun", hash: "WEAPON_MINIGUN", image: "https://docs.fivem.net/weapons/WEAPON_MINIGUN.png" },
                { name: "Firework Launcher", hash: "WEAPON_FIREWORK", image: "https://docs.fivem.net/weapons/WEAPON_FIREWORK.png" },
                { name: "Railgun", hash: "WEAPON_RAILGUN", image: "https://docs.fivem.net/weapons/WEAPON_RAILGUN.png" },
                { name: "Homing Launcher", hash: "WEAPON_HOMINGLAUNCHER", image: "https://docs.fivem.net/weapons/WEAPON_HOMINGLAUNCHER.png" },
                { name: "Compact EMP Launcher", hash: "WEAPON_EMPLAUNCHER", image: "https://docs.fivem.net/weapons/WEAPON_EMPLAUNCHER.png" },
                { name: "Compact Launcher", hash: "WEAPON_COMPACTLAUNCHER", image: "https://docs.fivem.net/weapons/WEAPON_COMPACTLAUNCHER.png" },
                { name: "Widowmaker", hash: "WEAPON_RAYMINIGUN", image: "https://docs.fivem.net/weapons/WEAPON_RAYMINIGUN.png" },
                { name: "Railgun XM3", hash: "WEAPON_RAILGUNXM3", image: "https://docs.fivem.net/weapons/WEAPON_RAILGUNXM3.png" }
            ]
        },
        {
            label: "Throwables",
            angle: 252,
            items: [
                { name: "Grenade", hash: "WEAPON_GRENADE", image: "https://docs.fivem.net/weapons/WEAPON_GRENADE.png" },
                { name: "Sticky Bomb", hash: "WEAPON_STICKYBOMB", image: "https://docs.fivem.net/weapons/WEAPON_STICKYBOMB.png" },
                { name: "BZ Gas", hash: "WEAPON_BZGAS", image: "https://docs.fivem.net/weapons/WEAPON_BZGAS.png" },
                { name: "Molotov", hash: "WEAPON_MOLOTOV", image: "https://docs.fivem.net/weapons/WEAPON_MOLOTOV.png" },
                { name: "Proximity Mine", hash: "WEAPON_PROXMINE", image: "https://docs.fivem.net/weapons/WEAPON_PROXMINE.png" },
                { name: "Pipe Bomb", hash: "WEAPON_PIPEBOMB", image: "https://docs.fivem.net/weapons/WEAPON_PIPEBOMB.png" },
                { name: "Smoke Grenade", hash: "WEAPON_SMOKEGRENADE", image: "https://docs.fivem.net/weapons/WEAPON_SMOKEGRENADE.png" },
                { name: "Flare", hash: "WEAPON_FLARE", image: "https://docs.fivem.net/weapons/WEAPON_FLARE.png" }
            ]
        },
        {
            label: "Utilities",
            angle: 288,
            items: [
                { name: "Oxy", hash: "oxy", image: "https://png.pngtree.com/png-vector/20241219/ourmid/pngtree-orange-medicine-bottles-with-capsules-pharmaceutical-drugs-healthcare-concept-illustration-png-image_14813620.png" },
                { name: "Armor", hash: "armor", image: "https://pngimg.com/d/bulletproof_vest_PNG35.png" },
                { name: "Parachute", hash: "WEAPON_PARACHUTE", image: "https://docs.fivem.net/weapons/WEAPON_PARACHUTE.png" },
                { name: "Fire Extinguisher", hash: "WEAPON_FIREEXTINGUISHER", image: "https://docs.fivem.net/weapons/WEAPON_FIREEXTINGUISHER.png" },
                { name: "Petrol Can", hash: "WEAPON_PETROLCAN", image: "https://docs.fivem.net/weapons/WEAPON_PETROLCAN.png" },
                { name: "Hazardous Can", hash: "WEAPON_HAZARDCAN", image: "https://docs.fivem.net/weapons/WEAPON_HAZARDCAN.png" },
                { name: "Digital Scanner", hash: "WEAPON_DIGISCANNER", image: "https://docs.fivem.net/weapons/WEAPON_DIGISCANNER.png" }
            ]
        },
        {
            label: "Melee",
            angle: 324,
            items: [
                { name: "Hand", hash: "WEAPON_UNARMED", image: "https://docs.fivem.net/weapons/WEAPON_UNARMED.png" },
                { name: "Knife", hash: "WEAPON_KNIFE", image: "https://docs.fivem.net/weapons/WEAPON_KNIFE.png" },
                { name: "Bat", hash: "WEAPON_BAT", image: "https://docs.fivem.net/weapons/WEAPON_BAT.png" },
                { name: "Machete", hash: "WEAPON_MACHETE", image: "https://docs.fivem.net/weapons/WEAPON_MACHETE.png" },
                { name: "Brass Knuckles", hash: "WEAPON_KNUCKLE", image: "https://docs.fivem.net/weapons/WEAPON_KNUCKLE.png" },
                { name: "Dagger", hash: "WEAPON_DAGGER", image: "https://docs.fivem.net/weapons/WEAPON_DAGGER.png" },
                { name: "Bottle", hash: "WEAPON_BOTTLE", image: "https://docs.fivem.net/weapons/WEAPON_BOTTLE.png" },
                { name: "Crowbar", hash: "WEAPON_CROWBAR", image: "https://docs.fivem.net/weapons/WEAPON_CROWBAR.png" },
                { name: "Flashlight", hash: "WEAPON_FLASHLIGHT", image: "https://docs.fivem.net/weapons/WEAPON_FLASHLIGHT.png" },
                { name: "Hammer", hash: "WEAPON_HAMMER", image: "https://docs.fivem.net/weapons/WEAPON_HAMMER.png" },
                { name: "Hatchet", hash: "WEAPON_HATCHET", image: "https://docs.fivem.net/weapons/WEAPON_HATCHET.png" },
                { name: "Switchblade", hash: "WEAPON_SWITCHBLADE", image: "https://docs.fivem.net/weapons/WEAPON_SWITCHBLADE.png" },
                { name: "Nightstick", hash: "WEAPON_NIGHTSTICK", image: "https://docs.fivem.net/weapons/WEAPON_NIGHTSTICK.png" },
                { name: "Wrench", hash: "WEAPON_WRENCH", image: "https://docs.fivem.net/weapons/WEAPON_WRENCH.png" },
                { name: "Battle Axe", hash: "WEAPON_BATTLEAXE", image: "https://docs.fivem.net/weapons/WEAPON_BATTLEAXE.png" },
                { name: "Pool Cue", hash: "WEAPON_POOLCUE", image: "https://docs.fivem.net/weapons/WEAPON_POOLCUE.png" },
                { name: "Stone Hatchet", hash: "WEAPON_STONE_HATCHET", image: "https://docs.fivem.net/weapons/WEAPON_STONE_HATCHET.png" },
                { name: "Candy Cane", hash: "WEAPON_CANDYCANE", image: "https://docs.fivem.net/weapons/WEAPON_CANDYCANE.png" }
            ]
        }
    ]
};
