import React, {useState} from 'react';
import TabControl from "./TabControl";

function App() {
    const [titles, setTitles]=useState(["流行", "新款", "精选"])
    const [title,setTitle] = useState("流行")
    const changeClick = ( title ) => {
      setTitle(title)
    }
    return (
        <div>
            <TabControl titles={titles} title={title} changeClick={( title ) => changeClick(title)
            }/>
            <h2>{title}</h2>

        </div>
    );
}

export default App;
