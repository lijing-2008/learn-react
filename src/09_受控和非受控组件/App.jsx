import React, {useEffect, useState} from 'react';

function App(props) {
    const [userinfo, setUserinfo] = useState({
        username: "coder",
        password: "123",
        isAgree: true,
        hobbies: [
            {value: "sing", text: "唱", isChecked:false},
            {value: "dance", text: "跳", isChecked:false},
            {value: "rap", text: "rap", isChecked:false}
        ],
        fruits:["orange"]
    })
    const handleInputChange = (event) => {
        setUserinfo({
            ...userinfo,
            [event.target.name]: event.target.value
        })
    }
    // useEffect(() => {
    //     console.log(userinfo)
    // }, [userinfo])
    const submitClick = () => {
        console.log(userinfo)
        console.log("您的爱好:",userinfo.hobbies.filter(( item ) => item.isChecked).map(( item ) => item.value))
    }
    const handleAgreeChange = ( e ) => {
        setUserinfo({
            ...userinfo,
            isAgree: e.target.checked
        })
        // console.log(e)
    }
    const handleHobbiesChange = (e, index) => {
        const hobbies = [...userinfo.hobbies]
        hobbies[index].isChecked = e.target.checked
      setUserinfo({
          ...userinfo,
          hobbies:hobbies
      })
    }
    const handleFruitsChange = ( e ) => {
        // const options = Array.from(e.target.selectedOptions)
        // const fruits = options.map(( item ) =>item.value)
        const fruits = Array.from(e.target.selectedOptions, ( item ) => item.value)
        setUserinfo({
            ...userinfo,
            fruits
        })
    }
    return (
        <div>
            <form action="#">
                <div>
                    {/*1.用户名和密码*/}
                    <label htmlFor="username">
                        用户名:
                        <input type="text" id="username" name="username" value={userinfo.username}
                               onChange={(event) => {
                                   handleInputChange(event)
                               }}/>
                    </label>
                    <label htmlFor="password">
                        密码:
                        <input type="password" id="password" name="password" value={userinfo.password}
                               onChange={(event) => {
                                   handleInputChange(event)
                               }}/>
                    </label>

                </div>
                {/*2.checkbox单选*/}
                <label htmlFor="agree">
                    <input type="checkbox" checked={userinfo.isAgree} onChange={( event ) => handleAgreeChange(event)}/>
                    同意协议
                </label>
                {/*3.checkbox多选*/}
                <div>
                    您的爱好:
                    {
                        userinfo.hobbies.map(( item,index ) => {
                          return(
                              <label htmlFor={item.value} key={item.text}>
                                  <input type="checkbox"
                                         id={item.value}
                                         checked={item.isChecked}
                                         onChange={( event ) => handleHobbiesChange(event,index)}
                                  />{item.text}
                              </label>
                          )
                        })
                    }
                </div>

                {/*4.select多选*/}
                <div>
                    您要购买的水果:
                    <select value={userinfo.fruits} multiple onChange={( event ) => handleFruitsChange(event)}>
                        <option value="apple">苹果</option>
                        <option value="orange">橘子</option>
                        <option value="banana">香蕉</option>
                    </select>
                </div>
                <div>
                    <button onClick={submitClick}>注册</button>
                </div>
            </form>
        </div>
    );
}

export default App;
