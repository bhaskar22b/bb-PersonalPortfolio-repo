import React from "react";

function Button({ className, size = "default", children }) {

  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:opacity-90 shadow-lg shadow-[rgba(32,178,166,0.25)]";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className || ""}`;

  return (
    <button className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
}

export default Button;