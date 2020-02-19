import React from 'react';
import './SwipeableListItem.css';

export default class SwipeableListItem extends React.Component {
    // DOM Refs
    // listElement
    // Wrapper
    // background

    constructor(props) {
        super(props);

        // initialize the ref-variables to null
        this.listElement = null;
        this.wrapper = null;
        this.background = null;

        // binding the methods
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onTouchMove = this.onTouchMove.bind(this);
        this.onDragStartMouse = this.onDragStartMouse.bind(this);
        this.onDragStartTouch = this.onDragStartTouch.bind(this);
        this.onDragEndMouse = this.onDragEndMouse.bind(this);
        this.onDragEndTouch = this.onDragEndTouch.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.updatePosition = this.updatePosition.bind(this);
        this.onSwiped= this.onSwiped.bind(this);
    }
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