# Running all dependecies package, then build them, next release them to npm

build:
	yarn run build

test:
	yarn run test

release:
	npx changeset version && npx changeset publish --tag main

publish: test build release