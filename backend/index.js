const express = require('express')
const PORT    = process.env.PORT || 8081

const app = express()
console.log('Configurado Express :)')
app.use(express.static('./frontend'))
var corsMiddleware = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //replace localhost with actual host
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, PATCH, POST, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, X-Requested-With, Authorization');

    next();
}

app.use(corsMiddleware);
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const Users = Array.from([{email: "emendoza@gmail.com", password: "asd"}])

app.post('/api/auth/signin', (req, res) => {
    const {email, password} = req.body

    let user = null
    for(let u of Users) {
        if(u.email === email && u.password === password) {
            user = u
        }
    }

    if(user) {
        res.json({
            status: 'success',
            user: Object.assign({}, user, {password: ''})
        })
    } else {
        res.json({
            status: 'error',
            error: {message: 'User not exist'}
        })
    }
})

app.post('/api/auth/signup', (req, res) => {

    const {email, password} = req.body

    let user = null
    for(let u of Users) {
        if(u.email === email) {
            user = u
        }
    }

    if(user) {
        return res.json({
            status: 'error',
            error: {message: 'Already exist an user with this email!'}
        })
    } else {
        user = {}
        user.email = email
        user.password = password

        Users.push(user)
        return res.json({
            status: 'success',
            user: Object.assign({}, user, {password: ''})
        })
    }
})

app.listen(PORT, () => 'App running on port: ${PORT}')