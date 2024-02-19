# Running all dependecies package, then build them, next release them to npm

build:
	yarn run build

test:
	yarn run test

release:
	pnpm dlx changeset version && npx changeset publish

publish: test build release
