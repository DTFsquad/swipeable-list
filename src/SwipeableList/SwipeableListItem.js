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

        // Drag & Drop
        dragStartX = 0;
        left = 0;
        dragged = false;


        // Mouse event drag listener
        onDragStartMouse(event) {
            this.onDragStart(event.clientX);
            window.addEventListener('mousemove', this.onMouseMove);
        }

        // Touch event drag listener
        onDragStartTouch(event) {
            const touch = event.targetTouches[0];
            this.onDragStart(touch.clientX);
            window.addEventListener('touchmove', this.onTouchMove);
        }

        // onDragStart method
        onDragStart(clientX) {
            this.dragged = true;
            this.dragStartX = clientX;
            requestAnimationFrame(this.updatePosition);
        }
    }
    render() {
        return (
        <>
            <div className='Wrapper' ref={div => (this.wrapper = div)}>
                <div className='Background' ref={div => (this.background = div)}>
                    <span>Delete</span>
                </div>
                <div 
                    className='ListItem' 
                    ref={div => (this.listElement = div)}
                    onMouseDown={this.onDragStartMouse}
                    onTouchStart={this.onDragStartTouch}
                >
                    {this.props.children}
                </div>
            </div>
        </>
        )
    }
}