import React, {createRef, forwardRef, PureComponent} from 'react';

const HelloWorld = forwardRef(
    function (props, ref) {
        return(
            <div ref={ref}>
                <h2 >hello ForwardRef.</h2>
                <p>this is a paragraph.</p>
            </div>
        )
    }
)


class App extends PureComponent {
    constructor() {
        super();
        // 2.提前创建ref，将创建出来的对象绑定到元素上
        this.titleRef = createRef()
        this.rustTitle = null
        this.forwardRef = createRef()
    }

    getNativeDOM() {
        // 1.在react元素上绑定一个ref字符串
        //  console.log(this.refs.coder)

        // 2.提前创建ref，将创建出来的对象绑定到元素上.推荐的方式
        console.log(this.titleRef.current)

        // 3.ref赋值为一个函数
        console.log(this.rustTitle)

        // 绑定函数式组件中的某个原生dom,函数组件没有实例，无法通过ref获取他们的实例
        console.log(this.forwardRef.current)
    }

    render() {
        return (
            <div>
                <h2>三种方式</h2>
                <h2 ref="coder">hello world</h2>
                <h2 ref={this.titleRef}>Title</h2>
                <h2 ref={( e ) => this.rustTitle=e}>hello rust.</h2>
                <button onClick={(e) => this.getNativeDOM()}>GetDOM</button>

                <HelloWorld ref={this.forwardRef}/>

            </div>
        );
    }
}

App.propTypes = {};

export default App;
