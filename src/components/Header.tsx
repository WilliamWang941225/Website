export default function Header() {
  return (
    <section id="header">
      <header>
        <span className="image avatar">
          <img src="/images/avatar.jpg" alt="William Wang avatar" />
        </span>
        <h1 id="logo">
          <a href="#">William Wang</a>
        </h1>
        <p>physics enthusiast</p>
      </header>

      <nav id="nav">
        <ul>
          <li>
            <a href="#one" className="active">
              About
            </a>
          </li>
          <li>
            <a href="#two">My Resources</a>
          </li>
          <li>
            <a href="#three">Online Resources</a>
          </li>
          <li>
            <a href="#four">Tutor</a>
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
