# typescript-webpack-boilerplate
A boilerplate made specifically for .NET devs who want to run a Typescript app inside of an ASP.NET backend.

Only concerned with JS, because you're likely to already have your HTML and CSS set up in some other fashion. My goal was to make it easy for .NET devs who aren't already steeped in JS culture to be able to use ES7, Typescript, & npm modules and just get one compiled JS file on save and not have to know how to use Webpack or Babel.

Set up with react, react-router 4, and mobx.

### Setup:
Install Node (nodejs.org)

* Run `npm install` in CMD inside this directory
* Run `npm install -g typescript`
* Run `npm install -g webpack`

Make sure you don't have Typescript conflicts with older versions that get installed with Visual Studio

* To check, run `tsc -v` and it should be >2.0
* This uses TS 2.2 and you may already have TS 1.0 already on your computer if you have VS2013
* Check `C:\Program Files (x86)\Microsoft SDKs` and see if you have a Typescript folder
* Just delete the folder if you have older or unused versions of TS

If you're using this inside of a Visual Studio project, you're probably going to want to disable TS compilation because your project won't build at all unless Visual Studio is completely happy with your TS
* add `<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>` to the first `<PropertyGroup>` in your csproj

### Dev:
You have to have a Typescript compiler running:

* In VS Code:
  * Hit ctrl+shift+b
* In CMD:
  * Run `tsc`
* In Visual Studio:
  * I didn't spend the time getting this to work
  * Remove `<TypeScriptCompileBlocked>true</TypeScriptCompileBlocked>` from your csproj
  * Install Typescript for Visual Studio (www.typescriptlang.org)
  * All the settings will probably be wrong and a bunch of stuff won't work
  * Good luck

You also need Webpack running

* Run `webpack -w`

### Final Build:
* Run "-webpack --optimize-minimize"