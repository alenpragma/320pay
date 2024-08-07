import { CiSettings } from "react-icons/ci";
import UserOne from "../../images/user.jpg";
import { removeLogedUser } from "../../utils/LocalStorage";

const DropdownUser = () => {
  return (
    <div className="relative flex items-center gap-3">
      <CiSettings className="text-[20px] cursor-pointer" />
      <span className="size-10 rounded-full">
        <img src={UserOne} alt="user" className=" rounded-full" />
      </span>
      <span>Mr. Alex</span>
      <button
        onClick={removeLogedUser}
        className="px-5 py-2 rounded-lg bg-primary text-white font-semibold"
      >
        Logout
      </button>
    </div>
  );
};

export default DropdownUser;
