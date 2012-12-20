FILES	= extension.js metadata.json 
UUID	= antisocial-menu@cnervi.github.com

.PHONY	: all clean install zip

all	: install zip

clean	:
	$(RM) $(UUID).zip

install	:
	mkdir -p ~/.local/share/gnome-shell/extensions/$(UUID)
	cp $(FILES) ~/.local/share/gnome-shell/extensions/$(UUID)

zip	: $(FILES)
	zip $(UUID).zip $(FILES)
