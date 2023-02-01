import React from 'react';

import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.showCart} />
      </header>
      {/* [FYI]whenever modules with class names with dash notation we can't use dot selector only []! */}
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='a lot good food, like very good food!' />
      </div>
    </>
  );
};

export default Header;
