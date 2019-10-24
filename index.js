let kodersProcess = {
    gotInterviewed : false,
    gotDeposit : false,
    goToFirstClass : false, 
}
​
function interview (object, callback){
    object.gotInterviewed = true
    let error = null
        if (!object.gotInterviewed){
            error = new Error ('NO FUE A LA ENTREVISTA')
        }
    callback (error, object)
}
​
function deposit (object, callback){
    object.gotDeposit = true
    let error = null
        if (!object.gotDeposit){
            error = new Error ('NO DIO SU DEPOSITO')
        }
    callback (error, object)
}
​
function firstClass (object, callback){
    object.goToFirstClass = true
    let error = null
        if (!object.goToFirstClass){
            error = new Error ('NO FUE A SU PRIMERA CLASE')
        }
    callback( error, object)
}
​
function enterKodemia (object){
    interview (kodersProcess, (error, koderInterviewed) => {
        if (error) throw error
        console.log ('koderInterviewed:', koderInterviewed)
    
    deposit (koderInterviewed,(error, koderDeposit) =>{
        if (error) throw error
        console.log ( 'koderDeposit:', koderDeposit)
​
    firstClass (koderDeposit,(error, koderfirstClass) =>{
        if (error) throw error
        console.log ('koderFirstClass:', koderfirstClass)
    })
    })
    })
}
enterKodemia ()