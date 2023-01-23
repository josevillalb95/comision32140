const Authenticated=(req,res,next)=>{
    console.log(req.user)
    if (req.isAuthenticated()) 
        return res.render("home", { username: req.user.username });
    next()
}
export default Authenticated