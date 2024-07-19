let inputBox=document.getElementById('to-do');
let listContainer=document.getElementById('to-do-list');

function addTask(){
  if(inputBox===" "){
    alert("you must fill input field");
  }else{
    let li=document.createElement('li');
    li.innerHTML=inputBox.value;
    listContainer.appendChild(li);
    let span=document.createElement('span');
    span.innerHTML="\u00d7";//delete icon
    li.appendChild(span);
  }
  inputBox.value=" ";
  saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked');//toggle the classlist to checked and unchecked
        saveData();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();//if span is pressed then remove the parent element which is 
        saveData();
    }
},false);
function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);//anything in listContainer will be saved in localStorage in browser
}
function showData(){
    listContainer.innerHTML=localStorage.getItem('data');//get data from showData
}
showData();