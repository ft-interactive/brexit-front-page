TEST_APP := "ft-next-front-page-branch-${CIRCLE_BUILD_NUM}"

.PHONY: test

clean:
	git clean -fxd

install:
	obt install --verbose

verify:
	nbt verify --skip-layout-checks

unit-test:
	export NODE_ENV=test; mocha --compilers js:babel/register --recursive --reporter spec test/components

test: verify unit-test

run:
	nbt run

run-local:
	nbt run --local

run-hot-load:
	export HOT_LOAD=1; nbt run

watch:
	nbt build --dev --watch \
	    --watch-files-sass "./client/**/*.scss,./components/**/*.scss,./bower_components/**/*.scss" \
	    --watch-files-js "./client/**/*.js,./components/**/*.js,./bower_components/**/*.js"

watch-hot-load:
	rm -f ./public/main.*
	node server/dev/init

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
