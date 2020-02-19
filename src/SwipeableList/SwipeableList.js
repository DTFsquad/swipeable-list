import React, { Component } from 'react';
import './SwipeableList.css';
import { render } from '@testing-library/react';

export default class SwipeableList extends Component {
    render() {
        const ( children ) = this.props
        return <div className='List'>{children}</div>
    }
}