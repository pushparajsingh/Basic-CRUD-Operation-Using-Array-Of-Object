import React, { Component } from 'react'
import EditPost from './editPost';
export default class Post extends Component {
            constructor(props){
                super(props)
                this.state = {
                    getposts : [],
                    inputValue : ""
                }
              this.handleValue = this.handleValue.bind(this);
              this.addPost = this.addPost.bind(this);
              this.deletePost = this.deletePost.bind(this);
              this.updatepost = this.updatepost.bind(this);
            }

 componentDidMount(){
     console.log("cdm")
     this.setState({getposts : this.props.posts})
 }

 handleValue(val){
     console.log(val.target.value)
     this.setState({inputValue:val.target.value})
 }

 addPost(){
     const ids = this.state.getposts.map((post)=> post.id)
     //instance iterate
     console.log("ids",ids)
     const count = Math.max.apply(null, ids)
     console.log("maxValue", count)
     let post={}
     post.id = count +1
     post.title = this.state.inputValue
     const addpost = this.state.getposts
     addpost.push(post)
     this.setState({getposts:addpost})
 }

 deletePost(id){
     console.log("id",id)
     const senddata = this.state.getposts.filter((item)=>{
        console.log(item)
         if(item.id != id){
             return item //yaha id or title both. 
         }
        })
     this.setState({getposts:senddata})

 }
 updatepost(id, newTitle){
    const uptpost = this.state.getposts.find((post)=>post.id == id)
    uptpost.title = newTitle
    const collectData = this.state.getposts.map((oldpost)=>{
        if (oldpost.id == id){
            return uptpost
    
        }
        else{
            return oldpost
        }
    })
    this.setState({getposts : collectData})
   
}


  render() {
    console.log("render")
      
    return (
       <>
         <div>Show all Posts</div>
         <br/>
         <input type="text" onChange={this.handleValue} />
         <button onClick={this.addPost}>Add Post</button>
        {this.state.getposts.map((item,index)=>{
            return(
                <div key={index}>
                   <EditPost data={item} deletePost={this.deletePost} updatePost = {this.updatepost}/>
                </div>
            )
        })}
       </>
    
    )
  }
}
