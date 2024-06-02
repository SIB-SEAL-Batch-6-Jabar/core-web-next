import PostCard from "@/components/blog/post";
import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Pagination from "@/components/pagination";
import { getPayload } from "@/lib/payload";
import { Media } from "@/payload-types";
import { getDocument } from "@/payload/utils/getDocument";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

const getPosts = async (page: number = 1) => {
  const payload = await getPayload();
  const posts = await payload.find({
    collection: "posts",
    pagination: true,
    depth: 3,
    page: page,
    sort: "-publishedAt",
    where: {
      _status: {
        equals: "published",
      },
    },
  });

  return posts;
};

async function BlogPage({
  searchParams,
}: {
  searchParams?: { search?: string; page?: string };
}) {
  const posts = await getPosts(+searchParams?.page! || 1);

  return (
    <>
      <Navbar />
      <Container>
        <h1 className="text-4xl font-bold text-center text-gray-800">Blog</h1>
        <p className="text-center text-gray-500 mt-2 mb-12">
          Read the latest articles on diabetes and health
        </p>

        <div className="flex flex-col gap-4 md:max-w-2xl mx-auto w-full">
          {posts.docs.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
        </div>

        <Pagination
          prev={{
            disabled: !posts.hasPrevPage,
            nextPage: posts.prevPage!,
          }}
          next={{
            disabled: !posts.hasNextPage,
            nextPage: posts.nextPage!,
          }}
        />
      </Container>

      <Footer />
    </>
  );
}

export const metadata: Metadata = {
  title: "Simanis: Blog",
  description: "Read the latest articles on diabetes and health",
};

export default BlogPage;
