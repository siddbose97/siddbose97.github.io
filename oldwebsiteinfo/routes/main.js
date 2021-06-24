const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const ProjectController = require('../controllers/ProjectController')
const PostController = require('../controllers/PostController')
const ServiceController = require('../controllers/ServiceController')
const BackgroundController = require('../controllers/BackgroundController')

router.get('/', (req, res) => {
    const data = req.context //{page: ...}

    const projectCtr = new ProjectController()
    const serviceCtr = new ServiceController()

    projectCtr.get()

    .then(projects => {
        data['projects'] = projects
    })
    serviceCtr.get()
    .then(services => {
        data['services'] = services
        res.render('landing', data)
    })
    .catch(err => {
        res.send('Technical Difficulties'+ err.message)
    })


})



router.get('/project/:slug', (req,res) => {
    const data = req.context
    const projectSlug = req.params.slug

    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects => {
        if (projects.length == 0){
            throw new Error ('Project not found')
            return
        }

        const project = projects[0]
        data['project'] = project
        res.render('project', data)
    })

    .catch(err => {
        res.send("Feeling Sluggish - " +err.message)
    })
})

router.get('/background', (req, res) => {
	const data = req.context // {cdn:<STRING>, global:<OBJECT>}

	const backgroundCtr = new BackgroundController()
    backgroundCtr.get()
    .then(background => {
        data['background'] = background
        res.render('background', data)
    })
    .catch(err => {
        res.send('Technical Difficulties '+err.message)
    })
})


router.get('/blog', (req, res) => {
    const data = req.context //{page: ...}

    const postCtr = new PostController()
    postCtr.get()
    .then(posts => {
        data['posts'] = posts
        res.render('blog', data)
    })
    .catch(err => {
        res.send('Technical Difficulties'+err.message)
    })


})

router.get('/blog/:slug', (req,res) => {
    const data = req.context
    const postSlug = req.params.slug

    const postCtr = new PostController()
    postCtr.get({slug:postSlug})
    .then(posts => {
        if (posts.length == 0){
            throw new Error ('Post not found')
            return
        }

        const post = posts[0]
        data['post'] = post
        res.render('post', data)
    })

    .catch(err => {
        res.send("Feeling Sluggish - " +err.message)
    })
})

router.get('/project/:slug', (req,res) => {
    const data = req.context
    const projectSlug = req.params.slug

    const projectCtr = new ProjectController()
    projectCtr.get({slug:projectSlug})
    .then(projects => {
        if (projects.length == 0){
            throw new Error ('Project not found')
            return
        }

        const project = projects[0]
        data['project'] = project
        res.render('project', data)
    })

    .catch(err => {
        res.send("Feeling Sluggish - " +err.message)
    })
})
module.exports = router



