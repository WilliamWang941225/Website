const onlineResourceGroups = [
  {
    title: "General Relativity",
    links: [
      { label: "MIT OCW", href: "https://ocw.mit.edu/courses/8-962-general-relativity-spring-2020/" },
      { label: "Sean Carroll's website on General Relativity", href: "https://www.preposterousuniverse.com/grnotes/" },
      { label: "陳童的量子新世界", href: "https://newquanta.com/" }
    ]
  },
  {
    title: "Competition",
    links: [
      { label: "CPhO WIKI", href: "https://pan.cpho.wiki/" },
      { label: "Physics Cup", href: "https://physicscup.ee/" },
      { label: "pho.rs", href: "https://pho.rs/" },
      { label: "CPhO Officical Website", href: "https://cpho.pku.edu.cn/ckzl/qgjssthjd.htm" }
    ]
  },
  {
    title: "Others",
    links: [
      { label: "College Physics", href: "https://dxwl.bnu.edu.cn/CN/1000-0712/current.shtml" },
      { label: "dnlab", href: "https://index.dnlab.net/%E5%AD%A6%E7%A7%91/%E7%89%A9%E7%90%86?hash=5ze4pekW" },
      { label: "Fluid Dynamics", href: "https://hackmd.io/@0xff07/r1rq24hqI/https%3A%2F%2Fhackmd.io%2F%400xff07%2Fr1Qo_QFKx" },
      { label: "Solution to Classical Electrodynamics (3rd edition), John David Jackson", href: "https://github.com/euphoricrhino/jackson-em-notes" },
      { label: "Professor Zhao-Huan Yu's Website", href: "https://yzhxxzxy.github.io/cn/teaching.html" },
      { label: "Fluid Dynamics by nought", href: "https://zhuanlan.zhihu.com/p/697159670" },
      { label: "Solution to Principles of Quantum Mechanics (2nd edition), R. Shankar", href: "https://shirazdossier.wordpress.com/msphysics-shankar-sol/" }
    ]
  },
  {
    title: "AMO & Quantum Optics",
    links: [{ label: "AMO Wiki by MIT", href: "https://amowiki.odl.mit.edu/index.php/Main_Page" }]
  }
];

export default function OnlineResources() {
  return (
    <section id="three">
      <div className="container">
        <h3>Online Resources</h3>
        <div className="features">
          {onlineResourceGroups.map((group) => (
            <article key={group.title}>
              <div className="inner">
                <h4>{group.title}</h4>
                <ul>
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <a href={link.href} target="_blank" rel="noreferrer">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
