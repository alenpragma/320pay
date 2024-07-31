import { Controller, useFormContext } from "react-hook-form";

type TInputProps = {
  name: string;
  type: string;
  className?: string;
  placeholder?: string;
  requried?: boolean;
};

const InputField = ({
  name,
  type,
  className,
  placeholder,
  requried,
}: TInputProps) => {
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
            placeholder={placeholder}
            required={requried}
          />
          {error && <span className="text-[#e82828] text-[14px]">{error.message}</span>}
        </div>
      )}
    />
  );
};

export default InputField;
