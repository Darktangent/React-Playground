
import React from "react"


const CommentDetail=(props)=>{
  const {author,time, comment,src} =props
  return (
    <div className="comment">
      <a href="/" className="avatar">
      <img alt="avatar" src={src}/>
      </a>
      <div className="content">
      <a href="/" className="autor">
      {author}
      </a>
      <div className="metadata">
      <span className="date">Today at {time}</span>
      </div>
      <div className="text">{comment}</div>
      </div>
      </div>


  )

}
export default CommentDetail