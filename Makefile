BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
LIB   = $(shell find lib -name "*.js")
DIST   = $(patsubst src/%.js,dist/%.js,$(LIB))

dist: $(DIST)
dist/%.js: lib/%.js
	@mkdir -p $(@D)
	$(BIN)/babel $< -o $@ --stage 0

clean:
	@rm -rf ./lib

build: test clean dist test-build

dev:
	@node ./example/server.js

test:
	@echo "\nTesting source files, hang on..."
	@$(BIN)/mocha                  \
		--require mocha-clean         \
		--require lib/__tests__/babelinit  \
		./lib/__tests__/*.test.js

test-build:
	@echo "\nTesting build files, almost there..!"
	@$(BIN)/mocha                  \
		--require mocha-clean         \
		./dist/__tests__/*.test.js

.PHONY: install test test-build dev
