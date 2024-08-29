import { useForm, Controller } from "react-hook-form";

interface OTPFormInputs {
  otp: string[];
}

const Otp = () => {
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
    <div className="md:w-1/2 w-full mx-auto mt-20 border border-slate-300 rounded-lg">
      <h4 className="w-full bg-primary font-semibold text-[20px] text-white px-3 rounded-t-lg py-2">
        Withdraw
      </h4>
      <p className="text-[14px] text-secondary  px-3 my-5">
        Enter The 4 Digit Code To Process <br /> Your Withdraw
      </p>
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
          <button
            type="submit"
            className="py-2 bg-primary text-white rounded-md w-full"
          >
            Confirm
          </button>
        </form>
      </div>
    </div>
  );
};

export default Otp;

// import React from 'react';
// import { useForm, Controller } from 'react-hook-form';

// interface OTPFormInputs {
//   otp: string[];
// }

// const Otp: React.FC = () => {
//   const { control, handleSubmit } = useForm<OTPFormInputs>({
//     defaultValues: {
//       otp: ['', '', '', ''],
//     },
//   });

//   const onSubmit = (data: OTPFormInputs) => {
//     const otp = data.otp.join('');
//     console.log('Entered OTP:', otp);
//     // Handle OTP submission logic here
//   };

//   return (
// <form onSubmit={handleSubmit(onSubmit)} className="flex gap-2">
//   {Array.from({ length: 4 }).map((_, index) => (
//     <Controller
//       key={index}
//       name={`otp.${index}`}
//       control={control}
//       render={({ field }) => (
//         <input
//           {...field}
//           type="tel"
//           maxLength={1}
//           className="w-12 h-12 text-center border rounded-md"
//           onChange={(e) => {
//             const target = e.target as HTMLInputElement;
//             const value = target.value;

//             // Allow only digits
//             if (/^\d$/.test(value)) {
//               field.onChange(value);
//               if (index < 3) {
//                 const nextSibling = target.nextElementSibling as HTMLInputElement | null;
//                 nextSibling?.focus();
//               }
//             } else {
//               // Prevent non-digit input
//               target.value = field.value;
//             }
//           }}
//           onInput={(e) => {
//             const target = e.target as HTMLInputElement;
//             if (target.value.length > 0 && index < 3 && /^\d$/.test(target.value)) {
//               const nextSibling = target.nextElementSibling as HTMLInputElement | null;
//               nextSibling?.focus();
//             }
//           }}
//         />
//       )}
//     />
//   ))}
//   <button type="submit" className="ml-4 px-4 py-2 bg-blue-500 text-white rounded-md">
//     Submit
//   </button>
// </form>
//   );
// };

// export default Otp;
