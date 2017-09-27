import Menu from '../app/components/Menu';
import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';
import DynamicComponents from '../app/components/DynamicComponents';
class Dynamic extends React.Component {
    constructor(props) {
        super(props);
        console.log(`From constructor() "${props.msgFromServer}"`)
    }
    
    render() {
        return <div>
            <PageHead />
            <Menu activeLink="/dynamic"/>
            <div className="container">
                <h1>Dynamic Components</h1>
                <br />
                <DynamicComponents />
            </div>
            <PageScripts />
        </div>
    }
}

Dynamic.getInitialProps = async () => {
    console.log('Runs every time .getInitialProps() execute');
    if(!process.browser) {
        // This code will render only on server
        console.log('Dynamic.getInitialProps() execute on server');
    }
    return {msgFromServer: 'Hello PR'};
}

export default Dynamic;
