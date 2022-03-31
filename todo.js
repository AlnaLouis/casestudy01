function ajax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState==4&&this.status==200){
            var response = JSON.parse(this.responseText);
            var output = "";
            for(var i=0;i<response.length;i++){
                if(response[i].completed==false){
                    output += '<li class="list-group-item"> <input type="checkbox" class="form-check-input checkbox" onchange="validater()">' +'&nbsp'+  response[i].title + "<br>" ;  
                }
                else{
                output += '<li class="list-group-item list-group-item-info"> <input type="checkbox" class="form-check-input" checked disabled>'+ '&nbsp'  + response[i].title + "<br>" ;
                }
            }
            document.getElementById("demo").innerHTML = output;
        }
    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send();
}

function validater(){
   var promise = new Promise(function(resolve,reject){
        var todo = document.getElementsByClassName("checkbox");
        var num =0;
        for (var i=0; i<todo.length; i++){
            if (todo[i].type == "checkbox" && todo[i].checked == true){
                num++;
            }
        }
        if(num%5==0 && num!=0 ){
            resolve(`Congrats. ${num} Tasks have been Successfully Completed!!`);
        }
        else{
            reject("5 Tasks are not completed");
        }
    })
    promise
    .then(function(message){
        alert(message);
    })
    .catch(function(message){
        console.log(message);
    });
}



