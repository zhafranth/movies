import React from "react";

// Depen
import { useDispatch, useSelector } from "react-redux";
import SyncLoader from "react-spinners/SyncLoader";

// Child Components
import { MainInput, Input, BtnSearch } from "./style";

// Utils
import useForm from "../../../utils/hooks/useForm";
import { getListMovie } from "../../../store/action";

// Icons
import { ImSearch } from "react-icons/im";

const Search = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.globalReducer);
  const [form, handleChange] = useForm({
    search: "",
  });

  const onSearch = () => {
    dispatch(getListMovie(form.search, 1));
  };
  return (
    <MainInput>
      <Input
        type="text"
        placeholder="batman"
        value={form.search}
        onChange={(e) => handleChange("search", e.target.value)}
        data-testid="search"
      />
      <BtnSearch onClick={onSearch} disabled={loading}>
        {loading ? (
          <SyncLoader color="#fff" loading={true} size={8} />
        ) : (
          <ImSearch />
        )}
      </BtnSearch>
    </MainInput>
  );
};

export default Search;
