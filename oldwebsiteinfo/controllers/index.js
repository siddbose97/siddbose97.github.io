const ProjectController = require('./ProjectController')
const PostController = require('./PostController')
const ServiceController = require('./ServiceController')
const SubscriberController = require('./SubscriberController')
const BackgroundController = require('./BackgroundController')

module.exports = {

	project: ProjectController,
  post: PostController,
  service: ServiceController,
  subscriber: SubscriberController,
  background: BackgroundController

}
