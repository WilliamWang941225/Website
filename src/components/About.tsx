import BackHomeButton from "./BackHomeButton";

export default function About() {
  return (
    <section id="one">

      <div className="container">
        <BackHomeButton />
        <header className="comp-major">
          <h2>About</h2>
        </header>

        <div className="about-intro-row">
          <span className="image avatar about-avatar">
            <img src="images/avatar.jpg" alt="William Wang" />
          </span>

          <p>
            Hello there, my name is William Wang, also known as Zhao-Guo Wang
            (王兆國). I&apos;m a passionate learner who loves to explore physics
            and programming in my leisure time. I was selected to be a member of
            the National Physics Team in grade 11. Eventually, I won gold medals
            in both the{" "}
            <a
              href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=9E5690E6B818E54C"
              target="_blank"
              rel="noreferrer"
            >
              Asian
            </a>{" "}
            and the{" "}
            <a
              href="https://www.edu.tw/News_Content.aspx?n=9E7AC85F1954DDA8&s=3FDF6D227E56BE16"
              target="_blank"
              rel="noreferrer"
            >
              International Physics Olympiad
            </a>{" "}
            in 2023.
          </p>
        </div>

        <ul className="feature-icons">
          <li className="icon solid fa-id-card">Changhua, Taiwan</li>

          <li className="icon solid fa-university">
            National Taiwan University, Electrical Engineering
          </li>

          <li className="icon solid fa-graduation-cap">
            <a
              href="https://www.cchs.chc.edu.tw/"
              target="_blank"
              rel="noreferrer"
            >
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
        <div className="image about-photo">
          <img src="images/IMG_5221 (1).jpeg" alt="William Wang" />
          <p>A graffiti drawn with IPhO temmates. As you can see right next to the national flag, there is a medal hanging on a 5. It means all of us can get a gold medal, and that's five in total.</p>
        </div>
      </div>
    </section>
  );
}