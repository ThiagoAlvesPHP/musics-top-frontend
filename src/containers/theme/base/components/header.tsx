import clsx from "clsx";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FiMenu, FiMoon, FiSun, FiUser, FiX } from "react-icons/fi";

import { Switch } from "@components/switch";

import { RootState } from "@app/core/config/store";

import { changeMode } from "@app/core/slices/appSlice";

export function Header() {
  const dispatch = useDispatch();

  const mode = useSelector<RootState>(state => state.app.mode);

  const [ isMenu, setIsMenu ] = useState<boolean>(false);

  return (
    <header className="w-full py-5 bg-white dark:bg-stone-950 dark:shadow-none fixed">
      <div className="inside-container flex justify-between items-center gap-10">
        <div>
          <Link to="/">
            <h1 className="text-lg font-medium text-gray-900 dark:text-white">Musics<span className="text-first">Top</span></h1>
          </Link>
        </div>

        <div className="flex gap-5 items-center">
          <nav 
            className={clsx('max-sm:absolute max-sm:top-full max-sm:left-0 max-sm:w-full max-sm:border-t-2 max-sm:border-gray-700 dark:max-sm:border-gray-300 transition-animation', {
              'max-sm:opacity-0 max-sm:pointer-events-none': !isMenu,
              'max-sm:opacity-1 max-sm:pointer-events-auto': isMenu,
            })}
          >
            <ul className="max-sm:flex-col flex gap-3">
              <li>
                <Link to="login" className="max-sm:p-5 max-sm:bg-white dark:max-sm:bg-stone-950 max-sm:w-full flex gap-2 items-center text-base text-gray-500 dark:text-gray-300 transition-animation hover:text-gray-700 dark:hover:text-gray-100">
                  <FiUser className="text-2xl" />
                  Fazer Login
                </Link>
              </li>
            </ul>
          </nav>

          <div className="hidden max-sm:block">
            <button onClick={() => setIsMenu(!isMenu)} className="p-3">
              {
                isMenu
                  ? <FiX className="text-2xl text-gray-900 dark:text-gray-100" />
                  : <FiMenu className="text-2xl text-gray-900 dark:text-gray-100" />
              }
            </button>
          </div>

          <div className="flex items-center gap-3">
            <FiSun className="text-gray-800 dark:text-gray-300" />
            <Switch 
              checked={mode === 'dark'} 
              onChecked={() => {
                dispatch(changeMode(mode === 'dark' ? 'light' : 'dark'));
              }}
            />
            <FiMoon className="text-gray-800 dark:text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
}
