# Common issues + Solutions

1)
The Problem:
*X Error:*
```
[INFO] Loaded 36 keybindings
X Error of failed request:  BadAccess (attempt to access private resource denied)
  Major opcode of failed request:  2 (X_ChangeWindowAttributes)
  Serial number of failed request:  26
  Current serial number in output stream:  27
```

solve: ``check if you're running wayland/x11 sessions and quit all active sessions and run from your Display manager or startx in tty``

2) for any other issues create issue on [iniWM repo](https://codeberg.org/blx/iniWM.git)
