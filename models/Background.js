const Document = require('vertex-camo').Document
const props = {
	image: {type:String, default:''},
	title: {type:String, default:'', display:true},
	preview: {type:String, default:''},
	slug: {type:String, default:'', immutable:true},
	type: {type:String, default:'', immutable:true}, // original or link
	numReplies: {type:Number, default:0, immutable:true},
	isPublic: {type:String, default:'no', immutable:true},
	text: {type:String, default:'', isHtml:true},
	dateString: {type:String, default:''},
	schema: {type:String, default:'post', immutable:true},
	dateString: {type:String, default:'', immutable:true},
	timestamp: {type:Date, default: new Date(), immutable:true}
}

class Background extends Document {
	constructor(){
		super()
		this.schema(props)
	}

	static get resourceName(){
		return 'background'
	}

	static collectionName(){
			return 'background'
	}

}

module.exports = Background
