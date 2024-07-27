import UserOne from "../../images/user.jpg";

const DropdownUser = () => {
  return (
    <div className="relative flex items-center gap-3">
      <span className="size-10 rounded-full">
        <img src={UserOne} alt="user" className=" rounded-full" />
      </span>
      <span>Mr. Alex</span>
    </div>
  );
};

export default DropdownUser;
