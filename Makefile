BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)
SRC   = $(shell find src -name "*.js")
LIB   = $(patsubst src/%.js,lib/%.js,$(SRC))

lib: $(LIB)
lib/%.js: src/%.js
	@mkdir -p $(@D)
	$(BIN)/babel $< -o $@ --stage 0

clean:
	@rm -rf ./lib

build: test clean lib test-build

dev:
	@node ./example/server.js

test:
	@echo "\nTesting source files, hang on..."
	@$(BIN)/mocha                  \
		--require mocha-clean         \
		--require src/test/babelinit  \
		./src/test/*.test.js

test-build:
	@echo "\nTesting build files, almost there..!"
	@$(BIN)/mocha                  \
		--require mocha-clean         \
		./lib/test/*.test.js

.PHONY: install test test-build dev
