function someFunc(){
  validate();
}

function validate(){
  
  var name = document.getElementById("name");	
  var a1 = /^[a-zA-Z]{3,}$/.test((name.value));
  var mail = document.getElementById("mail");
  var a2 = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test((mail.value));
  var wish = document.getElementById("wish");
  var a3 = /.+/.test((wish.value));
  var a = [a1, a2, a3],
      b = [name, mail, wish];
      c = [document.getElementById('namehdn'), document.getElementById('mailhdn'), document.getElementById('texthdn')];
      if (validationcheck(a)) { addRow(); }
  for(var i=0, len=a.length; i < len; i++){
    if (!a[i]) { warning(b[i],c[i]);     
    } else { normal(b[i],c[i]); }
  }
}

function validationcheck(arr){
 
    for(var i=0, len=arr.length; i < len; i++){
      if (!arr[i]) { return false; } 
    }
    return true;
}
function addRow(){
  var table = document.getElementById("tab1");
  var wish = document.getElementById("wish").value;
    if (table.rows.length > 0 && table.rows[0].cells.length < 3 ) {
        row = table.rows[0];
    } else {
        row = table.insertRow(0);
    }
    
    var cell = row.insertCell(0);
    cell.innerHTML = wish;
      
}

    
function normal(elemId, hintId){
    elemId.style.border = '1px solid black';   
    hintId.hidden = true;
}

function warning(elemId, hintId){
    elemId.style.border = '1px solid red';   
    hintId.hidden = false;
}