import React from 'react'
import { useParams, Link } from "react-router-dom"

const PostPage = ({posts, handleDelete}) => {
  const {id} = useParams()

  const post = posts.find(post => (post.id).toString() === id)
  // console.log(post);
  return (
    <main className="postPage">
    
  </main>
  )
}

export default PostPage