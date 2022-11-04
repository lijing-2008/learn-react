import React from 'react';
import "./TabControl.css"

function TabControl(props) {
    const {titles, changeClick, title} = props
    const changeTitle = (title) => {
        changeClick(title)
    }
    return (
        <div className="tab-control">
            {
                titles.map((item) => {
                    return (
                        <div className={`item ${item===title? 'active':''}`} key={item}>
                            <span className="text" onClick={() => changeTitle(item)}>{item}</span>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default TabControl;
