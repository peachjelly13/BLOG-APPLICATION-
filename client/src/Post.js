import React from 'react';
import {formatISO9075} from "date-fns";

export const Post=({title,summary,cover,content,createdAt,author})=>{
  return (
    <div className="post">
        <div className="image">
        <img src="https://www.treehugger.com/thmb/K52ggfaQJUlKQJgwfOj8cIxFtbQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-dv2046021-262c32cc91814f08a4eecc16b1cde30a.jpg"></img>
        </div>
        <div className = "texts">
        <h2>{title}</h2>
        <p className ="info">
          <a className="author">{author.username}</a>
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
      </div>
  )
}

export default Post;