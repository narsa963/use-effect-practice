import { Fragment, useEffect, useState } from "react";
import Posts from "./Posts";

const Books = () =>{
    const [allPost, setAllPost]=useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/posts',{method:"GET"}
         ).then(res=>res.json()).then(result => {setAllPost(result)
         })
    },[])


return (
<Fragment>
  <Posts postData={allPost}/>
</Fragment> 
)
}
export default Books;