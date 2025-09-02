import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track current page
  const [loading, setLoading] = useState(false);

  const fetchMovies = (pageNum) => {
    setLoading(true);

    fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=a2d86755e5d6eac04182233d4c6dcb1e&page=${pageNum}`)
      .then((res) => res.json())
      .then((resData) => {
        if (resData.results) {
          setData((prevData) => [...prevData, ...resData.results]);
        }
      })
      .catch((err) => console.error('Fetch error:', err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchMovies(page);
  }, [page]);

  const handleViewMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎬 Trending Movies</h1>
      </header>

      <div className="movies-grid">
        {data.length > 0 ? (
          data.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <img
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    : 'https://via.placeholder.com/500x750?text=No+Image'
                }
                alt={movie.title}
              />
              <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.overview.slice(0, 100)}...</p>
              </div>
            </div>
          ))
        ) : (
          <p className="loading">Loading movies...</p>
        )}
      </div>

      {/* View More Button */}
      <div className="view-more-container">
        <button onClick={handleViewMore} disabled={loading}>
          {loading ? 'Loading...' : 'View More'}
        </button>
      </div>
    </div>
  );
};

export default App;
