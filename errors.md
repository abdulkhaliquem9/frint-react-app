### 1.  Warning: React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: null.

Check the render method of `ComponentInProvider`.
    in ComponentInProvider
    in Unknown

Sol: 

    const RootApp = createApp({
        name: 'rootApp',
        providers: [
            {name: 'HeaderComponent', useValue: Header}
        ]
    });`


>only use name: 'component' if the useValue is of type react component.

    {name: 'component', useValue: Header}

