FILES	= extension.js metadata.json 
UUID	= antisocial-menu@cnervi.github.com

.PHONY	: all clean zip

all	: zip

zip	: $(FILES)
	zip $(UUID).zip $(FILES)

clean	:
	$(RM) $(UUID).zip
