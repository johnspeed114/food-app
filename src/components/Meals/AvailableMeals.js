import React from 'react';
import MealItem from './MealItem/MealItem.js';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';

//always put variables that independent of the component outside the component(ask, can it work outside the component)
const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
  },
  {
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  //[FYI GOOD PRACTICE] jsx should have the display, little js running in it
  const mealList = DUMMY_MEALS.map((item) => (
    <MealItem
      key={item.id}
      id={item.id}
      name={item.name}
      content={item.description}
      price={item.price}
    />
  ));
  // section tag conveys that there is a theme wiithin the contenct
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
