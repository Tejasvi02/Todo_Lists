import React from 'react'

import './input.scss';

export class Input extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          title:'',
          description:''
        }
      }
    
      changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
      }

      submitHandler = e =>{
      //e.preventDefault();
      console.log("newwww");
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

    
      render() {
        const {title,description} = this.state
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <div>
            <input type="text" placeholder="title"  name="title"  value={title} onChange={this.changeHandler}></input> </div>
            <div>
            <input type="text"  placeholder="description" name="description"  value={description} onChange={this.changeHandler}></input> </div>
            <button type="submit">submit</button>

            </form>
          </div>
         
        )
      }
}