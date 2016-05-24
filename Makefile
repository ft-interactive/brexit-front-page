include n.Makefile

TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

unit-test:
	@echo "Testing…"
	@export NODE_ENV=test; mocha --require server/setup --recursive --reporter spec test/server test/shared

test: verify unit-test

run:
	nht run

run-local:
	nht run --local

smoke:
	nht test-urls ${TEST_APP}
	export TEST_APP=${TEST_APP}; nht nightwatch test/browser/tests/*

provision:
	nht deploy-hashed-assets
	nht float -md --testapp ${TEST_APP}
	make smoke

tidy:
	nht destroy ${TEST_APP}

deploy:
	# nht deploy-hashed-assets
	# nht ship -m
	nbt configure ft-next-front-page ft-ig-brexit-front-page --overrides NODE_ENV=ig
	nht deploy ft-ig-brexit-front-page

clean-deploy: clean install build-production deploy
