import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';

import GA from './view/l5/GA';
import Hakogaki from './view/l5/Hakogaki';


const App = () => {

    return (
        <HashRouter basename= {process.env.PUBLIC_URL + '/'}>
            <Switch>
                <Route path='/hakogaki' component={Hakogaki} />
            </Switch>
            <GA />
        </HashRouter>
    );
}

export default App;