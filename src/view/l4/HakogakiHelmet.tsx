import { Helmet } from 'react-helmet-async';

import * as C from '../../lib/Const';


interface Props {
}

// Twitterが動的metaタグに対応していないので、呼ばないようにする。
// public/index.html内に直接記載
const App = (props: Props) => {

    return (
        <Helmet>
            <title>{C.AppName}</title>
            <meta name="description" content={C.AppDescription} />
            <meta property="og:title" content={C.AppName} />
            <meta property="og:description" content={C.AppDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={C.AppUrl} />
            <meta property="og:image" content={C.AppImage} />
            <meta property="og:site_name" content={C.AppName} />
            <meta property="og:locale" content="ja_JP" />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:site" content="@MatchingRandom" />
        </Helmet>
    );
}

export default App;