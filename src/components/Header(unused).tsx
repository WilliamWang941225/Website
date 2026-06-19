import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img src="images/avatar.jpg" alt="Avatar" />
        </span>

        <h1 id="logo">
          <NavLink to="/">William Wang</NavLink>
        </h1>

        <p>physics enthusiast</p>
      </header>

      <nav id="nav">
        <ul>
          <li>
            <NavLink to="/" end>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about">About</NavLink>
          </li>

          <li>
            <NavLink to="/resources">My Resources</NavLink>
          </li>

          <li>
            <NavLink to="/online-resources">Online Resources</NavLink>
          </li>

          <li>
            <NavLink to="/tutor">Tutor</NavLink>
          </li>
        </ul>
      </nav>

      <footer>
        <ul className="icons">
          <li>
            <a
              href="https://github.com/WilliamWang941225"
              target="_blank"
              rel="noreferrer"
              className="icon brands fa-github"
            >
              <span className="label">Github</span>
            </a>
          </li>

          <li>
            <a
              href="mailto:WilliamWang941225@gmail.com"
              className="icon solid fa-envelope"
            >
              <span className="label">Email</span>
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}