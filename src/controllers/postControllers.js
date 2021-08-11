const { Post } = require("../models");
const findById = require("../models");
const router = require("../routes/postRouter");

class Msj {
  constructor() {}

  async makePost(post) {
    return Post.create(post);
  }

  async findAllPost() {
    return Post.findAll();
  }

  // async removePost(req) {
  //   return Post.findByIdAndRemove({ id: req.id });
  // }

  async findPostByUserId(userId) {
    return Post.findAll({
      where: { userId: userId },
    });
  }

  async removePost(data) {
    return Post.destroy({ where: { id: data.id } });
  }
}

let postControllers = new Msj();
module.exports = postControllers;
