const PubSub = require('../helpers/pub_sub.js');
const ActivityView = require('./activity_view.js');

const ActivityGridView = function(container){
  this.container = container;
}

ActivityGridView.prototype.bindEvents = function () {
  PubSub.subscribe('BucketItem:data-loaded', (event) => {
    this.render(event.detail);
  })
};

ActivityGridView.prototype.render = function (activities) {
  this.container.innerHTML = '';
  const activityView = new ActivityView(this.container);
  activities.forEach((activity) => activityView.render(activity));
};

module.exports = ActivityGridView;
