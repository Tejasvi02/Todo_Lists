
import React from 'react';
import './App.scss';

import { Navbar } from './Navbar/Navbar';
import {Todos} from './Todos/Todo';
import { Input } from './Input/Input';
export class App extends React.Component{

  constructor(props){
    super(props); //calling constructor of parent
    this.state={
      showinput:false,      
      todos:[]
    };
  }

  create(){
    this.setState({showinput:true});
  }
/**
 * Fetching all the todo items from the database
 */
  getTodos(){
    fetch("http://localhost:3001/todos").then((response) =>response.json()).then((todos) => {
    this.setState({todos});
    });    
  }

  removeElem(i){
    let _todos = this.state.todos;
    _todos.splice(i,1);
    this.setState({todos:_todos});
  }
    
  componentDidMount(){
    this.getTodos();
  }
  /**
   * 
   * @returns the Navigation bar 
   */
  render(){
    console.log(this.state.todos);
    return (      
          <div>          
          <Navbar createHandler={this.create.bind(this)}> </Navbar> 
          <Todos todos={this.state.todos} updateHandler={this.removeElem.bind(this)}></Todos>
          {this.state.showinput?<Input> </Input>:null}
          </div>
    );    
  }
}


