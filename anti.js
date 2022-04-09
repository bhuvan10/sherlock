function func2()
{
    if(document.getElementById("ans1_1").value.toUpperCase() =="H"&&document.getElementById("ans1_2").value=="10")
    {
      if(document.getElementById("ans2_1").value.toUpperCase() =="C"&&document.getElementById("ans2_2").value=="9")
      {
        if(document.getElementById("ans3_1").value.toUpperCase() =="O"&&document.getElementById("ans3_2").value=="20")
        {
          if(document.getElementById("ans4_1").value.toUpperCase() =="F"&&document.getElementById("ans4_2").value=="110")
          {
                document.getElementById("link").setAttribute('href','/timer.html');
            }
            else
            {
            
             document.getElementById("link").setAttribute('href','/dead.html');
            }
          }
          else
          {
           document.getElementById("link").setAttribute('href','/dead.html');
        }
        }
        else
        {
         document.getElementById("link").setAttribute('href','/dead.html');   
        }
    }
    else
    {
     document.getElementById("link").setAttribute('href','/dead.html');
    }

}