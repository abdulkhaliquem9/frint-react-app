### Features

- Added minimal dependencies: frint, react, babel & webpack.
- Support hot reload.
- installed `rxjs` & `rxjs-compat` packages. 
#### Note:
  rxjs-compat is needed for partial import of modules from rxjs. 
for Example: 
> `import { of } from 'rxjs/observable/of';`

### Yet to be added
- store, async functions, routing...



### Practice Notes
- cannot use multiple components in provider, it will only consider only one component for rendering. In the below code, the Body component will only render but not the Header
````
const RootApp = createApp({
    name: 'rootApp',
    providers: [
        {name: 'component', useValue: Header}, // <--- won't render
        {name: 'component', useValue: Body}, // <--- will render
    ]
});
````