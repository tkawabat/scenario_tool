import React from 'react';


interface Props {
}

const App = (props: Props) => {

    if (process.env.NODE_ENV !== 'production') {
        return null;
    }

    return (
        <React.Fragment>
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-59CW4360L8"></script>
            <script>{""
                + "window.dataLayer = window.dataLayer || [];"
                + "function gtag(){dataLayer.push(arguments);}"
                + "gtag('js', new Date());"
                + "gtag('config', 'G-59CW4360L8');"
            }
            </script>
        </React.Fragment>
    );

}

export default App;