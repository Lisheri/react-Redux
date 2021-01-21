import React from 'react'
import {connect} from 'react-redux'

const mapStateToProps = (state) => {
    return state
}

class ComB extends React.Component {
    constructor(props) {
        super(props)
        console.info(this.props)
    }
    render() {
        return (
            <>
                <span>{this.props.count}</span>
            </>
        )
    }
}

export default connect(mapStateToProps)(ComB)