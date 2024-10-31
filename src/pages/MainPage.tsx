import { Link } from "react-router-dom";
import { appRoutes } from "../lib/appRoutes.tsx";

function MainPage() {
  return (
    <main>
      <div>
        <Link to={appRoutes.HOME}>
          <img src="/github.svg" alt="Logo" width="100" height="100" />
        </Link>
      </div>
      <div>
        <input type="search" />
      </div>
    </main>
  );
}

export default MainPage;
