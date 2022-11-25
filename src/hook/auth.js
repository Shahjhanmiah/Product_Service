export const  setAuthToken = user=>{
    const currentUser = {
        email:user.email
    }
    fetch(`http://localhost:5000/user?email=${user?.email}`,{
        method:'PUT',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(currentUser),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

    // save token locatstorge 
    localStorage.setItem('product-token','data-token')
}