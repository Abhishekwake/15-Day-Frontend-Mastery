import LikeButton from "./LikeButton";
function App(){
  return(
    <div>
      <h1>User 1</h1>
      <LikeButton initialLiked={false}/>

      <h1>User 2</h1>
      <LikeButton initialLiked={true}/>
    </div>

  );
}

export default App;

/*
import { useState, useEffect } from "react";
function App()
{
  const[user,setUser] =useState("");
  useEffect(()=> {
  //fake API call
  //using timout to update user to abhishek after 2 sec
  setTimeout(()=> {
    setUser("Abhishek Wake")
  },2000);
  },[]);

  return <h1>Hello {user}</h1>
}

export default App;
*/

/*
import { useState } from "react";

function App() {  
  const[value,setValue] = useState(0);
  return (
    <div className="App">
   <h1>{value}</h1>
   <button onClick={()=> setValue(value+1)}>
    Click Meh
   </button>
   </div>

  );
}
export default App;
*/

//yeh jo app hai use hi component kehte hai
//components are navbar,footers,cards,Buttos,forms
// / All can be made reusable.