# Fonction pour ajouter un actif
def add_asset(name, symbol, quantity, price):
    """
    Ajoute un actif au portefeuille.

    Args:
        name: Nom de l'actif.
        symbol: Symbole boursier de l'actif.
        quantity: Quantité d'unités détenues.
        price: Prix d'achat de l'unité.
    """
    if not name or not symbol or not quantity or not price:
        return

    wallets[name] = {
        "symbol": symbol,
        "quantity": quantity,
        "price": price,
    }

# Fonction pour supprimer un actif
def delete_asset(name):
    """
    Supprime un actif du portefeuille.

    Args:
        name: Nom de l'actif.
    """
    if name not in wallets:
        return

    del wallets[name]

# Fonction pour lister les actifs
def list_assets():
    """
    Affiche la liste des actifs du portefeuille.
    """
    for name, asset in wallets.items():
        print(f"{name} ==> | Symbole : {asset['symbol']} | Quantité : {asset['quantity']} | Prix : {asset['price']} |")

# Fonction pour calculer la valeur totale
def calculate_total_value():
    """
    Calcule la valeur totale du portefeuille.

    Returns:
        float: Valeur totale du portefeuille.
    """
    total_value = 0

    for asset in wallets.values():
        total_value += asset["quantity"] * asset["price"]

    return total_value

# Fonction pour calculer le rendement
def calculate_return():
    """
    Calcule le rendement du portefeuille.

    Returns:
        float: Rendement du portefeuille.
    """
    if not wallets:
        return 0

    starting_value = (
        wallets[list(wallets.keys())[0]]["price"]
        * wallets[list(wallets.keys())[0]]["quantity"]
    )
    return (calculate_total_value() - starting_value) / starting_value

# Initialise le portefeuille
wallets = {}

# Ajoute quelques actifs au portefeuille
print("*** Fonctionnalité 1 : Ajouter des actifs au portefeuille...****")
add_asset("Apple", "AAPL", 1, 100)
add_asset("Google", "GOOG", 1, 150)
add_asset("Tesla", "TSLA", 4, 1000)

# Liste les actifs du portefeuille
print("*** Fonctionnalité 2 : Lister les éléments du protefeuille :****")
list_assets()

# Exemple d'utilisation de la fonction delete_asset
print("*** Fonctionnalité 3 : Supprimer l' actif Google...****")
delete_asset("Google")

# Liste les actifs du portefeuille
print("Actifs restants :")
list_assets()

# Calcule la valeur totale du portefeuille
print("*** Fonctionnalité 4 : Calculer la valeur total des éléements du portefeuille****")
total_value = calculate_total_value()
print("Valeur totale :", total_value)

# Calcule le rendement du portefeuille
print("*** Fonctionnalité 5 : Calculer le rendement****")
return_rate = calculate_return()
print("Rendement :", return_rate)


