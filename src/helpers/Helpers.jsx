import React, { Fragment } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export const reduceText = (text, qty) => {
  return text.length > qty ? `${text.substring(0, qty)}...` : text;
};

export const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

export const renderDifficulty = (difficulty) => {
  switch (difficulty) {
    case "facil":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    case "medio":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    case "dificil":
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
    default:
      return (
        <Fragment>
          <FontAwesomeIcon icon={faStar} />
        </Fragment>
      );
  }
};

export const determineClasses = (indexes, cardIndex) => {
  if (indexes.action === 'left') {
    if (indexes.previousIndex === cardIndex) {
      return 'prev left';
    } else if (indexes.currentIndex === cardIndex) {
      return 'active left';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next left';
    }
  } else {
    if (indexes.previousIndex === cardIndex) {
      return 'prev right';
    } else if (indexes.currentIndex === cardIndex) {
      return 'active right';
    } else if (indexes.nextIndex === cardIndex) {
      return 'next right';
    }
  }
  return "inactive";
}