import React from 'react';
import usePosts from '../../hooks/usePosts';

const CardMedia = () => {
  const { posts, loading, error, loadMorePosts, isAllLoaded } = usePosts();

  if (loading) {
    return <p>Loading posts...</p>;
  }

  if (error) {
    return <p>Error fetching posts: {error.message}</p>;
  }

  return (
    <div>
      <section className="md:grid md:grid-cols-3 sm:flex sm:flex-row w-full h-full justify-self-stretch">
        {posts.map((post) => (
          <div key={post.id} className="md:mb-8 mb-8">
            <section className="flex relative w-full h-full">
              <a className="space-y-2 appearance-none mr-5 flex flex-col w-full h-full">
                <figure className="lg:flex lg:mx-auto w-full relative overflow-hidden bg-gray-100 rounded-lg lg:text-center self-center px-0">
                  <img
                    alt={post.title}
                    src={`https://picsum.photos/id/${post.id}/800/800`}
                    sizes="100vw"
                    data-nimg="fill"
                  />
                </figure>
                <section className="space-y-1">
                  <h3 className=" text-black dark:text-white min-h-14 text-xl font-bold line-clamp-2">
                    {post.title}
                  </h3>
                  <article className="text-gray-400 dark:text-white min-h-24 w-full text-justify">
                    <div className="line-clamp-4">{post.body}</div>
                  </article>
                </section>
              </a>
            </section>
          </div>
        ))}
      </section>
      {!isAllLoaded && (
        <div className="flex justify-center mt-6">
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
            onClick={loadMorePosts}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default CardMedia;
