import UserOne from "../../images/user.jpg";

const DropdownUser = () => {
  return (
    <div className="relative flex items-center">
      <span className="h-12 w-12 rounded-full">
        <img src={UserOne} alt="user" className="h-12 w-12 rounded-full" />
      </span>
      <span>Mr. Alex</span>
    </div>
  );
};

export default DropdownUser;
