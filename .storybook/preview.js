import { Provider } from "react-redux";
import { SnackbarProvider } from 'notistack';
import { store } from '../src/store';

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

export const decorators = [
    (Story) => (
        <Provider store={store}>
            <SnackbarProvider>
                <Story />
            </SnackbarProvider>
        </Provider>
    ),
]