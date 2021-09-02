import { useState } from "react";

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const handleChange = (formType, value) => {
    if (formType === "reset") setForm(initialState);
    else {
      setForm({ ...form, [formType]: value });
    }
  };
  return [form, handleChange];
};

export default useForm;
