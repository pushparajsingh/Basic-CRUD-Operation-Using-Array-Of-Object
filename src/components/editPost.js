import React, { Component } from 'react'

export default class EditPost extends Component {
    constructor(props){
        super(props)
        this.state = {
            isVisible : false,
            updateTitle : ""

        }
        console.log("isVisbilefalse")
        this.editClick = this.editClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
  
  editClick(){
    console.log("true")
   
    this.setState({isVisible:true})
  }

  handleChange(val){
    console.log(val.target.value)
    this.setState({updateTitle: val.target.value})
  }
  
  componentDidUpdate(pP, pS){

    if(pS.isVisible == false && this.state.updateTitle == ""){
      this.setState({updateTitle : this.props.data.title})
    }
    if(pS.isVisible == true && this.state.updateTitle == pS.updateTitle){
      this.setState({isVisible:false})
    }
  }


  render() {
    return (
      <>
      {this.state.isVisible ?
      <div>
        <br />
        <input type="text" value={this.state.updateTitle} onChange={this.handleChange}/>
        <button onClick={this.props.updatePost.bind(this, this.props.data.id, this.state.updateTitle)}>Update</button>
      </div>
      :
       <div>
         
            <p>{this.props.data.id}</p>
            <p>{this.props.data.title}</p>
            <button onClick={this.props.deletePost.bind(this, this.props.data.id)}>Delete</button>
            
            <button onClick={ this.editClick}>Edit Post</button>
            
      </div>  
             }
      </>
     
              
    )
  }
}
