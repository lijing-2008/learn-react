import {useState} from "react";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import "./style.css"

function App() {
    const [books, setBooks] = useState([
        {id: 1, name: "js", price: 99},
        {id: 2, name: "react", price: 99},
        {id: 3, name: "rust", price: 99}
    ]);
    const addNewBooks = () => {
        const newBooks = [...books]
        newBooks.push({id: new Date().getTime(), name: "java", price: 100})
        setBooks(newBooks)
    }
    const deleteBooks = (index) => {
        const newBooks = [...books]
        newBooks.splice(index, 1)
        setBooks(newBooks)
    }
    return (
        <div>
            <h2>书籍列表</h2>
            <TransitionGroup component="ul">
                {
                    books.map((item, index) => {
                        return (
                            <CSSTransition key={item.id} classNames="book" timeout={2000}>
                                <li>
                                    <span>
                                       {item.name}-{item.price}
                                    </span>
                                    <button onClick={e => deleteBooks(index)}>delete</button>
                                </li>
                            </CSSTransition>
                        )
                    })
                }
            </TransitionGroup>
            {/*<ul>*/}
            {/*    {*/}
            {/*        books.map((item,index) => {*/}
            {/*            return (*/}
            {/*                <li key={index}>{item.name}-{item.price}</li>*/}
            {/*            )*/}
            {/*        })*/}
            {/*    }*/}
            {/*</ul>*/}
            <button onClick={e => addNewBooks()}>add new books</button>
        </div>
    )
}

export default App
