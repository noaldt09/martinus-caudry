/* =====================================================================
   À MODIFIER : toutes les informations du site sont ici.
   Chaque champ laissé vide affiche un repère jaune « à compléter ».
   ===================================================================== */
const CONFIG = {
  nom: "Chez Martinus",
  ville: "Caudry (59)",  // friterie

  // Logo : chemin d'une image (ex. "images/logo.png"). Vide = nom écrit en texte, à remplacer.
  logo: "",

  // Photo d'ambiance du haut de page (ex. "images/ambiance.jpg"). Vide = emplacement.
  photoAccueil: "",

  accroche: "Chez Martinus, la friterie de Caudry",
  sousAccroche: "Smash burgers, frites bien dorées, tacos et wraps, à emporter ou livrés à domicile.",

  presentation: {
    titre: "Une friterie rénovée, des smash burgers et de bonnes frites",
    texte: "Martin a repris l'ancienne Friterie des Étangs, à Caudry, l'a entièrement rénovée et rebaptisée Chez Martinus.\nSa spécialité : les smash burgers, inspirés du street food américain découvert lors de ses voyages à New York. Le steak est pressé sur une plaque bien chaude pour être caramélisé.",
    photo: "",     // ex. "images/friterie.jpg"
    points: ["Smash burgers", "Frites", "Tacos & wraps", "À emporter", "Livraison à domicile"]
  },

  carte: {
    intro: "Une sélection de nos grands classiques. La carte complète et les prix sont à ajouter ci-dessous.",
    note: "",      // ex. précision sur les allergènes ou les suggestions du jour
    plats: [
      // Descriptions sans prix : à compléter avec la carte et les tarifs réels, et des photos des plats.
      { nom: "Smash burgers", description: "Notre spécialité : le steak pressé sur plaque très chaude pour une belle croûte caramélisée.", prix: "", photo: "" },
      { nom: "Burgers", description: "Les burgers de la maison. Composition et tarifs à compléter.", prix: "", photo: "" },
      { nom: "Frites", description: "Des frites bien dorées et bien servies.", prix: "", photo: "" },
      { nom: "Tacos, wraps et salades", description: "À emporter ou en livraison à domicile. Composition et tarifs à compléter.", prix: "", photo: "" }
    ]
  },

  galerie: [
    // { src: "images/galerie1.jpg", alt: "Description de la photo" }
  ],

  adresse: "135 rue de la République, 59540 Caudry",
  telephone: "03 27 85 30 45",
  // Horaires relevés sur la fiche de la ville de Caudry : à confirmer par vos soins.
  horaires: [
    { jour: "Lundi", heures: "11h30–14h · 18h30–21h30" },
    { jour: "Mardi", heures: "11h30–14h · 18h30–21h30" },
    { jour: "Mercredi", heures: "11h30–14h · 18h30–21h30" },
    { jour: "Jeudi", heures: "11h30–14h · 18h30–21h30" },
    { jour: "Vendredi", heures: "11h30–14h · 18h30–22h30" },
    { jour: "Samedi", heures: "11h30–14h · 18h30–22h30" },
    { jour: "Dimanche", heures: "18h30–21h30" }
  ],
  reservation: "",   // lien pour commander en ligne (https://…), si vous en avez un. Vide = bouton « Appeler ».
  reseaux: [
    { nom: "Facebook", url: "https://www.facebook.com/Chez-Martinus" },
    { nom: "Instagram", url: "https://www.instagram.com/chez_martinus_friterie/" }
  ]
};
/* ================== Fin de la zone à modifier ================== */

/* ---------- Commande en ligne (MAQUETTE) ----------
   Les produits et prix ci-dessous sont des EXEMPLES : à remplacer par la vraie carte de Chez Martinus.
   Mettre demo à false pour retirer le bandeau « Maquette ». Les prix sont en centimes. */
CONFIG.commande = {
  demo: true,
  paiement: "Paiement sur place, au retrait de la commande.",
  preparationMinutes: 15,   // délai de préparation habituel (à confirmer)
  pasMinutes: 10,           // un créneau toutes les 10 minutes
  fermetureAvantMinutes: 10,// dernier créneau, avant la fermeture (à confirmer)
  categories: [
    { nom: "Burgers", produits: [
      { id: "smash1", nom: "Smash burger simple", description: "Un steak pressé sur plaque très chaude.", prix: 700 },
      { id: "smash2", nom: "Smash burger double", description: "Deux steaks pressés, bien caramélisés.", prix: 900 }
    ]},
    { nom: "Frites", produits: [
      { id: "frites-p", nom: "Frites, petite barquette", description: "Frites bien dorées.", prix: 250 },
      { id: "frites-g", nom: "Frites, grande barquette", description: "Frites bien dorées.", prix: 350 }
    ]},
    { nom: "Tacos & wraps", produits: [
      { id: "tacos", nom: "Tacos", description: "Composition à compléter.", prix: 850 },
      { id: "wrap", nom: "Wrap", description: "Composition à compléter.", prix: 700 }
    ]},
    { nom: "Boissons", produits: [
      { id: "canette", nom: "Canette 33 cl", description: "Choix à compléter.", prix: 200 }
    ]}
  ]
};
// Horaires utilisés pour proposer les créneaux (0 = dimanche … 6 = samedi). Doivent suivre la liste des horaires ci-dessus.
CONFIG.ouverture = {
  0: [["18:30", "21:30"]],
  1: [["11:30", "14:00"], ["18:30", "21:30"]],
  2: [["11:30", "14:00"], ["18:30", "21:30"]],
  3: [["11:30", "14:00"], ["18:30", "21:30"]],
  4: [["11:30", "14:00"], ["18:30", "21:30"]],
  5: [["11:30", "14:00"], ["18:30", "22:30"]],
  6: [["11:30", "14:00"], ["18:30", "22:30"]]
};
