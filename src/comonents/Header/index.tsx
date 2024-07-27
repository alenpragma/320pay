import { Link } from "react-router-dom";
import DropdownUser from "./DropdownUser";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-[5] flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-row-reverse items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11 w-full">
        <div className="flex items-center gap-3">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <!-- Dark Mode Toggler --> */}
            {/* <DarkModeSwitcher /> */}
            {/* <!-- Dark Mode Toggler --> */}
          </ul>

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}

          {/* <button
            onClick={logout}
            className="inline-flex items-center justify-center rounded-md bg-meta-7  py-2 px-4 text-center font-medium text-white hover:bg-opacity-90"
          >
            Logout
          </button> */}
        </div>
        <h4 className="font-semibold text-[24px]">Dashboard</h4>
      </div>
    </header>
  );
};

export default Header;
