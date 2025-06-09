import React from "react";

export default function TableauRepartition({ data, setData }) {
  const handleChange = (field, value) => {
    setData({ ...data, [field]: parseFloat(value) || 0 });
  };

  return (
    <div className="border rounded p-4 shadow mb-6">
      <h2 className="text-lg font-bold mb-4">Répartition actuelle des heures</h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-4">
          <label className="w-40">Heures Théoriques / apprenant :</label>
          <input
            type="number"
            value={data.theorique}
            onChange={(e) => handleChange("theorique", e.target.value)}
            className="border px-2 py-1 rounded w-32"
          />
        </div>
        <div className="flex items-center space-x-4">
          <label className="w-40">Heures Pratiques / apprenant :</label>
          <input
            type="number"
            value={data.pratique}
            onChange={(e) => handleChange("pratique", e.target.value)}
            className="border px-2 py-1 rounded w-32"
          />
        </div>
      </div>
    </div>
  );
}
