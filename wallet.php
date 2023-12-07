<?php

// Fonction pour ajouter un actif
function addAsset($name, $symbol, $quantity, $price) {
    global $wallets;

    // Vérifie que les paramètres sont valides
    if (!$name || !$symbol || !$quantity || !$price) {
        return;
    }

    // Ajoute l'actif au portefeuille
    $wallets[$name] = [
        "symbol" => $symbol,
        "quantity" => $quantity,
        "price" => $price,
    ];
}

// Fonction pour supprimer un actif
function deleteAsset($name) {
    global $wallets;

    // Vérifie que l'actif existe
    if (!isset($wallets[$name])) {
        return;
    }

    // Supprime l'actif du portefeuille
    unset($wallets[$name]);
}

// Fonction pour lister les actifs
function listAssets() {
    global $wallets;

    // Itère sur les actifs du portefeuille
    foreach ($wallets as $name => $asset) {
        // Affiche les informations sur l'actif
        echo "$name ==> | Symbole : {$asset['symbol']} | Quantité : {$asset['quantity']} | Prix : {$asset['price']} |\n";
    }
}

// Fonction pour calculer la valeur totale
function calculateTotalValue() {
    global $wallets;

    // Initialise la valeur totale à 0
    $totalValue = 0;

    // Itère sur les actifs du portefeuille
    foreach ($wallets as $asset) {
        // Ajoute la valeur de l'actif à la valeur totale
        $totalValue += $asset["quantity"] * $asset["price"];
    }

    // Retourne la valeur totale
    return $totalValue;
}

// Fonction pour calculer le rendement
function calculateReturn() {
    global $wallets;

    // Initialise le rendement à 0
    $returnRate = 0;

    // Vérifie que le portefeuille n'est pas vide
    if (empty($wallets)) {
        return $returnRate;
    }

    // Récupère la valeur de départ du portefeuille
    $startingValue = $wallets[array_key_first($wallets)]["price"] * $wallets[array_key_first($wallets)]["quantity"];

    // Calcule le rendement
    $returnRate = (calculateTotalValue() - $startingValue) / $startingValue;

    // Retourne le rendement
    return $returnRate;
}

// Initialise le portefeuille
$wallets = [];

// Ajoute quelques actifs au portefeuille
echo "*** Fonctionnalité 1 : Ajouter des actifs au portefeuille...****\n";
addAsset("Apple", "AAPL", 1, 100);
addAsset("Google", "GOOG", 1, 150);
addAsset("Tesla", "TSLA", 4, 1000);

// Liste les actifs du portefeuille
echo "*** Fonctionnalité 2 : Lister les éléments du protefeuille :****\n";
listAssets();

// Exemple d'utilisation de la fonction deleteAsset
echo "*** Fonctionnalité 3 : Supprimer l'actif Google...****\n";
deleteAsset("Google");

// Liste les actifs du portefeuille
echo "Actifs restants :\n";
listAssets();

// Calcule la valeur totale du portefeuille
echo "*** Fonctionnalité 4 : Calculer la valeur total des éléements du portefeuille****\n";
$totalValue = calculateTotalValue();
echo "Valeur totale : $totalValue\n";

// Calcule le rendement du portefeuille
echo "*** Fonctionnalité 5 : Calculer le rendement****\n";
$returnRate = calculateReturn();
echo "Rendement : $returnRate\n";
