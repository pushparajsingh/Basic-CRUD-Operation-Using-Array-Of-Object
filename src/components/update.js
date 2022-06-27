import React, { Component } from 'react'

export default class Update extends Component {
  constructor(props) {
    super(props);
    this.state = {
          isVisible:false,
          updatevalue :"",
          postid:null

    }
    this.UpdateChange = this.UpdateChange.bind(this);
  }

  UpdateChange(eve)
  {
   this.setState({updatevalue:eve.target.value})
  }
 editClick()
 {
   console.log("this");
   this.setState({isVisible:true})
 }
 componentDidMount()
 {
   this.setState({postid:this.props.data.id});
 }

  componentDidUpdate(pP,pS)
  {
     if(pS.isVisible==false && this.state.updatevalue == ""){
     this.setState({updatevalue:this.props.data.title})}
     if(pS.isVisible==true && this.state.updatevalue == pS.updatevalue){
     this.setState({isVisible:false});}
  }
  render() {
    return (
      <div>   
        { this.state.isVisible? <div>
        <input type="text" value={this.state.updatevalue} onChange={this.UpdateChange}/>
        <button onClick={this.props.Update.bind(this,this.state.updatevalue,this.props.data.id)}> Update </button>
      </div> :
          <div >
            <h2> {this.props.data.id}</h2>
            <h2> {this.props.data.title} </h2>
            <button onClick={this.props.deleteData.bind(this, this.props.data.id)}>delete</button>&nbsp;&nbsp;
            <button onClick={this.editClick.bind(this)}>edit</button>&nbsp;&nbsp;
            <button onClick={this.props.isOpen.bind(this,this.state.postid)}> EditviaModel </button>
          </div> 
        } 
      </div>
     
    )
  }
}
