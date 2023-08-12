import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import { getPosts } from '../libs/notion/posts';
import { Post } from '../types/notion';

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <div className='font-sans'>
        <div className='mb-[30px] bg-slate-300'>
          <div className='p-20'>
            <div className='px-3 py-20'>
              <div className='text-4xl text-center font-medium'>
                My Notion Blog
              </div>
            </div>
          </div>
        </div>
        <div className='mt-[30px]'>
          <div className='mt-16'>
            <div className='text-5xl text-center font-medium text-slate-800'>
              Latest posts
            </div>
          </div>
          <div className='my-10 px-10 w-auto mx-auto max-w-screen-xl'>
            <div className='p-10 grid grid-cols-3 gap-6'>
              {posts.map((post: Post, index: number) => (
                <Card key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

const Card: React.FC<{ post: Post }> = ({ post }) => {
  return (
    <div className='my-6 p-6 border border-inherit rounded hover:shadow-lg ease-linear duration-200'>
      <a href={`/${post.id}`}>
        <div className='h-[200px] w-auto flex justify-center items-center'>
          {post.thumbnail.length !== 0 && (
            <img
              src={post.thumbnail}
              alt='thumbnail'
              className='max-w-[100%]'
            />
          )}
        </div>
        <div className='py-6'>
          <div className='mb-3 text-2xl text-slate-800'>{post.title}</div>
          <div className='mb-6 text-xs'>{post.date}</div>
        </div>
      </a>
    </div>
  );
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getPosts();
  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
