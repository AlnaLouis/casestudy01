//creating object
function ajax()
{
        //creating an Xhr object
        //step 1: 
        var xhttp = new XMLHttpRequest();
        //eventlistener
        //step 4:
        xhttp.onreadystatechange = function(){
            //condition
            //step 5:
            if(this.readyState==4 && this.status==200){
                 var response =JSON.parse(this.responseText);
                 //go to mdn web docs for more information about states
                //we will get object object as output while using parse
                //if we dont use parse we will get json array in a line
               
                var output="";
                for(var i = 0;i<response.length;i++)
            {
                    if(response[i].complete==false){
                //we can insert <li>tad to make it beautiful
                output +=`<ul class="list-group gy-2 w-24"><li class="list-group-item"><input class="form-check-input me-1" id="box" type="checkbox" value=""  onchange= "validater()" aria-label="...">`
                +`&nbsp`+response[i].title+ `
                 </li></ul><br>`;
                    }
                    else{
                        output +=`<ul class="list-group gy-2 w-24"><li class="list-group-item"><input class="form-check-input me-1" id="box" type="checkbox" value=""  checked disabled aria-label="...">`
                        +`&nbsp`+response[i].title+ `
                         </li></ul><br>`;

                    }

            }
            
            //step 6:
            document.getElementById("demo").innerHTML=output;
            }
        }
        //instatinating the request object
        //step 2:
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
//step 3:
//sending request to server
xhttp.send();
}



function validater(){
    var promise = new Promise(function(resolve,reject){
         var chec = document.getElementsByClassName("box");
         var num =0;
         for (var i=0; i<list.length; i++){
             if (chec[i].type == "box" && chec[i].checked == true){
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
     get
     .then(function(c){
         alert(c);
     })
     .catch(function(s){
         console.log(s);
     });
    }
        

