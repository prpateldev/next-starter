import Head from 'next/head';

import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';

import Menu from '../app/components/Menu';
import Counter from '../app/components/Counter';

const OtherPage = (props) => {
    return <div>
                <Head>
                    <title>Other Page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/css/main.css" />
                </Head>
                <Menu />
                <div className="container">
                    <h1>Other Page</h1>
                    <Counter />
                </div>
            </div>
}

export default withRedux(store, null)(OtherPage);

