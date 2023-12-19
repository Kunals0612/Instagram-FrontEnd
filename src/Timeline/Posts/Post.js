import React from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

function Post({user, postImage, likes, timestamp}) {
  return (
    <div>
      <div className="post">
        <div className="post_header">
          <div className="post_headerAuthor">
            <Avatar className="avatar">{user.charAt(0).toUpperCase()}</Avatar> 
            {user}. <span>{timestamp}</span>
          </div>
          <MoreHorizIcon/>
        </div>
        <div className="post_image">
        <img src={postImage} alt="joshua-hanson-e616t35-Vbeg-unsplash" />
        </div>
        <div className="post_footer">
          <div className="post_footerIcons">
            <div className="post_iconsMain">
                <FavoriteBorderIcon className="PostIcon"/>
                <ChatBubbleOutlineIcon className="PostIcon"/>
                <TelegramIcon className="PostIcon"/>
            </div>
            <div className="post_iconSave">
                  <BookmarkBorderIcon className="PostIcon"/>
            </div>
          </div>
          Liked by {likes} people
        </div>
      </div>
    </div>
  );
}

export default Post;
