
import Head from 'next/head';
import Link from 'next/link';

export default () => {
    return (
        <div>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="/static/libs/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/static/css/main.css" />
            </Head>
            <div className="container">
                <h1 className="text-uppercase">Hello Bootstrap</h1>
                <Link  href="/">
                    <a>Home</a>
                </Link>
                &nbsp; &nbsp;
                <Link  href="/other">
                    <a>Other</a>
                </Link>
            </div>
        </div>
    )
}
