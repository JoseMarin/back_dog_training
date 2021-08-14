const { Post } = require("../models");
const findByPk = require("../models");
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

  async removePost(postId, userId) {
    let post = await Post.findByPk(postId);
    if (post.userId === userId) {
      return Post.destroy({ where: { id: postId } });
    } else {
      console.log('no tienes permiso');
    }
  }
}

let postControllers = new Msj();
module.exports = postControllers;
