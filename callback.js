// function success(){
//     console.log("Transaction Successful")
// }

// function fail(){
//     console.log("Transaction Failed")
// }

// function error(){
//     console.log("Transaction Error Occured")
// }

// function exec(data, callback){
//     if(data!=null)
//     {
//         console.log(`Balance: ${data}`)
//     }
//     setTimeout(callback, 2000)
// }

// function trigger(data){
//     if(data>=0)
//     {
//         exec(data, success)
//     }
//     else if(data<0)
//     {
//         exec(data, fail)
//     }
//     else
//     {
//         exec(data, error)
//     }
// }

// trigger("hi")

async function api(){
    try {
        const response = await fetch("https://66e527865cc7f9b6273c710b.mockapi.io/register")
        const data = await response.json()
        // console.table(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
async function apidata()
{
    let Data = await api();
    Data= Data.filter((user)=>{
        return user.isActive;
    })
    // console.log(Data)
    Data.map((data)=>{
        console.log(data)
    })
}
apidata()