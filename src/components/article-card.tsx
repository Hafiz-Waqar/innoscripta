import React from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Article } from "../store/articles-slice";

export const ArticleCard: React.FC<Article> = ({
  source,
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
}) => {
  return (
    <div className="border border-[#525866] p-2 rounded-2xl shadow-md w-full min-w-[17.25rem] lg:max-w-80 bg-[#1c1f26] group flex flex-col justify-between gap-2">
      <div className="flex items-center justify-between">
        <img
          src={urlToImage}
          alt={title}
          className="object-cover rounded-full w-9 h-9"
        />
        <div className="flex items-center gap-2 p-1 text-black bg-white rounded-md lg:hidden group-hover:lg:flex">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold"
          >
            Read Post
          </a>
          <FaArrowUpRightFromSquare className="size-4" />
        </div>
      </div>
      <h2 className="text-sm font-bold text-white sm:h-16">{title}</h2>
      <p className="text-[#a8b3cf] text-[9px]">{description}</p>
      <p className="text-[#a8b3cf] text-[9px] border border-[#525866] px-2 py-1 rounded-xl w-fit">
        Published at: {new Date(publishedAt).toLocaleDateString()}
      </p>
      <img
        src={urlToImage}
        alt={title}
        className="object-cover h-40 m-auto w-fit sm:w-full sm:m-0 rounded-xl"
      />
      <div className="flex gap-2">
        <p className="text-[#a8b3cf] text-[9px] border border-[#525866] px-2 py-1 rounded-xl w-fit flex-shrink-0">
          Source: {source.name}
        </p>
        <p
          title={author}
          className="text-[#a8b3cf] text-[9px] border border-[#525866] px-2 py-1 rounded-xl w-fit truncate"
        >
          Author: {author}
        </p>
      </div>
    </div>
  );
};
