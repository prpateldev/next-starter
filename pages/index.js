import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';


import Counter from '../app/components/Counter';

const Index = (props) => {
    return <div>
                <h1>Next.js starter kit</h1>
                <Link href="/other">
                    <a>Other</a>
                </Link>
                &nbsp; &nbsp;
                <Link href="/bootstrap">
                    <a>Bootstrap</a>
                </Link>
                <Counter />
            </div>
}

Index.getInitailProps = ({store, isServer, pathname, query}) => {

}

export default withRedux(store, null)(Index);
