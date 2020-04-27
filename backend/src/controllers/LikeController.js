const Post = require('../models/Post');

module.exports = 
{

    async store(req, res)
    {

        // return res.json({ok: true});
        const post = await Post.findById(req.params.id);
        post.likes += 1;
        await post.save();

        // notifica o novo like a todos os usuários
        req.io.emit('like', post);

        return res.json(post);
    }

}