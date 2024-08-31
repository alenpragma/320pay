import { removePaymentaToken } from "../../hooks/handelAuthToken";
import { useNavigate } from "react-router-dom";

export const UserOne =
  "https://media.licdn.com/dms/image/D4E03AQFrmDuWUxQoMg/profile-displayphoto-shrink_200_200/0/1715645354619?e=2147483647&v=beta&t=_WBVcQpyigwPLI-efv18uQQ3eV_hhzU5DcUlIHl77HA";

const DropdownUser = ({ modal, clientProfile }: any) => {
  const navigate = useNavigate();

  const handleLogOut = () => {
    removePaymentaToken();
    navigate("/login");
  };

  return (
    <div
      className={`w-[250px] h-fit rounded-3xl absolute  bg-[#a4a4a4] -z-[7] transition-all duration-300 ease-in-out ${
        modal
          ? "top-16 right-5 opacity-100 translate-y-0"
          : "top-16 right-5 opacity-0 translate-y-[-20px] pointer-events-none"
      }`}
    >
      <div className="bg-[#a4a4a4] w-full h-full relative shadow-lg rounded-3xl">
        <div className="w-full py-10 p-5 text-white">
          <img
            className="size-16 rounded-full"
            src={UserOne}
            alt="user"
            width={100}
            height={100}
          />
          <h4 className="font-semibold text-[20px]">{clientProfile?.name}</h4>
          <p className="text-[12px]">
            User Id : {clientProfile?.client_secret_id}
          </p>

          <button
            onClick={handleLogOut}
            className="px-5 py-2 rounded-lg bg-primary text-white font-semibold mt-3"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default DropdownUser;