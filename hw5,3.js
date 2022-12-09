separators(1234456787);
separators(1000);

function separators(num){
    if (typeof num !== "number" ||  parseInt(num) !== num ) {
        return console.log("wrong input");
        
    }

return console.log(num.toLocaleString());
};