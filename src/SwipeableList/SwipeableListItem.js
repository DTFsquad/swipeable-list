import React from 'react';
import './SwipeableListItem.css';

export default class SwipeableListItem extends React.Component {
    render() {
        return (
        <>
            <div className='Wrapper'>
                <div className='Background'>
                    <span>Delete</span>
                </div>
                <div className='ListItem'>{this.props.children}</div>
            </div>
        </>
        )
    }
}