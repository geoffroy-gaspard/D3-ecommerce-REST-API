// REST = Representational State Transfer
// CRUD (Create Read Update Delete) Action de base possible
// GET permet d'acceder à une ressource en lecture
// POST permet de créer une nouvelle ressource
// PUT permet de remplacer une ressource, cad mettre à jour toute la ressource
// PATCH permet de mettre à jour une partie de la ressource
// DELETE permet de supprimer une ressource
const express = require('express');

// Catégories : /api/categories
// Produits : /api/products

const categories = [
    { id : 1, nom : "Jeux vidéos" },
    { id : 2, nom : "Ordinateurs" }
];

const app = express();

// Middleware permettant de lire le format JSON
app.use(express.json());

app.get("/api/categories", (request, response) => {
    response.send(categories);
});

app.get("/api/categories/:id", (request, response) => {
    // response.send(request.params.id);
    const id = parseInt(request.params.id);
    // categories.forEach(function(categorie) {
    //     if(categorie.id === id) {
    //         response.send(categorie);
    //     }
    // });
    const category = categories.find((category) => category.id === id);
    response.send(category);
});

app.post("/api/categories", (request, response) => {
    categories.push(request.body);
    response.send("Catégorie créée avec succès");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server run on port ${PORT}`);
});