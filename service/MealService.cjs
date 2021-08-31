'use strict';


/**
 * Add a new meal
 *
 * body Meal Meal object to be added
 * api_key String 
 * no response value expected for this operation
 **/
exports.addMeal = function(body,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a meal
 *
 * api_key String 
 * mealId UniqueId Meal id to delete
 * no response value expected for this operation
 **/
exports.deleteMeal = function(api_key,mealId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit a meal
 * Edit a meal
 *
 * body Meal Updated meal object
 * mealId UniqueId ID of meal to edit
 * api_key String 
 * returns Meal
 **/
exports.editMeal = function(body,mealId,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "serves" : 5,
  "mealIngredients" : [ {
    "item" : "",
    "amount" : {
      "quantity" : 0.14658129805029452
    }
  }, {
    "item" : "",
    "amount" : {
      "quantity" : 0.14658129805029452
    }
  } ],
  "book" : "",
  "name" : "name",
  "dietType" : "vegetarian",
  "id" : 1,
  "tags" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

