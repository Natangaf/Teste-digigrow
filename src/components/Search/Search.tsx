import { MdSearch } from "react-icons/md";
import { InputShared, InputSharedLabel } from "./_search";

const Search = () => {
  return (
    <InputSharedLabel>
      <MdSearch />
      <InputShared placeholder="Search menu items" />
    </InputSharedLabel>
  );
};

export default Search;
