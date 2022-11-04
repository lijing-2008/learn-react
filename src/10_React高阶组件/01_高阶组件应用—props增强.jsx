import React, {PureComponent, useState} from 'react';
const defaultUserInfo = {
    name: "coder",
    level: 99
}
function enhancedUserInfo(OriginCpn) {
    function NewCpn(props) {
        const [userInfo, setUserInfo]=useState(
            defaultUserInfo
        )
        return(
           <OriginCpn {...props} {...userInfo}/>
        )
    }
    return NewCpn
}
function Home(props) {
    const {name, level}=props
    return <h1>Home-{name}-{level}-{props.age}</h1>
}
const NewHome = enhancedUserInfo(Home)
function HelloWorld(props) {
    return <h1>HelloWorld</h1>
}
function HelloReact(props) {
    return <h1>HelloReact</h1>
}

class App extends PureComponent {
    render() {
        return (
            <div>
                <NewHome/>
                <Home age={19}/>
                <HelloWorld/>
                <HelloReact/>
            </div>
        );
    }
}

App.propTypes = {};

export default App;
