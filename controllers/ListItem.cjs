"use strict"

var utils = require("../utils/writer.js")
var UserAction = require("../service/UserActionService")

module.exports.addListItem = function addListItem(
  req,
  res,
  next,
  body,
  api_key
) {
  ListItem.addListItem(body, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deleteListItem = function deleteListItem(
  req,
  res,
  next,
  api_key,
  itemId
) {
  ListItem.deleteListItem(api_key, itemId)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.deleteOpenListItems = function deleteOpenListItems(
  req,
  res,
  next,
  api_key
) {
  ListItem.deleteOpenListItems(api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.editListItem = function editListItem(
  req,
  res,
  next,
  body,
  itemId,
  api_key
) {
  ListItem.editListItem(body, itemId, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.setListItemQuestionMark = function setListItemQuestionMark(
  req,
  res,
  next,
  body,
  itemId,
  api_key
) {
  ListItem.setListItemQuestionMark(body, itemId, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}

module.exports.setListItemTickMark = function setListItemTickMark(
  req,
  res,
  next,
  body,
  itemId,
  api_key
) {
  ListItem.setListItemTickMark(body, itemId, api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
