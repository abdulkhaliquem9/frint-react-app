import React from 'react'
// import { Observable } from 'rxjs/Observable'
import { interval } from 'rxjs';
import { map } from 'rxjs/operators';
import { observe } from 'frint-react'

function Body(props) {
    console.log('body', props)
return <div>
    <h3>interval: {props.interval || 'no value!'}</h3>
</div>
}

export default observe( app => {
    return interval(1000).pipe(map(val => ({interval: val})));
})(Body)