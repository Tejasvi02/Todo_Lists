import React from 'react'

import './Todo.scss';

export class Todos extends React.Component {    

    constructor(props) {
        super(props);   
        this.sample = this.sample.bind(this);
        this.sample1=this.handleChange.bind(this);
        this.renderForm=this.renderForm.bind(this);
        this.state = {
            title:'',
            description:'',
            duedatetime:''

        }
    }
/**
 * 
 * deletehandler is the function used for delete
 * @param {*} t is the id of the todo item
 * @param {*} idx is the index
 */
    deletehandler(t,idx) {       
        fetch('http://localhost:3001/todos/' + t, {
        method: 'DELETE'}).then(res => res.text()) // or res.json()     
        this.props.updateHandler(idx);
    }
/**
 * handleChange is Update function
 * @param {*} id of the todo item
 */
    handleChange = id => (e) => {       
        console.log("update"+id)        
        const url = 'http://localhost:3001/todos/'+ id;
        this.setState({[e.target.name]: e.target.value})
        const testing= this.state;        
        const myJSON = JSON.stringify(testing);
        console.log(myJSON);
        const options = {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8'
            },  
            body: myJSON
        };  
        fetch(url, options).then(response => {console.log(response.status);});
    }  

    sample(p) {        
        let btnval = [...document.getElementsByClassName(p+"p1")];
        let btnval1 = [...document.getElementsByClassName(p+"p2")];
        let btnval2 = [...document.getElementsByClassName(p+"p3")];
        let cr = [...document.getElementsByClassName(p+"createdate")];
        let ud = [...document.getElementsByClassName(p+"updatedate")];
        console.log(btnval)
        for(let i in btnval)
        {
            console.log(btnval[i]);
            btnval[i].removeAttribute("hidden");
        }
        for(let i in btnval1)
        {
            console.log(btnval1[i]);
            btnval1[i].removeAttribute("hidden");
        }
        for(let i in btnval2)
        {
            console.log("btnval2"+btnval2[i]);
            btnval2[i].removeAttribute("hidden");
        }
        for(let i in cr)
        {          
           cr[i].removeAttribute("hidden");
        }
        for(let i in ud)
        {
            ud[i].removeAttribute("hidden");
        }
    }       

    renderForm(_id){
        let formval = [...document.getElementsByClassName(_id+"form")];
        let btnval1 = [...document.getElementsByClassName(_id+"p2")];
        let btnval2 = [...document.getElementsByClassName(_id+"p3")];
        
        for(let i in formval)
        {
            console.log(formval[i]);
            formval[i].removeAttribute("hidden");
        }
        for(let i in btnval1)
        {
            console.log(btnval1[i]);
            btnval1[i].setAttribute("hidden","true");
        }
        for(let i in btnval2)
        {
            console.log("btnval2"+btnval2[i]);
            btnval2[i].setAttribute("hidden","true");
        }
    }

    changeHandler = e => {
        this.setState({[e.target.name]: e.target.value})
    }   
 /**
  * completehandler function is to disable the button and mark as complete
  * @param {*} _id of the todo item
  */
    completeHandler = _id => (e) => {
        let elem = [...document.getElementsByClassName(_id+"btn")];
        for(let i in elem)
        {
            console.log(elem[i]);
            elem[i].setAttribute("disabled","true");
        }        
        //
        let btnval = [...document.getElementsByClassName(_id+"p1")];
        let btnval1 = [...document.getElementsByClassName(_id+"p2")];
        let btnval2 = [...document.getElementsByClassName(_id+"p3")];
        let cr = [...document.getElementsByClassName(_id+"createdate")];
        let ud = [...document.getElementsByClassName(_id+"updatedate")];
        let ux = [...document.getElementsByClassName(_id+"form")];
        for(let i in ux)
        {
            console.log(btnval[i]);
            btnval[i].setAttribute("hidden","true");
        }
        for(let i in btnval)
        {
            console.log(btnval[i]);
            btnval[i].setAttribute("hidden","true");
        }
        for(let i in btnval1)
        {
            console.log(btnval1[i]);
            btnval1[i].setAttribute("hidden","true");
        }
        for(let i in btnval2)
        {
            console.log("btnval2"+btnval2[i]);
            btnval2[i].setAttribute("hidden","true");
        }
        for(let i in cr)
        {          
           cr[i].setAttribute("hidden","true");
        }
        for(let i in ud)
        {
            ud[i].setAttribute("hidden","true");
        }
    }

    /**
     * 
     * @returns the rendered component
     */

    render() {
        const todoElements = this.props.todos.map((c, i) => <div className = "divcss">
            <button className={c._id + "btn"} onClick={() => this.sample(c._id)} onDoubleClick={this.completeHandler(c._id)} key={i}>{c.title} </button> 
            
            <p className={c._id + "p1"} hidden={true} id>{c.description}</p>
            <p className={c._id + "createdate"} hidden={true}>{c.createdDate}</p>
            <p className={c._id + "updatedate"} hidden={true}>{c.duedatetime}</p>
            
                <div>
                <form hidden={true} className={c._id + "form"} onSubmit={this.handleChange(c._id)}>
                    <div>
                    <input type="text" placeholder="title"  name="title"  onChange={this.changeHandler}></input> 
                    </div>
                    <div>
                    <input type="text"  placeholder="description" name="description"  onChange={this.changeHandler}></input> 
                    </div>
                    <div>
                    <input type="text" placeholder="duedate and time"  name="duedatetime"  onChange={this.changeHandler}></input> 
                    </div>
                    <button type="submit" id="submitbtn">submit</button>
                </form>
                </div>   
            <button onClick={() =>this.renderForm(c._id)} className={c._id + "p2"} id="updatebtn"  hidden={true}> Update</button>  
                      
            <button onClick={() =>this.deletehandler(c._id, i)} className={c._id + "p3"} id="deletebtn" hidden={true}> Delete</button>
            <br /> 
            <br />   
            </div>);
        
        return (
            <div className="todo-container">
                <ul>
                    {todoElements}
                </ul>
            </div>
        );
    }
}