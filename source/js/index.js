
        window.onload = function(){
        var sidebarOptions = document.querySelectorAll('.sidebar-list-option');
        var cards = document.querySelectorAll('.card');
        /*$(".cards") ->bak*/
        
        for (var i = sidebarOptions.length - 1; i >= 0; i--) {
        sidebarOptions[i].addEventListener('click', optionFunc);
        }
        
        function optionFunc() {
        for (var i = cards.length - 1; i >= 0; i--) {

            if (cards[i].className.indexOf(this.dataset.type) !== -1 ) 
            {          
            cards[i].classList.add('selected');
                   
            }
            else
            {
            cards[i].classList.remove("selected");
            }  
        }
        }   
        var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
    }
        
 
function sub(){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.jotform.com/form/81922928923971/submissions?apiKey=319a3273583004fae2aea0f14d59bd4d');
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             content = JSON.parse(this.responseText)["content"];
             console.log(JSON.parse(this.responseText)["content"]);
           var agee=document.getElementById("Age").value
             var a=document.getElementById("list");
             for(i=0;i<=a.options.length+1;i++){
                a.remove(0);
                document.getElementById("Address").options.remove(1)
                                 
                  
             }
             
             for(i=0;i<content.length;i++){
                 if (agee=="all") {
                     var x=document.getElementById("list");
                     var c=document.createElement("option");
                     c.text=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                     
                     var ad=document.getElementById("Address")
                    var adr = document.createElement("option");
                    adr.text=content[i]["answers"]["12"]["answer"]["city"];
                        ad.options.add(adr)
                    if(document.getElementById("Sort").value=="old"){
                        x.options.add(c,0);
                    }
                    else{
                        x.options.add(c);
                    }
                    
                    
                   
                     
                     
                 }
                 if (agee=="small" && "2018"-content[i]["answers"]["13"]["answer"]["year"]<30) {
                    var x=document.getElementById("list");
                    var c=document.createElement("option");
                    c.text=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                    var ad=document.getElementById("Address")
                    var adr = document.createElement("option");
                    adr.text=content[i]["answers"]["12"]["answer"]["city"];
                     ad.options.add(adr)
                     if(document.getElementById("Sort").value=="old"){
                        x.options.add(c,0);
                    }
                    else{
                        x.options.add(c);
                    }
                    
                }
                if (agee=="big" && "2018"-content[i]["answers"]["13"]["answer"]["year"]>30) {
                    var x=document.getElementById("list");
                    var c=document.createElement("option");
                    c.text=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                    var ad=document.getElementById("Address")
                    var adr = document.createElement("option");
                    adr.text=content[i]["answers"]["12"]["answer"]["city"];
                    ad.options.add(adr)
                    if(document.getElementById("Sort").value=="old"){
                        x.options.add(c,0);
                    }
                    else{
                        x.options.add(c);
                    }
                    
                 
                }
                
             
            
            
            
            }
    }
}
}

function addr(){
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.jotform.com/form/81922928923971/submissions?apiKey=319a3273583004fae2aea0f14d59bd4d');
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             content = JSON.parse(this.responseText)["content"];
             console.log(JSON.parse(this.responseText)["content"]);
             var a=document.getElementById("list");
             var addr=document.getElementById("Address")
             for(i=0;i<=addr.options.length+1;i++){
                a.remove(0);     
                  
             }
             
             for(i=0;i<content.length;i++){
                 if(addr.value=="All"){
                    var x=document.getElementById("list");
                    var c=document.createElement("option");
                    c.text=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                    x.options.add(c);
                    console.log(Address.text)
                    
                 }
                 
                 if(addr.value==content[i]["answers"]["12"]["answer"]["city"]){
                    var x=document.getElementById("list");
                    var c=document.createElement("option");
                    c.text=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                    x.options.add(c);
                 }


                }

            }
    }
} 

function handleSubmissions() {
    var selectedValue=document.getElementById("list").value;    
  
    
    var req = new XMLHttpRequest();
    req.open('GET', 'https://api.jotform.com/form/81922928923971/submissions?apiKey=319a3273583004fae2aea0f14d59bd4d');
    req.send();
    req.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
             content = JSON.parse(this.responseText)["content"];
             console.log(JSON.parse(this.responseText)["content"]);
            for ( i=0; i<content.length; i++){
                 id=content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"];
                 
                if (id===selectedValue){
                  //  console.log("Buldum");
                  
                  //main
                  document.getElementById("Name").innerHTML =content[i]["answers"]["3"]["answer"]["first"]+" "+content[i]["answers"]["3"]["answer"]["last"]
                  document.getElementById("images").src =content[i]["answers"]["11"]["answer"];
                  document.getElementById("linkedin").href = "https://www.linkedin.com/"+content[i]["answers"]["16"]["answer"];
                  document.getElementById("Twitter").href = "https://www.twitter.com/"+content[i]["answers"]["14"]["answer"];
                  document.getElementById("github").href = "https://www.github.com/"+content[i]["answers"]["15"]["answer"];
                 // document.getElementById("spotify").href = "https://www.spotify.com/"+content[i]["answers"]["15"];
                 // document.getElementById("stack-overflow").href = "https://www.stackoverflow.com/";
                  //education
                document.getElementById("Education").innerHTML=content[i]["answers"]["8"]["answer"]+ "<br>" +content[i]["answers"]["9"]["answer"]+ "<br>" +content[i]["answers"]["10"]["answer"]
                                document.getElementById("images").src =content[i]["answers"]["11"]["answer"];
                  //about
                  document.getElementById("about").innerHTML=content[i]["answers"]["17"]["answer"]
                  document.getElementById("Address").innerHTML=content[i]["answers"]["12"]["prettyFormat"]
                  
                  /*for(i=0; i<8;i++){
                      if()
                  }*/
                  var a=["HTML5","CSS3","JS","PHP","PYTHON","C#","PHOTOSHOP","ILLUSTRATOR"]
                  for(j=0;j<a.length;j++){
                 document.getElementById(a[j]).style.width=content[i]["answers"]["20"]["answer"][a[j]]+"%"
                 document.getElementById(a[j]).innerHTML=content[i]["answers"]["20"]["answer"][a[j]]
                }
                  document.getElementById("tel").innerHTML="("+content[i]["answers"]["7"]["answer"]["area"]+")"+content[i]["answers"]["7"]["answer"]["phone"]
                 document.getElementById("pdf").href="https://api.jotform.com/generatePDF?type=PDFv2&username=fevziyildirmm&formid=81922928923971&reportid=123&submissionid="+content[i]["id"]+"&apiKey=319a3273583004fae2aea0f14d59bd4d&download=1"
                }
                
            }
  
            
        }
    };
};
function myFunction() {
    location.reload();
}

sub()







 //console.log();
                    //console.log(content[i]["answers"]["4"]["answer"]);
                   // console.log(content[i]["answers"]["5"]["answer"]);
                    //console.log(content[i]["answers"]["6"]["answer"]);
                   

//console.log(sidebarOptions);

        /*-----API-----*/

        /*app.get("/jotform", (req, res) =>{
        let result;
    request.get(
        "https://api.jotform.com/user/submissions?apiKey=319a3273583004fae2aea0f14d59bd4d",
        function (error, response, body) {
            if (!error && response.statusCode == 200) {
                // console.log(JSON.parse(body).content);
                result = JSON.parse(body).content;
                console.log(result.length);
                for (let i = 0; i<result.length; i++){
                    console.log(result[i].answers["1"]["answer"]);
                }
                    // for (var i = 0; i<result.length;i++){
                    //     returnval.add(result[i].answers["1"]["answer"]);
                    // }
                    // res.send(returnval);
                //res.sendStatus(200);
            }
        }
    );
    });*/
//console.log(Object.keys(content[i]["answers"]["3"]["answer"]["first"]));
//console.log(content[i]["form_id"];
//  var name=document.getElementById("first").value;
        //var surname=document.getElementById("last").value;