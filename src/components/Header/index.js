import React from 'react'
import { observe } from 'frint-react'

function Header(props) {
    console.log('Header props', props)
return <h1>React Header component in app: {props.name}</h1>
}

export default observe( app => {
    return {
        name: app.getName() // `MyAppNameHere`
      };
})(Header)