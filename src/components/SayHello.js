import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <h1>สวัสดีจ้า {this.props.name}</h1>
        );
    }
}

export default SayHello;