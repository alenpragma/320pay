import React, { useState } from "react";
import Form from "../../comonents/Forms/Form";
import { z } from "zod";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../../comonents/Forms/InputField";
import { FaLock } from "react-icons/fa";

export const validationSchema = z.object({
  currentPassword: z.number().min(1, "This field is required"),
});
const ChangePassword = () => {
  const [passwordToggle, setPasswordToggle] = useState<boolean>(true);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPasswword] = useState("");
  const [error, setError] = useState("")
  console.log(error);
  console.log(currentPassword, newPassword, confirmNewPassword);
  const formSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
  };
  const handleChange = (data: FieldValues) => {
    setCurrentPassword(data.currentPassword);
    setNewPassword(data.newPassword);
    setConfirmNewPasswword(data.confirmNewPassword);
    if(data.currentPassword == data.newPassword && data.confirmNewPassword){
      setError("old password and new password are matching")
    }
  };
  const handlePassswordToggle = () => {
    setPasswordToggle(!passwordToggle);
  };
  return (
    <div className="pt-5 px-3">
      <div>
        <h4 className="text-[#282828] text-[20px] font-medium">Edit Profile</h4>
      </div>
      <div>
        <Form
          onSubmit={formSubmit}
          resolver={zodResolver(validationSchema)}
          onChange={handleChange}
          // defaultValues={{
          //   currentPassword: "",
          //   newPassword: "",
          //   confirmNewPassword: "",
          // }}
        >
          <div className="mt-10">
            <button
              onClick={handlePassswordToggle}
              className="text-white bg-primary rounded-md hover:bg-[#4e2bdd] px-4 py-1"
            >
              Click on the change Password
            </button>
            {passwordToggle && (
              <>
                {" "}
                <div className="grid grid-cols-12 gap-2">
                  <div className="space-y-1 my-3 col-span-12">
                    <p className=" text-[#282828] flex items-center gap-2">
                      <FaLock /> <span>Current Password</span>
                    </p>
                    <InputField
                      name="currentPassword"
                      type="password"
                      className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1  px-2"
                      placeholder="Current Password"
                    />
                  </div>
                  <div className="space-y-1 my-3 col-span-6">
                    <p className=" text-[#282828] flex items-center gap-2">
                      <FaLock /> <span>New Password</span>
                    </p>
                    <InputField
                      name="newPassword"
                      type="password"
                      className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1  px-2"
                      placeholder="Enter your new password"
                    />
                  </div>
                  <div className="space-y-1 my-3 col-span-6">
                    <p className=" text-[#282828] flex items-center gap-2">
                      <FaLock /> <span>Confirm New Password</span>
                    </p>
                    <InputField
                      name="confirmNewPassword"
                      type="password"
                      className="w-full border border-[#E2E2E9] focus:outline focus:outline-slate-500 rounded-md py-1  px-2"
                      placeholder="Retype Password"
                    />
                  </div>
                </div>
                <button className="text-white bg-primary px-4 py-1 rounded-md">
                  Chenge Password
                </button>
              </>
            )}
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ChangePassword;
