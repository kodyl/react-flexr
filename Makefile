BIN   = ./node_modules/.bin
PATH := $(BIN):$(PATH)

start:
	@ node ./example/server.js

test:
	@ NODE_PATH='./test' $(BIN)/mocha \
		--require mocha-clean           \
		--compilers js:babel/register   \
		./test/*.test.js

.PHONY: install test start
