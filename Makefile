.PHONY: install dev test run-android bundle-android run-ios

install:
	npm install

run-android:
	./node_modules/.bin/react-native run-android

bundle-android:
	cd ./android && ./gradlew assembleRelease

run-ios:
	./node_modules/.bin/react-native run-ios

dev:
	./node_modules/.bin/react-native start

test:
	npm run test:e2e:build test:e2e
