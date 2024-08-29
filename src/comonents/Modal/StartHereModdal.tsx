import { RxCross1 } from "react-icons/rx";
import Form from "../Forms/Form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../Forms/InputField";
import axiosInstance from "../../utils/axiosConfig";
import { toast } from "react-toastify";
import { useState } from "react";

// export const domainForm = [
//   { id: 1 },
//   { id: 2 },
//   { id: 3 },
//   { id: 4 },
//   { id: 5 },
//   { id: 6 },
//   { id: 7 },
//   { id: 8 },
//   { id: 9 },
//   { id: 10 },
// ];

type DomainForm = {
  id: number;
  name: string;
};

const initialDomainForm: DomainForm[] = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Domain Name ${i + 1}`,
}));

type IModal = {
  handleModal: () => void;
  modal: boolean;
  planId: string;
};
const StartHereModal = ({ planId, handleModal, modal }: IModal) => {
  const [domainForm, setDomainForm] = useState<DomainForm[]>(
    initialDomainForm.slice(0, 1)
  );
  const [inputNumber, setInputNumber] = useState(1);

  const handleSetInputNumber = () => {
    if (inputNumber < initialDomainForm.length) {
      setDomainForm((prev) => [...prev, initialDomainForm[inputNumber]]);
      setInputNumber((prev) => prev + 1);
    }
  };

  const handleDescendingInputNumber = (id: number) => {
    setDomainForm((prev) => prev.filter((domain) => domain.id !== id));
    setInputNumber((prev) => prev - 1);
  };
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    // const planData = {
    //   package_id: planId,
    //   domain_name: data.domainName,
    // };
    console.log(data);

    // try {
    //   const response = await axiosInstance.post(
    //     "/client/purchase-package",
    //     planData
    //   );
    //   console.log(response);

    //   if (response?.data?.error == 400) {
    //     toast.error(response?.data?.messsage);
    //     return;
    //   }

    //   if (response?.data?.success == 200) {
    //     toast.success(response?.data?.message);
    //     return;
    //   } else {
    //     // Handle any other unexpected cases
    //     toast.error("Unexpected response from the server");
    //   }
    // } catch (error) {
    //   console.error("Request failed:", error);
    //   toast.error("Something went wrong. Please try again.");
    // }
  };
  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100 fixed bg-[#070707ac] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0-z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-2/5 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded overflow-y-auto ${
          modal ? " opacity-100 z-[101]" : "opacity-0 -z-[102]"
        }`}
      >
        <div className="w-full h-full rounded">
          <div className="w-full py-3 px-5 bg-primary text-white font-semibold text-[20px] flex justify-between items-center rounded-t">
            <h4>Domain Details</h4>
            <RxCross1
              onClick={handleModal}
              className="cursor-pointer hover:scale-105"
            />
          </div>
          <div className="p-5 overflow-auto max-h-[500px]">
            <div className="w-3/4 mx-auto overflow-auto">
              <Form
                onSubmit={formSubmit}
                // resolver={zodResolver(validationSchema)}
                defaultValues={{}}
              >
                <div className="my-5">
                  {domainForm.map((domain) => (
                    <div key={domain.id}>
                      <div className="mb-5 space-y-1">
                        <p className="start-here-label">{domain.name}</p>
                        <div className="flex w-full gap-3 justify-between">
                          <div className="w-full">
                            <InputField
                              name={`domainName${domain.id}`}
                              type="text"
                              className="start-here-input-field"
                              placeholder="Enter Your Domain Name"
                            />
                          </div>
                          <div
                            className="start-here-icon"
                            onClick={() =>
                              handleDescendingInputNumber(domain.id)
                            }
                          >
                            <RxCross1 />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <button
                    className="bg-primary text-white rounded-lg px-4 py-1 mb-3"
                    onClick={handleSetInputNumber}
                    disabled={inputNumber >= initialDomainForm.length}
                  >
                    add new
                  </button>
                  <button className="px-5 py-3 rounded-xl bg-primary text-white font-semibold w-full focus:bg-red-500">
                    Submit
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartHereModal;
