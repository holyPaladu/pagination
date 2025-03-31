import styles from "./Button.module.scss";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className = "",
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || false}
      className={`${styles.button} ${className || ""}`.trim()}
    >
      {children}
    </button>
  );
};

export default Button;
