import React from 'react';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(import('./DynamicComponent'));
const DynamicComponentNoSSR = dynamic(import('./DCNoSSR'), {ssr: false});

class DynamicComponents extends React.Component {
    constructor() {
        super();
        this.state = {
            currComp: ''
        };
    }

    loadComponent(comp) {
        switch(comp){
            case 'D-1':
                return <DynamicComponent name="D-1" />;
            case 'D-2':
                return <DynamicComponentNoSSR name="D-2" />
            default:
                return null;
        }
    }
    
    render() {

        return <div>
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)" onClick={()=>this.setState({currComp: 'D-1'})}>Dynamic Component With SSR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="javascript:void(0)" onClick={()=>this.setState({currComp: 'D-2'})}>Dynamic Component Without SSR</a>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link disabled" href="javascript:void(0)">M-1</a>
                    </li> */}
                </ul>

                <br />
                <br />
                <p>Component area</p>
                {this.loadComponent(this.state.currComp)}
            </div>
    }
}

export default DynamicComponents;
