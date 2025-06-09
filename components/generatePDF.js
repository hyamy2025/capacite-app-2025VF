import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function generatePDF(titre, theoriques, pratiques, effectif, repartition, resultat) {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text(`Rapport ${titre}`, 14, 20);

  doc.setFontSize(12);
  doc.text(`Effectif total : ${effectif.total}`, 14, 30);

  autoTable(doc, {
    startY: 40,
    head: [["Nom", "Surface", "CNO", "Heures/Jour", "Semaines"]],
    body: theoriques.map(s => [s.nom, s.surfacePedagogique, s.cno, s.heuresJour, s.semaines]),
    theme: "grid",
    headStyles: { fillColor: [220, 220, 220] },
    margin: { top: 10 },
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Nom", "Surface", "CNO", "Heures/Jour", "Semaines"]],
    body: pratiques.map(s => [s.nom, s.surfacePedagogique, s.cno, s.heuresJour, s.semaines]),
    theme: "grid",
    headStyles: { fillColor: [200, 200, 255] },
    margin: { top: 10 },
  });

  autoTable(doc, {
    startY: doc.lastAutoTable.finalY + 10,
    head: [["Type", "Capacité Globale", "Besoins", "Écart"]],
    body: [
      ["Théorique", resultat.capaciteTheorique, resultat.besoinsTheoriques, resultat.ecartTheorique],
      ["Pratique", resultat.capacitePratique, resultat.besoinsPratiques, resultat.ecartPratique],
    ],
    theme: "striped",
    margin: { top: 10 },
  });

  doc.save(`${titre.replace(/\s+/g, "_")}.pdf`);
}
