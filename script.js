function loadRecipes() {
    const recipeList = document.getElementById('recipe-list');
    const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

    recipeList.innerHTML = '';

    recipes.forEach((recipe, index) => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h3>${recipe.title}</h3>
        `;
        card.onclick = () => openModal(recipe, index);
        recipeList.appendChild(card);
    });
}

function openModal(recipe, index) {
    document.getElementById('modal-title').textContent = recipe.title;
    document.getElementById('modal-image').src = recipe.image;
    document.getElementById('modal-description').textContent = `Description: ${recipe.description}`;
    document.getElementById('modal-items').textContent = `Items Needed: ${recipe.items}`;

    const deleteButton = document.getElementById('delete-recipe');
    deleteButton.onclick = () => {
        deleteRecipe(index);
        closeModal();
    };

    document.getElementById('recipe-modal').style.display = 'block';
}

function deleteRecipe(index) {
    let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
    recipes.splice(index, 1);
    localStorage.setItem('recipes', JSON.stringify(recipes));
    loadRecipes();
}

function closeModal() {
    document.getElementById('recipe-modal').style.display = 'none';
}

const modal = document.getElementById('recipe-modal');
modal.onclick = function(event) {
    if (event.target.className === 'close' || event.target === modal) {
        closeModal();
    }
};

loadRecipes();
