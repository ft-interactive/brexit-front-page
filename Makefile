TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

.PHONY: test

clean:
	git clean -fxd

install:
	obt install --verbose

verify:
	obt verify --esLintPath=./.eslintrc

unit-test:
	##### NEED TESTS!!!! #####
	# mocha --compilers js:babel/register --recursive --reporter spec test/server/

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

smoke:
	nbt test-urls ${TEST_APP}
	export TEST_APP=${TEST_APP}; nbt nightwatch test/browser/tests/*

provision:
	nbt float -md --testapp ${TEST_APP}
	nbt deploy-hashed-assets
	make smoke

tidy:
	nbt destroy ${TEST_APP}

deploy:
	nbt ship -m
	nbt deploy-hashed-assets

clean-deploy: clean install build-production deploy
