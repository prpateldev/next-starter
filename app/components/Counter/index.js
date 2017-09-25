import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import withRedux from 'next-redux-wrapper';
import { connect } from 'react-redux';

import { addNumber, subtractNumber } from '../../store/counter/counterActions';
import store from '../../store/store';

import CounterView from './CounterView';


class Counter extends Component {

    render(){
        return <div>
                <CounterView 
                    counter={this.props.counter.count} 
                    add={() => this.props.add(1)} 
                    subtract={()=> this.props.subtract(1)} />
            </div>
    }

}


const mapStateToProps = (state) => {
    return {
        counter: state.counter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        add: (num) => {
            dispatch(addNumber(num));
        },
        subtract: (num) => {
            dispatch(subtractNumber(num));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
