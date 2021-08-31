'use strict';


/**
 * Add a new list item
 *
 * body ListItem List item object to be added
 * api_key String 
 * no response value expected for this operation
 **/
exports.addListItem = function(body,api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes a list item
 *
 * api_key String 
 * itemId UniqueId Item id to delete
 * no response value expected for this operation
 **/
exports.deleteListItem = function(api_key,itemId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Deletes entire list of open items
 *
 * api_key String 
 * no response value expected for this operation
 **/
exports.deleteOpenListItems = function(api_key) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit a list item
 * Edit a list item
 *
 * body ListItem Updated list item object
 * itemId UniqueId ID of list item to edit
 * api_key String 
 * returns ListItem
 **/
exports.editListItem = function(body,itemId,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adHocAmount" : {
    "quantity" : 0.14658129805029452
  },
  "item" : {
    "name" : "name",
    "defaultQuestionMark" : false,
    "location" : { }
  },
  "tickedAt" : "2000-01-23T04:56:07.000+00:00",
  "mealAmounts" : [ {
    "meal" : ""
  }, {
    "meal" : ""
  } ],
  "questionMark" : false,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Question or un-question a list item
 * Question or un-question a list item
 *
 * body Boolean Boolean to say if questioned or not
 * itemId UniqueId ID of list item to edit
 * api_key String 
 * returns ListItem
 **/
exports.setListItemQuestionMark = function(body,itemId,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adHocAmount" : {
    "quantity" : 0.14658129805029452
  },
  "item" : {
    "name" : "name",
    "defaultQuestionMark" : false,
    "location" : { }
  },
  "tickedAt" : "2000-01-23T04:56:07.000+00:00",
  "mealAmounts" : [ {
    "meal" : ""
  }, {
    "meal" : ""
  } ],
  "questionMark" : false,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Tick or un-tick a list item
 * Tick or un-tick a list item
 *
 * body Boolean Boolean to say if ticked or not
 * itemId UniqueId ID of list item to edit
 * api_key String 
 * returns ListItem
 **/
exports.setListItemTickMark = function(body,itemId,api_key) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "adHocAmount" : {
    "quantity" : 0.14658129805029452
  },
  "item" : {
    "name" : "name",
    "defaultQuestionMark" : false,
    "location" : { }
  },
  "tickedAt" : "2000-01-23T04:56:07.000+00:00",
  "mealAmounts" : [ {
    "meal" : ""
  }, {
    "meal" : ""
  } ],
  "questionMark" : false,
  "id" : 1
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

