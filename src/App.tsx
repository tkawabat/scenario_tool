import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';

import Hakogaki from './view/l5/Hakogaki';

const App = () => {

    return (
        <HashRouter>
            <Switch>
                <Route path="/hakogaki" component={Hakogaki} />
            </Switch>
        </HashRouter>
    );
}

export default App;
