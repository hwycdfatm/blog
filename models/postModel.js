import mongoose from 'mongoose'
import mongooseDelete from 'mongoose-delete'

const postSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			default: 'Một sản phẩm tuyệt vời đến từ vị trí của Shop :3',
		},
		content: {
			type: String,
			default: 'Một sản phẩm tuyệt vời đến từ vị trí của Shop :3',
		},
		slug: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
)

postSchema.plugin(mongooseDelete, {
	overrideMethods: 'all',
	deletedAt: true,
})

let dataSheet = mongoose.model.post || mongoose.model('post', postSchema)

export default dataSheet
