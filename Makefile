TEST_HOST := "ft-next-fp-branch-${CIRCLE_BUILD_NUM}"
TEST_URL := "http://ft-next-fp-branch-${CIRCLE_BUILD_NUM}.herokuapp.com"

.PHONY: test build

clean:
	git clean -fxd

install:
	obt install --verbose

verify:
	obt verify --esLintPath=./.eslintrc

unit-test:
	mocha --compilers js:babel/register --recursive --reporter spec test/server/

smoke:
	nbt test-urls ${TEST_HOST}
	export TEST_URL=${TEST_URL}; nbt nightwatch test/browser/tests/*

test: verify unit-test

watch:
	rm -f ./public/main.*
	node server/dev/init

run:
	nbt run

run-local:
	nbt run --local

build:
	webpack

build-production:
	export NODE_ENV=production; webpack --bail
	nbt about

provision:
	nbt provision ${TEST_HOST}
	nbt configure ft-next-front-page ${TEST_HOST} --overrides "NODE_ENV=branch"
	nbt deploy-hashed-assets
	nbt deploy ${TEST_HOST} --skip-enable-preboot --skip-logging
	make smoke

tidy:
	nbt destroy ${TEST_HOST}

deploy:
	nbt configure
	nbt deploy-hashed-assets
	nbt deploy --skip-logging

clean-deploy: clean install build-production deploy
