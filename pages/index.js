import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';


import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';
import Menu from '../app/components/Menu';

{/* <Link href="/other">
    <a>Other</a>
</Link>
&nbsp; &nbsp;
<Link href="/bootstrap">
    <a>Bootstrap</a>
</Link> */}

import Counter from '../app/components/Counter';

const Index = (props) => {
    return <div>
                <PageHead />
                <Menu activeLink=""/>
                <div className="container">
                    <h1>Next.js starter kit</h1>
                    <Counter />
                </div>
                <PageScripts />
            </div>
}

Index.getInitailProps = ({store, isServer, pathname, query}) => {

}

export default withRedux(store, null)(Index);
