import React, { Component } from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default class Editmodel extends Component {
    constructor(props)
    {
        super(props);
        this.state = { 
            updatetitle:this.props.postes.title
        }
        this.getdata = this.getdata.bind(this);
        console.log("data",props);
    }
   
    getdata(val)
    {
        console.log(val.target.value);
    this.setState({updatetitle:val.target.value});
    }
  render() {

    return (
      <div>
           <Modal
        isOpen={this.props.isVisibleModel}
        onRequestClose={this.props.isClose}
        style={customStyles}
        contentLabel="Example Modal"
      >

          <h2>I am modal</h2>
          <input type="text" value={this.state.updatetitle} onChange={this.getdata} />
          <button onClick={this.props.Update.bind(this,this.state.updatetitle, this.props.postes.id )} >update</button>
          <br />
       
        <button onClick={this.props.isClose.bind(this)}>close</button>
     </Modal>
      </div>
    )
  }
}
