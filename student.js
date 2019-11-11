
document.getElementById('GetButton').addEventListener('click',RendorTanble);
 function RendorTanble()
{

  let table=document.getElementById('tableid');
let page=document.getElementById('inputid').value;
fetch('http://localhost:3000/student?page='+page, {
  method: 'GET',
})

.then(response => response.json())
.then((data) => { 

for(let i=0;i<data.length;i++)
{
document.getElementById('tableid').innerHTML+='<tr><th>ID</th><th>Firstname</th><th>Lastname</th><th>grade</th></tr>'
+'<tr><td>'+ data[i].id +'</td><td>'+ data[i].first_name +'</td><td>'+ data[i].last_name +'</td><td>'+ data[i].grade +'</td></tr>';
}
})
}



////
/*  for (let element of data) {
               let row = table.insertRow();
             for (key in element) {
             let text = document.createTextNode(element[key]);
             table.appendChild(text);
            }
        }
                    console.log(data);



}
 */