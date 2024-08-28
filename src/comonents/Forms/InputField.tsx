import { Controller, useFormContext } from "react-hook-form"

type TInputProps = {
  name: string
  type?: string
  className?: string
  placeholder?: string
  requried?: boolean
  defaultValue?: string | number
}

const InputField = ({
  name,
  type,
  className,
  placeholder,
  defaultValue,
  requried,
}: TInputProps) => {
  const { control } = useFormContext()
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState: { error } }) => (
        <div className={`${type === "checkbox" ? "flex flex-col" : ""}`}>
          <input
            {...field}
            type={type}
            className={className}
            placeholder={placeholder}
            value={defaultValue}
            required={requried}
          />
          {error && type !== "checkbox" ? (
            <span className="text-[#e82828] text-[14px]">{error.message}</span>
          ) : (
            ""
          )}
        </div>
      )}
    />
  )
}

export default InputField
