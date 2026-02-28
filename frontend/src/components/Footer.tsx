const links = [
  { label: "Presentation", href: "#presentation" },
  { label: "Pieces a fournir", href: "#admission" },
  { label: "Conditions de recrutement", href: "#cycles" },
  { label: "Approche educative", href: "#pedagogie" },
  { label: "Plan d'acces", href: "#acces" },
  { label: "Contact", href: "#contact" }
];

const Footer = () => {
  return (
    <footer className="site-footer">
      <section className="footer-top">
        <h2>LIENS RAPIDES</h2>
        <div className="footer-links-grid">
          {links.map((item) => (
            <a href={item.href} key={item.label}>
              {item.label}
            </a>
          ))}
        </div>
      </section>

      <section className="contact-row" id="contact">
        <div>
          <h2>NOUS CONTACTER</h2>
          <p>COMPLEXE SCOLAIRE LES GOUTTELETTES</p>
          <p>Kalaban-Coro / Nerecoro, Rue 308 porte 472</p>
          <p>74 67 36 15 / 71 18 36 63</p>
        </div>

        <div>
          <p>simonmutondo@yahoo.fr</p>
          <p>Bureau des inscriptions</p>
          <p>Lundi - Samedi | 8:00 - 17:00</p>
        </div>

      </section>

      <div className="footer-bottom">
        <img
          className="logo-image logo-image-footer"
          src="/images/logo-les-gouttelettes.png"
          alt="Logo Complexe Scolaire Les Gouttelettes"
        />
        <p>(c) 2026 COMPLEXE SCOLAIRE LES GOUTTELETTES</p>
      </div>
    </footer>
  );
};

export default Footer;
