import React from 'react';
import './App.css';
import Section from './components/Section'
import Footer from './components/Footer'

class App extends React.Component{
    constructor(){
        super();
        this.state = {
            todoList:[{id:'1',title:'吃饭',completed:true},{id:'2',title: '睡觉',completed:true},{id:'3',title:'打豆豆',completed:true},{id:'4',title:'敲代码',completed:true}]
        };
        this.handleNewTodoKeyDown = this.handleNewTodoKeyDown.bind(this)
    }
    render(){
        return (
            <div className="App">
                <section className="todoapp">
                    <header className="header">
                        <h1>todos</h1>
                        <input className="new-todo" placeholder="What needs to be done?" onKeyDown={this.handleNewTodoKeyDown} autoFocus />
                    </header>
                    {/*This section should be hidden by default and shown when there are todos*/}
                    {
                        this.state.todoList.length>0 &&
                        <div>
                            <Section todos={this.state.todoList}/>
                            {/*This footer should hidden by default and shown when there are todos*/}
                           <Footer/>
                        </div>
                    }
                </section>
                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    {/*Remove the below line ↓*/}
                    <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
                    {/*Change this out with your name and url*/}
                    <p>Created by <a href="http://todomvc.com">you</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>
            </div>
        );
    }

    handleNewTodoKeyDown(event){
        let {target,keyCode} = event;
        //判断用户是否按下回车键
        if(keyCode!==13)return;
        //获取文本框内容
        const inputText = target.value.trim();
        //判断内容是否为空
        if(!inputText.length)return;
        console.log(inputText);
        //获取最后一个用户
        const lastTodo = this.state.todoList[this.state.todoList.length-1];
        //向state追加数据，并不会重新渲染视图
        this.state.todoList.push({
            id:lastTodo ? lastTodo.id+1:1,
            title:inputText,
            completed:false
        });
        //重新渲染视图，更新数据
        this.setState({
            todoList:this.state.todoList
        });
        /*this.setState((state)=>({
            todoList:state.todoList.push({id:5,title:inputText,completed:false})
        }))*/
        //清空文本框
        target.value = '';
    }
}

export default App;
