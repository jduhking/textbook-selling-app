var fs = require('fs')

module.exports = function(express) {

    var router = express.Router()

    // first define the function to read routes

    function readRoutes(__dir){

        fs.readdirSync(__dir).forEach(function(file){

            var filePath = __dir + '/' + file
            if(fs.statSync(filePath).isDirectory()){ // check if a directory

                // if so perform a recursive check in directory
                readRoutes(filePath)

            } else { // if a file 
                
                if(file == "index.js") return // if its an index.js, then ignore it

                // if an actual route file then get its name 

                var name = file.substr(0, file.indexOf('.'))

                require(filePath)(router)
            }

        })

    }

    // now perform the function on the current directory
    
    readRoutes(__dirname)

    return router;
}