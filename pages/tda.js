import React, { useState } from "react";
import TableauSalles from "@/components/TableauSalles";
import TableauEffectif from "@/components/TableauEffectif";
import TableauRepartition from "@/components/TableauRepartition";
import TableauResultats from "@/components/TableauResultats";
import { initialTheoriqueData, initialPratiqueData, initialEffectifData, initialRepartitionData } from "@/utils/initialState";
import { calculerResultat } from "@/utils/calculs";

export default function TDA() {
  const [theoriques, setTheoriques] = useState(initialTheoriqueData);
  const [pratiques, setPratiques] = useState(initialPratiqueData);
  const [effectif, setEffectif] = useState(initialEffectifData);
  const [repartition, setRepartition] = useState(initialRepartitionData);

  const resultat = calculerResultat(theoriques, pratiques, repartition, effectif);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold mb-4">Tableau des Données : TDA</h1>
      <TableauSalles
        type="théorique"
        data={theoriques}
        setData={setTheoriques}
      />
      <TableauSalles
        type="pratique"
        data={pratiques}
        setData={setPratiques}
      />
      <TableauEffectif data={effectif} setData={setEffectif} />
      <TableauRepartition data={repartition} setData={setRepartition} />
      <TableauResultat resultat={resultat} />
    </div>
  );
}
