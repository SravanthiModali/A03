//creating App object to take the input from the web page and 
//calculate the cost of the icecream
var totalcost=0;
 var App={
     launch:function(){
         
         App.calculateVanilla();
         App.calculateStrawberry();
         App.calculateHazlenut();
         App.calculatePowerstar();
         App.settotalcost();
         
     },
 
    calculateVanilla: function () {
         if ($("#Va")[0].checked==true) {
             var vanilla = 1;
             //var totalvanilla = vanilla * $("#vn").val();
             var totalvanilla = App.multiply(vanilla,$("#vn").val());
             totalcost = totalcost+totalvanilla;
                
         }
         else totalcost = totalcost;        
    },

    multiply(vanilla,num){
        if(vanilla>0 && num > 0){
            return vanilla * num;
        }
        else{
            if (vanilla < 0 && num < 0){
                throw Error('Cost and count should not be negative');
            }
            else if (vanilla < 0){
                throw Error('Cost should not be negative');
            }
            else if (num < 0){
                throw Error('Count should not be negative');
            }
            else if (vanilla === null || num === null){
               throw Error('Cost or count should not be null'); 
            }  
            else if (typeof vanilla !== 'number' || typeof num !== 'number'){
                throw Error('Cost or count is not a number'); 
            }       
        }
        
    },

    calculateStrawberry: function () {
         if ($("#St")[0].checked==true) {
             var strawberry = 2;
             var totalstrawberry = strawberry * $("#sn").val();
             totalcost = totalcost+totalstrawberry;
                  
         }
         else {
             totalcost = totalcost;   
         }
    },

    calculateHazlenut: function () {
        if ($("#Hz")[0].checked==true) {
            var hazelnut = 3;
            var totalhazelnut = hazelnut * $("#hn").val();
            totalcost = totalcost+totalhazelnut;
            
        }
        else{ totalcost = totalcost; 
        }
        
    },

    calculatePowerstar: function () {
        if ($("#Pw")[0].checked==true) {
            var power = 4;
            var totalpower = power * $("#pn").val();
            totalcost = totalcost+totalpower;
              
        }
        else{ totalcost = totalcost; 
        }
    },

    settotalcost: function () {
        
        $("#fnlCost").html(totalcost);
        document.getElementById("greeting").innerHTML="Thank You! Have a nice day!";
       
    },

  

 }