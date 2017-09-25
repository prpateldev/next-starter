import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';
import Link from 'next/link';


import Counter from '../app/components/Counter';

const OtherPage = (props) => {
    return <div>
                <h1>Other Page</h1>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Counter />
            </div>
}

export default withRedux(store, null)(OtherPage);

