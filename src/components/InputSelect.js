import React from "react";

export default function InputSelect({
  label,
  name,
  value,
  onChange,
  options,
  error,
}) {
  return (
    <div className="select-input">
      <label htmlFor={name}>{label}</label>
      <select id={name} name={name} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
