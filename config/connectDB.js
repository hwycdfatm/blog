import mongoose from 'mongoose'
const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useFindAndModify: false,
			useCreateIndex: true,
		})

		conn ? console.log('Kết nối DB thành công') : console.log('hello')
	} catch (error) {
		console.log(error)
	}
}

export default connectDB
