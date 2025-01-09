import { ReactNode } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "@app/core/config/store";

export type Props = {
  children?: ReactNode;
}

export function AuthLogin({ children }: Props) {
  const token = useSelector<RootState>(state => state.user.token);
  const user = useSelector<RootState>(state => state.user.data);

  if (token && user) return <Navigate to='/' />

  return children;
}