import { Controller, useFormContext } from "react-hook-form"
import Select from "react-select"

type TOption = {
  label: string
  value: string
  // id?: string
}

type TSelectProps = {
  name: string;
  className?: string;
  options: TOption[];
  placeholder?: string;
  required?: boolean;
  onChange?: (value: string) => void;
};

const SelectField = ({
  name,
  className,
  options,
  placeholder,
  required,
  onChange,
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
            onChange={(option) => {
              field.onChange(option?.value);
              if (onChange) {
                onChange(option?.value || "") // Call the parent onChange
              }
            }}
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
