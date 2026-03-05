import { useState, type TouchEventHandler } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

const conditions = [
  {
    level: "Crèche : 0 à 2 ans",
    details:
      "Ce qu'il faut : une gourde (bidon d'eau), 3 couches par jour, un paquet de papier mouchoir par trimestre et tout ce dont l'enfant a besoin."
  },
  {
    level: "Petite section : 3 ans",
    details:
      "Il faut : une gourde, un cahier d'activité, une ardoise, une paire de petits ciseaux, un paquet de papier mouchoir par trimestre, une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'école (chemisette blanche et culotte ou jupe bleue)."
  },
  {
    level: "Moyenne et grande section : 4 à 5 ans",
    details:
      "Il faut : une gourde, un cahier d'activité, une ardoise, une gomme, une paire de petits ciseaux, un paquet de papier mouchoir par trimestre, une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'école (chemisette blanche et culotte ou jupe bleue)."
  },
  {
    level: "PREMIER CYCLE",
    details:
      "Pour les fournitures, voir la liste des fournitures : une tenue de sport (tee-shirt bleu et culotte), deux tenues de l'école (chemise blanche et culotte ou jupe bleue)."
  },
  {
    level: "SECOND CYCLE",
    details:
      "Pour les fournitures, voir la liste des fournitures : une tenue de sport (training bleu), deux tenues de l'école (chemise blanche et pantalon ou jupe bleue), une cravate noire."
  }
];

const publicityImages = [
  { src: "/images/publicity/school-01.jpg", alt: "Classe avec enseignant et élèves en uniforme" },
  { src: "/images/publicity/school-02.jpg", alt: "Photo de groupe des élèves devant le bâtiment scolaire" },
  { src: "/images/publicity/school-03.jpg", alt: "Photo de groupe avec enseignante et élèves du cycle maternel" },
  { src: "/images/publicity/school-04.jpg", alt: "Élèves du jardin d'enfants en rangée" },
  { src: "/images/publicity/school-05.jpg", alt: "Grande classe d'élèves en salle d'activité" },
  { src: "/images/publicity/school-06.jpg", alt: "Élèves avec sacs scolaires en rassemblement" },
  { src: "/images/publicity/school-07.jpg", alt: "Sortie éducative des élèves en extérieur" },
  { src: "/images/publicity/school-08.jpg", alt: "Élèves du secondaire en salle de classe" },
  { src: "/images/publicity/school-09.jpg", alt: "Activité sportive avec éducatrice et enfants" },
  { src: "/images/publicity/school-10.jpg", alt: "Élèves souriants dans la cour de l'école" },
  { src: "/images/publicity/school-11.jpg", alt: "Animation collective des élèves en salle" },
  { src: "/images/publicity/school-12.jpg", alt: "Danse et activité de groupe avec élèves" }
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
            <h1>L'excellence dans la simplicité.</h1>
            <p className="hero-copy">
              Garderie, crèche, maternelle, premier et second cycle dans un cadre pédagogique
              actif pour former des enfants autonomes, curieux et responsables.
            </p>
            <div className="hero-actions">
              <a className="cta-btn primary-btn" href="#admission">
                Démarrer une inscription
              </a>
              <a className="cta-btn ghost-btn" href="#acces">
                Voir le plan d'accès
              </a>
            </div>
          </div>
        </section>

        <section className="content-grid" id="presentation">
          <article className="info-card">
            <h2>Présentation</h2>
            <p>Le complexe scolaire "Les Gouttelettes" est un établissement comprenant :</p>
            <ul>
              <li>Le jardin d'enfants.</li>
              <li>Le premier cycle.</li>
              <li>Le second cycle.</li>
            </ul>
            <p>
              Nous utilisons des documents et matériels didactiques conformes au programme
              officiel malien, dans une approche interdisciplinaire et différentielle.
            </p>
            <p>Nous renforçons ce programme avec :</p>
            <ul>
              <li>
                La pédagogie par compétence, qui intègre le savoir, le savoir-faire et le
                savoir-être.
              </li>
              <li>
                La méthode participative : travail en petits groupes, ateliers, tâches
                intégratives, projets, devoirs et jeux de rôle, afin de mettre en pratique les
                notions théoriques.
              </li>
            </ul>
            <p>
              Grâce à l'appui de nos partenaires, nous offrons régulièrement des formations de
              recyclage à notre personnel pour améliorer son niveau de connaissance.
            </p>
          </article>

          <article className="info-card">
            <h2>But éducatif, professionnel et social</h2>
            <p>
              Notre objectif est d'offrir une éducation de qualité intégrant la dimension
              physique, intellectuelle et morale de l'être humain.
            </p>
            <p>
              Seule l'éducation peut révéler la valeur et permettre à l'humanité d'en
              profiter.
            </p>
          </article>
        </section>

        <section className="content-grid" id="admission">
          <article className="info-card">
            <h2>Pièces à fournir</h2>
            <p>Le document à fournir pour l'inscription doit comprendre les pièces suivantes :</p>
            <ul>
              <li>2 photos d'identité</li>
              <li>1 copie de l'extrait de l'acte de naissance</li>
              <li>1 copie du carnet de vaccination à jour</li>
            </ul>
            <p>
              Les élèves issus d'un transfert doivent fournir un certificat de transfert ou un
              carnet scolaire en plus des pièces ci-dessus.
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
            <h2>Notre approche éducative</h2>
            <ul>
              <li>Chaque enfant est unique et spécial ; il ne faut pas les comparer.</li>
              <li>
                Le rôle d'un éducateur est d'aider chacun à se développer selon ses capacités
                et son rythme.
              </li>
              <li>
                Les enfants apprennent mieux dans un environnement positif d'amour et
                d'encouragement.
              </li>
              <li>
                Les enfants comprennent mieux ce qu'ils découvrent par eux-mêmes que ce qu'ils
                entendent ou ce qu'ils voient.
              </li>
              <li>
                C'est pourquoi nous utilisons la méthode participative (travail en groupe,
                atelier, devoirs, jeux de rôle).
              </li>
            </ul>
          </article>
        </section>

        <section className="gallery-panel" id="vie-scolaire">
          <div className="panel-head">
            <h2>Vie scolaire et activités</h2>
            <p>Sorties, activités culturelles, sports et présentations pédagogiques.</p>
          </div>

          <div className="slider-shell">
            <button
              type="button"
              className="slider-btn"
              aria-label="Image précédente"
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
            <h2>Plan d'accès</h2>
            <p>
              Adresse : Kalaban-Coro / Nerecoro, rue 308, porte 472, non loin de la route de
              Garantiguibougou (terminus).
            </p>
            <p>Point de repère : Pharmacie BAMANOU, axe route de l'aéroport.</p>
            <p>Téléphones : 74 67 36 15 / 71 18 36 63</p>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
