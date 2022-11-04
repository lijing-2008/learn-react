import React, {PureComponent} from 'react';

import Cart from "./pages/Cart";

class App extends PureComponent {
    loginClick(){
        localStorage.setItem("token", "hello token")
        // 这里只是为了强制更新，一般不会用这个api
        // this.forceUpdate()
    }
    render() {
        return (
            <div>
                App
                <button onClick={( event ) => this.loginClick()}>登录</button>
                <Cart/>
            </div>
        );
    }
}

export default App;
