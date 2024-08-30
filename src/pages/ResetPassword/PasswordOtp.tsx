import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";

interface OTPFormInputs {
  otp: string[];
}

const PasswordOtp = () => {
  const { control, handleSubmit } = useForm<OTPFormInputs>({
    defaultValues: {
      otp: ["", "", "", ""],
    },
  });

  const onSubmit = (data: OTPFormInputs) => {
    const otp = data.otp.join("");
    console.log("Entered OTP:", otp);
    // Handle OTP submission logic here
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/3 w-full mx-auto border border-slate-300 rounded-lg">
        <div className="text-center space-y-3">
          <h4 className="text-[32px] font-medium text-primary">Verify</h4>
          <p>Your code was send to you via email</p>
        </div>
        <div className="my-10 px-3">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-2/3 mx-auto flex justify-around items-center">
              {Array.from({ length: 4 }).map((_, index) => (
                <Controller
                  key={index}
                  name={`otp.${index}`}
                  control={control}
                  render={({ field }) => (
                    <input
                      {...field}
                      type="tel"
                      maxLength={1}
                      className="w-12 h-12 text-center border rounded-md"
                      onChange={(e) => {
                        const target = e.target as HTMLInputElement;
                        const value = target.value;

                        // Allow only digits
                        if (/^\d$/.test(value)) {
                          field.onChange(value);
                          if (index < 3) {
                            const nextSibling =
                              target.nextElementSibling as HTMLInputElement | null;
                            nextSibling?.focus();
                          }
                        } else {
                          // Prevent non-digit input
                          target.value = field.value;
                        }
                      }}
                      onInput={(e) => {
                        const target = e.target as HTMLInputElement;
                        if (
                          target.value.length > 0 &&
                          index < 3 &&
                          /^\d$/.test(target.value)
                        ) {
                          const nextSibling =
                            target.nextElementSibling as HTMLInputElement | null;
                          nextSibling?.focus();
                        }
                      }}
                    />
                  )}
                />
              ))}
            </div>
            <p className="text-[14px] text-secondary  px-3 my-10 text-right">
              I Didn’t Accept The Code Resend Code
            </p>
            <div className="w-1/2 mx-auto">
              <Link to="/password-reset/password-otp/confirm-password">
                <button
                  type="submit"
                  className="py-2 bg-primary text-white rounded-md w-full"
                >
                  Verify
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PasswordOtp;
