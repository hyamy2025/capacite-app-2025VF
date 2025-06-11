import React, { useState } from "react";
import TableauSalles from "./TableauSalles";
import TableauSallesTPSpecifiques from "./TableauSallesTPSpecifiques";
import TableauRepartition from "./TableauRepartition";
import TableauResultats from "./TableauResultats";

const specialties = [
  { "Spécialité": "Math", "Besoin Théorique par Groupe": 10, "Besoin Pratique par Groupe": 12 },
  { "Spécialité": "Physique", "Besoin Théorique par Groupe": 8, "Besoin Pratique par Groupe": 14 },
];

export default function ResultsContainer() {
  // ... حالتك القديمة

  // حالات TP Spécifiques مضافة
  const [cnoTPS, setCnoTPS] = useState(1.0);
  const [semainesTPS, setSemainesTPS] = useState(72);
  const [heuresTPS, setHeuresTPS] = useState(56);
  const [sallesTPS, setSallesTPS] = useState([
    { surface: '', cno: 1.0, semaines: 72, heures: 56, surfaceP: 0, heuresMax: 0 },
  ]);

  // ... باقي الحالات

  // الحسابات للنتائج
  const totalHeuresTheo = salles.reduce((sum, s) => sum + Number(s.heuresMax||0), 0);
  const totalHeuresPrat = sallesTPS.reduce((sum, s) => sum + Number(s.heuresMax||0), 0);
  // ... باقي الحسابات

  const moyenneSurfaceTheo = salles.length
    ? (salles.reduce((a, s) => a + Number(s.surfaceP) || 0, 0) / salles.length).toFixed(2)
    : 0;
  const moyenneSurfacePrat = sallesTPS.length
    ? (sallesTPS.reduce((a, s) => a + Number(s.surfaceP) || 0, 0) / sallesTPS.length).toFixed(2)
    : 0;

  return (
    <div>
      <div className="flex gap-6">
        <TableauSalles
          salles={salles}
          setSalles={setSalles}
          cno={cno}
          setCno={setCno}
          semaines={semaines}
          setSemaines={setSemaines}
          heures={heures}
          setHeures={setHeures}
        />
        <TableauSallesTPSpecifiques
          salles={sallesTPS}
          setSalles={setSallesTPS}
          cno={cnoTPS}
          setCno={setCnoTPS}
          semaines={semainesTPS}
          setSemaines={setSemainesTPS}
          heures={heuresTPS}
          setHeures={setHeuresTPS}
        />
        <TableauRepartition
          effectifData={effectifData}
          specialties={specialties}
          setEffectifData={setEffectifData}
        />
      </div>
      <TableauResultats
        data={{
          totalHeuresTheo: Number(totalHeuresTheo),
          totalHeuresPrat: Number(totalHeuresPrat),
          besoinTheoTotal: Number(besoinTheoTotal),
          besoinPratTotal: Number(besoinPratTotal),
          moyenneBesoinTheo: Number(moyenneBesoinTheo),
          moyenneBesoinPrat: Number(moyenneBesoinPrat),
          moyenneSurfaceTheo: Number(moyenneSurfaceTheo),
          moyenneSurfacePrat: Number(moyenneSurfacePrat),
        }}
      />
    </div>
  );
}