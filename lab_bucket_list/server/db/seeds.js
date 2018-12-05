use bucket_list
db.dropDatabase();

db.activities.insertMany([
  {
    description: "Travel to South Africa",
    location: "South Africa",
    type: "Travel"
  },
  {
    description: "Run the Marathon Des Sables",
    location: "Sahara Desert, Morocco",
    type: "Personal"
  },
  {
    description: "Learn Mandarin in 365 days",
    location: "n/a",
    type: "Skill"
  }
]);
