
import Head from 'next/head';
import Link from 'next/link';
import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';
import Menu from '../app/components/Menu';
{/* <Head>
<title>My page title</title>
<meta name="viewport" content="initial-scale=1.0, width=device-width" />
<link rel="stylesheet" href="/static/libs/bootstrap-4.0.0-beta-dist/css/bootstrap.min.css" />
<link rel="stylesheet" href="/static/css/main.css" />
</Head> */}

export default () => {
    return (
        <div>
            <PageHead />
            <Menu activeLink="/bootstrap"/>
            <div className="container">
                <h1 className="text-uppercase">Hello Bootstrap</h1>
            </div>
            <PageScripts />
        </div>
    )
}
