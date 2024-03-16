const { response } = require("express");
const db = require("../database");

const User = {
  getAllUsers: (callback) => {
    db.query("SELECT * FROM users", callback);
  },
  addUser: (user, callback) => {
    db.query(
      "INSERT INTO users (name, email) VALUES (?, ?)",
      [user.name, user.email],
      callback
    );
  },
  usersData: ()=>{
    return new Promise((resolve, reject) =>{
      db.query("SELECT * FROM users LIMIT 3", (err, response)=>{
        if(err) return reject(err);
        // console.log(response);
        resolve(response)
      })
    })
}
}
module.exports = User;
