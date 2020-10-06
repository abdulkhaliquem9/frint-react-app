import {createApp} from 'frint'
import {render} from 'frint-react'
import Header from './components/Header'
import Body from './components/Body'

const RootApp = createApp({
    name: 'rootApp',
    providers: [
        // {name: 'provider-1', useValue: 'hi from provider 1.'},
        // {name: 'component', useValue: Header},
        {name: 'component', useValue: Body},
    ]
});

const app = new RootApp();
// console.log('app', app.get('provider-1'));
// console.log('app', app.get('component'));

render( app, document.getElementById('root'))
