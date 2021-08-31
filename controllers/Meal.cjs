"use strict"

var utils = require("../utils/writer.js")
var Meal = require("../service/MealService")

module.exports.addMeal = function addMeal(req, res, next, body, api_key) {
  Meal.addMeal(body, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deleteMeal = function deleteMeal(
  req,
  res,
  next,
  api_key,
  mealId
) {
  Meal.deleteMeal(api_key, mealId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.editMeal = function editMeal(
  req,
  res,
  next,
  body,
  mealId,
  api_key
) {
  Meal.editMeal(body, mealId, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
