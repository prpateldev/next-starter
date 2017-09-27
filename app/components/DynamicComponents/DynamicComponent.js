import React from 'react';


class DynamicComponent extends React.Component {
    static defaultProps = {
        name: ''
    };

    render() {
        return <h5>Hey I am the Dynamic Component, Hello {this.props.name}</h5>
    }
}



export default DynamicComponent;



