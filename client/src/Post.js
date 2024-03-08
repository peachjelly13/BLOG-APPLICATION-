import React from 'react'

export const Post = () => {
  return (
    <div className="post">
        <div className="image">
        <img src="https://www.treehugger.com/thmb/K52ggfaQJUlKQJgwfOj8cIxFtbQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-dv2046021-262c32cc91814f08a4eecc16b1cde30a.jpg"></img>
        </div>
        <div className = "texts">
        <h2>Flightless Birds</h2>
        <p className ="info">
          <a className="author">Mara Wolf</a>
          <time>8 March 2024</time>
        </p>
        <p className="summary">Penguins are a group of aquatic flightless birds from the family Spheniscidae of the order Sphenisciformes</p>
      </div>
      </div>
  )
}

export default Post;