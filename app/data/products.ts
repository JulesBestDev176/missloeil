export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  desc: string;
  detailDesc: string;
  type: string;
  instructions: string[];
  important?: string[];
  tips?: string;
  image: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Crème capillaire (100g)",
    category: "creme",
    price: "3 000 FCFA",
    desc: "Soin intensif pour les pointes. Nourrit en profondeur sans alourdir.",
    detailDesc: "Notre crème artisanale de 100g est conçue pour protéger et revitaliser vos longueurs. Riche en beurres végétaux, elle scelle l'hydratation durablement.",
    type: "Soin Pointes",
    instructions: [
      "Appliquer sur les pointes uniquement",
      "Éviter le cuir chevelu",
      "Fréquence : 2 à 3 fois par semaine"
    ],
    important: [
      "Le beurre de karité peut causer des pellicules s'il est appliqué sur le cuir chevelu",
      "Ne pas appliquer la crème à la racine"
    ],
    image: "/image/creme_clean.png"
  },
  {
    id: 2,
    name: "Huile pousse (15ml)",
    category: "huile",
    price: "2 000 FCFA",
    desc: "Élixir pur pour le cuir chevelu. Stimule et apaise.",
    detailDesc: "Une synergie d'huiles précieuses de 15ml pour prendre soin de votre cuir chevelu. Sa texture légère pénètre rapidement pour stimuler la pousse et apaiser les démangeaisons.",
    type: "Soin Cuir Chevelu",
    instructions: [
      "Appliquer quelques gouttes sur le cuir chevelu",
      "Masser délicatement pendant 3 à 5 minutes",
      "Utiliser sur cheveux secs ou humides",
      "Fréquence : 2 à 4 fois par semaine"
    ],
    tips: "Associer à la crème sur les pointes pour une chevelure hydratée et légère",
    image: "/image/huile.jpeg"
  },
];

export const routineRecommendation = {
  title: "Routine recommandée",
  steps: [
    { part: "Cuir chevelu", product: "Huile" },
    { part: "Pointes", product: "Crème" }
  ],
  benefit: "Meilleure hydratation sans pellicules"
};

export const whatsappNumber = "221781547778";
export const callNumber = "766264593";
