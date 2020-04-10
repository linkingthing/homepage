
export default ({ app }) => {
    app.router.beforeEach((to, from, next) => {
        console.log(to.path);
        
        if(to.path === "/"){
            next("/home")
        }
        else{
            next();	
        }
    });
}