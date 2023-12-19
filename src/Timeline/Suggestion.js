import React from 'react'
import './suggestion.css'
import { Avatar } from '@mui/material'
function Suggestion() {
  return (
    <div>
     <div className="suggestions">
      <div className="suggestion_title">Suggestion for you</div>
      <div className="suggestion_usernames">
        <div className="suggestion_username">
             <div className="username_left">
                 <span className="avatar">
                  <Avatar/>
                 </span>
                 <div className="username_info">
                  <span className="username">
                        redian
                  </span>
                  <span className="relation">
                        New to Instagram
                  </span>
                 </div>
             </div>
             <button className="follow_button">
                  Follow
             </button>
        </div>
        <div className="suggestion_username">
             <div className="username_left">
                 <span className="avatar">
                  <Avatar/>
                 </span>
                 <div className="username_info">
                  <span className="username">
                        redian
                  </span>
                  <span className="relation">
                        New to Instagram
                  </span>
                 </div>
             </div>
             <button className="follow_button">
                  Follow
             </button>
        </div>
        <div className="suggestion_username">
             <div className="username_left">
                 <span className="avatar">
                  <Avatar/>
                 </span>
                 <div className="username_info">
                  <span className="username">
                        redian
                  </span>
                  <span className="relation">
                        New to Instagram
                  </span>
                 </div>
             </div>
             <button className="follow_button">
                  Follow
             </button>
        </div>
        <div className="suggestion_username">
             <div className="username_left">
                 <span className="avatar">
                  <Avatar/>
                 </span>
                 <div className="username_info">
                  <span className="username">
                        redian
                  </span>
                  <span className="relation">
                        New to Instagram
                  </span>
                 </div>
             </div>
             <button className="follow_button">
                  Follow
             </button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Suggestion
