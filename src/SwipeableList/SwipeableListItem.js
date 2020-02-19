import React from 'react';
import './SwipeableListItem.css';

export default class SwipeableListItem extends React.Component {
    // DOM Refs
    // listElement
    // Wrapper
    // background

    render() {
        return (
        <>
            <div className='Wrapper' ref={div => (this.wrapper = div)}>
                <div className='Background' ref={div => (this.background = div)}>
                    <span>Delete</span>
                </div>
                <div className='ListItem' ref={div => (this.listElement = div)}>{this.props.children}</div>
            </div>
        </>
        )
    }
}