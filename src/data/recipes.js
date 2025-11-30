import carbonara from "../assets/images/carbonara.jpg";
import chickensoup from "../assets/images/chickensoup.jpg";
import chocolatecake from "../assets/images/chocolatecake.jpg";
import salad from "../assets/images/salad.jpg";
import pizza from "../assets/images/pizza.jpg";
import burger from "../assets/images/burger.jpg";
import pancakes from "../assets/images/pancakes.jpg";
import risotto from "../assets/images/risotto.jpg";
import chickentacos from "../assets/images/chickentacos.jpg";
import lasagna from "../assets/images/lasagna.jpg";

export const recipes = [
  {
    id: 1,
    title: "Spaghetti Carbonara",
    image: carbonara,
    description: "Classic Italian pasta with eggs, pecorino cheese, black pepper and crispy bacon.",
    ingredients: [
      "200g spaghetti",
      "100g pancetta or bacon",
      "2 eggs",
      "50g parmesan or pecorino",
      "Black pepper"
    ],
    steps: "Cook the pasta. Fry the bacon. Mix eggs and cheese. Combine everything while pasta is hot."
  },
  
  {
    id: 2,
    title: "Chicken Soup",
    image: chickensoup,
    description: "Warm homemade chicken soup.",
    ingredients: [
      "1 chicken breast or 2 drumsticks",
      "1 carrot",
      "1 potato",
      "1 onion",
      "1 celery stick",
      "1L water or chicken broth",
      "Salt",
      "Black pepper",
      "Parsley"
    ],
    steps: "Boil chicken in water or broth. Add chopped vegetables and cook until soft. Season with salt, pepper and parsley."
  },
  
  {
    id: 3,
    title: "Chocolate Cake",
    image: chocolatecake,
    description: "Moist chocolate cake with ganache.",
    ingredients: [
      "200g flour",
      "200g sugar",
      "100g butter",
      "2 eggs",
      "50g cocoa powder",
      "1 tsp baking powder",
      "150ml milk",
      "200g dark chocolate",
      "200ml heavy cream",
      "1 tbsp butter"
    ],
    steps:  "Mix the dry ingredients for the cake. Add eggs, melted butter and milk. Bake at 180°C for 35 minutes. " +
  "For the ganache: heat the cream until just boiling, pour over chopped chocolate, add butter and mix until smooth. " +
  "Spread the ganache over the cooled cake."
  },

  {
    id: 4,
    title: "Fresh Garden Salad",
    image: salad,
    description: "Fresh vegetables with olive oil and lemon juice.",
    ingredients: [
      "1 cucumber",
      "2 tomatoes",
      "1 red onion",
      "Lettuce",
      "Olive oil",
      "Salt",
      "Lemon juice"
    ],
    steps: "Cut all vegetables, mix in a bowl and season with olive oil, salt and lemon juice."
  },

  {
    id: 5,
    title: "Margherita Pizza",
    image: pizza,
    description: "Italian pizza with tomato sauce, mozzarella and basil.",
    ingredients: [
      "Pizza dough",
      "Tomato sauce",
      "Mozzarella cheese",
      "Fresh basil",
      "Olive oil",
      "Salt"
    ],
    steps: "Spread tomato sauce on dough, add mozzarella, bake at 220°C for 12 minutes. Finish with basil and olive oil."
  },

  {
    id: 6,
    title: "Beef Burger",
    image: burger,
    description: "Juicy beef burger with lettuce, tomato and crispy fries.",
    ingredients: [
      "200g ground beef",
      "Burger bun",
      "Lettuce",
      "Tomato",
      "Cheese slice",
      "Salt",
      "Black pepper"
    ],
    steps: "Shape beef patty, season and cook in a pan. Build the burger with vegetables and cheese in the bun."
  },

  {
    id: 7,
    title: "Pancakes",
    image: pancakes,
    description: "Fluffy pancakes served with maple syrup and berries.",
    ingredients: [
      "200g flour",
      "1 egg",
      "250ml milk",
      "1 tbsp sugar",
      "1 tsp baking powder",
      "Butter for frying"
    ],
    steps: "Mix all ingredients and fry small portions of batter in butter until golden on both sides."
  },

  {
    id: 8,
    title: "Mushroom Risotto",
    image: risotto,
    description: "Creamy Italian risotto with mushrooms and parmesan.",
    ingredients: [
      "200g Arborio rice",
      "150g mushrooms",
      "1 onion",
      "1L vegetable broth",
      "50g parmesan",
      "Butter",
      "Salt"
    ],
    steps: "Cook onion and mushrooms in butter. Add rice and slowly pour broth while stirring until creamy. Add parmesan."
  },

  {
    id: 9,
    title: "Chicken Tacos",
    image: chickentacos,
    description: "Soft tortillas filled with spicy chicken, vegetables and cheese.",
    ingredients: [
      "Tortillas",
      "200g chicken breast",
      "Lettuce",
      "Tomato",
      "Cheese",
      "Taco seasoning"
    ],
    steps: "Cook chicken with taco seasoning. Fill tortillas with chicken, vegetables and cheese."
  },

  {
    id: 10,
    title: "Lasagna",
    image: lasagna,
    description: "Layered lasagna with beef, ricotta, mozzarella and tomato sauce.",
    ingredients: [
      "Lasagna sheets",
      "300g ground beef",
      "Tomato sauce",
      "Ricotta cheese",
      "Mozzarella",
      "Parmesan",
      "Salt"
    ],
    steps: "Layer lasagna sheets with meat sauce and cheeses. Bake at 190°C for 40 minutes."
  },
];