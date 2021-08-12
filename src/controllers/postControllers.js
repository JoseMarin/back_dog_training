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

  async findPostByUserId(userId) {
    return Post.findAll({
      where: { userId: userId },
    });
  }

  async removePost(postId) {
    return Post.destroy({ where: { id: postId } });
  }
}

let postControllers = new Msj();
module.exports = postControllers;
