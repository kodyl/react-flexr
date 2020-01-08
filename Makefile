extract-styles:
	@ echo "\nExtracting Stilr StyleSheet..."
	@ node -p "var s = require('stilr').default; var b = require('./dist'); s.render({}, b.stylesheet)" > ./styles.css

pre-release:
	@ echo "\nVerifying code..."
	@ npm run pre-release

define release
	VERSION=`node -pe "require('./package.json').version"` && \
	NEXT_VERSION=`node -pe "require('semver').inc(\"$$VERSION\", '$(1)')"` && \
	npm run build && \
	npm --no-git-tag-version version $(1) -m 'release %s' && \
	git add . && \
	git commit -m 'make build and release' && \
	git tag v$$NEXT_VERSION
endef

release-patch: pre-release
	$(call release,patch)

release-minor: pre-release
	$(call release,minor)

release-major: pre-release
	$(call release,major)

.PHONY: install release-major release-minor release-patch
