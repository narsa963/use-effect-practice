import PostView from "./PostView";

const Posts=(props)=>{
 return(
     <div>
      <ul>
       {props.postData.map(post=>{
           return(
            <div>
             <PostView
               key ={post.id}
                data={post}
             />
            </div>
            
           )
       })}
      </ul>
     </div>
 )
}
export default Posts;