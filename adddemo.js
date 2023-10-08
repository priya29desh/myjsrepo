function add()
       {
             var a=parseFloat(document.getElementById("txt1").value);
             var b=parseFloat(document.getElementById("txt2").value);
             
             if (isNaN(a)==false&&isNaN(b)==false)
                document.getElementById("txt3").value=a+b;
             else
             {
                 alert("Please enter numeric values");
                 txt1.focus();
             }
     }