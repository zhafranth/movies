import React from "react";

// Depen
import { useDispatch } from "react-redux";

// Child Components
import { MainInput, Input, BtnSearch } from "./style";

// Utils
import useForm from "../../../utils/hooks/useForm";
import { getListMovie } from "../../../store/action";

// Icons
import { ImSearch } from "react-icons/im";

const Search = () => {
  const dispatch = useDispatch();
  const [form, handleChange] = useForm({
    search: "",
  });

  const onSearch = () => {
    dispatch(getListMovie(form.search));
  };
  return (
    <MainInput>
      <Input
        type="text"
        placeholder="batman"
        value={form.search}
        onChange={(e) => handleChange("search", e.target.value)}
      />
      <BtnSearch onClick={onSearch}>
        <ImSearch />
      </BtnSearch>
    </MainInput>
  );
};

export default Search;
