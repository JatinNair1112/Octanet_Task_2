document.addEventListener('DOMContentLoaded',function(){
    const inputbox=document.getElementById('input-box');
    const listcontainer=document.getElementById('list-container');
    document.querySelector('button').onclick=()=>{
       if(inputbox.value=='') alert(`Please Enter a Task`);
    else {
       var li=document.createElement('li');
       li.innerHTML=inputbox.value;
       listcontainer.appendChild(li);
       li.style.color="rgb(140, 19, 0)";
       let span=document.createElement('span');
       span.innerHTML="\u00d7";
       li.appendChild(span);
       span.style.color="rgb(140, 19, 0)";
    }
    inputbox.value='';
    saveData();
    }
    listcontainer.addEventListener('click',(e)=>{
        if(e.target.tagName==="LI"){
           e.target.classList.toggle('checked');
          
           saveData()
        }
        else if(e.target.tagName==='SPAN'){
           e.target.parentElement.remove();
           saveData()
        }
    },false);
    function saveData(){
       localStorage.setItem("data",listcontainer.innerHTML);
    }
    function showTask(){
       listcontainer.innerHTML=localStorage.getItem("data");
    }
    showTask();
  });