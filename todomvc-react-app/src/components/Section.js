import React from 'react'

class Section extends React.Component{
    constructor(props){
        super(props);
        this.props = {todos:props.todos};
    }
    render() {
        return (
            <div>
                <section className="main">
                    <input id="toggle-all" className="toggle-all" type="checkbox" />
                    <label htmlFor="toggle-all">Mark all as complete</label>
                    <ul className="todo-list">
                        {this.getTodoList()}
                    </ul>
                </section>
            </div>
        )
    }

    getTodoList(){
        return this.props.todos.map((item)=>{
            return (
                <li key={item.id} className={item.completed?'completed':''}>
                    <div className="view">
                        <input className="toggle" type="checkbox" defaultChecked />
                        <label>{item.title}</label>
                        <button className="destroy"></button>
                    </div>
                    <input className="edit" defaultValue="Create a TodoMVC template" />
                </li>
            )
        })
    }
}

export default Section;
