class SitesController {
    //GET /home
    index(req, res){
        res.render('home');
    }
    //GET /search/:slug
    search(req, res){
        res.render('search');
    }
}
module.exports = new SitesController;