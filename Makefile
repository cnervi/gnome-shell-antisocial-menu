FILES	= src/extension.js src/metadata.json 
UUID	= antisocial-menu@cnervi.github.com
ZIP	= $(UUID).zip


all	: install

clean	:
	$(RM) $(ZIP)

install	: $(ZIP)
	unzip -o -d ~/.local/share/gnome-shell/extensions/$(UUID) $<

$(ZIP)	: $(FILES)
	zip -j $@ $^


.PHONY	: all clean install
