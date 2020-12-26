import React from 'react';
import { HashRouter, Switch, Route, } from 'react-router-dom';

import Hakogaki from './view/l5/Hakogaki';
import Pdf from './view/l5/Pdf';

const App = () => {

    return (
        <HashRouter>
            <Switch>
                <Route path="/hakogaki" component={Hakogaki} />
                <Route path="/pdf" component={Pdf}>

                </Route>
            </Switch>
        </HashRouter>
    );
}

export default App;
