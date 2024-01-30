import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (search: string) => void;
}

export function SearchInput({ onSearch }: Props) {
  const searchRef = useRef<HTMLInputElement>(null);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSearch(searchRef.current?.value || "");
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
