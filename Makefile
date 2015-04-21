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
		--require src/__tests__/babelinit  \
		./src/__tests__/*.test.js

test-build:
	@echo "\nTesting build files, almost there..!"
	@$(BIN)/mocha                  \
		--require mocha-clean         \
		./lib/__tests__/*.test.js

.PHONY: install test test-build dev
