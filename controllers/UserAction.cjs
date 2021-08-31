"use strict"

var utils = require("../utils/writer.js")
var ListItem = require("../service/ListItemService")

module.exports.undoLastAction = function undoLastAction(
  req,
  res,
  next,
  api_key
) {
  UserAction.undoLastAction(api_key)
    .then(function (response) {
      utils.writeJson(res, response)
    })
    .catch(function (response) {
      utils.writeJson(res, response)
    })
}
