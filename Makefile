include n.Makefile

TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

unit-test:
	@echo "Testing…"
	@export NODE_ENV=test; mocha --require server/setup --recursive --reporter spec test/server

test: verify unit-test

run:
	nbt run

run-local:
	nbt run --local

smoke:
	nbt test-urls ${TEST_APP}
	export TEST_APP=${TEST_APP}; nbt nightwatch test/browser/tests/* -e ie9,firefox,chrome,iphone6_plus

provision:
	nbt deploy-hashed-assets
	nbt float -md --testapp ${TEST_APP}
	make smoke

tidy:
	nbt destroy ${TEST_APP}

deploy:
	nbt deploy-hashed-assets
	nbt ship -m

clean-deploy: clean install build-production deploy
