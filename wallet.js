// Fonction pour ajouter un actif
function addAsset(name, symbol, quantity, price) {
  // Vérifie que les paramètres sont valides
  if (!name || !symbol || !quantity || !price) {
      return;
  }

  // Ajoute l'actif au portefeuille
  wallets[name] = {
      symbol: symbol,
      quantity: quantity,
      price: price,
  };
}

// Fonction pour supprimer un actif
function deleteAsset(name) {
  // Vérifie que l'actif existe
  if (!wallets[name]) {
      return;
  }

  // Supprime l'actif du portefeuille
  delete wallets[name];
}

// Fonction pour lister les actifs
function listAssets() {
  // Itère sur les actifs du portefeuille
  for (const [name, asset] of Object.entries(wallets)) {
      // Affiche les informations sur l'actif
      console.log(`${name} ==> | Symbole : ${asset.symbol} | Quantité : ${asset.quantity} | Prix : ${asset.price} |`);
  }
}

// Fonction pour calculer la valeur totale
function calculateTotalValue() {
  // Initialise la valeur totale à 0
  let totalValue = 0;

  // Itère sur les actifs du portefeuille
  for (const asset of Object.values(wallets)) {
      // Ajoute la valeur de l'actif à la valeur totale
      totalValue += asset.quantity * asset.price;
  }

  // Retourne la valeur totale
  return totalValue;
}

// Fonction pour calculer le rendement
function calculateReturn() {
  // Initialise le rendement à 0
  let returnRate = 0;

  // Vérifie que le portefeuille n'est pas vide
  if (Object.keys(wallets).length === 0) {
      return returnRate;
  }

  // Récupère la valeur de départ du portefeuille
  const startingAsset = Object.values(wallets)[0];
  const startingValue = startingAsset.price * startingAsset.quantity;

  // Calcule le rendement
  returnRate = (calculateTotalValue() - startingValue) / startingValue;

  // Retourne le rendement
  return returnRate;
}

// Initialise le portefeuille
const wallets = {};

// Ajoute quelques actifs au portefeuille
console.log("*** Fonctionnalité 1 : Ajouter des actifs au portefeuille...****");
addAsset("Apple", "AAPL", 1, 100);
addAsset("Google", "GOOG", 1, 150);
addAsset("Tesla", "TSLA", 4, 1000);

// Liste les actifs du portefeuille
console.log("*** Fonctionnalité 2 : Lister les éléments du protefeuille :****");
listAssets();

// Exemple d'utilisation de la fonction deleteAsset
console.log("*** Fonctionnalité 3 : Supprimer l'actif Google...****");
deleteAsset("Google");

// Liste les actifs du portefeuille
console.log("Actifs restants :");
listAssets();

// Calcule la valeur totale du portefeuille
console.log("*** Fonctionnalité 4 : Calculer la valeur total des éléements du portefeuille****");
const totalValue = calculateTotalValue();
console.log("Valeur totale :", totalValue);

// Calcule le rendement du portefeuille
console.log("*** Fonctionnalité 5 : Calculer le rendement****");
const returnRate = calculateReturn();
console.log("Rendement :", returnRate);