type IProps = {
  className: string;
  stroke?: string;
  strokeWidth?: string;
};

const TickIcon = ({ className, stroke = "currentColor", strokeWidth = "1.5" }: IProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m4.5 12.75 6 6 9-13.5"
      />
    </svg>
  );
};

export default TickIcon;
