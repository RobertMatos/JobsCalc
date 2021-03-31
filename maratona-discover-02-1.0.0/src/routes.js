const express = require('express')
const routes = express.Router()


const views = __dirname + "/views/"

const profile = {
    name: "Robert",
    avatar: "https://github.com/robertmatos.png",
    "monthly-budget": 4000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 5
}

const jobs = []

//Resquest, res
routes.get('/', (req, res) => res.render(views + "/index")) 
routes.get('/job', (req, res) => res.render(views + "/job"))
routes.post('/job', (req, res) => {

    const job = req.body
    job.created_at = Date.now()

    jobs.push(req.body)
    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "/job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", {profile}))


 module.exports = routes;