const db = require('./db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db('recipes')
}

function getShoppingList(recipe_id){
    return db('recipe-ingredients-intermediary as inter')
        .where({recipe_id})
        .join('ingredients as i', 'inter.ingredient_id', 'i.id')
        .select('i.name', 'inter.ingredient_quantity')
}

function getInstructions(recipe_id){
    return db('recipes')
        .where({id: recipe_id})
        .select('instructions')
}