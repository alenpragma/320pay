import { FaCopy } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md";

type IHoverItemProps = {
  handleCopy: (text: string) => void;
  item: any;
  id: number;
};

const HoverTableItem = ({ handleCopy, item, id }: IHoverItemProps) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <span>asksk...fkjf</span>
        <MdContentCopy
          onClick={() => handleCopy("text copy")}
          className="cursor-pointer rotate-180"
        />
      </div>
      <div
        className={` text-white absolute -top-11   w-fit z-[3] ${
          item == id ? "block" : "hidden"
        }`}
      >
        <div className="relative w-full">
          <div className="absolute  rotate-45 -bottom-[8px] left-5 size-5 bg-black -z-[4]"></div>
          <p className="bg-black z-[5] px-3 py-1 rounded">
            askdfjsakjfjasljfdklsjdflkjs
          </p>
        </div>
      </div>
    </>
  );
};

export default HoverTableItem;
