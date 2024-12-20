import React, { useState } from "react";
import InputForm from "./InputForm";
import InputSelect from "./InputSelect";

export default function FormComponent() {
  const [formData, setFormData] = useState({
    nickname: "",
    email: "",
    gender: "",
    age: "",
  });
  const [notification, setNotification] = useState({
    visible: false,
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let isValid = true;
    let errors = {};

    if (!formData.nickname.trim()) {
      errors.nickname = "Nickname is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.gender) {
      errors.gender = "Gender is required";
      isValid = false;
    }

    if (!formData.age.trim()) {
      errors.age = "Age is required";
      isValid = false;
    } else if (!/^\d+$/.test(formData.age)) {
      errors.age = "Age must be a number";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form data:", formData);

      setNotification({
        visible: true,
        message: "Registration successful!",
      });

      setTimeout(() => {
        setNotification({ visible: false, message: "" });
      }, 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputForm
        label="Nickname"
        type="text"
        name="nickname"
        value={formData.nickname}
        onChange={handleChange}
        error={errors.nickname}
      />
      <InputForm
        label="Email Address"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <InputSelect
        label="Gender"
        name="gender"
        value={formData.gender}
        onChange={handleChange}
        options={[
          { value: "", label: "Select Gender" },
          { value: "male", label: "Male" },
          { value: "female", label: "Female" },
          { value: "reptilian", label: "Reptilian" },
        ]}
        error={errors.gender}
      />
      <InputForm
        label="Age"
        type="text"
        name="age"
        value={formData.age}
        onChange={handleChange}
        error={errors.age}
      />
      <div class="wrapper">
        <button type="submit">
          <span>Register</span>
        </button>
      </div>
      {notification.visible && (
        <p class="notification">{notification.message}</p>
      )}
    </form>
  );
}
