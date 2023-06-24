import { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import Container from "../components/container";
import { getPosts } from "../libs/notion";
import { Post } from "../types/notion";

type Props = {
  posts: Post[];
};

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <main>
      <Container>
        <h1>Next.js blog powered by Notion API</h1>
        <p className="opacity-70">
          This is an example of Notion blog. The data comes from this table.
          Getthe source code on Github on building your own
        </p>
        <h2 className="text-[15px] mb-[20px] pb-[20px] opacity-60 border-b">
          ALL POSTS
        </h2>
        <ol>
          {posts.map((post: Post, index: number) => (
            <li key={`post-${index}`} className="mb-[50px]">
              <h3>{post.title}</h3>
              <p className="mt-0 mb-[12px] opacity-60">{post.date}</p>
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
