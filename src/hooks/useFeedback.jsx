import { useState, useEffect } from 'react';

const useFeedback = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const isBrowser = () => typeof window !== 'undefined';

  useEffect(() => {
    if (isBrowser()) {
      const storedFeedbacks =
        JSON.parse(localStorage.getItem('feedbacks')) || [];
      setFeedbacks(storedFeedbacks);
    }
  }, []);

  useEffect(() => {
    if (isBrowser() && feedbacks.length > 0) {
      localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
    }
  }, [feedbacks]);

  const addFeedback = (nama, saran) => {
    const newFeedback = { nama, saran, likes: 0 };
    setFeedbacks((prevFeedbacks) => [...prevFeedbacks, newFeedback]);
  };

  const likeFeedback = (index) => {
    setFeedbacks((prevFeedbacks) => {
      const updateFeedbacks = [...prevFeedbacks];
      updateFeedbacks[index].likes++;
      return updateFeedbacks;
    });
  };

  const deleteFeedback = (index) => {
    setFeedbacks((prevFeedbacks) =>
      prevFeedbacks.filter((_, i) => i !== index)
    );
  };

  return {
    feedbacks,
    addFeedback,
    likeFeedback,
    deleteFeedback,
  };
};

export default useFeedback;
