import type React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline"
}

export const Button: React.FC<ButtonProps> = ({ children, className = "", variant = "primary", ...props }) => {
  const baseStyles = "px-4 py-2 rounded font-semibold text-sm"
  const variantStyles = {
    primary: "bg-[#0066B2] hover:bg-[#0066B2]/90 text-white",
    outline: "border border-gray-600 text-gray-400 hover:bg-gray-800",
  }

  return (
    <button className={`${baseStyles} ${variantStyles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

