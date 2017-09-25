import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';


import Counter from '../app/components/Counter';

const Index = (props) => {
    return <div>
                <h1>Next.js starter kit</h1>
                <Link href="/other">
                    <a>Other Page</a>
                </Link>
                <Counter />
            </div>
}

export default withRedux(store, null)(Index);
