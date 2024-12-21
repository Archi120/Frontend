import React, { useState } from 'react';

const PhysicalFitness = () => {
  const [searchTerm, setSearchTerm] = useState('');
// List of videos with title and embed URL
  const videos = [
    {
      title: 'Full Body workout',
      url: 'https://www.youtube.com/embed/W4eKVKwf3rQ',
    },
    {
      title: 'Yoga for beginners',
      url: 'https://www.youtube.com/embed/-hSma-BRzoo',
    },
  ];

  // Filter videos based on search term
  const filteredVideos = videos.filter(video =>
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Physical Fitness</h1>
      <div>
        <h2>Workout Videos</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search videos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ marginBottom: '20px', padding: '10px', width: '100%' }}
        />

        {/* Display filtered videos */}
        {filteredVideos.length > 0 ? (
          filteredVideos.map((video, index) => (
            <div key={index} style={{ marginBottom: '20px' }}>
              <iframe
                width="560"
                height="315"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          ))
        ) : (
          <p>No videos found</p>
        )}
      </div>
    </div>
  );
};

export default PhysicalFitness;
