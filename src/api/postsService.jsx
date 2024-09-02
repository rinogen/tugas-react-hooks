import apiClient from './apiClient';

// Fungsi untuk mendapatkan semua posts
export const getPosts = async () => {
  try {
    const response = await apiClient.get('/posts');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch posts', error);
    throw error;
  }
};
