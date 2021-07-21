import React, { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {
    constructor(props) {
        super(props)
        this.myRef = React.createRef();
    }

    clickHandler = () => {
        this.myRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRInput ref = {this.myRef} />
                <button onClick = {this.clickHandler}>Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput
