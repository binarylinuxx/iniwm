# Configuration

IniWM uses a simple INI format configuration file to customize window manager behavior, appearance, and keybindings.

## Configuration File

### Location
The configuration file is located at:
```
~/.config/iniwm/iniwm.ini
```

### Format
The configuration uses standard INI format with sections and key-value pairs:
```ini
[section]
key=value
```

Comments start with `#` and empty lines are ignored.

## Window Decoration Settings

Configure window appearance and behavior in the `[decor]` section.

### Border Configuration

**Border Width**
```ini
border-width=2
```
Sets the width of window borders in pixels. Default is `2`.

**Window Spacing**
```ini
margin-in=5
margin-out=10
```
- `margin-in`: Space between windows in pixels
- `margin-out`: Margin between windows and screen edges in pixels

### Border Colors

Configure border colors using hexadecimal color codes:

```ini
inactive-border=#444444
active-border=#005577
fullscreen-border=#000000
```

- **inactive-border**: Color for unfocused windows (default: `#444444`)
- **active-border**: Color for the focused window (default: `#005577`)
- **fullscreen-border**: Color for fullscreen windows (default: `#000000`)

Colors can be specified with or without the `#` prefix.

### Layout Settings

**Split Ratio**
```ini
split-ratio=0.6
```
Controls the master window size ratio in tiled layout. Value between 0.0 and 1.0.

**Mouse Behavior**
```ini
focus-follows-mouse=true
```
Enable or disable focus follows mouse. Accepts `true`, `false`, `1`, or `0`.

## Keybinding Configuration

Define custom keybindings in the `[binds]` section.

### Modifier Keys

| Modifier | Alternative | Key |
|----------|-------------|-----|
| `Mod1` | `Alt` | Alt key |
| `Mod4` | `Super` | Super/Windows key |
| `Control` | `Ctrl` | Control key |
| `Shift` | | Shift key |

### Binding Format

```ini
<modifier>+<key>=<action>
```

Multiple modifiers can be combined:
```ini
Mod4+Shift+q=quit_wm
Ctrl+Alt+t=spawn:alacritty
```

### Available Actions

#### Window Management

| Action | Description |
|--------|-------------|
| `focus_next` | Focus next window |
| `focus_prev` | Focus previous window |
| `kill_active` | Close active window |
| `toggle_floating` | Toggle floating mode for active window |
| `move_to_master` | Move active window to master position |
| `toggle_fullscreen` | Toggle fullscreen mode |
| `minimize_active` | Minimize/restore active window |

Example bindings:
```ini
Mod4+j=focus_next
Mod4+k=focus_prev
Mod4+q=kill_active
Mod4+f=toggle_floating
```

#### Layout Management

| Action | Description |
|--------|-------------|
| `toggle_layout` | Cycle through all available layouts |

```ini
Mod4+space=toggle_layout
```

#### Workspace Management

| Action | Description |
|--------|-------------|
| `next_workspace` | Switch to next workspace |
| `prev_workspace` | Switch to previous workspace |
| `workspace_<number>` | Switch to specific workspace (1-10) |

```ini
Mod4+Right=next_workspace
Mod4+Left=prev_workspace
Mod4+1=workspace_1
Mod4+2=workspace_2
```

#### System Actions

| Action | Description |
|--------|-------------|
| `spawn:<command>` | Execute shell command |
| `reload_config` | Reload configuration file |
| `quit_wm` | Exit window manager |

```ini
Mod4+Return=spawn:alacritty
Mod4+r=reload_config
Mod4+Shift+q=quit_wm
```

### Special Keys

#### Function Keys
`F1`, `F2`, `F3`, ..., `F24`

#### Navigation Keys
`Left`, `Right`, `Up`, `Down`, `Home`, `End`, `Page_Up`, `Page_Down`

#### Other Special Keys

| Key | Alternative | Description |
|-----|-------------|-------------|
| `Return` | `Enter` | Enter key |
| `space` | `Space` | Spacebar |
| `Tab` | | Tab key |
| `Escape` | `Esc` | Escape key |
| `BackSpace` | | Backspace |
| `Delete` | | Delete key |
| `Insert` | | Insert key |

#### Keypad Keys
`KP_0` through `KP_9`, `KP_Add`, `KP_Subtract`, etc.

## Layout Types

IniWM supports four different window layouts:

### 1. Tile Layout (Default)
- Master window positioned on the left side
- Additional windows stacked on the right
- Master window size controlled by `split-ratio`
- Single window uses the full available area

### 2. Monocle Layout
- All windows occupy the full screen area
- Only the focused window is visible
- Switch between windows using focus commands
- Perfect for single-application workflows

### 3. Floating Layout
- Windows can be moved and resized freely
- Manual positioning and sizing required
- Similar to traditional desktop environments

### 4. Grid Layout
- Windows arranged in an automatic grid pattern
- Grid dimensions calculated based on window count
- Equal space allocation for all windows

## Runtime Features

### Hot Configuration Reload

Reload the configuration file without restarting the window manager:

**Using keybinding** (if configured):
```ini
Mod4+r=reload_config
```

**Using signal**:
```bash
kill -USR1 $(pgrep iniwm)
```

### Debug Information

Press `Mod4+F1` to print current window manager state to the terminal:
- Current workspace number
- Number of client windows
- Currently active client
- Current layout type
- Window properties and states

This is useful for troubleshooting configuration issues.

### EWMH Support

IniWM implements Extended Window Manager Hints (EWMH) for compatibility with:
- Desktop environments
- System panels and taskbars
- Application launchers
- Window state management tools

## Configuration Limits

- **Workspaces**: Maximum of 10 workspaces (numbered 1-10)
- **Clients**: Maximum of 50 windows per workspace
- **Keybindings**: Maximum of 50 custom keybindings
- **Configuration**: Changes require reload to take effect

## Example Configuration

For a complete example configuration file, see the [sample configuration](https://codeberg.org/blx/iniWM/src/branch/MAIN/iniwm.sample.ini) in the IniWM repository.

## Tips and Best Practices

1. **Start Simple**: Begin with basic keybindings and gradually add more as needed
2. **Consistent Modifiers**: Use consistent modifier keys across similar actions
3. **Test Changes**: Use the hot reload feature to test configuration changes quickly
4. **Backup**: Keep a backup of your working configuration before making major changes
5. **Comments**: Use comments to document your custom keybindings and settings
