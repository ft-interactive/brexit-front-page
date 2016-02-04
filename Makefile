TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

.PHONY: test

clean:
	git clean -fxd

install:
	obt install --verbose
	bower install --config.registry.search=http://registry.origami.ft.com --config.registry.search=https://bower.herokuapp.com

verify:
	nbt verify --skip-layout-checks

unit-test:
	export NODE_ENV=test; mocha  --require test/setup --recursive --reporter spec test/server

test: verify unit-test

run:
	nbt run

run-local:
	nbt run --local

watch:
	# NOTE: until https://phabricator.babeljs.io/T7010 is addressed, we use an older version of babel-helper-define-map
	# i.e. the one we define in package.json
	rm -rf node_modules/babel-preset-es2015/node_modules/babel-plugin-transform-es2015-classes/node_modules/babel-helper-define-map
	webpack --watch --devtool cheap-module-eval-source-map

build:
	nbt build --main-sass ie8.scss --skip-js --skip-about --skip-haikro --skip-hash --dev
	nbt build --dev


build-production:
	nbt build --main-sass ie8.scss --skip-js --skip-about --skip-haikro --skip-hash
	nbt build

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
