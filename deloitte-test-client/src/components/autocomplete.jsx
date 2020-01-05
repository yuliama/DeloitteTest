import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

class AutoComplete extends Component {
    state = {  
        search:'',
        Employees:[],
        showAutoCompleteddl: 'none'
    };

    getAllEmployees = (event) => {
        
        let search = event.target.value;
        this.setState({search});
        console.log(search);
        let queryString= search.length>1?'?search='+search:'';
        fetch(`http://localhost:54949/api/home${queryString}`)
          .then(res => res.json())
          .then(
            (result) => {
                this.setState({showAutoCompleteddl:"block"});
              this.setState({
                Employees: result                
              });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
            }
          )
      };

    render() { 
        return (  
            <div className="autoComplete" >
                <div className="ddlSearch">
                    <input type="text" placeholder="Knowledge Management" value={this.state.search} onChange={this.getAllEmployees} onFocus={this.getAllEmployees} onBlur={()=>{this.setState({showAutoCompleteddl:"none"})}}></input>
                    <ul style={{display: this.state.showAutoCompleteddl}}>
                    {
                    this.state.Employees.map((value, index) => {

                        const name= value.Name;
                        const s=this.state.search.toLowerCase();
                        const highlighedName = name.toLowerCase().indexOf(s)!== -1 ? name.substr(name.toLowerCase().indexOf(s), s.length) : '';
                        const preName = name.toLowerCase().indexOf(s)!== -1 ? name.substr(0, name.toLowerCase().indexOf(s)) : name;
                        const postName = name.toLowerCase().indexOf(s)!== -1 ? name.substr(name.toLowerCase().indexOf(s)+s.length) : '';

                        const workTitle= value.WorkTitle;
                        const highlighedWorkTitle = workTitle.toLowerCase().indexOf(s) !== -1 ? workTitle.substr(workTitle.toLowerCase().indexOf(s), s.length) : '';
                        const preWorkTitle = workTitle.toLowerCase().indexOf(s) !== -1 ? workTitle.substr(0, workTitle.toLowerCase().indexOf(s)) : workTitle;
                        const postWorkTitle = workTitle.toLowerCase().indexOf(s) !== -1 ? workTitle.substr(workTitle.toLowerCase().indexOf(s)+s.length) : '';
                        
                        var arr=[];
                        arr.push(value);

                       return <li id={value.WorkerID} key={value.WorkerID} onClick={()=> {this.setState({Employees:arr}); this.setState({search:value.Name});}}>
                            <img src={value.ImageUrl} alt=""></img>
                            <div className="name">
                                {preName}
                                <span style={{backgroundColor:'#FFFF00'}}>{highlighedName}</span>
                                {postName}
                            </div>
                            <div className="workTitle">
                                {preWorkTitle}
                                <span style={{backgroundColor:'#FFFF00'}}>{highlighedWorkTitle}</span>
                                {postWorkTitle}
                            </div>
                            </li>
                    })}


                </ul>
                </div>
                <button onClick={(e) => {
                                this.props.getEmployees(this.state.Employees)
                                }
} ><FontAwesomeIcon icon={faSearch} /></button>
            </div>
        );
    }
}
 
export default AutoComplete;