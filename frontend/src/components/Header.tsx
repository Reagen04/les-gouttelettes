const topLinks = [
  { label: "Parents", href: "#pedagogie" },
  { label: "Admissions", href: "#admission" },
  { label: "Actualites", href: "#vie-scolaire" },
  { label: "Contact", href: "#contact" }
];

const mainLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Presentation", href: "#presentation" },
  { label: "Cycles", href: "#cycles" },
  { label: "Inscription", href: "#admission" },
  { label: "Acces", href: "#acces" }
];

const Header = () => {
  return (
    <header>
      <div className="top-nav">
        <div className="top-nav-inner">
          <span className="school-mini">CSG</span>
          <nav aria-label="Top navigation">
            {topLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="main-nav">
        <div className="main-nav-inner">
          <a href="#accueil" className="brand" aria-label="Homepage">
            <img
              className="logo-image logo-image-header"
              src="/images/logo-les-gouttelettes.png"
              alt="Logo Complexe Scolaire Les Gouttelettes"
            />
            <span className="brand-text">COMPLEXE SCOLAIRE LES GOUTTELETTES</span>
          </a>

          <nav aria-label="Main navigation">
            {mainLinks.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-icons">
            <a href="#cycles">Premier et Second Cycle</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
