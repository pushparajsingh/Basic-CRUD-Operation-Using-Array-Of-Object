import './App.css';
import Post from './components/post';
import Second  from './components/second';
function App() {
  const data = [{id:1, title:"post1"}, {id:2, title:"post2"}]
 
  return (
    <div className="App">
    <h3 style={{color:"red", backgroundColor:"yellow", padding:"25px"}}>Hello React!!!</h3>
    {/* <Post posts={data}/> */}
    <Second posts = {data}/>
    </div>
  );
}

export default App;
