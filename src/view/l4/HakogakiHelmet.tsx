import { Helmet } from 'react-helmet-async';

import * as C from '../../lib/Const';


interface Props {
}

const App = (props: Props) => {

    return (
        <Helmet>
            <title>{C.AppName}</title>
            <meta name="description" content={C.AppDescription} />
            <meta property="og:title" content={C.AppName} />
            <meta property="og:description" content={C.AppDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={C.AppUrl} />
            {/* <meta property="og:image" content="サムネイル画像の URL" /> */}
            <meta property="og:site_name" content={C.AppName} />
            <meta property="og:locale" content="ja_JP" />
        </Helmet>
    );
}

export default App;