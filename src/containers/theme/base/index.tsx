import { Outlet } from "react-router-dom";

import { Header } from "./components/header";

export function ThemeBase() {
  return (
    <div className="">
      <Header />
      <main className="">
        <h1>Theme Base</h1>
        <Outlet />
      </main>
    </div>
  );
}
