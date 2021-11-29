import React from 'react'

import './input.scss';

export class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title:'',
          description:'',
          duedatetime:''
        }
      }
      
    /**
     * changeHandler is to capture the state of the form
     */
      changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
      }

/**
 * submitHandler is used for POST
 * @param {*} e is the event
 */
      submitHandler = e =>{
      //e.preventDefault();
      this.setState({[e.target.name]: e.target.value});
      console.log(this.state);
      const url = 'http://localhost:3001/todos';
      const testing= this.state;
      const myJSON = JSON.stringify(testing);
      const options = {
        method: 'POST',
        headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json;charset=UTF-8'
  },
  body: myJSON
};

fetch(url, options)
  .then(response => {
    console.log(response.status);
  });             
      }
/**
 * 
 * @returns form for creating new todos
 */
    
      render() {
        const {title,description,duedatetime} = this.state
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <div>
            <input type="text" placeholder="title"  name="title"  value={title} onChange={this.changeHandler}></input> </div>
            <div>
            <input type="text"  placeholder="description" name="description"  value={description} onChange={this.changeHandler}></input> 
            </div>
            <div>
              <input type="text" placeholder="duedate and time"  name="duedatetime" value={duedatetime} onChange={this.changeHandler}></input> 
            </div>
            <button type="submit" id="submitbtn">submit</button>

            </form>
          </div>
         
        )
      }
}