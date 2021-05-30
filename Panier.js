function refresh() {
    //Récupération des données du Panier
    var PanierJSON = localStorage.getItem("Panier");
    var Panier = JSON.parse(PanierJSON);
    var TotalArticles = 0;

    //Addition de toutes les quantités du panier
    for (value in Panier.quantité) {
        TotalArticles += Panier.quantité[value];
    }

    // Affichage seulement si le panier esr rempli
    if (TotalArticles > 0) {
        document.getElementById('Nb_articles').textContent = TotalArticles
    }

}

refresh();
