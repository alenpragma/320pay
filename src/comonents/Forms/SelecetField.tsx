import { Controller, useFormContext } from "react-hook-form";

type TOption = {
  name: string;
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
          <select
            {...field}
            className={className}
            required={required}
            defaultValue=""
          >
            {options.map((option) => (
              <option key={option.name} value={option.name}>
                {option.name}
              </option>
            ))}
          </select>
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
