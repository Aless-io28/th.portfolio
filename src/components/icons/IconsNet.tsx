type IconsProps = {
  size: string;
  sizeY?: string;
  className?: string;
  fill?: string;
  state?: boolean;
};

export const IconLinkedin = ({ size, sizeY, className, fill }: IconsProps) => {
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
        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
      />
    </svg>
  );
};

export const IconInstagram = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 16 16"
    >
      <path
        fill={fill || "currentColor"}
        d="M8 5.67C6.71 5.67 5.67 6.72 5.67 8S6.72 10.33 8 10.33S10.33 9.28 10.33 8S9.28 5.67 8 5.67M15 8c0-.97 0-1.92-.05-2.89c-.05-1.12-.31-2.12-1.13-2.93c-.82-.82-1.81-1.08-2.93-1.13C9.92 1 8.97 1 8 1s-1.92 0-2.89.05c-1.12.05-2.12.31-2.93 1.13C1.36 3 1.1 3.99 1.05 5.11C1 6.08 1 7.03 1 8s0 1.92.05 2.89c.05 1.12.31 2.12 1.13 2.93c.82.82 1.81 1.08 2.93 1.13C6.08 15 7.03 15 8 15s1.92 0 2.89-.05c1.12-.05 2.12-.31 2.93-1.13c.82-.82 1.08-1.81 1.13-2.93c.06-.96.05-1.92.05-2.89m-7 3.59c-1.99 0-3.59-1.6-3.59-3.59S6.01 4.41 8 4.41s3.59 1.6 3.59 3.59s-1.6 3.59-3.59 3.59m3.74-6.49c-.46 0-.84-.37-.84-.84s.37-.84.84-.84s.84.37.84.84a.8.8 0 0 1-.24.59a.8.8 0 0 1-.59.24Z"
      />
    </svg>
  );
};

export const IconX = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 14 14"
    >
      <g fill="none">
        <g clipPath="url(#IconifyId192d3f0b5291aa79d0)">
          <path
            fill={fill || "currentColor"}
            d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
          />
        </g>
        <defs>
          <clipPath id="IconifyId192d3f0b5291aa79d0">
            <path fill="#fff" d="M0 0h14v14H0z" />
          </clipPath>
        </defs>
      </g>
    </svg>
  );
};

export const IconGmail = ({ size, sizeY, className, fill }: IconsProps) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={sizeY || size}
      viewBox="0 0 432 384"
    >
      <path
        fill={fill || "currentColor"}
        d="M384 21q18 0 30.5 12.5T427 64v256q0 18-12.5 30.5T384 363H43q-18 0-30.5-12.5T0 320V64q0-18 12.5-30.5T43 21zm0 86V64L213 171L43 64v43l170 106z"
      />
    </svg>
  );
};
