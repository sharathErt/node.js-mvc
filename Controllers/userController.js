const User = require("../Models/userModel");

const userController = {
  usersInfo: async(req, res)=>{
    try {
      
      const data = await User.usersData();
      console.log(data);
      res.status(200).json({status: 'success', data: data});
    } catch (error) {
      res.status(400).json({status: "failed", error: error.message})
    }
  },

  getAllUsers: (req, res) => {
    User.getAllUsers((err, users) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ users });
      }
    });
  },
  addUser: (req, res) => {
    const newUser = {
      name: req.body.name,
      email: req.body.email,
    };

    User.addUser(newUser, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json({ message: "User added successfully" });
      }
    });
  },
};

module.exports = userController;
