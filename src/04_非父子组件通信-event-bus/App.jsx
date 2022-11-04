import Home from "./Home";
import eventBus from "./utils/event-bus";
import {useEffect} from "react";

function App() {
    useEffect(() => {
       eventBus.on("prevClick-banner",( msg ) => {
           console.log("get msg!")
           console.log(msg)
       })
        eventBus.on("nextClick-banner",( msg ) => {
            console.log("get msg!")
            console.log(msg)
        })

    });

    return (
        <div>
            App
            <Home/>
        </div>
    )
}

export default App
