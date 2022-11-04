import eventBus from "./utils/event-bus";
function HomeBanner() {

    const prevClick = (  ) => {
        console.log("prev-click")
        eventBus.emit("prevClick-banner", {name:"coder", language:["rust", "javascript", "java"]})
    }
    const nextClick = (  ) => {
        console.log("next-click")
        eventBus.emit("nextClick-banner", {name:"coder-li", language:["rust", "javascript", "java"]})
    }
    return (
        <div>
            HomeBanner
            <button onClick={(  ) => prevClick()}>prev</button>
            <button onClick={(  ) => nextClick()}>next</button>
        </div>
    )
}

export default HomeBanner
