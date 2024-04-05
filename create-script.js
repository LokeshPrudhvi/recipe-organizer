document.getElementById('recipe-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('recipe-title').value;
    const description = document.getElementById('recipe-description').value;
    const items = document.getElementById('recipe-items').value; // Assuming this is a text field
    const imageFile = document.getElementById('recipe-image').files[0];

    // Example of handling image, here we just convert it to a base64 string
    const reader = new FileReader();
    reader.onload = function(e) {
        const imageBase64 = e.target.result;

        // Get existing recipes or initialize an empty array
        const recipes = JSON.parse(localStorage.getItem('recipes')) || [];

        // Add new recipe
        recipes.push({ title, description, items, image: imageBase64 });

        // Save updated recipes array to localStorage
        localStorage.setItem('recipes', JSON.stringify(recipes));

        // Redirect back to the main page
        window.location.href = 'index.html';
    };

    // Read the image file
    if (imageFile) {
        reader.readAsDataURL(imageFile);
    } else {
        alert('Please select an image for the recipe.');
    }
});
