import {
  calculerHeuresRestantes,
  calculerApprenantsPossibles,
  determinerEtat,
} from '../utils/calculs';

export default function TableauResultats({ data }) {
  const {
    totalHeuresTheo,
    totalHeuresPrat,
    besoinTheoTotal,
    besoinPratTotal,
    moyenneBesoinTheo,
    moyenneBesoinPrat,
    moyenneSurfaceTheo,
    moyenneSurfacePrat,
  } = data;

  const heuresRestantesTheo = calculerHeuresRestantes(totalHeuresTheo, besoinTheoTotal);
  const heuresRestantesPrat = calculerHeuresRestantes(totalHeuresPrat, besoinPratTotal);

  const apprenantsPossiblesTheo = calculerApprenantsPossibles(
    heuresRestantesTheo, moyenneBesoinTheo, moyenneSurfaceTheo
  );

  const apprenantsPossiblesPrat = calculerApprenantsPossibles(
    heuresRestantesPrat, moyenneBesoinPrat, moyenneSurfacePrat
  );

  const etatTheo = determinerEtat(heuresRestantesTheo);
  const etatPrat = determinerEtat(heuresRestantesPrat);

  const testGlobal = etatTheo === 'Excédent' && etatPrat === 'Excédent' ? 'Excédent' : 'Dépassement';
  const couleurGlobal = testGlobal === 'Excédent' ? 'text-green-600' : 'text-red-600';

  return (
    <div className="bg-white shadow rounded-2xl p-4 mb-8">
      <h2 className="text-xl font-bold text-gray-700 mb-4">Résultats</h2>
      <table className="w-full table-auto border text-sm mb-4">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Type</th>
            <th className="border p-2">Heures restantes</th>
            <th className="border p-2">Apprenants possibles</th>
            <th className="border p-2">État</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border p-2">Théorique</td>
            <td className="border p-2 text-center">{isNaN(heuresRestantesTheo) ? 0 : heuresRestantesTheo}</td>
            <td className="border p-2 text-center">{isNaN(apprenantsPossiblesTheo) ? 0 : apprenantsPossiblesTheo}</td>
            <td className={`border p-2 text-center font-semibold ${etatTheo === 'Excédent' ? 'text-green-600' : 'text-red-600'}`}>
              {etatTheo}
            </td>
          </tr>
          <tr>
            <td className="border p-2">Pratique</td>
            <td className="border p-2 text-center">{isNaN(heuresRestantesPrat) ? 0 : heuresRestantesPrat}</td>
            <td className="border p-2 text-center">{isNaN(apprenantsPossiblesPrat) ? 0 : apprenantsPossiblesPrat}</td>
            <td className={`border p-2 text-center font-semibold ${etatPrat === 'Excédent' ? 'text-green-600' : 'text-red-600'}`}>
              {etatPrat}
            </td>
          </tr>
          <tr>
            <td className="border p-2 font-bold">Test Global</td>
            <td colSpan="3" className={`border p-2 text-center font-bold ${couleurGlobal}`}>
              {testGlobal}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}