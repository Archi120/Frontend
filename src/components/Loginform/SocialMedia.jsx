import React, { useState } from 'react';
import './SocialMedia.css'; // Add styles if needed

const SocialMedia = () => {
    const [posts, setPosts] = useState([
        { id: 1, user: "John Doe", content: "Just took my medication, feeling good!" },
        { id: 2, user: "Jane Smith", content: "Had a lovely walk in the park today." }
    ]);
    const [newPost, setNewPost] = useState('');

    const handlePostSubmit = (e) => {
        e.preventDefault();
        const newPostEntry = {
            id: posts.length + 1,
            user: "Current User", // Replace with authenticated user
            content: newPost
        };
        setPosts([newPostEntry, ...posts]);
        setNewPost('');
    };

    return (
        <div className="social-media-container">
            <h2>Social Media Feed</h2>

            {/* Post creation form */}
            <form onSubmit={handlePostSubmit} className="post-form">
                <textarea 
                    value={newPost} 
                    onChange={(e) => setNewPost(e.target.value)} 
                    placeholder="Share something with your friends..."
                    className="post-input"
                />
                <button type="submit" className="post-btn">Post</button>
            </form>

            {/* Displaying posts */}
            <div className="posts-feed">
                {posts.map(post => (
                    <div key={post.id} className="post-item">
                        <h4>{post.user}</h4>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMedia;
