var recipes = [
  {
    name: "Creamy Spaghetti Carbonara",
    description: "A classic Italian pasta dish with eggs, cheese, and pancetta",
    imgCover: "./img/imgi_2_photo-1455619452474-d2be8b1e70cd.avif",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.8,
    ratingsQuantity: 234,
    ingredients: [
      "400g spaghetti",
      "200g pancetta",
      "4 large eggs",
      "100g Pecorino Romano",
      "50g Parmesan",
      "Black pepper",
    ],
    instructions: [
      "Boil spaghetti in salted water.",
      "Fry pancetta until crispy.",
      "Whisk eggs and cheese together.",
      "Mix pasta with pancetta, then add egg ",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "28g",
      carbs: "62g",
      fat: "18g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Honey Garlic Salmon",
    description: "Pan-seared salmon with a sweet and savory glaze",
    imgCover: "./img/imgi_2_photo-1529692236671-f1f6cf9683ba.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ratingsAverage: 4.9,
    ratingsQuantity: 187,
    ingredients: [
      "2 salmon fillets",
      "3 tbsp honey",
      "2 tbsp soy sauce",
      "4 cloves garlic",
      "Sesame seeds",
    ],
    instructions: [
      "Season salmon and sear in a pan.",
      "Mix honey, soy, and garlic.",
      "Pour sauce over salmon and glaze until",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "35g",
      carbs: "28g",
      fat: "14g",
      fiber: "0g",
      sodium: "720mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Thai Green Curry",
    description: "Vibrant and aromatic curry with vegetables and coconut milk",
    imgCover: "./img/imgi_2_photo-1546069901-ba9599a7e63c.avif",
    prepTime: "15 min",
    cookTime: "25 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 312,
    ingredients: [
      "2 tbsp green curry paste",
      "400ml coconut milk",
      "300g chicken",
      "Thai basil",
    ],
    instructions: [
      "Fry curry paste in a pan.",
      "Add coconut milk and chicken.",
      "Simmer with vegetables until cooked.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "22g",
      fat: "26g",
      fiber: "5g",
      sodium: "890mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Classic Beef Burger",
    description: "Juicy homemade burger with all the fixings",
    imgCover: "./img/imgi_2_photo-1574894709920-11b28e7367e3.avif",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.6,
    ratingsQuantity: 421,
    ingredients: [
      "500g ground beef",
      "4 burger buns",
      "Cheddar cheese",
      "Lettuce and tomato",
    ],
    instructions: [
      "Form beef into patties.",
      "Grill or pan-fry to desired doneness.",
      "Assemble on toasted buns with toppings.",
    ],
    nutrition: {
      calories: "650 kcal",
      protein: "38g",
      carbs: "42g",
      fat: "35g",
      fiber: "2g",
      sodium: "920mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Mediterranean Quinoa Bowl",
    description: "Healthy bowl with quinoa, vegetables, and tahini dressing",
    imgCover: "./img/imgi_2_photo-1585032226651-759b368d7246.avif",
    prepTime: "20 min",
    cookTime: "35 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ratingsAverage: 4.5,
    ratingsQuantity: 156,
    ingredients: [
      "1 cup quinoa",
      "Cherry tomatoes",
      "Cucumber",
      "Feta cheese",
      "Tahini",
    ],
    instructions: [
      "Cook quinoa.",
      "Chop vegetables.",
      "Combine in a bowl and drizzle with.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "18g",
      carbs: "58g",
      fat: "20g",
      fiber: "10g",
      sodium: "540mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Chicken Tikka Masala",
    description: "Rich and creamy Indian curry with tender chicken pieces",
    imgCover: "./img/imgi_2_photo-1601050690597-df0568f70950.avif",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 389,
    ingredients: [
      "600g chicken",
      "Yogurt",
      "Tikka paste",
      "Coconut cream",
      "Cilantro",
    ],
    instructions: [
      "Marinate chicken in yogurt and spices.",
      "Cook chicken, then simmer in creamy ",
    ],
    nutrition: {
      calories: "450 kcal",
      protein: "38g",
      carbs: "24g",
      fat: "22g",
      fiber: "4g",
      sodium: "760mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Margherita Pizza",
    description: "Classic Italian pizza with fresh mozzarella and basil",
    imgCover: "./img/imgi_2_photo-1455619452474-d2be8b1e70cd.avif",
    prepTime: "90 min",
    cookTime: "12 min",
    servings: "2 people",
    difficulty: "Intermediate",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 512,
    ingredients: [
      "Pizza dough",
      "Crushed tomatoes",
      "Fresh mozzarella",
      "Basil",
    ],
    instructions: [
      "Roll out dough.",
      "Spread sauce and cheese.",
      "Bake at high heat until bubbly.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "24g",
      carbs: "68g",
      fat: "22g",
      fiber: "4g",
      sodium: "920mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Beef Tacos",
    description: "Flavorful Mexican tacos with seasoned ground beef",
    imgCover: "./img/imgi_2_photo-1529692236671-f1f6cf9683ba.avif",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.6,
    ratingsQuantity: 278,
    ingredients: [
      "500g ground beef",
      "Taco shells",
      "Onion",
      "Taco seasoning",
      "Salsa",
    ],
    instructions: [
      "Brown beef with onions.",
      "Add seasoning.",
      "Fill shells and add toppings.",
    ],
    nutrition: {
      calories: "420 kcal",
      protein: "26g",
      carbs: "32g",
      fat: "20g",
      fiber: "4g",
      sodium: "780mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Caesar Salad",
    description: "Classic salad with crispy romaine and creamy dressing",
    imgCover: "./img/imgi_2_photo-1546069901-ba9599a7e63c.avif",
    prepTime: "15 min",
    cookTime: "0 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Mediterranean",
    ratingsAverage: 4.4,
    ratingsQuantity: 198,
    ingredients: ["Romaine lettuce", "Caesar dressing", "Parmesan", "Croutons"],
    instructions: [
      "Chop lettuce.",
      "Toss with dressing and croutons.",
      "Top with parmesan shavings.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "12g",
      carbs: "18g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Pad Thai",
    description: "Popular Thai stir-fried noodles with shrimp and peanuts",
    imgCover: "./img/imgi_2_photo-1574894709920-11b28e7367e3.avif",
    prepTime: "20 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Intermediate",
    category: "Asian",
    ratingsAverage: 4.8,
    ratingsQuantity: 445,
    ingredients: [
      "Rice noodles",
      "Shrimp",
      "Tamarind paste",
      "Peanuts",
      "Bean sprouts",
    ],
    instructions: [
      "Soak noodles.",
      "Stir-fry shrimp and noodles .",
      "Top with peanuts and lime.",
    ],
    nutrition: {
      calories: "540 kcal",
      protein: "32g",
      carbs: "62g",
      fat: "16g",
      fiber: "4g",
      sodium: "1120mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "French Onion Soup",
    description: "Rich beef broth with caramelized onions and melted cheese",
    imgCover: "./img/imgi_2_photo-1585032226651-759b368d7246.avif",
    prepTime: "15 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    ratingsAverage: 4.7,
    ratingsQuantity: 267,
    ingredients: [
      "Onions",
      "Beef broth",
      "Baguette",
      "Gruyère cheese",
      "Butter",
    ],
    instructions: [
      "Slow-cook onions until brown.",
      "Add broth and simmer.",
      "Top with bread and cheese.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "18g",
      carbs: "36g",
      fat: "18g",
      fiber: "4g",
      sodium: "980mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Chicken Stir-Fry",
    description: "Quick and healthy stir-fry with colorful vegetables",
    imgCover: "./img/imgi_2_photo-1601050690597-df0568f70950.avif",
    prepTime: "15 min",
    cookTime: "15 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.5,
    ratingsQuantity: 324,
    ingredients: [
      "Chicken breast",
      "Bell peppers",
      "Broccoli",
      "Soy sauce",
      "Ginger",
    ],
    instructions: [
      "Stir-fry chicken.",
      "Add vegetables and cook .",
      "Pour sauce and toss.",
    ],
    nutrition: {
      calories: "320 kcal",
      protein: "34g",
      carbs: "18g",
      fat: "12g",
      fiber: "5g",
      sodium: "840mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Lasagna Bolognese",
    description: "Layered Italian pasta with rich meat sauce and béchamel",
    imgCover: "./img/imgi_2_photo-1455619452474-d2be8b1e70cd.avif",
    prepTime: "30 min",
    cookTime: "90 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Italian",
    ratingsAverage: 4.9,
    ratingsQuantity: 478,
    ingredients: ["Lasagna sheets", "Ground beef", "Béchamel", "Mozzarella"],
    instructions: [
      "Cook meat sauce.",
      "Layer sheets, meat, and béchamel.",
      "Bake until cheese is golden.",
    ],
    nutrition: {
      calories: "680 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "28g",
      fiber: "6g",
      sodium: "920mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Shrimp Scampi",
    description: "Garlicky shrimp in white wine butter sauce",
    imgCover: "./img/imgi_2_photo-1529692236671-f1f6cf9683ba.avif",
    prepTime: "10 min",
    cookTime: "15 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Seafood",
    ratingsAverage: 4.8,
    ratingsQuantity: 356,
    ingredients: ["Shrimp", "Linguine", "Garlic", "White wine", "Butter"],
    instructions: [
      "Cook pasta.",
      "Sauté shrimp with garlic.",
      "Create sauce with wine and.",
    ],
    nutrition: {
      calories: "520 kcal",
      protein: "36g",
      carbs: "54g",
      fat: "18g",
      fiber: "3g",
      sodium: "620mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Vegetable Curry",
    description: "Hearty vegetarian curry with coconut milk",
    imgCover: "./img/imgi_2_photo-1546069901-ba9599a7e63c.avif",
    prepTime: "20 min",
    cookTime: "30 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.6,
    ratingsQuantity: 289,
    ingredients: ["Potatoes", "Cauliflower", "Chickpeas", "Coconut milk"],
    instructions: [
      "Sauté onions and spices.",
      "Add vegetables and milk.",
      "Simmer until tender.",
    ],
    nutrition: {
      calories: "380 kcal",
      protein: "14g",
      carbs: "48g",
      fat: "16g",
      fiber: "12g",
      sodium: "480mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "BBQ Pulled Pork",
    description: "Slow-cooked tender pork in smoky barbecue sauce",
    imgCover: "./img/imgi_2_photo-1574894709920-11b28e7367e3.avif",
    prepTime: "15 min",
    cookTime: "240 min",
    servings: "4 people",
    difficulty: "Easy",
    category: "American",
    ratingsAverage: 4.7,
    ratingsQuantity: 412,
    ingredients: ["Pork shoulder", "BBQ sauce", "Apple cider vinegar", "Buns"],
    instructions: [
      "Slow cook pork until shreddable.",
      "Mix with BBQ sauce.",
      "Serve on buns with slaw.",
    ],
    nutrition: {
      calories: "620 kcal",
      protein: "48g",
      carbs: "52g",
      fat: "22g",
      fiber: "3g",
      sodium: "1180mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Greek Moussaka",
    description: "Traditional layered eggplant casserole with lamb",
    imgCover: "./img/imgi_2_photo-1574894709920-11b28e7367e3.avif",
    prepTime: "30 min",
    cookTime: "60 min",
    servings: "4 people",
    difficulty: "Intermediate",
    category: "Mediterranean",
    ratingsAverage: 4.8,
    ratingsQuantity: 234,
    ingredients: ["Eggplant", "Ground lamb", "Béchamel", "Tomatoes"],
    instructions: [
      "Grill eggplant slices.",
      "Layer with meat sauce and top with béchamel.",
      "Bake until brown.",
    ],
    nutrition: {
      calories: "580 kcal",
      protein: "36g",
      carbs: "32g",
      fat: "32g",
      fiber: "8g",
      sodium: "820mg",
    },
    tips: [
      "Don't overcook salmon - it should be slightly pink in the center",
      "Use wild-caught salmon for best flavor and nutrition",
      "Let the sauce caramelize slightly for deeper flavor",
      "Pair with steamed broccoli or asparagus for a complete meal",
    ],
  },
  {
    name: "Teriyaki Chicken Bowl",
    description: "Sweet and savory chicken over rice with vegetables",
    imgCover: "./img/imgi_2_photo-1574894709920-11b28e7367e3.avif",
    prepTime: "15 min",
    cookTime: "20 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Asian",
    ratingsAverage: 4.7,
    ratingsQuantity: 367,
    ingredients: ["Chicken thighs", "Teriyaki sauce", "Rice", "Broccoli"],
    instructions: ["Cook chicken in teriyaki sauce.", "Serve over rice with ."],
    nutrition: {
      calories: "540 kcal",
      protein: "42g",
      carbs: "58g",
      fat: "14g",
      fiber: "4g",
      sodium: "1240mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
  {
    name: "Caprese Sandwich",
    description: "Fresh Italian sandwich with mozzarella, tomato, and basil",
    imgCover: "./img/imgi_2_photo-1585032226651-759b368d7246.avif",
    prepTime: "10 min",
    cookTime: "5 min",
    servings: "2 people",
    difficulty: "Easy",
    category: "Italian",
    ratingsAverage: 4.5,
    ratingsQuantity: 189,
    ingredients: [
      "Ciabatta",
      "Mozzarella",
      "Tomato",
      "Pesto",
      "Balsamic glaze",
    ],
    instructions: [
      "Toast bread.",
      "Layer pesto, mozzarella.",
      "Drizzle with glaze.",
    ],
    nutrition: {
      calories: "480 kcal",
      protein: "22g",
      carbs: "48g",
      fat: "22g",
      fiber: "3g",
      sodium: "680mg",
    },
    tips: [
      "Adjust spice level by using more or less curry paste",
      "Add vegetables in stages based on cooking time needed",
      "Fresh Thai basil is essential for authentic flavor",
      "Use full-fat coconut milk for richest, creamiest sauce",
    ],
  },
  {
    name: "Grilled Steak",
    description: "Juicy ribeye steak seasoned with herbs and garlic butter",
    imgCover: "./img/imgi_2_photo-1601050690597-df0568f70950.avif",
    prepTime: "5 min",
    cookTime: "20 min",
    servings: "1 person",
    difficulty: "Medium",
    category: "Meat",
    ratingsAverage: 4.9,
    ratingsQuantity: 512,
    ingredients: ["500g Ribeye", "Rosemary", "Garlic", "Butter"],
    instructions: ["Season meat.", "Sear in hot pan.", "Rest for 5 mins."],
    nutrition: {
      calories: "700 kcal",
      protein: "55g",
      carbs: "0g",
      fat: "50g",
      fiber: "0g",
      sodium: "15mg",
    },
    tips: [
      "Use room temperature eggs for a smoother sauce consistency",
      "Work quickly when mixing eggs with hot pasta to avoid scrambling",
      "Reserve extra pasta water - it's the secret to perfect creaminess",
      "Freshly grated cheese makes all the difference in flavor",
      "Never add cream - authentic carbonara is made with eggs only",
    ],
  },
];

function updateRecipeUI(recipe) {
  document.getElementById("recipe-img").src = recipe.imgCover;
  document.getElementById("recipe-title").textContent = recipe.name;
  document.getElementById("recipe-description").textContent =
    recipe.description;
  document.getElementById("prep-time").textContent = recipe.prepTime;
  document.getElementById("cook-time").textContent = recipe.cookTime;
  document.getElementById("servings").textContent = recipe.servings;
  document.getElementById("difficulty-badge").textContent = recipe.difficulty;
  document.getElementById("category-badge").textContent = recipe.category;
  document.getElementById("recipe-rating").textContent = recipe.ratingsAverage;
  document.getElementById("recipe-reviews").textContent =
    `(${recipe.ratingsQuantity} reviews)`;
  document.getElementById("nut-cal").textContent = recipe.nutrition.calories;
  document.getElementById("nut-protein").textContent = recipe.nutrition.protein;
  document.getElementById("nut-carb").textContent = recipe.nutrition.carbs;
  document.getElementById("nut-fat").textContent = recipe.nutrition.fat;
  document.getElementById("nut-fiber").textContent = recipe.nutrition.fiber;
  document.getElementById("nut-sodium").textContent = recipe.nutrition.sodium;

  var ingredientsHTML = "";
  for (let i = 0; i < recipe.ingredients.length; i++) {
    ingredientsHTML += `
  
    <div class="list-group-item border-0 mb-2 rounded d-flex align-items-center">

      <span class="badge bg-orange me-3">
        ${i + 1}
      </span>

      ${recipe.ingredients[i]}

    </div>

  `;
  }

  document.getElementById("ing-list-container").innerHTML = ingredientsHTML;

  var instructionsHTML = "";

  for (let i = 0; i < recipe.instructions.length; i++) {
    instructionsHTML += `
  
    <div class="d-flex align-items-start my-3">

      <span class="step-number me-3">
        ${i + 1}
      </span>

      <p class="m-0 pt-2">
        ${recipe.instructions[i]}
      </p>

    </div>

  `;
  }

  document.getElementById("inst-list-container").innerHTML = instructionsHTML;

  let tipsHTML = "";

  for (let i = 0; i < recipe.tips.length; i++) {
    tipsHTML += `
  
    <div class="tip-card p-3 d-flex align-items-center">

      <i class="fas fa-check-circle text-orange me-3 fs-5"></i>

      <span>
        ${recipe.tips[i]}
      </span>

    </div>

  `;
  }

  document.getElementById("tips-list-container").innerHTML = tipsHTML;
}

document.getElementById("btn-refresh").onclick = function () {
  var randomIndex = Math.floor(Math.random() * recipes.length);

  var selectedRecipe = recipes[randomIndex];

  updateRecipeUI(selectedRecipe);
};

window.onload = function () {
  updateRecipeUI(recipes[0]);
};
