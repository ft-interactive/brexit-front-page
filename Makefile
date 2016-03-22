include n.Makefile

TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

_webpack_setup:
	# NOTE: until https://phabricator.babeljs.io/T7010 is addressed, we use an older version of babel-helper-define-map
	# i.e. the one we define in package.json
	rm -rf node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-es2015-classes/node_modules/babel-helper-define-map

unit-test:
	@echo "Testing…"
	$(NPM_BIN_ENV); @export NODE_ENV=test; mocha --require server/setup --recursive --reporter spec test/server

test: verify unit-test

run:
	$(NPM_BIN_ENV); nbt run

run-local:
	$(NPM_BIN_ENV); nbt run --local

watch: _webpack_setup
	$(NPM_BIN_ENV); webpack --watch --dev

build: _webpack_setup
	$(NPM_BIN_ENV); webpack --dev

build-production: _webpack_setup
	$(NPM_BIN_ENV); webpack --bail
	$(NPM_BIN_ENV); uglifyjs public/main.js --in-source-map public/main.js.map --source-map public/main.js.map  --source-map-url ./main.js.map -o public/main.js -c -m
	$(NPM_BIN_ENV); nbt build --skip-sass --skip-js

smoke:
	$(NPM_BIN_ENV); nbt test-urls ${TEST_APP}
	$(NPM_BIN_ENV); export TEST_APP=${TEST_APP}; nbt nightwatch test/browser/tests/* -e ie9,firefox,chrome,iphone6_plus

provision:
	$(NPM_BIN_ENV); nbt deploy-hashed-assets
	$(NPM_BIN_ENV); nbt float -md --testapp ${TEST_APP}
	make smoke

tidy:
	$(NPM_BIN_ENV); nbt destroy ${TEST_APP}

deploy:
	$(NPM_BIN_ENV); nbt deploy-hashed-assets
	$(NPM_BIN_ENV); nbt ship -m

clean-deploy: clean install build-production deploy
