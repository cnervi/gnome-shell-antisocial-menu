FILES	= *.js *.json *.css *.compiled
UUID	= antisocial-menu@cnervi.github.com
ZIP	= $(UUID).zip

.PHONY	: all clean install

all	:
	glib-compile-schemas --strict schemas/
	zip -o -r $(ZIP) . -i $(FILES)

clean	:
	$(RM) $(ZIP) schemas/*.compiled

install	: all
	unzip -o $(ZIP) -d ~/.local/share/gnome-shell/extensions/$(UUID)
