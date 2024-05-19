import { Link } from "react-router-dom";

function PageNav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/product">product</Link>
        </li>
        <li>
          <Link to="/pricing">pricing</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
