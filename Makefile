FILES	= extension.js metadata.json 
UUID	= antisocial-menu@cnervi.github.com

.PHONY	: all clean install zip

all	: install

clean	:
	$(RM) $(UUID).zip

install	: zip
	unzip -o -d ~/.local/share/gnome-shell/extensions/$(UUID) $(UUID).zip

zip	: $(FILES)
	zip -j $(UUID).zip $(FILES)
