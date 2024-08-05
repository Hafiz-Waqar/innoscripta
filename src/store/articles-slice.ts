import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "./store";

const apiKey = import.meta.env.VITE_NEWS_API_KEY;

export interface Article {
  source: {
    id: string | null;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ArticlesState {
  articles: Article[];
  totalResults: number;
  hasMore: number;
  loading: boolean;
  error: string | null;
}

const initialState: ArticlesState = {
  articles: [],
  totalResults: 0,
  hasMore: 0,
  loading: false,
  error: null,
};

export const fetchArticles = createAsyncThunk<
  { articles: Article[]; totalResults: number },
  {
    query: string;
    page: number;
    source: string;
    category: string;
    date: string;
  },
  { state: RootState }
>("articles/fetchArticles", async ({ query, page, source, category, date }) => {
  const response = await axios.get(
    `https://newsapi.org/v2/top-headlines?sources=${source}&category=${category}&q=${query}&pageSize=30&page=${page}&from=${date}&apiKey=${apiKey}`
  );
  return {
    articles: response.data.articles,
    totalResults: response.data.totalResults,
  };
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(
        fetchArticles.fulfilled,
        (
          state,
          action: PayloadAction<{ articles: Article[]; totalResults: number }>
        ) => {
          state.loading = false;
          state.totalResults = action.payload.totalResults;
          state.hasMore = action.payload.totalResults / 30;
          state.articles = [...state.articles, ...action.payload.articles];
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch articles";
      });
  },
});

export default articlesSlice.reducer;
