import { ReactNode } from "react";

type TDataType = {
  data?: string | null | number;
  children?: ReactNode;
};

const TData = ({ data, children }: TDataType) => {
  return (
    <td className="py-2 px-8 text-start text-[16px] text-[#868B8F]">
      <h4>{data}</h4>
      {children}
    </td>
  );
};

export default TData;
