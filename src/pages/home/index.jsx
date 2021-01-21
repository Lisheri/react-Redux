import React from 'react';
import {store} from '../../store'
import {sendAction} from '../../action'
export default class Home extends React.Component {
    constructor() {
        super();
        this.testClick = this.testClick.bind(this)
    }
    testClick() {
        // const action = sendAction()
        const action = {
            type: 'rinima',
            value: '老子日'
        }
        // * 发送一个action
        store.dispatch(action)
    }

    componentDidMount() {
        // * 使用 store.subscribe 来监听reducer执行完毕
        store.subscribe(() => {
            // console.info("我草")
            console.info(store.getState())
            this.setState({}) // * setState触发重渲染
        })
    }

    render() {
        return (
            <>
                <button onClick={this.testClick}>草拟吗</button>
                <div>{store.getState().value}</div>
            </>
        )
    }
}