import React from 'react'
// import { Observable } from 'rxjs/Observable'
import { of } from 'rxjs/observable/of';
import { observe } from 'frint-react'

function Header(props) {
    console.log('Header props', props)
return <h1>React Header component in app: {props.appName}</h1>
}

export default observe( app => {
    console.log('observe app', app)
    // const props = {appName: app.getOption('name')};
    return of({appName: app.getOption('name')});
})(Header)