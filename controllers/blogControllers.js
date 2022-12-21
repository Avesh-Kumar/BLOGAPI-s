const { post } = require('../routers/userRouter')
const blogService = require('../services/blogServices')



exports.addBlog = async (req, res) => {
    await blogService.addBlog(req.body, req.user).then((result) => {
        res.status(200).send({ "status": "success", "method": post, "blog": result })
    }).catch((error) => {
        res.status(417).send({ "status": "failed", "error": error });
    })
}
exports.postComment = async (req, res) => {
    await blogService.comment(req.body, req.user).then((result) => {
        res.status(200).send({ "status": "success", "method": post, "blog": result })
    }).catch(error => {
        res.status(417).send({ "status": "failed", "error": error });
    })
}