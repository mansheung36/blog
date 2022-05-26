import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Home() {


  const [postsList, setPostsList] = useState([])

  useEffect(() => {

    fetch('https://student-json-api.lidemy.me/posts',)
      .then(res => res.json())
      .then(data => {
        setPostsList(data)
      })

  }, [])

  return (
    <div className="container">

      {
        postsList.map(post => (
          <div key={post.id} className="card" style={{ margin: "20px 0" }}>
            <h5 className="card-header">{post.title}</h5>
            <div className="card-body">
              <p className="card-text">{post.body}</p>
              <a href="#" className="btn btn-primary">Detail</a>
            </div>
          </div>
        ))
      }

    </div>
  )
}
