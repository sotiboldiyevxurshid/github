let local = localStorage
const getItem = () => {
let inp = document.querySelector('input');
if(inp.value !== "" && !inp.value.includes(" ")) {
    let data = {
        name: "xurshid"
        
    }
    local.setItem("user-name",JSON.stringify(data))
    let get_data = local.getItem("user-info")
    get_data = JSON.parse(get_data)
}
else{
    alert("to'ldir")
}

}
let heading = document.querySelector('h1');
heading.innerHTML = JSON.parse(local["user-name"]).name


const removeData = () =>{
  local.removeItem("user-name")
}
