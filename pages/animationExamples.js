import React from 'react';
import {Motion, TransitionMotion, spring} from 'react-motion';
import Transition from 'react-motion-ui-pack';

import PageHead from '../app/components/PageHead';
import Menu from '../app/components/Menu';

class AnimationExamples extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        };
    }

    componentDidMount = () => {
      this.setState({isReady: true});
      setInterval(()=>this.setState({isReady: !this.state.isReady}), 1000);
    }
    
    
    enterAnimation(){
        return {
            opacity:1, 
            translateY: 500
            // translateY: spring(100, { stiffness: 120, damping: 17 }),
        };
    }

    leavingAnimation(){
        return {
            opacity:0, 
            translateY: 0,
        };
    }

    render(){
        return <div>
            <PageHead />
            <Menu activeLink="/animations"/>            
            <div className="container">

                <Motion defaultStyle={{opacity:0, top: 0}} style={{opacity: spring(1), top: spring(150), transform: `scale(5,5)`}} >
                    {value => <div style={{...value, 'position':'absolute'}}>
                        <h1>Hello PR</h1>
                    </div>}
                </Motion>
                
            </div>
        </div>
    }

}

export default AnimationExamples;

{/* <TransitionMotion 
                    willEnter={this.enterAnimation}>
                    {currValues => <div style={currValues}>PR</div>}
                </TransitionMotion> */}


{/* <Transition
    component="false"
    entry={this.enterAnimation()}
    leave={this.leavingAnimation()}
>

    {this.state.isReady && <div key="pr">
        <h1>Animation Examples</h1>
    </div>}
</Transition> */}

