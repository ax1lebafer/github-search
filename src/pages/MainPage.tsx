import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes.tsx";
import Search from "../components/Search/Search.tsx";
import SearchResult from "../components/SearchResult/SearchResult.tsx";

function MainPage() {
  return (
    <main>
      <div>
        <Link to={appRoutes.HOME}>
          <img src="/github.svg" alt="Logo" width="100" height="100" />
        </Link>
      </div>

      <Search />
      <SearchResult />
    </main>
  );
}

export default MainPage;
