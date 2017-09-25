import withRedux from 'next-redux-wrapper';
import store from '../app/store/store';

// import {addNumber, subtractNumber} from '../app/store/counter/counterActions';

import Counter from '../app/components/Counter';

const Index = (props) => {
    return <div>
                <h1>Next.js starter kit</h1>
                <Counter />
            </div>
}

export default withRedux(store, null)(Index);

// export default Index;
