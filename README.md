# Information

Custom NUI weapon/utilities wheel for FiveM that replaces the default weapon wheel flow with a radial selector for weapons plus quick utility actions (Armor and Oxy/heal).

## Preview
<p align="center">
  <img src="https://github.com/user-attachments/assets/27b35047-ff62-452a-8919-a3dfaacdc640" width="48%" height="440" />
  <img src="https://github.com/user-attachments/assets/f1f4b45e-d8b4-4aff-91d6-6cd4f8452491" width="48%" height="440" />
</p>

## Features

- Radial wheel UI with category-based weapon selection
- Automatically shows only weapons the player currently has
- Scroll support to cycle items inside the selected category
- Utility actions built into the wheel:
  - `armor`: applies full armor through a progress action
  - `oxy`: restores health and extends underwater time through a progress action
- Configurable hold/open behavior (`TAB` hold mode or control-37 mode)
- Customizable UI selection sound
- Export available: `toggleWheel(open)` for manual integration

## Requirements

- [FiveM](https://fivem.net/)
- [ox_lib](https://github.com/overextended/ox_lib) (required)

This resource uses:
- `@ox_lib/init.lua`
- `lib.load`
- `lib.addKeybind`
- `lib.progressCircle`
- `cache.ped` / `cache.playerId`

## Installation

1. Place this folder in your server resources directory.
2. Ensure `ox_lib` starts before this resource.
3. Add to your server config:

```cfg
ensure ox_lib
ensure cad-weponwheel
```

## Configuration

Edit `config.lua`.

### Options

- `keybind` (`boolean`)
  - `true`: uses an `ox_lib` keybind (`TAB` by default, hold to open)
  - `false`: uses disabled control `37` behavior (weapon wheel control)
- `healTime` (`number`, ms): duration for the `oxy` progress action
- `armorTime` (`number`, ms): duration for the `armor` progress action
- `sound.name` / `sound.set`: frontend sound played on selection changes
- `weapons` (`string[]`): whitelist used to determine what appears as available in the wheel

## Usage

### Player Flow

- Open wheel (hold `TAB` when `keybind = true`, otherwise use control `37`)
- Move mouse to select a category wedge
- Mouse wheel scroll changes item inside selected category
- Release/close to confirm selection

### Export

You can open/close the wheel from another client script:

```lua
exports['cad-weponwheel']:toggleWheel(true)  -- open
exports['cad-weponwheel']:toggleWheel(false) -- close
```

## How It Works

- `client.lua` checks player-owned weapons against `config.weapons`
- Inventory availability is sent to NUI (`setVisible`)
- `html/config.js` defines visual categories, labels, angles, and icons
- `html/script.js` handles radial logic, highlighting, scrolling, and NUI callbacks
- On close, selected item is posted back to Lua:
  - Weapons are equipped with `GiveWeaponToPed` + `SetCurrentPedWeapon`
  - `armor` and `oxy` trigger timed `lib.progressCircle` actions

## Customization

- Edit category layout, labels, item names, and images in `html/config.js`
- Tweak wheel styling in `html/style.css`
- Add/remove allowed weapon hashes in `config.lua`
- Change default keybind behavior in `config.lua`

## Notes

- This is a **client-side** resource.
- Weapon icons are loaded from external URLs (FiveM docs and other image URLs in the current config).
- If you add new items to `html/config.js`, ensure hashes match what your Lua logic expects.

## Troubleshooting

- Wheel not opening:
  - Verify `ox_lib` is running and started first
  - Confirm resource is ensured and no startup errors appear in console
- Utilities not applying:
  - Check `healTime` / `armorTime` values
  - Ensure actions are not cancelled during progress
- Some weapons never appear:
  - Weapon hash must be present in both player inventory and `config.lua` `weapons` list
  - If category item hash exists in `html/config.js` but not in `config.lua`, it will be filtered out
