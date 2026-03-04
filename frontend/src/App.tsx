import { useState, type TouchEventHandler } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const conditions = [
  {
    level: "Creche : 0 a 2 ans",
    details:
      "Ce qu'il faut : une gourde (bidon d'eau), 3 couches par jour, un paquet de papier mouchoir par trimestre et tout ce dont l'enfant a besoin."
  },
  {
    level: "Petite section : 3 ans",
    details:
      "Il faut : une gourde, un cahier d'activite, une ardoise, une paire de petits ciseaux, un paquet de papier mouchoir par trimestre, une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'ecole (chemisette blanche et culotte ou jupe bleue)."
  },
  {
    level: "Moyenne et grande section : 4 a 5 ans",
    details:
      "Il faut : une gourde, un cahier d'activite, une ardoise, une gomme, une paire de petits ciseaux, un paquet de papier mouchoir par trimestre, une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'ecole (chemisette blanche et culotte ou jupe bleue)."
  },
  {
    level: "PREMIER CYCLE",
    details:
      "Pour les fournitures, voir la liste des fournitures : une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'ecole (chemise blanche et culotte ou jupe bleue)."
  },
  {
    level: "SECOND CYCLE",
    details:
      "Pour les fournitures, voir la liste des fournitures : une tenue de sport (training bleu), deux tenues de l'ecole (chemise blanche et pantalon ou jupe bleue), une cravate noire."
  }
];

const publicityImages = [
  { src: "/images/publicity/school-01.jpg", alt: "Classe avec enseignant et eleves en uniforme" },
  { src: "/images/publicity/school-02.jpg", alt: "Photo de groupe des eleves devant le batiment scolaire" },
  { src: "/images/publicity/school-03.jpg", alt: "Photo de groupe avec enseignante et eleves du cycle maternel" },
  { src: "/images/publicity/school-04.jpg", alt: "Eleves du jardin d'enfants en rangee" },
  { src: "/images/publicity/school-05.jpg", alt: "Grande classe d'eleves en salle d'activite" },
  { src: "/images/publicity/school-06.jpg", alt: "Eleves avec sacs scolaires en rassemblement" },
  { src: "/images/publicity/school-07.jpg", alt: "Sortie educative des eleves en exterieur" },
  { src: "/images/publicity/school-08.jpg", alt: "Eleves du secondaire en salle de classe" },
  { src: "/images/publicity/school-09.jpg", alt: "Activite sportive avec educatrice et enfants" },
  { src: "/images/publicity/school-10.jpg", alt: "Eleves souriants en cour d'ecole" },
  { src: "/images/publicity/school-11.jpg", alt: "Animation collective des eleves en salle" },
  { src: "/images/publicity/school-12.jpg", alt: "Danse et activite de groupe avec eleves" }
];

const App = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? publicityImages.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev === publicityImages.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart: TouchEventHandler<HTMLDivElement> = (event) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd: TouchEventHandler<HTMLDivElement> = (event) => {
    if (touchStartX === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX;
    if (deltaX > 40) goToPreviousImage();
    if (deltaX < -40) goToNextImage();
    setTouchStartX(null);
  };

  return (
    <div className="site-shell">
      <Header />

      <main>
        <section className="hero" id="accueil" aria-label="Accueil">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-kicker">COMPLEXE SCOLAIRE LES GOUTTELETTES</p>
            <h1>L'excellence dans la simplicite.</h1>
            <p className="hero-copy">
              Garderie, creche, maternelle, premier et second cycle dans un cadre pedagogique
              actif pour former des enfants autonomes, curieux et responsables.
            </p>
            <div className="hero-actions">
              <a className="cta-btn primary-btn" href="#admission">
                Demarrer une inscription
              </a>
              <a className="cta-btn ghost-btn" href="#acces">
                Voir le plan d'acces
              </a>
            </div>
          </div>
        </section>

        <section className="content-grid" id="presentation">
          <article className="info-card">
            <h2>Presentation</h2>
            <p>Le complexe scolaire "Les Gouttelettes" est un etablissement comprenant :</p>
            <ul>
              <li>Le jardin d'enfants.</li>
              <li>Le premier cycle.</li>
              <li>Le second cycle.</li>
            </ul>
            <p>
              Nous utilisons des documents et materiels didactiques conformes au programme
              officiel malien, dans une approche interdisciplinaire et differentielle.
            </p>
            <p>Nous renforcons ce programme avec :</p>
            <ul>
              <li>
                La pedagogie par competence, qui integre le savoir, le savoir-faire et le
                savoir-etre.
              </li>
              <li>
                La methode participative : travail en petits groupes, ateliers, taches
                integratives, projets, devoirs et jeux de role, afin de mettre en pratique les
                notions theoriques.
              </li>
            </ul>
            <p>
              Grace a l'appui de nos partenaires, nous offrons regulierement des formations de
              recyclage a notre personnel pour ameliorer son niveau de connaissance.
            </p>
          </article>

          <article className="info-card">
            <h2>But educatif, professionnel et social</h2>
            <p>
              Notre objectif est d'offrir une education de qualite integrant la dimension
              physique, intellectuelle et morale de l'etre humain.
            </p>
            <p>
              Seule l'education peut reveler la valeur et permettre a l'humanite d'en profiter.
            </p>
          </article>
        </section>

        <section className="content-grid" id="admission">
          <article className="info-card">
            <h2>Pieces a fournir</h2>
            <p>Le document a fournir pour l'inscription doit comprendre les pieces suivantes :</p>
            <ul>
              <li>2 photos d'identite</li>
              <li>1 copie de l'extrait de l'acte de naissance</li>
              <li>1 copie du carnet de vaccination a jour</li>
            </ul>
            <p>
              Les eleves issus d'un transfert doivent fournir un certificat de transfert ou un
              carnet scolaire en plus des pieces ci-dessus.
            </p>
          </article>
        </section>

        <section className="content-grid" id="cycles">
          <article className="info-card">
            <h2>Conditions de recrutement</h2>
            {conditions.map((item) => (
              <div className="condition-row" key={item.level}>
                <h3>{item.level}</h3>
                <p>{item.details}</p>
              </div>
            ))}
          </article>

          <article className="info-card" id="pedagogie">
            <h2>Notre approche educative</h2>
            <ul>
              <li>Chaque enfant est unique et special ; il ne faut pas les comparer.</li>
              <li>
                Le role d'un educateur est d'aider chacun a se developper selon ses capacites
                et son rythme.
              </li>
              <li>
                Les enfants apprennent mieux dans un environnement positif d'amour et
                d'encouragement.
              </li>
              <li>
                Les enfants comprennent mieux ce qu'ils decouvrent par eux-memes que ce qu'ils
                entendent ou ce qu'ils voient.
              </li>
              <li>
                C'est pourquoi nous utilisons la methode participative (travail en groupe,
                atelier, devoirs, jeux de role).
              </li>
            </ul>
          </article>
        </section>

        <section className="gallery-panel" id="vie-scolaire">
          <div className="panel-head">
            <h2>Vie scolaire et activites</h2>
            <p>Sorties, activites culturelles, sports et presentations pedagogiques.</p>
          </div>

          <div className="slider-shell">
            <button
              type="button"
              className="slider-btn"
              aria-label="Image precedente"
              onClick={goToPreviousImage}
            >
              &#8249;
            </button>

            <div
              className="slider-viewport"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="slider-track"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
              >
                {publicityImages.map((image) => (
                  <figure className="photo-slide" key={image.src}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                  </figure>
                ))}
              </div>
            </div>

            <button
              type="button"
              className="slider-btn"
              aria-label="Image suivante"
              onClick={goToNextImage}
            >
              &#8250;
            </button>
          </div>

          <div className="slider-dots" aria-hidden="true">
            {publicityImages.map((image, index) => (
              <span
                key={image.src}
                className={index === currentImageIndex ? "dot dot-active" : "dot"}
              />
            ))}
          </div>
        </section>

        <section className="content-grid" id="acces">
          <article className="info-card">
            <h2>Plan d'acces</h2>
            <p>
              Adresse : Kalaban-Coro / Nerecoro, Rue 308 porte 472, non loin de la route de
              Garantiguibougou (terminus).
            </p>
            <p>Point de repere : Pharmacie BAMANOU, axe route de l'aeroport.</p>
            <p>Telephones : 74 67 36 15 / 71 18 36 63</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
