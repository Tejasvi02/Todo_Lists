import React from 'react'

import './update.scss';

export class Update extends React.Component{

  changeHandler = e => {
    this.setState({[e.target.name]: e.target.value})
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