# Node Template Project - With TypeScript!

At Realm we love TypeScript! We've seen great success in working across multiple remote teams with it and want to share our base template when creating projects. 

* Has TypeScript
* Has TypeScript Lint (aka. tslint)
* Has Visual Studio Code Debugging!
* Has Testing with Mocha + Chai
* Has Gitignore

# Get this Template!

This is a great starting point for using Node.JS, TypeScript, and Visual Studio Code. All artifacts get created in the `dist` folder. All the sourcecode is in `src`

Just clone this repo and point to your new origin!

1. Run `git clone https://github.com/realm/node-template-project.git --depth 1`
2. Run `git remote set-url origin https://github.com/USERNAME/REPOSITORY.git`
3. Cd into the directory and run `npm install` (or if you have `yarn`)

# Commands for Building, Cleaning, Testing, Linting and Watching

After `npm install`

1. To Build `npm run build`
2. To Clean Artifacts `npm run clean`
3. To Test `npm run test`
4. To Lint `npm run lint`
5. To Buld and Watch when you make changes `npm run watch`

# Debugging with Visual Studio Code

1. Set a breakpoint in your code ending in `.ts` or your test ending in `.spec.ts`
2. Run Either `src/index.ts` or `All Tests` in the debug pane. 

# Some Advice

Never use arrow functions on the `Mocha` test handlers. Why? The callback has its own set of methods. The arrow function does not have an easy way to reference `this`

Say you want to increase the timeout of the function callback in your tests

```javascript
it('should do something', () => {
    this.timeout(2000) // this is not the callback function!
})
```