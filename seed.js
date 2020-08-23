const db = require('./models');
const data = require('./postsData.json');
const data1 = require('./userData.json');

db.Post.deleteMany({}, (err, deletePosts) => {
  db.Post.create(data.posts, (err, seededPosts) => {
    if (err) console.log(err);
    console.log(data.posts.length, 'Posts created successfully');
    console.log(deletePosts);
    process.exit();
  });
});

db.User.deleteMany({}, (err, deleteUsers) => {
  db.User.create(data1.users, (err, seededUsers) => {
    if (err) console.log(err);
    console.log(data1.users.length, 'Users created successfully');
    console.log(deleteUsers);
    process.exit();
  });
});