.PHONY: build
build:
	npm ci
	touch src/theme/SearchBar/search-data.js
	npm run build
	node build-search-data.js

.PHONY: run-dev
run-dev:
	npm run dev

.PHONY: build-run-dev
build-run-dev: build
	npm run dev
