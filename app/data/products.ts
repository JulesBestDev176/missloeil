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
  // Produits individuels
  {
    id: 1,
    name: "Spray hydratant",
    category: "spray",
    price: "2 000 FCFA",
    desc: "Apporte l'eau et réveille vos cheveux au quotidien.",
    detailDesc: "Notre spray hydratant naturel est la première étape d'une routine capillaire réussie. Il apporte l'hydratation nécessaire à chaque fibre capillaire, réveille les cheveux secs et prépare à la nutrition.",
    type: "Soin Hydratant",
    instructions: [
      "Vaporiser sur les cheveux propres ou secs",
      "Appliquer sur l'ensemble de la chevelure",
      "Ne pas rincer",
      "Coiffer comme d'habitude"
    ],
    image: "/image/spray_hydratant.jpg"
  },
  {
    id: 2,
    name: "Crème nourrissante",
    category: "creme",
    price: "3 000 FCFA",
    desc: "Nourrit en profondeur et scelle l'hydratation durablement.",
    detailDesc: "Enrichie au karité et aux huiles végétales précieuses, notre crème nourrissante pénètre chaque mèche pour nourrir intensément et sceller l'hydratation. Idéale pour les cheveux secs, cassants ou fragiles.",
    type: "Soin Nourrissant",
    instructions: [
      "Appliquer sur cheveux propres et humides après le spray",
      "Répartir mèche par mèche",
      "Ne pas rincer",
      "Fréquence : 2 à 3 fois par semaine"
    ],
    important: [
      "Le beurre de karité peut causer des pellicules s'il est appliqué sur le cuir chevelu",
      "Ne pas appliquer la crème à la racine"
    ],
    image: "/image/creme_capillaire.jpg"
  },
  {
    id: 3,
    name: "Huile pousse",
    category: "huile",
    price: "2 000 FCFA",
    desc: "Stimule la croissance et fortifie le cuir chevelu.",
    detailDesc: "Une synergie d'huiles précieuses pour stimuler la pousse et fortifier les racines. Sa texture légère pénètre rapidement le cuir chevelu pour renforcer chaque follicule et apporter brillance et vitalité.",
    type: "Soin Pousse",
    instructions: [
      "Appliquer quelques gouttes sur le cuir chevelu",
      "Masser délicatement pendant 3 à 5 minutes",
      "Utiliser sur cheveux secs ou humides",
      "Fréquence : 2 à 3 fois par semaine"
    ],
    tips: "Scelle l'hydratation avec quelques gouttes après la crème nourrissante",
    image: "/image/huile_pousse.jpg"
  },
  // Duos & Routine
  {
    id: 4,
    name: "Duo Hydratation & Force",
    category: "duo",
    price: "3 500 FCFA",
    desc: "Spray hydratant + Huile pousse. Hydrate au quotidien et renforce les fibres.",
    detailDesc: "Le duo parfait pour des cheveux hydratés, souples et résistants. Le spray apporte l'eau essentielle tandis que l'huile renforce les pointes et réduit la casse au quotidien.",
    type: "Duo",
    instructions: [
      "Vaporiser le spray sur l'ensemble de la chevelure",
      "Masser le cuir chevelu avec quelques gouttes d'huile",
      "Utiliser au quotidien pour l'hydratation et 2-3 fois par semaine pour le massage"
    ],
    image: "/image/hydratation_force.jpg"
  },
  {
    id: 5,
    name: "Duo Nutrition & Pousse",
    category: "duo",
    price: "4 500 FCFA",
    desc: "Crème nourrissante + Huile pousse. Nourrit en profondeur et stimule la pousse.",
    detailDesc: "Le duo parfait pour des cheveux forts, sains et qui poussent. La crème nourrit en profondeur et répare les cheveux abîmés, l'huile stimule la pousse et fortifie les racines.",
    type: "Duo",
    instructions: [
      "Appliquer la crème sur cheveux propres et humides",
      "Sceller l'hydratation avec quelques gouttes d'huile pousse",
      "Utiliser 2 à 3 fois par semaine pour de meilleurs résultats"
    ],
    image: "/image/nutrition_pousse.jpg"
  },
  {
    id: 6,
    name: "Duo Hydratation & Nutrition",
    category: "duo",
    price: "4 500 FCFA",
    desc: "Spray hydratant + Crème nourrissante. Hydrate, nourrit et adoucit.",
    detailDesc: "Le duo essentiel pour des cheveux hydratés, doux et en pleine santé. Le spray hydrate intensément, la crème nourrit et adoucit mèche par mèche pour une chevelure rayonnante.",
    type: "Duo",
    instructions: [
      "Vaporiser le spray hydratant sur cheveux propres ou secs",
      "Appliquer la crème capillaire mèche par mèche",
      "Ne pas rincer — coiffer comme d'habitude"
    ],
    image: "/image/hydratation_nutrition.jpg"
  },
  {
    id: 7,
    name: "Routine Complète",
    category: "routine",
    price: "6 500 FCFA",
    desc: "Spray + Crème + Huile. Le trio parfait pour des cheveux forts, sains et qui poussent.",
    detailDesc: "La routine complète Miss L'oeil réunit les 3 soins essentiels : le spray hydrate en profondeur, la crème nourrit et scelle, l'huile stimule la pousse et clarifie le cuir chevelu. Résultats visibles dès les premières semaines.",
    type: "Routine Complète",
    instructions: [
      "1. Vaporiser le spray sur cheveux propres ou humides",
      "2. Appliquer la crème capillaire mèche par mèche",
      "3. Sceller avec quelques gouttes d'huile pousse sur le cuir chevelu",
      "Fréquence : 2 à 3 fois par semaine pour de meilleurs résultats"
    ],
    image: "/image/hydratation_pousse.jpg"
  },
];

export const routineRecommendation = {
  title: "Routine recommandée",
  steps: [
    { part: "Hydratation", product: "Spray" },
    { part: "Nutrition", product: "Crème" },
    { part: "Pousse", product: "Huile" }
  ],
  benefit: "Cheveux forts, hydratés et longueurs saines"
};

export const whatsappNumber = "221781547778";
export const callNumber = "766264593";
