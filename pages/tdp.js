"use client";
import React, { useEffect, useState } from "react";
import TableauSalles from "@/components/TableauSalles";
import TableauEffectif from "@/components/TableauEffectif";
import TableauRepartition from "@/components/TableauRepartition";
import TableauResultats from "@/components/TableauResultats";
import generatePDF from "@/utils/generatePDF";
import { initialState } from "@/utils/initialState";
import { calculerResultat } from "@/utils/calculs";

export default function TDP() {
  const [data, setData] = useState(initialState("tdp"));
  const [resultat, setResultat] = useState({});

  useEffect(() => {
    const storedData = localStorage.getItem("tdpData");
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tdpData", JSON.stringify(data));
    const res = calculerResultat(data);
    setResultat(res);
  }, [data]);

  return (
    <div className="p-4 space-y-6">
      <h1 className="text-2xl font-bold">Tableau de Dimensionnement - Pratique</h1>
      <TableauSalles data={data} setData={setData} type="pratique" />
      <TableauEffectif data={data} setData={setData} />
      <TableauRepartition data={data} setData={setData} />
      <TableauResultats resultat={resultat} />
      <div className="flex justify-end">
        <button
          onClick={() => generatePDF("tdp", data, resultat)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Télécharger PDF
        </button>
      </div>
    </div>
  );
}
