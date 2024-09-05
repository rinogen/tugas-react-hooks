import React from 'react';
import { useState } from 'react';
import useFeedback from '../../hooks/useFeedback';

const FeedbackForm = () => {
  const { feedbacks, addFeedback, likeFeedback, deleteFeedback } =
    useFeedback();
  const [nama, setNama] = useState('');
  const [saran, setSaran] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (nama && saran) {
      addFeedback(nama, saran);
      setNama('');
      setSaran('');
    }
  };

  return (
    <div className="mb-5">
      <div className="mb-5">
        <div className="text-[48px] font-bold ">Kritik dan Saran</div>
        <p className="text-[16px] leading-6">
          Silahkan masukan kritik dan saran
        </p>
      </div>
      <div className="w-full">
        <div className="w-full space-y-2 mb-4">
          <input
            className="appearance-none border rounded w-full py-2 px-3 focus:outline-none false dark:text-black"
            id="nama"
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
          />
        </div>
        <div className="w-full space-y-2 mb-4">
          <textarea
            className="appearance-none border rounded w-full py-2 px-3 focus:outline-none resize-none dark:text-black"
            id="saran-anda"
            placeholder="Saran"
            rows="3"
            value={saran}
            onChange={(e) => setSaran(e.target.value)}></textarea>
        </div>
        <button
          className="w-40 py-2 bg-[#009EA9] text-white rounded-lg "
          type="submit"
          onClick={handleSubmit}>
          Kirim Saran
        </button>
      </div>

      <div className="mt-4 space-y-4">
        {feedbacks.map((feedback, index) => (
          <div
            key={index}
            className="flex rounded-lg h-full border p-4 flex-col mt-4 relative">
            <h4 className="text-[22px] font-bold">{feedback.nama}</h4>
            <p className="text-[16px] font-medium">{feedback.saran}</p>
            <div className="flex space-x-2 absolute bottom-4 right-4">
              <button
                onClick={() => likeFeedback(index)}
                className="bg-[#009EA9] text-white p-2 rounded-lg hover:bg-[#007B85]">
                <span className="text-[16px]">{feedback.likes} Likes</span>
              </button>

              <button
                className="bg-red-500 text-white p-2 rounded-lg hover:bg-red-700"
                onClick={() => deleteFeedback(index)}>
                <span className="text-[16px]">Delete</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
