import { Controller, useFormContext } from "react-hook-form";
import { HTMLInputTypeAttribute } from "react";

type TCheckBoxProps = {
  name: string;
  type?: HTMLInputTypeAttribute;
  className?: string;
  required?: boolean;
};

const CheckboxField = ({ name, type, className, required }: TCheckBoxProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div>
          <input
            {...field}
            type={type}
            className={className}
            required={required}
          />
        </div>
      )}
    />
  );
};

export default CheckboxField;
