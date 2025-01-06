import { musicsTopApi } from "../musics-top-api";

import { Pagination } from "../types";

import errorHandling from "@app/core/utils/error-handling";

export type Auth = {
  access_token: string
  token_type: string
  expires_in: number
}

export const auth = {
  login: async (email: string, password: string) => {
    try {
      const req = await musicsTopApi.post<Auth>('/auth/login', {
        email,
        password,
      });

      return req.data;
    } catch (err) {
      return errorHandling(err);
    }
  },
}
