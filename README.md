# Requirements #
* NodeJS
* Android studio

# Installation #

```
git clone https://github.com/plaroser/MyFirstAppReactNative.git
cd MyFirstAppReactNative
npm install
```

# Usage #

```
react-native run-android
```

# Contributing #
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

# Fix bugs #

* The current character read is 'E' with an int value of 69 Unable to determine the current character, it is not a string, number, array, or object
~~~
1. try:
    * delete "app\build\intermediates\signing_config\debug\out\signing-config.json"
2. Or:
    * delete android/app/build folder.
~~~

* Deprecated Gradle features were used in this build, making it incompatible with Gradle 6.0.
~~~
npm i jetifier
npx jetify
~~~
# License
[MIT](https://choosealicense.com/licenses/mit/)