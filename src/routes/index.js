const sitesRouter = require('./site');
const newsRouter=require('./news')
function route(app){
    app.use('/news',newsRouter)
    app.use('/',sitesRouter)
}
module.exports = route;