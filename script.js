const header=document.querySelector(".header");
const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");
 menubtn.onclick=()=>{
    menubtn.classList.add("hide");
    menulist.classList.add("active");
    closebtn.classList.remove("hide");
 }
 closebtn.onclick=()=>{
    menubtn.classList.remove("hide");
    menulist.classList.remove("active");
    closebtn.classList.add("hide");
 }

 window.onscroll=()=>{
   this.scrollY > 20? header.classList.add("stickey"): header.classList.remove("stickey");
 }
 var n1 = setInterval(counter1,500)
 var n2 = setInterval(counter2,50)
 var n3 = setInterval(counter3,500)
 var n4 = setInterval(counter4,50)
 let count1=1;
 let count2=1;
 let count3=0;
 let count4=1;

 function counter1(){
   count1++;
   document.querySelector("#n-1").innerHTML= count1
   if(count1==5){
      clearInterval(n1);
   }

}
function counter2(){
   count2++;
   document.querySelector("#n-2").innerHTML= count2 + "K"
   if(count2==50){
      clearInterval(n2);
   }

} 
function counter3(){
   count3++;
   document.querySelector("#n-3").innerHTML=count3
   if(count3==3){
      clearInterval(n3);
   }

} function counter4(){
   count4++;
   document.querySelector("#n-4").innerHTML= count4 + "%"
   if(count4==90){
      clearInterval(n4);
   }

}

 var a1 = setInterval(counter5,1)
 var a2 = setInterval(counter6,80)
 var a3 = setInterval(counter7,80)
 var a4 = setInterval(counter8,100)
 let count5=1;
 let count6=1;
 let count7=0;
 let count8=1;

 function counter5(){
   count5++;
   document.querySelector("#a-1").innerHTML= count5
   if(count5==1996){
      clearInterval(a1);
   }

}
function counter6(){
   count6++;
   document.querySelector("#a-2").innerHTML= count6+ "%"
   if(count6==67){
      clearInterval(a2);
   }

} 
function counter7(){
   count7++;
   document.querySelector("#a-3").innerHTML="0 ."+ count7
   if(count7==94){
      clearInterval(a3);
   }

} function counter8(){
   count8++;
   document.querySelector("#a-4").innerHTML= count8 + "%"
   if(count8==14){
      clearInterval(a4);
   }

}