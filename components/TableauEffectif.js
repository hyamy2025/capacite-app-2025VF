import React from "react";

export default function TableauEffectif({ data, setData }) {
  const handleChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setData({ total: value });
  };

  return (
    <div className="border rounded p-4 shadow mb-6">
      <h2 className="text-lg font-bold mb-2">Effectif Actuel</h2>
      <div className="flex items-center space-x-4">
        <label htmlFor="effectif" className="w-40">
          Nombre total d’apprenants :
        </label>
        <input
          id="effectif"
          type="number"
          value={data.total}
          onChange={handleChange}
          className="border px-2 py-1 rounded w-32"
        />
      </div>
    </div>
  );
}
