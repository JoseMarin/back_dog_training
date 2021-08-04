const { Post }= require("../models");
const findById = require("../models");
const router = require("../routes/postRouter");

class Msj {
    constructor() {}

    async makePost(post) {

            return Post.create(post);

        // post = {
        //     title: post.title,
        //     post: post.post
        // }

        // let createPost = await Post.create(post);

        // return createPost;
    }

    async findAllPost() {
        return Post.findAll();
    }
    // return Post.findOne( { posts: body.id  }, );

    async removePost(req) {
        return Post.findByIdAndRemove( { id: req.id } );
    }

    // async findPostByUserId(id) {

    //     return Post.findAll({ where: {userId: id}})
    // }

    async findPostByUserId(id) {

        return Post.findByPk(id);
    }

    async removePost(data) {

        return Post.destroy( {where: {id: data.id}});
    }
}

let postControllers = new Msj();
module.exports = postControllers;