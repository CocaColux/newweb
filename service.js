const knex = require("knex");

class service {
  constructor() {
    this.pg = knex({
      client: "pg",
      connection: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "",
        database: "ChoresCount",
        charset: "utf8",
      },
    });
  }

  test = (req, res) => {
    alert("test");
    console;log("test");
  }

  getUsers = (req, res) => {
    this.pg("users").then((data) => {
      res.json(data);
    });
  };

  
  getchores = (req, res) => {
    this.pg("chores")
      .then((data) => {
        res.json(data);
      });
  };

  getUsersByID = (req, res) => {
    const id_user = parseInt(req.params.Id_User);
    this.pg("users")
      .where({ id_user })
      .then((data) => {
        res.json(data);
      });
  };

  getLastName = (req, res) => {
    const lastname = req.params.lastname;
    this.pg("users")
      .where({ lastname })
      .then((data) => {
        res.json(data);
      });
  };

  getFirstName = (req, res) => {
    const firstname = req.params.firstname;
    this.pg("users")
      .where({ firstname })
      .then((data) => {
        res.json(data);
      });
  };

  getUsername = (req, res) => {
    const username = req.params.username;
    this.pg("users")
      .where({ username })
      .then((data) => {
        res.json(data);
      });
  };

  getPword= (req, res) => {
    const pword = req.params.pword;
    this.pg("users")
      .where({ pword })
      .then((data) => {
        res.json(data);
      });
  };

  createUsers = (req, res) => {
    const { username, firstname, lastname, pword } = req.body;
    this.pg("users")
      .insert({ username, firstname, lastname, pword })
      .then((data) => {
        console.log(data);
        res.json(data);
      });
  };

createChore = (req, res) => {
  const {id_chores, chore_name, descr, username,room_name} = req.body;
  this.pg("chores")
  .insert({id_chores, chore_name, descr, username,room_name})
  .then((data) => {
    console.log(data);
    res.json(data);
  });
}; 
  updateUser = (req, res) => {
    const id_user = parseInt(req.params.Id_User);
    const { lastname, firstname, username } =
      req.body;
    this.pg("users")
      .where({ id_user })
      .update({ lastname, firstname, username })
      .then((data) => {
        res.json(data);
      });
  };

  deleteUser = (req, res) => {
    const id_chores = parseInt(req.params.id_chores);
    this.pg("chores")
      .where({ id_chores })
      .del()
      .then((data) => {
        res.json(data);
      });
  };
}

module.exports = new service();