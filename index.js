

let addBtn = document.getElementById('add_btn')
let subBtn = document.getElementById('subs_btn')
var  data =0  
var x = "hidden"
document.getElementById('value_btn').innerText =data


//increase the count
addBtn.addEventListener('click', ()=>{
    data= data + 1;
    document.getElementById('value_btn').innerText= data
    console.log(data)

})

//decrease the count
subBtn.addEventListener('click', ()=>{
   data= data - 1
    document.getElementById('value_btn').innerText= data
    console.log(data)
  
})

function toggle() {
    var x = document.getElementById("hidden");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }


