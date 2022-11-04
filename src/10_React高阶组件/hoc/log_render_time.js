import {PureComponent} from "react";

function logRenderTime(OringCpn) {
    return class NewCpn extends PureComponent {

        constructor(props) {
            super(props);
        }

        componentWillMount() {
            this.beginTime = new Date().getTime()
        }

        componentDidMount() {
            this.endTime = new Date().getTime()
            const interval = this.endTime - this.beginTime
            console.log(`当前${OringCpn.name}页面渲染花费了${interval}ms渲染完成`)
        }

        render() {
            return (
                <OringCpn {...this.props}/>
            )
        }
    }
}

export default logRenderTime
