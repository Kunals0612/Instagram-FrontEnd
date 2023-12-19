import React, {useState} from 'react'
import './Timeline.css'
import Post from './Posts/Post'
import Suggestion from './Suggestion'
function Timeline() {
  const [posts, setPosts] = useState([ 
    {
          user: "redian_",
          postImage:"https://i.ibb.co/SNzt2Gs/2.jpg",
          likes: 12,
          timestamp: "2d",
    },
    {
         user: "johndoe",
         postImage: "https://i.ibb.co/XSsDgTW/marguerite-729510-640.jpg", 
      
     
         likes: 56,
         timestamp: "1d",
    },
    {
          user: "mariuss",
          postImage: "https://i.ibb.co/8XswCgM/download.jpg" ,
          likes: 60,
          timestamp: "12hr",
    },
    {
          user: "kobee_18",
          postImage:  "https://i.ibb.co/WPRNHxp/Microsoft-Teams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg",
          likes: 90,
          timestamp: "7d",
    },
  ]);
  return (
    <div className ="timeline"> 
      <div className="timeline_left">
            <div className="timeline_posts">
              {posts.map((post) => (
                <Post
                user={post.user}
                postImage = {post.postImage}
                likes={post.likes}
                timestamp={post.timestamp}/>
              ))}
            </div>
      </div>
      <div className="timeline_right">
        <Suggestion/>
      </div>
    </div>
  )
}

export default Timeline
