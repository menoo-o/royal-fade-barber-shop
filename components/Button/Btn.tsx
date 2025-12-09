
import './btnstyles.css'

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className = "", ...props }: ButtonProps) {
  return (
    <button
      className={`btn-base ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
