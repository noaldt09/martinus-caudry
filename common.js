/* Fonctions communes aux pages de commande (maquette).
   Les commandes sont gardées dans le navigateur (localStorage) : aucune commande n'est envoyée à la friterie.
   Dans la version finale, ce fichier sera remplacé par des appels à une base de données. */
const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const eur = (cents) => (cents / 100).toLocaleString("fr-FR", { style: "currency", currency: "EUR" });
const CLE = "martinus_commandes_maquette";
let memoire = [];

function lireCommandes() {
  try { return JSON.parse(localStorage.getItem(CLE) || "[]"); } catch (e) { return memoire; }
}
function ecrireCommandes(liste) {
  memoire = liste;
  try { localStorage.setItem(CLE, JSON.stringify(liste)); } catch (e) { /* stockage indisponible : on garde en mémoire */ }
}

const hm = (t) => { const [h, m] = t.split(":").map(Number); return h * 60 + m; };
const pad = (n) => String(n).padStart(2, "0");
const jourFr = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];

/* Créneaux de retrait : à partir de maintenant + délai de préparation, dans les horaires d'ouverture.
   Renvoie [{ value, label }] pour aujourd'hui, ou pour le prochain jour ouvert si c'est fermé. */
function creneaux() {
  const C = CONFIG.commande, O = CONFIG.ouverture;
  const maintenant = new Date();
  for (let d = 0; d < 8; d++) {
    const jour = new Date(maintenant.getFullYear(), maintenant.getMonth(), maintenant.getDate() + d);
    const plages = O[jour.getDay()] || [];
    const depart = d === 0 ? maintenant.getHours() * 60 + maintenant.getMinutes() + C.preparationMinutes : 0;
    const liste = [];
    plages.forEach(([ouv, fer]) => {
      const debut = Math.max(hm(ouv) + C.preparationMinutes, Math.ceil(depart / C.pasMinutes) * C.pasMinutes);
      const fin = hm(fer) - C.fermetureAvantMinutes;
      for (let t = Math.ceil(debut / C.pasMinutes) * C.pasMinutes; t <= fin; t += C.pasMinutes) {
        const heure = `${pad(Math.floor(t / 60))}h${pad(t % 60)}`;
        const cle = `${jour.getFullYear()}-${pad(jour.getMonth() + 1)}-${pad(jour.getDate())} ${pad(Math.floor(t / 60))}:${pad(t % 60)}`;
        liste.push({ value: cle, label: d === 0 ? `Aujourd'hui à ${heure}` : `${d === 1 ? "Demain" : jourFr[jour.getDay()]} à ${heure}` });
      }
    });
    if (liste.length) return liste;
  }
  return [];
}

function barreMaquette() {
  if (!CONFIG.commande.demo) return;
  const b = document.createElement("div");
  b.className = "demo-bar";
  b.textContent = "Maquette : produits et prix d'exemple. Aucune commande n'est envoyée à la friterie.";
  document.body.prepend(b);
}
