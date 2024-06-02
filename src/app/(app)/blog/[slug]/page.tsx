import Container from "@/components/container";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { getPayload } from "@/lib/payload";
import { Media, Post } from "@/payload-types";
import moment from "moment";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

const getPost = async (slug: string): Promise<Post | null> => {
  const payload = await getPayload();
  const posts = await payload
    .find({
      collection: "posts",
      depth: 3,
      sort: "createdAt",
      pagination: false,
      limit: 1,
      where: {
        and: [
          {
            _status: {
              equals: "published",
            },
          },
          {
            slug: {
              equals: slug,
            },
          },
        ],
      },
    })
    .then((result) => {
      if (!result || !result.docs || result.docs.length === 0) return null;
      return result.docs.at(0) as Post;
    });

  return posts;
};

async function BlogPostPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await getPost(slug);

  if (!post) {
    return notFound();
  }

  return (
    <>
      <Navbar />
      <Container className="md:max-w-2xl mx-auto w-full">
        <h1 className="md:text-4xl text-xl font-bold text-center text-gray-800">
          {post.title}
        </h1>
        <p className="text-center md:text-base text-sm text-gray-500 mt-2 mb-8">
          {moment(post.publishedAt).format("MMMM DD, YYYY")}
        </p>

        <div className="flex flex-col gap-4 bg-white rounded-xl p-4">
          <div className="relative w-full h-96">
            <Image
              src={(post.cover as Media).url!}
              alt={post.title}
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: post.content_html! }}
            className="prose"
          ></div>
        </div>
      </Container>

      <Footer />
    </>
  );
}

export async function generateMetadata(
  {
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams: { [key: string]: string | string[] | undefined };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug;

  const post = await getPost(slug);

  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: [(post?.cover as Media).url!, ...previousImages],
    },
  };
}

export default BlogPostPage;
