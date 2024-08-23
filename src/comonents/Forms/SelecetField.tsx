// import { Controller, useFormContext } from "react-hook-form";

// type TOption = {
//   name: string;
// };

// type TSelectProps = {
//   name: string;
//   className?: string;
//   options: TOption[];
//   placeholder?: string;
//   required?: boolean;
// };

// const SelectField = ({
//   name,
//   className,
//   options,
//   required,
// }: TSelectProps) => {
//   const { control } = useFormContext();
//   return (
//     <Controller
//       control={control}
//       name={name}
//       render={({ field, fieldState: { error } }) => (
//         <div className="flex flex-col">
//           <select
//             {...field}
//             className={className}
//             required={required}
//             defaultValue=""
//           >
//             {options.map((option) => (
//               <option key={option.name} value={option.name} className="h-10">
//                 {option.name}
//               </option>
//             ))}
//           </select>
//           {error ? (
//             <span className="text-[#e82828] text-[14px]">{error.message}</span>
//           ) : (
//             ""
//           )}
//         </div>
//       )}
//     />
//   );
// };

// export default SelectField;

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Select from "react-select";

type TOption = {
  label: string;
  value: string;
};

type TSelectProps = {
  name: string;
  className?: string;
  options: TOption[];
  placeholder?: string;
  required?: boolean;
};

const SelectField = ({
  name,
  className,
  options,
  placeholder,
  required,
}: TSelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className="flex flex-col">
          <Select
            {...field}
            options={options}
            placeholder={placeholder}
            className={className}
            isClearable={!required}
            value={
              options.find((option) => option.value === field.value) || null
            }
            onChange={(option) => field.onChange(option?.value)}
            onBlur={field.onBlur}
          />
          {error ? (
            <span className="text-[#e82828] text-[14px]">{error.message}</span>
          ) : (
            ""
          )}
        </div>
      )}
    />
  );
};

export default SelectField;
