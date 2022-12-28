var fs = require('fs');
const { getSystemErrorMap } = require('util');

module.exports = function(express) {

    var router = express.Router()

    // first define the function to read routes

    function readRoutes(__dir, basePath){

        basePath = basePath || '';

        
        fs.readdirSync(__dir).forEach(function(file){

            var filePath = __dir + '/' + file

            if(fs.statSync(filePath).isDirectory()){ // check if a directory

                // if so perform a recursive check in directory and update the base path

                readRoutes(filePath, basePath + file + '/')

            } else { // if a file 
                
                if(file == "index.js") return // if its an index.js, then ignore it

                // if an actual route file , require it and attach it to the router

                var name = basePath + file.substr(0, file.indexOf('.'))

             
                require(__dirname + '/' + name)(router) 
               
            }

        })

    }

    // now perform the function on the current directory

    readRoutes(__dirname)


    return router;
}