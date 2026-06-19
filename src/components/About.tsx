export default function About() {
  return (
    <section id="one">
      <div className="image main" data-position="center">
        <img src="/images/IMG_5221 (1).jpeg" alt="Banner" />
      </div>
      <div className="container">
        <header className="major">
          <h2>About</h2>
          <p>A site describing my learning process.</p>
        </header>
        <p>
          Hello there, my name is William Wang, also known as Zhao-Guo Wang(王兆國). I&apos;m a passionate learner who loves to explore physics and programming in my leisure time. I was selected to be a member of the National Physics Team in grade 11. Eventually, I won gold medals in both the {" "}
          <a
            href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9E5690E6B818E54C"
            target="_blank"
            rel="noreferrer"
          >
            Asian
          </a>{" "}
          and the {" "}
          <a
            href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=3FDF6D227E56BE16"
            target="_blank"
            rel="noreferrer"
          >
            International Physics Olympiad
          </a>{" "}
          in 2023.
        </p>
        <ul className="feature-icons">
          <li className="icon solid fa-id-card">Changhua, Taiwan</li>
          <li className="icon solid fa-university">
            National Taiwan University, Electrical Engineering
          </li>
          <li className="icon solid fa-graduation-cap">
            <a href="https://www.cchs.chc.edu.tw/" target="_blank" rel="noreferrer">
              Ching Cheng High School
            </a>
          </li>
          <li className="icon solid fa-trophy">
            <a
              href="https://ipho-unofficial.org/timeline/2023/individual"
              target="_blank"
              rel="noreferrer"
            >
              IPhO 2023 Gold Medalist
            </a>
          </li>
          <li className="icon solid fa-trophy">APhO 2023 Gold Medalist</li>
        </ul>
      </div>
    </section>
  );
}
