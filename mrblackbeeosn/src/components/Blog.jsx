import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import Posts from '../Posts';

export default function Blog() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    // Gọi hàm Posts() để lấy dữ liệu
    setAllPosts(Posts());
  }, []);

  const handleSearchResults = (results) => {
    setDisplayedPosts(results);
    setHasSearched(true);
  };

  return (

    <main className="image image3">

        <div className="blog-container">
      <SearchBar 
        posts={allPosts} 
        onSearchResults={handleSearchResults} 
      />
      
      <div className="posts-list">
        {hasSearched ? (
          <>
            {displayedPosts.length > 0 ? (
              <>
                <p className="results-count">
                  Tìm thấy {displayedPosts.length} kết quả
                </p>
                {displayedPosts.map(post => (
                  <article key={post.id} className="post-card">
                    <h2>{post.title}</h2>
                    <p className="post-date">Ngày đăng: {post.date}</p>
                    <p>{post.content}</p>
                    <a href={`#/${post.slug}`}>Đọc thêm</a>
                  </article>
                ))}
              </>
            ) : (
              <></>
            )}
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
    
    </main>
    
  );
}