const PubSub = require('../helpers/pub_sub.js');

const ActivityView = function(container){
  this.container = container;
};

ActivityView.prototype.render = function (activity) {
  const tile = document.createElement('div');

  const description = document.createElement('h1');
  description.textContent = `Activity: ${activity.description}`;
  tile.appendChild(description);

  const location = document.createElement('p');
  location.textContent = `Location: ${activity.location}`;
  tile.appendChild(location);

  const type = document.createElement('p');
  type.textContent = `Type: ${activity.type}`;
  tile.appendChild(type);

  this.container.appendChild(tile);

};

module.exports = ActivityView;
