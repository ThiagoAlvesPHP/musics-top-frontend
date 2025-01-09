import { useEffect } from "react";
import axios from "axios";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Header } from "./components/header";

import { RootState } from "@app/core/config/store";

import { auth } from "@app/core/services/musics-top/auth";

import { changeUser, logout } from "@app/core/slices/userSlice";

export function ThemeBase() {
  const token = useSelector<RootState>(state => state.user.token);

  const dispatch = useDispatch();

  useEffect(() => {
    getUser();
  }, [token])

  const getUser = async () => {
    if (token) {
      const reqMe = await auth.me();

      if (axios.isAxiosError(reqMe)) {
        if (reqMe.status === 401) dispatch(logout());
        return;
      }

      dispatch(changeUser(reqMe));
    }
  }
  
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900 shadow-sm">
      <Header />
      <main className="inside-container pt-16 max-sm:pt-24 min-h-screen flex flex-col">
        <Outlet />
      </main>
    </div>
  );
}
