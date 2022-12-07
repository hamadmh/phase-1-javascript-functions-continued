function saturdayFun(fun = "roller-skate"){
    return `This Saturday, I want to ${fun}!`;
}
function mondayWork(work = "go to the office"){
    return `This Monday, I will ${work}.`;
}
function wrapAdjective(flair = "*"){
    return function(param = "special"){
        return `You are ${flair}${param}${flair}!`;
    }
}