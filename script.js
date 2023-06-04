
var data=[];
document.getElementById("add").addEventListener("click",() =>{

    let name=document.getElementById("sname").value;
    let age=document.getElementById("sage").value;
    let prof=document.getElementById("profession").value;

   
    let obj={name:name, age:age, prof:prof};

    data.push(obj);


    console.log(data);
    print(data);
    document.getElementById("sname").value="";
    document.getElementById("sage").value="";
    document.getElementById("profession").value="";

       


})

function print(data) {


    let tbody=document.getElementById("tbody");
    tbody.innerHTML="";


    for(let i=0; i<data.length;i++)
    {

        
    let row=document.createElement("tr");
    row.setAttribute("class","rows")
     tbody=document.getElementById("tbody");


    let col1=document.createElement("td");
    let col2=document.createElement("td");
    let col3=document.createElement("td");
    let col4=document.createElement("td");
    let col5=document.createElement("td");

    col1.innerText=i+1;
    col2.innerText=data[i].name;
    col3.innerText=data[i].age;
    col4.innerText=data[i].prof;
    col5.innerHTML=` <span class="material-icons delete">
    delete
    </span> 
    <span class="material-icons edit">
    edit
    </span>`

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    row.appendChild(col5);
    tbody.appendChild(row);

    }

}
