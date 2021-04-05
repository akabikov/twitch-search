import { useState } from "react";
import styles from "./index.module.scss";

function SearchForm({ value }) {
  const [val, setVal] = useState(value);

  return (
    <form className={styles.SearchForm}>
      <label htmlFor='search'>Канал Twitch</label>
      <input
        type='search'
        name='q'
        id='search'
        placeholder='etoleto'
        autoComplete='off'
        className={styles.input}
        value={val}
        onChange={({ target }) => setVal(target.value)}
      />
      <input type='submit' value='Найти' />
    </form>
  );
}

export default SearchForm;
