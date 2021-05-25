// var fs = require("fs");

for(i = 1;i <= 14;i++){
    fs.writeFile(`projeto${i}.js`, "", function(err){
        if(err !== null){
            console.log(err)
        } else{
            console.log("Arquivo escrito com sucesso")
        }
    });
}