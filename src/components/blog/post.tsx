import { Media, Post } from "@/payload-types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

function PostCard(props: { post: Post }) {
  return (
    <Link href={`/blog/${props.post.slug}`} passHref>
      <div
        className="relative flex flex-col md:flex-row md:space-x-5 space-y-3 md:space-y-0 rounded-xl shadow-sm p-3 w-full mx-auto border border-gray-100 bg-white"
        key={props.post.id}
      >
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
          <Image
            src={(props.post.cover as Media).url!}
            alt={props.post.title}
            width={300}
            height={300}
            className="rounded-xl object-cover w-full h-full"
          />
        </div>
        <div className="w-full md:w-2/3 bg-white flex flex-col p-3">
          {props.post.publishedAt && (
            <p className="text-sm text-gray-500">
              {moment(props.post.publishedAt!).format("MMMM DD, YYYY")}
            </p>
          )}
          <h3 className="font-semibold text-gray-800 md:text-xl text-lg line-clamp-2 mb-2">
            {props.post.title}
          </h3>
          <p className="text-gray-500 text-sm line-clamp-4">
            {props.post.excerpt}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default PostCard;
