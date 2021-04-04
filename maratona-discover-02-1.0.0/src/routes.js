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

const jobs = [
    {   
        id: 1,
        name: "Pizarria Guloso",
        "daily-hours": 2,
        "total-hours": 60,
        created_at: Date.now(),
        
    },
    {   
        id: 2,
        name: "OneTwo Project",
        "daily-hours": 3,
        "total-hours": 47,
        created_at: Date.now(),
        
    }
]

// resquest, res
routes.get('/', (req, res) =>{

const updatedJobs = jobs.map((job=> {
    // ajustes no job
    // calculo de tempo restante


    const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed() 

    const createdDate = new Date(job.created_at)
    const dueDay = createdDate.getDay() + Number(remainingDays)
   // const dueDate = createdDate.setDate

    return job
})) 

    return res.render(views + "index", { jobs })


}) 
routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
   
    const lastId = jobs[jobs.length - 1] ?.id || 1
    
    jobs.push({
        id: (lastId + 1),
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        created_at: Date.now() // Atribuindo a data de hoje
    })

    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "/profile", {profile}))


 module.exports = routes;