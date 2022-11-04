function loginAuth(OriginCpn) {
    return props =>{
        // 从某个地方获取token，如localStorage
        const token = localStorage.getItem("token")
        if (token){
            return <OriginCpn {...props}/>
        }else {
            return <h2>请先登录!</h2>
        }
    }
}

export default loginAuth
