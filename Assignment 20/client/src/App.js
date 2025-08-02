import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('http://localhost:5000/posts')
      .then(res => setPosts(res.data));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content };
    await axios.post('http://localhost:5000/posts', newPost);
    setPosts([...posts, newPost]);
    setTitle('');
    setContent('');
  };

  return (
    <div className="app">
      <h1>Blog Posts</h1>
      <form onSubmit={handleSubmit}>
        <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
        <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="Content"></textarea>
        <button type="submit">Add Post</button>
      </form>
      {posts.map((post, index) => (
        <div className="post" key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
