FILES	= extension.js convenience.js prefs.js metadata.json schemas/gschemas.compiled
UUID	= antisocial-menu@cnervi.github.com
ZIP	= $(UUID).zip

.PHONY: all clean install

all: $(ZIP)

clean:
	$(RM) -r $(ZIP) build/

install: $(ZIP)
	unzip -o -d ~/.local/share/gnome-shell/extensions/$(UUID) $<

$(ZIP): $(addprefix build/, $(FILES))
	cd build/; zip ../$@ $(FILES)

build/:
	mkdir -p $@

build/schemas/:
	mkdir -p $@

build/%.js: src/%.js build/
	cp -u $< $@

build/%.json: src/%.json build/
	cp -u $< $@

build/%.compiled: src/*.gschema.xml build/schemas/
	glib-compile-schemas --strict --targetdir=$(dir $@) $(dir $<)
