import Post from '../../../models/postModel'

export default async function handle(req, res) {
	switch (req.method) {
		case 'GET':
			return postController.get(req, res)
			break

		default:
			break
	}
}

const postController = {
	get: async function (req, res) {
		try {
			const { id } = req.params
			const post = await Post.findById(id)
			return res.status(200).json(post)
		} catch (error) {
			console.log(error)
		}
	},
}
