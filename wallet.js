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
  for (const name in wallets) {
    // Affiche les informations sur l'actif
    console.log( 
      name, " ==> ",
      "| Symbole : ",
      wallets[name].symbol,
      "| Quantité : ",
      wallets[name].quantity,
      "| Prix : ",
      wallets[name].price, " |"
    );
  }
}

// Fonction pour calculer la valeur totale
function calculateTotalValue() {
  // Initialise la valeur totale à 0
  let totalValue = 0;

  // Itère sur les actifs du portefeuille
  for (const name in wallets) {
    // Ajoute la valeur de l'actif à la valeur totale
    totalValue += wallets[name].quantity * wallets[name].price;
  }

  // Retourne la valeur totale
  return totalValue;
}

// Fonction pour calculer le rendement
function calculateReturn() {
  // Initialise le rendement à 0
  let returnRate = 0;

  // Vérifie que le portefeuille n'est pas vide
  if (!wallets) {
    return returnRate;
  }

  // Récupère la valeur de départ du portefeuille
  let startingValue =
    wallets[Object.keys(wallets)[0]].price *
    wallets[Object.keys(wallets)[0]].quantity;

  // Calcule le rendement
  returnRate = (calculateTotalValue() - startingValue) / startingValue;

  // Retourne le rendement
  return returnRate;
}

// Initialise le portefeuille
const wallets = {};

// Ajoute quelques actifs au portefeuille
addAsset("Apple", "AAPL", 1, 1000);
addAsset("Google", "GOOG", 1, 150);

// Affiche la liste des actifs
listAssets();

// Calcule la valeur totale
const totalValue = calculateTotalValue();
console.log("Valeur totale :", totalValue);

// Calcule le rendement
const returnRate = calculateReturn();
console.log("Rendement :", returnRate);
