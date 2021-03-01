import React from "react";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealScreen = (props) => {
  // Obtiene el ID de la categoria, que viene desde CategoriesScreen
  const catId = props.navigation.getParam("categoryId");

  // Recibe las meals del estado de Redux
  const availableMeals = useSelector((state) => state.meals.filteredMeals);

  // Filtra las comidas en las cuales está presente la categoría 'catId' (si no existe el index es -1 y la elimina del filtrado)
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};
// Cuando la informacion que se quiere mostrar es dinámica, navigationOptions puede ser una función en lugar de un objeto
CategoryMealScreen.navigationOptions = (navigationData) => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
  };
};
export default CategoryMealScreen;
