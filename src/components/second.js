import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { Component } from 'react'
import Editmodel from './Editmodel';
import Update from './update';
export default class Second extends Component {
    constructor()
    {
        super();
        this.state = {
            data:[],
            string:"",
            postes:null,
            isVisibleModel:false
           
        }
        this.getdata = this.getdata.bind(this);
        this.Update = this.Update.bind(this);
        this.isOpen = this.isOpen.bind(this);
        this.deleteData = this.deleteData.bind(this);
        this.isClose = this.isClose.bind(this);

    }
    componentDidMount()
    {
        this.setState({data:this.props.posts});
    }
    getdata(val)
    {
        console.log("data")
        this.setState({string:val.target.value});
    }
    addpost()
    {
        console.log("datajjjjj")
        const count = this.state.data.length;
        let post = {};
        post.title = this.state.string;
        post.id = count + 1;
        let a = this.state.data;
         a.push(post);
        this.setState({data:a});
    }
     

    deleteData(val)
    {
        const obj = this.state.data.filter((value)=> value.id != val);

        this.setState({data:obj}); 
    }
    Update(val,ids)
    {
     console.log(val,ids)
      var object = this.state.data.find((value)=> ids == value.id);
      object.title = val;
      const a = this.state.data.map((item)=>{
        if(ids == item.id)
        return object;
        else
        return item;
      } )
      this.setState({data:a});
     
    }
    isOpen(id)
     {
   let a = this.state.data.find((val)=>val.id == id)
   this.setState({postes:a});
     this.setState({isVisibleModel:true});
     }
     
     isClose()
     {
  
     this.setState({isVisibleModel:false});
     }
   
  
  render() {
    return (
      <div>
          <input type="text" onChange={this.getdata} />
          &nbsp;
          <button onClick={this.addpost.bind(this)}>add posts</button>
          {this.state.data.map((val,index)=>{
            return (
            <div key={index}> 
           
                 <Update data={val} deleteData = {this.deleteData} isOpen ={this.isOpen} Update = {this.Update}  />
                 
              </div>)
            })}
  
            {this.state.isVisibleModel?
           
           <Editmodel isVisibleModel={this.state.isVisibleModel } postes = {this.state.postes} isClose ={this.isClose} Update = {this.Update} />: ""
            }
      </div>
    )
  }
}
