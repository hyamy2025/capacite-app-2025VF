import React from "react";

export default function TableauSalles({ type, data, setData }) {
  const handleChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = field === "nom" ? value : parseFloat(value) || 0;
    setData(newData);
  };

  const ajouterSalle = () => {
    const nouvelleSalle = {
      id: Date.now(),
      nom: `${type === "théorique" ? "Salle" : "Atelier"} ${data.length + 1}`,
      surfacePedagogique: 0,
      cno: 1,
      heuresJour: 6,
      semaines: 40,
    };
    setData([...data, nouvelleSalle]);
  };

  const supprimerSalle = (index) => {
    const newData = [...data];
    newData.splice(index, 1);
    setData(newData);
  };

  return (
    <div className="border rounded p-4 shadow mb-6">
      <h2 className="text-lg font-bold mb-4">
        Salles {type === "théorique" ? "Théoriques" : "Pratiques"}
      </h2>
      <table className="table-auto w-full mb-4 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-2 py-1 border">Nom</th>
            <th className="px-2 py-1 border">Surface pédagogique (m²)</th>
            <th className="px-2 py-1 border">CNO</th>
            <th className="px-2 py-1 border">Heures/Jour</th>
            <th className="px-2 py-1 border">Semaines</th>
            <th className="px-2 py-1 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((salle, index) => (
            <tr key={salle.id}>
              <td className="border px-2 py-1">
                <input
                  type="text"
                  value={salle.nom}
                  onChange={(e) =>
                    handleChange(index, "nom", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={salle.surfacePedagogique}
                  onChange={(e) =>
                    handleChange(index, "surfacePedagogique", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={salle.cno}
                  onChange={(e) => handleChange(index, "cno", e.target.value)}
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={salle.heuresJour}
                  onChange={(e) =>
                    handleChange(index, "heuresJour", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1">
                <input
                  type="number"
                  value={salle.semaines}
                  onChange={(e) =>
                    handleChange(index, "semaines", e.target.value)
                  }
                  className="w-full border rounded px-1"
                />
              </td>
              <td className="border px-2 py-1 text-center">
                <button
                  onClick={() => supprimerSalle(index)}
                  className="text-red-500 hover:underline"
                >
                  Supprimer
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        onClick={ajouterSalle}
        className="bg-blue-500 text-white px-3 py-1 rounded"
      >
        Ajouter {type === "théorique" ? "salle" : "atelier"}
      </button>
    </div>
  );
}
