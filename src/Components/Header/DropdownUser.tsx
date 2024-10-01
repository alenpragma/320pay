import { removePaymentaToken } from "../../hooks/handelAuthToken";
import { Link, useNavigate } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { handleLogOut } from "../../Actions/LogoutActions";
import { images } from "../..";
// import { handleLogOut } from "../../Actions/LogoutActions";
const DropdownUser = ({ modal, clientProfile, handleModal }: any) => {
  const navigate = useNavigate();
  const logOutHandler = () => {
    handleLogOut(navigate, removePaymentaToken);
  };

  return (
    <>
      <div
        className={` ${
          modal
            ? " opacity-100 z-50 fixed w-full left-0 top-0 right-0 bottom-0 h-screen"
            : "opacity-0 -z-50 hidden"
        }`}
        onClick={handleModal}
      ></div>

      <div
        className={`w-[250px] h-fit rounded-3xl z-[51] absolute  bg-[#eee]  transition-all duration-300 ease-in-out ${
          modal
            ? "top-18 right-5 opacity-100 translate-y-0"
            : "top-18 right-5 opacity-0 translate-y-[-20px] pointer-events-none"
        }`}
      >
        <div className="bg-[#fff] w-full h-full relative shadow-lg rounded-3xl">
          <div className="w-full py-10 p-5 ">
            <img
              className="size-16 rounded-full"
              src={images.profileImage}
              alt="user"
              width={100}
              height={100}
            />
            <h4 className="font-semibold text-[20px]">{clientProfile?.name}</h4>
            <p className="text-md">
              User Id : {clientProfile?.client_secret_id}
            </p>
            <div className="text-[14px] py-2 border-b border-b-slate-600 duration-300 hover:text-primary ">
              <Link to="/dashboard/change-password">
                <p>Edit profile</p>
              </Link>
            </div>
            <div className="text-[14px] py-2  duration-300 hover:text-primary cursor-pointer">
              <p className="flex items-center gap-2" onClick={logOutHandler}>
                Logout <RxExit />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownUser;
