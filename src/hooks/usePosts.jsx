import { useState, useEffect } from 'react';
import { getPosts } from '../api/postsService';

const usePosts = (initialVisible = 6) => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(initialVisible); // Jumlah post yang terlihat pertama kali
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await getPosts();
        setPosts(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisible) => prevVisible + 6); // Menambah 6 post lagi setiap kali loadMore dipanggil
  };

  const isAllLoaded = visiblePosts >= posts.length;

  return {
    posts: posts.slice(0, visiblePosts), // Mengembalikan post yang sudah ditampilkan
    loading,
    error,
    loadMorePosts,
    isAllLoaded,
  };
};

export default usePosts;
