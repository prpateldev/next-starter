import Head from 'next/head';

import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';


import Counter from '../app/components/Counter';

const OtherPage = (props) => {
    return <div>
                <Head>
                    <title>Other Page</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <link rel="stylesheet" href="/static/libs/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/static/css/main.css" />
                </Head>

                <div className="container">
                    <h1>Other Page</h1>
                    <Link href="/">
                        <a className="btn btn-primary">Home</a>
                    </Link>
                    &nbsp; &nbsp;
                    <Link href="/bootstrap">
                        <a className="btn btn-primary">Bootstrap</a>
                    </Link>
                    <Counter />
                </div>
            </div>
}

export default withRedux(store, null)(OtherPage);

