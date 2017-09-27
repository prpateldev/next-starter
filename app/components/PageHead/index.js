import React from 'react';
import Head from 'next/head';


class PageHead extends React.Component {

    render() {
        return <Head>
            <title>My page title</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="/static/libs/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/static/css/main.css" />
        </Head>
    }
}

export default PageHead;