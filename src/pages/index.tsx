import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import Container from "../components/Container";
import { getPosts } from "../libs/notion/posts";
import { Post } from "../types/notion";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <Container>
        <header className='mb-[50px]'>
          <h1 className='font-extrabold text-[2em] my-[0.67em]'>
            Next.js blog powered by Notion API
          </h1>
          <p className='opacity-70 my-4'>
            This is an example of Notion blog. The data comes from this table.
            Getthe source code on Github on building your own
          </p>
        </header>

        <h2 className='text-[15px] mt-[0.83em] mb-[20px] pb-[20px] opacity-60 border-b'>
          ALL POSTS
        </h2>
        <ol>
          {posts.map((post: Post, index: number) => (
            <li key={`post-${index}`} className='mb-[50px]'>
              <h3 className='text-2xl font-bold'>{post.title}</h3>
              <p className='mt-0 mb-[12px] opacity-60'>{post.date}</p>
              <Link href={`/${post.id}`}>Read post →</Link>
            </li>
          ))}
        </ol>
      </Container>
    </main>
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
