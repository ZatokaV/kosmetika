import React from "react";

export default function AuthInput({
  label,
  type = "text",
  placeholder,
  required,
  name
}) {
  const inputId = `field-${label.replace(/[^a-zA-Z0-9]/g, "")}`;

  return (
    <div className="auth__input">
      <label htmlFor={inputId} className="auth__input-label">
        {label}
      </label>
      <input
        id={inputId}
        name={name} 
        type={type}
        className="auth__input-field"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}
