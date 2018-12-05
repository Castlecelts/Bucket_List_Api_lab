const BucketItem = require('./models/bucket_item.js');
const ActivityGridView = require('./views/activity_grid_view.js');


document.addEventListener('DOMContentLoaded', () => {
  console.log("Script loaded");

  const gridView = document.querySelector('#grid-view')
  const activityGridView = new ActivityGridView(gridView)
  activityGridView.bindEvents();

  const bucketItem = new BucketItem();
  bucketItem.getData();
  
});
