import { useState } from "react";
import { useDispatch } from "react-redux";

const useForm = (initialState) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(initialState);
  const handleChange = (formType, value) => {
    if (formType === "reset") setForm(initialState);
    else {
      setForm({ ...form, [formType]: value });
      dispatch({
        type: "SET_SEARCH_TEXT",
        payload: value,
      });
    }
  };
  return [form, handleChange];
};

export default useForm;
