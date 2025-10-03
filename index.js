document.querySelector("form").addEventListener("submit",(e)=>{
    e.preventDefault()
    let obj = {name : e.target.pname.value}
    async function f()
    {
        try{
            let a = await axios.post(`http://localhost:1030/products`,obj)
            console.log(a.data)
        }
        catch(e)
        {
            console.log(e)
        }
    }
    f()
})
