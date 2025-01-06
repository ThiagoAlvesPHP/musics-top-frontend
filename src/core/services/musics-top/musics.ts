import { musicsTopApi } from "../musics-top-api";

import { Pagination } from "../types";

import errorHandling from "@app/core/utils/error-handling";

export type Music = {
  id: number;
  user_id: number;
  title: string;
  count_views: number;
  youtube_id: string;
  thumb: string;
  status: string;
  created_at: string;
  updated_at: string;
  user?: User;
}

export type User = {
  id: number;
  name: string;
  email: string;
  email_verified_at: null | string;
  is_admin: number;
  created_at: string;
  updated_at: string;
}

export const musics = {
  getAll: async () => {
    try {
      const req = await musicsTopApi.get<Pagination<Music>>('/music?order=count_views,desc&filter=status:=:approved');
      return req.data;
    } catch (err) {
      errorHandling(err);
      return null;
    }
  },
}
