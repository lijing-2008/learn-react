import React, {PureComponent} from 'react';

class App extends PureComponent {
    constructor() {
        super();

        this.state = {
            books: [
                {name: "js", price: 80, count: 1},
                {name: "rust", price: 150, count: 1},
                {name: "java", price: 100, count: 1},
            ]
        }
    }

    addNewBooks() {
        const books = [...this.state.books]
        books.push({name: "pthon", price: 90, count: 1})
        this.setState({books: books})
    }
    add(index){
        // 单纯这种不会触发render函数渲染
        // this.state.books[index].count++

        // 需要构造新的books才行
        const books = [...this.state.books]
        books[index].count++
        this.setState({books:books})
    }

    render() {
        const {books} = this.state
        return (
            <div>
                <ul>
                    {
                        books.map((item, index) => {
                            return (
                                <div>
                                    <span key={index}>{item.name}-{item.price}-{item.count}</span>
                                    <button onClick={( event ) => this.add(index)}>+1</button>
                                </div>

                            )
                        })
                    }
                </ul>
                <button onClick={(event) => {
                    this.addNewBooks()
                }}>add book
                </button>
            </div>
        );
    }
}

export default App;
