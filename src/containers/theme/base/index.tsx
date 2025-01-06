import { Outlet } from "react-router-dom";

import { Header } from "./components/header";

export function ThemeBase() {
  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-900 shadow-sm">
      <Header />
      <main className="inside-container pt-16 max-sm:pt-24">
        <Outlet />
      </main>
    </div>
  );
}
