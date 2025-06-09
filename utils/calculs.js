export function calculerCapaciteGlobale(salles, type) {
  return salles.reduce((acc, salle) => {
    const capacite =
      (salle.surfacePedagogique / salle.cno) *
      salle.heuresJour *
      salle.semaines;
    return acc + capacite;
  }, 0);
}

export function calculerBesoinsHeures(effectif, repartition) {
  return {
    theorique: effectif.total * repartition.theorique,
    pratique: effectif.total * repartition.pratique,
  };
}

export function calculerResultat(theoriques, pratiques, repartition, effectif) {
  const capaciteTheorique = calculerCapaciteGlobale(theoriques, "théorique");
  const capacitePratique = calculerCapaciteGlobale(pratiques, "pratique");

  const besoins = calculerBesoinsHeures(effectif, repartition);

  return {
    capaciteTheorique,
    capacitePratique,
    besoinsTheoriques: besoins.theorique,
    besoinsPratiques: besoins.pratique,
    ecartTheorique: capaciteTheorique - besoins.theorique,
    ecartPratique: capacitePratique - besoins.pratique,
  };
}
