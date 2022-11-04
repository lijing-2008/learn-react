import React, {Component} from 'react';
import {flushSync} from "react-dom"
class App extends Component {
    constructor() {
        super();
        this.state = {
            message: "hello world",
            count: 0
        }
    }

    changeText() {
        //  1.基本使用
        // this.setState({
        //     message: "hello"
        // })

        // 2.传入一个函数，可以获取到之前的数据和父组件传过来的props
        // this.setState(( state, props ) => {
        //     console.log(this.state, this.props)
        //     return({
        //         message: "你好啊,coder."
        //     })
        // })

        // 3.传递两个参数，第二个参数是一个回调函数，等更新完毕后执行
        // this.setState({message: "你好啊,coder."}, () => {
        //     console.log("-------", this.state)
        // })
        // console.log("+++++++++", this.state)

        setTimeout(() => {
            //在react18之前，setTimeout中的setState操作是同步操作，但是18之后变成了异步操作
            // this.setState(({message: "你好啊，我的宝贝"}))

            //要实现同步效果，需要单独引入flushSync
            flushSync((  ) => {
                this.setState(({message: "你好啊，我的宝贝"}))
            })
            console.log(this.state.message)
        }, 0)

    }

    increment() {
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        console.log("render execute")
        const {message, count} = this.state
        return (
            <div>
                <h2>message: {message}</h2>
                <button onClick={() => this.changeText()}>change message</button>

                <h2>current count: {count}</h2>
                <button onClick={() => this.increment()}>change count</button>
            </div>
        );
    }
}

export default App;
