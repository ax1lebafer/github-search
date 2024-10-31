import { observer } from "mobx-react-lite";
import userStore from "../../stores/UserStore.ts";

function SearchResult() {
  const { users } = userStore;

  return (
    <section>
      <h2>Найденные результаты</h2>
      {users.map((user) => (
        <div key={user.id}>
          <img src={user.avatar_url} alt="Аватарка" />
          <h2>Login: {user.login}</h2>
        </div>
      ))}
    </section>
  );
}

export default observer(SearchResult);
