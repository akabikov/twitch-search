import { useState } from "react";

function SearchForm({ value }) {
  const [val, setVal] = useState(value);

  return (
    <form>
      <input
        type='search'
        name='q'
        placeholder='Search...'
        autoComplete='off'
        value={val}
        onChange={({ target }) => setVal(target.value)}
      />
      <input type='submit' value='Search' />
    </form>
  );
}

export default SearchForm;
