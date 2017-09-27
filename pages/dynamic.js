import Menu from '../app/components/Menu';
import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';
import DynamicComponents from '../app/components/DynamicComponents';
const Dynamic = (props) => {
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

export default Dynamic;
