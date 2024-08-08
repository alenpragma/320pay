import { RxCross1 } from "react-icons/rx";
import Form from "../Forms/Form";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../Forms/InputField";

type IModal = {
  handleModal: () => void;
  modal: boolean;
};
export const validationSchema = z.object({
  domainName: z.string().min(1, "This field is required"),
});
const StartHereModal = ({ handleModal, modal }: IModal) => {
  const formSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };
  // const copy = "0x625336E4A6C4cCa43A08Ad4cE0852A668ad3a3fA";
  return (
    <div className="w-full ">
      <div
        className={` ${
          modal
            ? " opacity-100   fixed bg-[#070707ac] w-full h-screen z-[100] right-0 top-0 bottom-0 m-auto"
            : "opacity-0    -z-50"
        }`}
        onClick={handleModal}
      ></div>
      <div
        className={`fixed bg-[#ffffff] md:w-2/5 w-11/12 h-fit m-auto right-0 left-0 top-0 bottom-20 rounded  ${
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
          <div className="p-5">
            <div className="w-3/4 mx-auto">
              <Form
                onSubmit={formSubmit}
                resolver={zodResolver(validationSchema)}
                defaultValues={{
                  domainName: "",
                }}
              >
                <div className="my-10">
                  <div className="mb-10 space-y-3">
                    <label
                      htmlFor="name"
                      className="text-[#3e3e3e] font-semibold text-[18px]"
                    >
                      Domain Name
                    </label>

                    <InputField
                      name="domainName"
                      type="text"
                      className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1 px-4"
                      placeholder="Enter Your Domain Name"
                    />
                  </div>
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
