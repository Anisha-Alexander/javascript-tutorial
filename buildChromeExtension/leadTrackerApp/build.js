let myLeads=[ ]
const inputEl =document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl= document.getElementById("ul-el")

inputBtn.addEventListener("click",function(){
    myLeads.push(inputEl.value)
    inputEl.value=" "    
    renderLeads()
    
})
function renderLeads(){
    let listItems = " "
    for (let i =0; i<myLeads.length;i++){        
        // listItems += "<li> <a  target='_blank'href='"+myLeads[i]+"'>" + myLeads[i]+ "<a></li>" 
        listItems += `
        <li> 
                ${myLeads[i]}                 
            <a>
        </li>
        `
        //const li= document.createElement("li")// create element
        //li.textContent= myLeads[i] //set text content
        //ulEl.append[i]//append to ul
    }
    ulEl.innerHTML=listItems       
}

