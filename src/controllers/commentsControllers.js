const { Comments } = require("../models");
const findById = require("../models");
const router = require("../routes/commentsRouter");

class Msj {
  constructor() {}

  async makeComment(comment) {
    return Comments.create(comment);
  }

  async findAllComments() {
    return Comments.findAll();
  }

  async removeComment(data) {
    return Comments.destroy({ where: { id: data.id } });
  }
}

let commentsControllers = new Msj();
module.exports = commentsControllers;
