import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DateType } from "react-tailwindcss-datepicker";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchArticles } from "../store/articles-slice";
import { AppDispatch, RootState } from "../store/store";
import { ArticleList, FilterBar, CustomLoader, SearchBar } from "../components";

export type FilterData = {
  source: string;
  category: string;
  date: {
    startDate: DateType;
    endDate: DateType;
  };
};

export const MainHome: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { articles, loading, totalResults, hasMore } = useSelector(
    (state: RootState) => state.articles
  );
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("all");
  const [filterdata, setFilterData] = useState<FilterData>({
    source: "",
    category: "",
    date: {
      startDate: null,
      endDate: null,
    },
  });

  useEffect(() => {
    dispatch(
      fetchArticles({
        query,
        page,
        source: filterdata.source,
        category: filterdata.category,
        date: filterdata.date.endDate as string,
      })
    );
  }, [filterdata.source, filterdata.category, filterdata.date.endDate]);

  const handleSearch = (searchQuery: string) => {
    setQuery(searchQuery);
    setFilterData({
      source: "",
      category: "",
      date: {
        startDate: null,
        endDate: null,
      },
    });
    setPage(1);
    dispatch(
      fetchArticles({
        query: searchQuery,
        page: 1,
        source: "",
        category: "",
        date: "",
      })
    );
  };

  const fetchMoreData = () => {
    setPage((prevPage) => prevPage + 1);
    dispatch(
      fetchArticles({
        query,
        page: page + 1,
        source: filterdata.source,
        category: filterdata.category,
        date: filterdata.date.endDate as string,
      })
    );
  };

  return (
    <React.Fragment>
      <div className="flex items-center justify-between flex-wrap xl:flex-nowrap h-auto xl:h-16 border-b-2 border-b-[#1c1f26] p-2 md:p-4 gap-2 2xl:container 2xl:mx-auto 2xl:p-4">
        <h1 className="font-mono text-xl font-bold text-white sm:text-2xl lg:text-3xl">
          Munich
        </h1>
        <SearchBar onSearch={handleSearch} />
        <FilterBar filterdata={filterdata} setFilterData={setFilterData} />
      </div>
      <div className="container p-4 pb-20 mx-auto">
        {loading ? (
          <CustomLoader />
        ) : articles.length > 0 && !loading ? (
          <InfiniteScroll
            dataLength={totalResults}
            next={fetchMoreData}
            hasMore={page < hasMore}
            loader={<></>}
          >
            <ArticleList articles={articles} />
          </InfiniteScroll>
        ) : (
          <div className="border w-full max-w-[375px] h-auto p-6 text-white rounded-md mx-auto mt-20 text-center font-semibold">
            There is no result for this right now!
          </div>
        )}
      </div>
    </React.Fragment>
  );
};
