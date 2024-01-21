const item= document.querySelector('#item')
const toDoBox= document.querySelector('#to-do-box')

item.addEventListener(
    "keyup",
    function(event){
        //console.log(event.key)
        if(event.key    ==  "Enter"){
            //console.log(this.value);
            addtodo(this.value)
            this.value ="";
        }
    }
)

const addtodo=(item)=>
{
   const listItem= document.createElement('li');
   
   listItem.innerHTML = `
        ${item}
        <i class ="fas fa-times"></i>
   `;

   listItem.addEventListener("click", function(event){
        this.classList.toggle("done");
   })
   listItem.querySelector("i").addEventListener(
        "click",
        function(){
        listItem.remove();
        }
   )
   toDoBox.appendChild(listItem);
}