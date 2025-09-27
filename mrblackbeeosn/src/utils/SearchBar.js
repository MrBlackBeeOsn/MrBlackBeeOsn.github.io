import React, { useState } from 'react';

const SearchBar = ({ posts, onSearchResults }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    const filteredPosts = posts.filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.content.toLowerCase().includes(searchTerm.toLowerCase())
    );
    onSearchResults(filteredPosts);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Tìm kiếm bài viết..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch}>
        🔍
      </button>
    </div>
  );
};