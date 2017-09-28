BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
LIB   = $(shell find lib -name "*.js")
DIST  = $(patsubst lib/%.js,dist/%.js,$(LIB))

dist: $(DIST)
dist/%.js: lib/%.js
	@ echo "Building $<"
	@ mkdir -p $(@D)
	@ $(BIN)/babel $< -o $@

clean:
	@ echo "\nRemove existing build files..."
	@ rm -rf ./dist

build: lint test clean dist test-build extract-styles
	@ echo "\nBuild done!\n"

extract-styles:
	@ echo "\nExtracting Stilr StyleSheet..."
	@ node -p "var s = require('stilr'); var b = require('./dist'); s.render({}, b.stylesheet)" > ./styles.css

lint:
	@ echo "\nLinting source files..."
	@ yarn lint

test:
	@ echo "\nTesting source files, hang on..."
	@ yarn test

test-build:
	@ echo "\nTesting build files, almost there..!"
	@ yarn test-build


define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	make build && \
	npm --no-git-tag-version version $(1) -m 'release %s' && \
	git add . && \
	git commit -m 'make build and release' && \
	git tag v$$NEXT_VERSION
endef

release-patch:
	$(call release,patch)

release-minor:
	$(call release,minor)

release-major:
	$(call release,major)

.PHONY: install test test-build release-major release-minor release-patch
