import { User } from "./auth";

import { musicsTopApi } from "../musics-top-api";

import { Pagination } from "../types";

import { DEFAULT_STORAGE_NAME_TOKEN, isValidToken } from "@app/core/slices/userSlice";

import errorHandling from "@app/core/utils/error-handling";

export type MusicStatus = 'approved' | 'pending' | 'rejected';

export type Music = {
  id: number;
  user_id: number;
  title: string;
  count_views: number;
  youtube_id: string;
  thumb: string;
  status: MusicStatus;
  created_at: string;
  updated_at: string;
  user?: User;
}

export type Options = {
  order?: string;
  filters?: string;
}

export const musics = {
  getAll: async (page: number = 1, options: Options) => {
    try {
      const order = options.order ? `&order=${options.order}` : '';
      const filters = options.filters ? `&filter=${options.filters}` : '';

      const req = await musicsTopApi.get<Pagination<Music>>(`/music?page=${page + order + filters}`);
      
      return req.data;
    } catch (err) {
      return errorHandling(err);
    }
  },
  create: async (url: string) => {
    const storedToken = localStorage.getItem(DEFAULT_STORAGE_NAME_TOKEN);

    try {
      const req = await musicsTopApi.post<Music>('/music', { url }, {
        headers: {
          Authorization: `Bearer ${isValidToken(storedToken) && storedToken !== 'null' ? storedToken : null}`
        }
      });
      
      return req.data;
    } catch (err) {
      return errorHandling(err);
    }
  },
}
