type IconsProps = {
  size: string;
  sizeY?: string;
  className?: string;
  fill?: string;
  state?: boolean;
};

export const IconLocation = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill || "currentColor"}
        d="M12 3a7 7 0 0 0-7 7c0 2.862 1.782 5.623 3.738 7.762A26 26 0 0 0 12 20.758q.262-.201.615-.49a26 26 0 0 0 2.647-2.504C17.218 15.623 19 12.863 19 10a7 7 0 0 0-7-7m0 20.214l-.567-.39l-.003-.002l-.006-.005l-.02-.014l-.075-.053l-.27-.197a28 28 0 0 1-3.797-3.44C5.218 16.875 3 13.636 3 9.999a9 9 0 0 1 18 0c0 3.637-2.218 6.877-4.262 9.112a28 28 0 0 1-3.796 3.44a17 17 0 0 1-.345.251l-.021.014l-.006.005l-.002.001zM12 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0a4 4 0 0 1-8 0"
      />
    </svg>
  );
};

export const IconAge = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M9 11c1.162 3.722 4.667 4.269 6 0m-6 0c-1.053 3.373-3.462 3.74-5 1.91M15 11c.934 2.992 3.383 3.933 5 1.967" />
        <path d="M20 21v-8c0-1.09-.91-2-2-2H6c-1.09 0-2 .91-2 2v8m-2 0h20M7 7v4m5-4v4m5-4v4M7 4v.5m5-.5v.5m5-.5v.5" />
      </g>
    </svg>
  );
};

export const IconLike = ({
  size,
  sizeY,
  className,
  fill,
  state,
}: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 48 48"
    >
      <path
        fill={state ? "currentColor" : "none"}
        stroke={fill || "currentColor"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M15 8C8.925 8 4 12.925 4 19c0 11 13 21 20 23.326C31 40 44 30 44 19c0-6.075-4.925-11-11-11c-3.72 0-7.01 1.847-9 4.674A10.99 10.99 0 0 0 15 8"
      />
    </svg>
  );
};

export const IconFixed = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill || "currentColor"}
        d="M16 3a1 1 0 0 1 .117 1.993L16 5v4.764l1.894 3.789a1 1 0 0 1 .1.331L18 14v2a1 1 0 0 1-.883.993L17 17h-4v4a1 1 0 0 1-1.993.117L11 21v-4H7a1 1 0 0 1-.993-.883L6 16v-2a1 1 0 0 1 .06-.34l.046-.107L8 9.762V5a1 1 0 0 1-.117-1.993L8 3z"
      />
    </svg>
  );
};

export const IconPadlock = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill || "currentColor"}
        d="M12 13a1.49 1.49 0 0 0-1 2.61V17a1 1 0 0 0 2 0v-1.39A1.49 1.49 0 0 0 12 13m5-4V7A5 5 0 0 0 7 7v2a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3M9 7a3 3 0 0 1 6 0v2H9Zm9 12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1Z"
      />
    </svg>
  );
};

export const IconRedirect = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 24 24"
    >
      <path
        fill={fill || "currentColor"}
        d="m12 22l-7-7l1.4-1.425l4.6 4.6V11h2v7.175l4.6-4.575L19 15zM11 9V6h2v3zm0-5V2h2v2z"
      />
    </svg>
  );
};
