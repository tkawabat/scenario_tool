import React from 'react';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { HelmetProvider } from 'react-helmet-async';

import { store } from './store';
import * as C from './lib/Const';


interface Props {
    children?: React.ReactNode;
}

const App = (props: Props) => {

    return (
        <Provider store={store}>
            <SnackbarProvider autoHideDuration={C.DurationNotification}>
                <HelmetProvider>
                    {props.children}
                </HelmetProvider>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;