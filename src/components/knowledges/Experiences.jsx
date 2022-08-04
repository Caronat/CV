import React from "react";

const Experiences = () => {
  return (
    <div className="experiences-container">
      <h3>Expériences</h3>
      <div className="exp-1">
        <h4>Chargé d'étude au sein de la direction formation</h4>
        <h5>2013 à aujourd'hui</h5>
        <p>
          J'ai en charge la gestion des données réglementaires liées à la
          formation et le développement d'outils internes. Ceci m'a amené à
          comprendre et synthétiser les besoins de mon équipe, partager mon
          expertise pour conseiller des solutions afin d'automatiser les tâches
          de l'équipe via du développement.
        </p>
      </div>
      <div className="exp-2">
        <h4>Formations autodidacte</h4>
        <h5>2020 à aujourd'hui</h5>
        <p>
          J’ai commencé par le HTML / CSS ainsi que les framework bootstrap et
          materialize CSS pour ensuite apprendre le JS que j’ai poussé avec
          l’algorithmique et enfin me lancer sur React. Tout au long de cette
          formation, j’ai eu à cœur de me m'imprégner des bonnes pratiques de
          développement comme notamment l’utilisation de Git, la lisibilité et
          la maintenabilité du code et l'écriture de test. J’ai également pu
          expérimenter Firebase et le TypeScript lors de certains projets.
        </p>
      </div>
    </div>
  );
};

export default Experiences;
