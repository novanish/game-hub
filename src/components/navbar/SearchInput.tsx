import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useGameQueryStore } from "../../store";
import { useNavigate } from "react-router-dom";

export function SearchInput() {
  const searchRef = useRef<HTMLInputElement>(null);
  const onSearch = useGameQueryStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchRef.current?.value || "");
        navigate("/");
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          rounded="full"
          px={5}
          placeholder="Search games"
          aria-label="search"
          enterKeyHint="search"
          name="search"
          spellCheck={false}
          ref={searchRef}
        />
      </InputGroup>
    </form>
  );
}
