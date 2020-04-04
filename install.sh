DIR=~/.local/share/gnome-shell/extensions/hide-keyboard-layout@sitnik.ru

if [ -d "$DIR" ]; then
  gnome-shell-extension-tool -d hide-keyboard-layout@sitnik.ru
  rm -Rf $DIR
fi

mkdir $DIR
cp ./*.js $DIR
cp ./metadata.json $DIR
gnome-shell-extension-tool -e hide-keyboard-layout@sitnik.ru
