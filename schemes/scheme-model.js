const knex = require("knex");
const knexfile = require("../knexfile");
const db = knex(knexfile.development);

// function findPostsByUserID(userID) {
//   return (
//     db("posts as p")
//       // Grabs Users table.
//       // users "u.id" is compared to posts "p.user_id"
//       .innerJoin("users as u", "u.id", "p.user_id")
//       .where("p.user_id", userID)
//       .select("p.id", "p.contents", "u.username")
//   );
// }

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where("id", id);
}

// SELECT scheme."scheme_name", step."instructions"
// FROM "Schemes" AS scheme
// JOIN "Steps" AS step ON scheme."id" = step."scheme_id"
// WHERE scheme."id" = 1

function findSteps(id) {
  return db("steps as step")
    .innerJoin("schemes as scheme", "step.scheme_id", "scheme.id")
    .where("step.scheme_id", id)
    .select("scheme.scheme_name", "step.instructions")
    .orderBy("step.step_number");
}

function add(scheme) {
  return db("schemes").insert(scheme);
}

function update(changes, id) {
  return db("schemes").where("id", id).update({
    scheme_name: changes,
  });
}

function remove(id) {
  return db("schemes").where("id", id).delete();
}

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
};
