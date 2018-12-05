const PubSub = require('../helpers/pub_sub.js')
const RequestHelper = require('../helpers/request_helper.js')

const BucketItem = function (url) {
  this.url = 'http://localhost:3000/api/activities';
  this.request = new RequestHelper(this.url);
};


BucketItem.prototype.getData = function () {
  this.request.get()
  .then((activities) =>{
    PubSub.publish('BucketItem:data-loaded', activities);
  })
  .catch(console.error);
};


module.exports = BucketItem;
