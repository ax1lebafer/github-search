import { useState } from "react";
import { observer } from "mobx-react-lite";
import userStore from "../../stores/UserStore.ts";

function Search() {
  const [value, setValue] = useState("");

  const { fetchSearchUsers } = userStore;

  function searchUsers() {
    fetchSearchUsers(value);
  }

  return (
    <section>
      <div>
        <input
          type="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <button onClick={searchUsers}>Поиск</button>
    </section>
  );
}

export default observer(Search);
