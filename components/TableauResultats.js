import React from "react";

export default function TableauResultats({ resultat }) {
  const getColor = (ecart) => (ecart >= 0 ? "text-green-600" : "text-red-600");

  return (
    <div className="border rounded p-4 shadow">
      <h2 className="text-lg font-bold mb-4">Résultat</h2>
      <table className="table-auto w-full text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1">Type</th>
            <th className="border px-2 py-1">Capacité Globale</th>
            <th className="border px-2 py-1">Besoins</th>
            <th className="border px-2 py-1">Écart</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">Théorique</td>
            <td className="border px-2 py-1">{resultat.capaciteTheorique}</td>
            <td className="border px-2 py-1">{resultat.besoinsTheoriques}</td>
            <td className={`border px-2 py-1 font-semibold ${getColor(resultat.ecartTheorique)}`}>
              {resultat.ecartTheorique}
            </td>
          </tr>
          <tr>
            <td className="border px-2 py-1">Pratique</td>
            <td className="border px-2 py-1">{resultat.capacitePratique}</td>
            <td className="border px-2 py-1">{resultat.besoinsPratiques}</td>
            <td className={`border px-2 py-1 font-semibold ${getColor(resultat.ecartPratique)}`}>
              {resultat.ecartPratique}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
