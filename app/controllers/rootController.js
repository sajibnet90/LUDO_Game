//rootController.js
const {join} = require('path')  //join method from the Node.js path module, which is used to concatenate segments of file paths
let {rooms,NumberOfMembers,win} = require('../models/model')

//joins the path and sends index.html in response to the root path GET requests //__dirname: A Node.js global variable that holds the absolute path to the directory containing the current executing script.
exports.get = (req, res) => {
    res.sendFile(join(__dirname, '../views/index.html'));
};


//getting for data from 'TheForm' in index.html
//set the structure of new room
exports.post = (req,res)=>{
    if(req.body.action_to_do === 'create'){    //if create is choosengenarate a path wiht 6 charcter roomcode postfix after ludo/
        let p0th = randomPath()
        rooms[p0th] = {}; // setting a new room with a new identifier
        //console.log("path",p0th);
        win[p0th] = {}; //tracking winner 
        NumberOfMembers[p0th] = {constant:false,members:4}; // max number 4, constant ??????

        res.redirect(301, 'ludo/' + p0th);
    } else if(req.body.action_to_do === 'join'){        //if join is selected then redirec uri is  ludo/roomcode
            if(Object.keys(rooms).includes(req.body.roomcode)){ //if the submitted roomcode exists in the rooms object.
                res.redirect(301, 'ludo/' + req.body.roomcode);
            } else{
                res.statusCode = 404;
                res.end('404!');
            }
        } else{
            res.statusCode = 404;
            res.end('404!');
        }
}

// Handler for the /about endpoint
exports.getAbout = (req, res) => {
    res.sendFile(join(__dirname, '../views/about.html')); // Ensure path is correct
};

//to generate unique rooms
function randomPath(){
    let randomPath = Math.random().toString(36).substr(2,6); //genarating a random path nunmber with 6 charecter
    if(!Object.keys(rooms).includes(randomPath)){
        return randomPath;
    } else{ randomPath(); }
};
