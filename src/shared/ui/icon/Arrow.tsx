interface IconProps {
  className?: string;
}

export const ArrowIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${className}`}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.2325 4.18414C10.4622 4.423 10.4547 4.80282 10.2159 5.0325L7.06566 8L10.2159 10.9675C10.4547 11.1972 10.4622 11.577 10.2325 11.8159C10.0028 12.0547 9.62299 12.0622 9.38413 11.8325L5.78413 8.4325C5.66648 8.31938 5.59999 8.16321 5.59999 8C5.59999 7.83679 5.66648 7.68062 5.78413 7.5675L9.38413 4.1675C9.62299 3.93782 10.0028 3.94527 10.2325 4.18414Z"
        fill="#626262"
      />
    </svg>
  );
};
