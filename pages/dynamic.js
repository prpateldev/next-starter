import Menu from '../app/components/Menu';
import PageHead from '../app/components/PageHead';
import PageScripts from '../app/components/PageScripts';

const Dynamic = (props) => {
    return <div>
            <PageHead />
            <Menu activeLink="/dynamic"/>
            <h1>Dynamic Components</h1>
            <PageScripts />
        </div>
}

export default Dynamic;
