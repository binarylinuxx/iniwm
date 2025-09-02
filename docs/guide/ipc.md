# IPC Client (iniwmctl)

IniWM includes a command-line utility called `iniwmctl` that allows you to control the window manager externally. This is useful for creating custom scripts, integrating with external tools, or controlling the WM from terminal sessions.

## Usage

```bash
iniwmctl <command>
```

## Available Commands

| Command | Description |
|---------|-------------|
| `reload_config` | Reload configuration without restarting |
| `toggle_layout` | Toggle between available layouts |
| `next_workspace` | Switch to next workspace |
| `prev_workspace` | Switch to previous workspace |
| `workspace_<n>` | Switch to workspace n (1-10) |
| `toggle_floating` | Toggle floating mode for active window |
| `toggle_fullscreen` | Toggle fullscreen for active window |
| `toggle_status_bar` | Toggle visibility of status bar |
| `set_border_width <width>` | Set border width (0-20) |
| `set_active_border <color>` | Set active border color (hex) |
| `set_inactive_border <color>` | Set inactive border color (hex) |
| `debug_info` | Get debug information |

## Examples

### Configuration Management
```bash
# Reload configuration after making changes
iniwmctl reload_config
```

### Workspace Control
```bash
# Switch to workspace 3
iniwmctl workspace_3

# Move to next workspace
iniwmctl next_workspace
```

### Window Management
```bash
# Toggle floating mode for the active window
iniwmctl toggle_floating

# Toggle fullscreen for the active window
iniwmctl toggle_fullscreen
```

### Appearance Customization
```bash
# Set border width to 5 pixels
iniwmctl set_border_width 5

# Set active border color to red
iniwmctl set_active_border ff0000

# Set inactive border color to gray
iniwmctl set_inactive_border 444444
```

### Debugging
```bash
# Get debug information about the current state
iniwmctl debug_info
```

## Integration with External Tools

The `iniwmctl` command can be integrated with various tools and scripts:

### Status Bars
You can use `iniwmctl` in scripts that generate status bar information, allowing dynamic control of the window manager based on system state.

### Media Keys
Map media keys to `iniwmctl` commands for volume control, playback control, etc.

### Custom Scripts
Create custom automation scripts that control the window manager based on various triggers or schedules.

## Notes

- All color values should be specified in hexadecimal format without the `#` prefix
- Border width values are in pixels and range from 0 to 20
- Workspace numbers range from 1 to 10
- Commands are executed immediately and take effect without requiring a restart