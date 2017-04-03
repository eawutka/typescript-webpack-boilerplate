# ts-webpack-boilerplate

### setup:
install Node (nodejs.org)

* run `npm install` in CMD inside this directory
* run `npm install -g typescript`
* run `npm install -g webpack`

make sure you don't have Typescript conflicts with older versions that get installed with Visual Studio

* to check, run `tsc -v` and it should be >2.0
* this uses TS 2.2 and you may already have TS 1.0 already on your computer if you have VS2013
* check `C:\Program Files (x86)\Microsoft SDKs` and see if you have a Typescript folder
* just delete the folder if you have older or unused versions of TS

if you're using this inside of a Visual Studio project, you're probably going to want to disable TS compilation
* add `<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>` to the first `<PropertyGroup>` in your csproj

### dev:
you have to have a Typescript compiler running

* in VS Code:
 * hit ctrl+shift+b to start the TS compiler
* in CMD:
 * run `tsc`
 * you're gonna need two CMD windows open
* in Visual Studio:
 * I didn't spend the time getting this to work
 * make sure you don't have `<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>` in your csproj
 * install Typescript for Visual Studio (www.typescriptlang.org)
 * all the settings will probably be wrong and a bunch of stuff won't work
 * good luck

you also need Webpack running

* open up CMD and run `webpack -w`