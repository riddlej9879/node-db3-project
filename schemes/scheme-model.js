const db = require("../data/config");

function find() {
  return db().select();
}

function findPostsByUserID(userID) {
  return (
    db("posts as p")
      // Grabs Users table.
      // users "u.id" is compared to posts "p.user_id"
      .innerJoin("users as u", "u.id", "p.user_id")
      .where("p.user_id", userID)
      .select("p.id", "p.contents", "u.username")
  );
}

module.exports = {
  findPostsByUserID,
};
