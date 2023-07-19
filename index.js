// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return `This Saturday, I want to ${activity}!`
}
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
function wrapAdjective(string="*"){
    let innerFunction = function (msg="special"){
        return `You are ${string}${msg}${string}!`
    }
    return innerFunction
}
console.log (wrapAdjective("*")("a dedicated programmer"))
