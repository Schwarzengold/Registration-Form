import React from "react";

export default function InputForm({
  label,
  type,
  name,
  value,
  onChange,
  error,
}) {
  return (
    <div className="form-input">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
      />
      {error && <p className="error">{error}</p>}
    </div>
  );
}
