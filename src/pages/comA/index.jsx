import React from 'react'
import {connect} from 'react-redux'

const mapDispatchToProps = (dispatch) =>{
    // * 这个函数要有一个返回值返回值是一个对象
    return {
        sendAction: () => {
            // * 利用dispatch 发送一个 action, 需要定义一个type属性
            dispatch({
                type: 'action-add'
            })
        }
    }
}

class ComA extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        // console.info(this.props)
        this.props.sendAction()
    }
    render() {
        return (
            <>
                <button onClick={this.handleClick}>+</button>
            </>
        )
    }
}

export default connect(null, mapDispatchToProps)(ComA)