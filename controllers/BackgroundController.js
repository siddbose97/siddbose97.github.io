const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const Controller = vertex.Controller
const Background = require('../models/Background')

class BackgroundController extends Controller {
	constructor(){
		super(Background, process.env)
	}

	get(params) {
		return new Promise((resolve, reject) => {
			Background.find(params, Controller.parseFilters(params))
			.then(background => {
				resolve(Background.convertToJson(background))
			})
			.catch(err => {
				reject(err)
			})
		})
	}

	getById(id) {
		return new Promise((resolve, reject) => {
			Background.findById(id)
			.then(background => {
				if (background == null){
					throw new Error(Background.resourceName + ' ' + id + ' not found.')
					return
				}

				resolve(background.summary())
			})
			.catch(err => {
				reject(new Error(Background.resourceName + ' ' + id + ' not found.'))
			})
		})
	}

	// post(body) {
	// 	return new Promise((resolve, reject) => {
	// 		let payload = null

	// 		if (body.title != null)
	// 			body['slug'] = vertex.utils.slugVersion(body.title, 6)

	// 		const dateString = vertex.utils.formattedDate() // Tuesday, May 7, 2019
	// 		const dateParts = dateString.split(', ')
	// 		body['dateString'] = (dateParts.length==3) ? dateParts[1]+', '+dateParts[2] : dateString

	// 		Background.create(body)
	// 		.then(background => {
	// 			resolve(background.summary())
	// 		})
	// 		.catch(err => {
	// 			reject(err)
	// 		})
	// 	})
	// }

	put(id, params) {
		return new Promise((resolve, reject) => {
			let payload = null

			Background.findByIdAndUpdate(id, params, {new:true})
			.then(background => {
				resolve(post.summary())
			})
			.catch(err => {
				reject(err)
			})
		})
	}

	delete(id) {
		return new Promise((resolve, reject) => {
			Background.findByIdAndRemove(id)
			.then(() => {
				resolve()
			})
			.catch(err => {
				reject(err)
			})
		})
	}
}

module.exports = BackgroundController
