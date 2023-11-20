import React from "react";
import "./text.css";

interface TextProps {
  color?: string;
  size?: "small" | "medium" | "large";
  children: React.ReactNode;
}

enum Size {
  small = "1rem",
  medium = "2rem",
  large = "2.5rem",
}

export const Text = ({ children, color, size }: TextProps) => {
  return (
    <p
      style={{
        color: color || "black",
        fontSize: Size[size || "medium"],
      }}
      className="font-bold font-serif"
    >
      {children}
    </p>
  );
};
