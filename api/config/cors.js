
module.exports = function(app) {
  app.use((req, res, next)=>{
    res.append('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.append('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Accept');
    res.append('Access-Control-Allow-Credentials', true);
    res.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
  });
}
