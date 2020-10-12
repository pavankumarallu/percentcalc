var name= prompt("enter your name");
document.write("Hello"+"   "+name+".");
document.write("\nPlease enter your marks");
function set()
{
    let wp=document.getElementById("wp").value;
    let math=document.getElementById("math").value;
    let science=document.getElementById("science").value;
    let english=document.getElementById("eng").value;


    let total=parseFloat(wp)+parseFloat(math)+parseFloat(science)+parseFloat(english);
    alert(total);
    document.getElementById("tot").innerHTML="total is:"+total;
    let percent=(total/400)*100;
    document.getElementById("per").innerHTML="percentage is:"+percent+"%";
}
