import React from "react";
import { ArticleCard } from "./";
import { Article } from "../store/articles-slice";

interface ArticleListProps {
  articles: Article[];
}

export const ArticleList: React.FC<ArticleListProps> = ({ articles }) => {
  return (
    <div className="grid grid-cols-1 gap-5 mt-3 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 justify-items-center">
      {articles.map((article) => (
        <ArticleCard key={article.url} {...article} />
      ))}
    </div>
  );
};
