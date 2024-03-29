import React from 'react';
import {formatISO9075} from "date-fns";

export const Post=({title,summary,cover,content,createdAt,author})=>{
  return (
    <div className="post">
        <div className="image">
        <img src={'http://localhost:5000/'+cover}></img>
        </div>
        <div className = "texts">
        <h2>{title}</h2>
        <p className="info">
          {author && <a className="author">{author.username}</a>}
          <time>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
      </div>
  )
}

export default Post;