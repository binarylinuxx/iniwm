# Install 

iniwm basically support almost every linux if you're on nix:

```
git clone https://codeberg.org/blx/iniWM
cd iniWM
nix build
```

if you on any other linux that nix you still can use nix package manager or else install:
```
base-devel libX11-devel libXft-devel libXinerama-devel libX11 gcc
```

then:
```
git clone https://codeberg.org/blx/iniWM
cd iniWM
```

and compile:
```
make build
sudo make install
```

ARCH:
```
wget https://codeberg.org/blx/iniWM/src/branch/MAIN/PKGBUILD
sudo makepkg -si
```

::: tip 
if not using Any Display manager add iniwm
to ~/.xinitrc and exec with startx

*Example for ~/.xinitrc:*
```
exec picom & # Comment or remove this line if not want use picom
# feh or nitrogen --restore & for wallpaper
exec iniwm # If installed system wide
exec ~/iniwm/iniwm # If installed user wide
```
