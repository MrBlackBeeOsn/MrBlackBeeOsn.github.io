import React, { useState } from 'react';

export default function SearchBar({ posts, onSearchResults }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = () => {
    // Nếu search trống, không làm gì cả (giữ trạng thái ban đầu)
    if (searchTerm.trim() === '') {
      setHasSearched(false);
      onSearchResults([]); // Truyền mảng rỗng để ẩn kết quả
      return;
    }
    
    setHasSearched(true);
    
    // Chỉ tìm kiếm khi có từ khóa
    const filteredPosts = (posts || []).filter(post => 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (post.content && post.content.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    onSearchResults(filteredPosts);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClear = () => {
    setSearchTerm('');
    setHasSearched(false);
    onSearchResults([]);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Nhập từ khóa tìm kiếm..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSearch} className="search-btn">
        🔍
      </button>
      {hasSearched && (
        <button onClick={handleClear} className="clear-btn">
          ✕
        </button>
      )}
    </div>
  );
}