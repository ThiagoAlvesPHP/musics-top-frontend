import { Outlet } from "react-router-dom";

import { Header } from "./components/header";

export function ThemeBase() {
  return (
    <div className="min-h-screen bg-white dark:bg-stone-900">
      <Header />
      <main className="pt-16 max-sm:pt-24">
        <h1>Theme Base</h1>
        <Outlet />
      </main>
    </div>
  );
}
