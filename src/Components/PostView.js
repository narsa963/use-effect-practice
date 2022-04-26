const PostView = (props) =>{
 return (
   <div >
     <ul >
       <li className="list-items">Title{props.data.title}</li>  
     </ul>
   </div>
 )
}
export default PostView;