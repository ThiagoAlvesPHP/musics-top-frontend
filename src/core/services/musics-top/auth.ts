import { musicsTopApi } from "../musics-top-api";

import { DEFAULT_STORAGE_NAME_TOKEN, isValidToken } from "@app/core/slices/userSlice";

import errorHandling from "@app/core/utils/error-handling";

export type Auth = {
  access_token: string
  token_type: string
  expires_in: number
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
  register: async (name: string, email: string, password: string) => {
    try {
      const req = await musicsTopApi.post<Auth>('/user', {
        name,
        email,
        password,
      });

      return req.data;
    } catch (err) {
      return errorHandling(err);
    }
  },
  me: async () => {
    const storedToken = localStorage.getItem(DEFAULT_STORAGE_NAME_TOKEN);

    try {
      const req = await musicsTopApi.post<User>('/auth/me', {}, {
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
