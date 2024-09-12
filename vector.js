let totalturn=10;
let questionarray=[0]
let optionarray=[0]
let anscheckarray=[0]
let ansnoarray=[0]
let right=0
let wrong=0
let anscheck=0
let questionno=0
let ansno=0
let ans=0;
let ans2=0;
let ans3=0;
let ans4=0;
let eque=0;
let output=0;
let voutput1=0;
let voutput2=0;
let voutput3=0;
let voutput4=0;


let objective=()=>{
let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");  

no1.addEventListener ('click',choice1);
no2.addEventListener ('click',choice2);
no3.addEventListener ('click',choice3);
no4.addEventListener ('click',choice4);

function choice1(){
ansno = 1;
document.getElementById("no1").style.background="#40e0ffcd";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+1)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice2(){
ansno = 2;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="#40e0ffcd";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+2)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice3(){
ansno = 3;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="#40e0ffcd";
document.getElementById("no4").style.background="white";
//console.log("ans="+3)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}

function choice4(){
ansno = 4;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="#40e0ffcd";
//console.log("ans="+4)
document.getElementById("button").innerHTML=
`<button type="submit" id="next" onclick="next()">Next</button>`
}
}





let objective2=()=>{

let no1 = document.getElementById("no1");
let no2 = document.getElementById("no2");
let no3 = document.getElementById("no3");
let no4 = document.getElementById("no4");
  
no1.addEventListener ('click',choice1);
no2.addEventListener ('click',choice2);
no3.addEventListener ('click',choice3);
no4.addEventListener ('click',choice4);

function choice1(){
ansno = 1;
document.getElementById("no1").style.background="#40e0ffcd";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+1)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  

}

function choice2(){
ansno = 2;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="#40e0ffcd";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
//console.log("ans="+2)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}

function choice3(){
ansno = 3;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="#40e0ffcd";
document.getElementById("no4").style.background="white";
//console.log("ans="+3)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}

function choice4(){
ansno = 4;
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="#40e0ffcd";
//console.log("ans="+4)
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
}
}

















//new........... 






vectoroutput=(a,b,c)=>{
//let voutput1
let PM1,PM2,PM3;

if(b<0 && c<0){    
    PM1=""
    PM2=""    
}

else if((b==0 || b>0) && c<0){    
    PM1="+"
    PM2=""  
}

else if(b<0 && (c==0 || c>0)){    
    PM1=""
    PM2="+"    
}


else if((b==0 || b>0) && (c==0 || c>0)){    
    PM1="+"
    PM2="+"    
}


if(a!=0 && b!=0 && c!=0){  
voutput1= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";           
}

else if(a==0 && b!=0 && c!=0){  
voutput1=b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";         
}

else if(a!=0 && b==0 && c!=0){  
voutput1= a+"<b><i> i </i></b>"+PM2+" "+c+"<b><i> k </i></b>";              
}


else if(a!=0 && b!=0 && c==0){
voutput1= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>";    
}

else if(a==0 && b==0 && c!=0){  
voutput1=c+"<b><i> k </i></b>";               
}

else if(a==0 && b!=0 && c==0){  
voutput1= b+"<b><i> j </i></b>";               
}

else if(a!=0 && b==0 && c==0){  
voutput1= a+"<b><i> i </i></b>";               
}


    
//console.log(voutput1)    
  

}








vectoroutput2=(a,b,c)=>{
//let voutput2
let PM1,PM2,PM3;

if(b<0 && c<0){    
    PM1=""
    PM2=""    
}

else if((b==0 || b>0) && c<0){    
    PM1="+"
    PM2=""  
}

else if(b<0 && (c==0 || c>0)){    
    PM1=""
    PM2="+"    
}


else if((b==0 || b>0) && (c==0 || c>0)){    
    PM1="+"
    PM2="+"    
}


if(a!=0 && b!=0 && c!=0){  
voutput2= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";           
}

else if(a==0 && b!=0 && c!=0){  
voutput2=b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";         
}

else if(a!=0 && b==0 && c!=0){  
voutput2= a+"<b><i> i </i></b>"+PM2+" "+c+"<b><i> k </i></b>";              
}


else if(a!=0 && b!=0 && c==0){
voutput2= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>";    
}

else if(a==0 && b==0 && c!=0){  
voutput2=c+"<b><i> k </i></b>";               
}

else if(a==0 && b!=0 && c==0){  
voutput2= b+"<b><i> j </i></b>";               
}

else if(a!=0 && b==0 && c==0){  
voutput2= a+"<b><i> i </i></b>";               
}


    
//console.log(voutput2)    
  

}







vectoroutput3=(a,b,c)=>{
//let voutput3
let PM1,PM2,PM3;

if(b<0 && c<0){    
    PM1=""
    PM2=""    
}

else if((b==0 || b>0) && c<0){    
    PM1="+"
    PM2=""  
}

else if(b<0 && (c==0 || c>0)){    
    PM1=""
    PM2="+"    
}


else if((b==0 || b>0) && (c==0 || c>0)){    
    PM1="+"
    PM2="+"    
}


if(a!=0 && b!=0 && c!=0){  
voutput3= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";           
}

else if(a==0 && b!=0 && c!=0){  
voutput3=b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";         
}

else if(a!=0 && b==0 && c!=0){  
voutput3= a+"<b><i> i </i></b>"+PM2+" "+c+"<b><i> k </i></b>";              
}


else if(a!=0 && b!=0 && c==0){
voutput3= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>";    
}

else if(a==0 && b==0 && c!=0){  
voutput3=c+"<b><i> k </i></b>";               
}

else if(a==0 && b!=0 && c==0){  
voutput3= b+"<b><i> j </i></b>";               
}

else if(a!=0 && b==0 && c==0){  
voutput3= a+"<b><i> i </i></b>";               
}


    
//console.log(voutput3)    
  

}





vectoroutput4=(a,b,c)=>{
//let voutput3
let PM1,PM2,PM3;

if(b<0 && c<0){    
    PM1=""
    PM2=""    
}

else if((b==0 || b>0) && c<0){    
    PM1="+"
    PM2=""  
}

else if(b<0 && (c==0 || c>0)){    
    PM1=""
    PM2="+"    
}


else if((b==0 || b>0) && (c==0 || c>0)){    
    PM1="+"
    PM2="+"    
}


if(a!=0 && b!=0 && c!=0){  
voutput4= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";           
}

else if(a==0 && b!=0 && c!=0){  
voutput4=b+"<b><i> j </i></b>"+PM2+" "+c+"<b><i> k </i></b>";         
}

else if(a!=0 && b==0 && c!=0){  
voutput4= a+"<b><i> i </i></b>"+PM2+" "+c+"<b><i> k </i></b>";              
}


else if(a!=0 && b!=0 && c==0){
voutput4= a+"<b><i> i </i></b>"+PM1+" "+b+"<b><i> j </i></b>";    
}

else if(a==0 && b==0 && c!=0){  
voutput4=c+"<b><i> k </i></b>";               
}

else if(a==0 && b!=0 && c==0){  
voutput4= b+"<b><i> j </i></b>";               
}

else if(a!=0 && b==0 && c==0){  
voutput4= a+"<b><i> i </i></b>";               
}


    
//console.log(voutput4)    
  

}







vectoroutput(5,0,0)



//new..........end























let math=()=>{
let r = Math.floor(Math.random()*20)+6
let a = Math.floor(Math.random()*10)+3
let b = Math.floor(Math.random()*10)+1
let c = Math.floor(Math.random()*20)
let d = Math.floor(Math.random()*10)+4
let e = Math.floor(Math.random()*5)
//let e=1
let f = Math.floor(Math.random()*10)
let g = Math.floor(Math.random()*4)+1
let h = Math.random()*1
let x = Math.floor(Math.random()*10)
let y = Math.floor(Math.random()*10)
let z = Math.floor(Math.random()*5)
let power1 = Math.floor(Math.random()*6)
let power2 = Math.floor(Math.random()*6)
let p=Math.PI;
 
 
 
anscheck=Math.floor(Math.random()*4+1) 
questionno+=1
 
if (z==0){ 

//code for Circle 

if (e==0){

vectoroutput(a,b,c)
vectoroutput2(d,e,f)

ans=a*d+b*e+c*f;
//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span>.<span class='vector'>B</span> = ? ";

ans2=a*e+b*d+c*f
ans3=(a+d)*(b+e)+(c+f)
ans4=a*b*c+d*e*f


//eque=1;
}

else if (e==1){
let angle=d**2/a
angle=Number(angle).toFixed(2)



let radian=angle*Math.PI/180;
let cosa=Math.cos(radian)
cosa=cosa.toFixed(2)
let sina=Math.sin(radian)
sina=sina.toFixed(2)


ans=a*b*cosa;
ans=Number(ans).toFixed(2)
document.getElementById("question").innerHTML="যদি A = "+a+" ও B = "+b+" এবং A ও B এর মধ্যবর্তী কোণ "+angle+" হয়।তবে "+"<span class='vector'>A</span>.<span class='vector'>B</span> = ? ";

ans2=(a+b)*cosa
ans2=Number(ans2).toFixed(2)
ans3=a*b*sina
ans3=Number(ans3).toFixed(2)
ans4=(a**2+b**2)**0.5
ans4=Number(ans4).toFixed(2)

}

else if (e==2){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)

ans=a*d+b*e+c*f;

//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span>.<span class='vector'>B</span> = ? ";
ans2=a*e+b*d+c*f
ans3=(a+d)*(b+e)+(c+f)
ans4=a*b*c+d*e*f


}







//working





else if (e==3){
let q=a*b*h

q=Number(q).toFixed(2)
ans=Math.acos(h)
ans=ans*180/p
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
document.getElementById("question").innerHTML="যদি A = "+a+" ও B = "+b+" এবং <span class='vector'>A</span>.<span class='vector'>B</span>="+q+"হয়।তবে এবং A ও B এর মধ্যবর্তী কোণ কত?";

ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==4){

vectoroutput(a,b,c)
vectoroutput2(e,d,f)

ans=(a*e+b*d+c*f)
ans=Math.abs(ans);
ans=ans/(a**2+b**2+c**2)**0.5

ans=ans/(e**2+d**2+f**2)**0.5
ans=Math.acos(ans)
//console.log(ans)
ans=ans*180/p;
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+"হয়।তবে এবং A ও B এর মধ্যবর্তী কোণ কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"

}
}

else if (z==1){

if (e==0){

vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a*f-c*d,c*e-b*f,b*d-a*e)
ans=voutput3;


//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span>X<span class='vector'>B</span> = ? ";


vectoroutput(a*f-c*d,b*f-c*e,b*e-a*e)
vectoroutput2(a*e-b*d,c*e-b*f,a*f-c*d)
vectoroutput3(c*d-a*f,b*d-a*e,c*e-b*f)
ans2=voutput1
ans3=voutput2
ans4=voutput3

}

else if (e==1){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)
vectoroutput3(b*f-c*e,c*d-a*f,a*e-b*d)
ans=voutput3;


//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span>X<span class='vector'>B</span> = ? ";


vectoroutput(b*f-c*e,a*f-c*d,a*b-b*d)
vectoroutput2(a*e-b*d,c*d+a*f,a+c*d)
vectoroutput3(c*d-a*f,b*d-a*e,c*e-b*f)
ans2=voutput1
ans3=voutput2
ans4=voutput3
}

else if (e==2){
vectoroutput(c,b,a)
vectoroutput2(d,e,f)
vectoroutput3(b*f-a*e,a*d-c*f,c*e-b*d)
ans=voutput3;


//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span>X<span class='vector'>B</span> = ? ";


vectoroutput(b*f-a*e,c*f-a*d,c*e-b*d)
vectoroutput2(b*f-a*e,a*d-c*f,c*e+b*d)
vectoroutput3(b*f-a*e,a*d+c*f,c*e-b*d)
ans2=voutput1
ans3=voutput2
ans4=voutput3
}

else if (e==3){
let angle=d**2/a
angle=Number(angle).toFixed(2)


let radian=angle*Math.PI/180;
let sina=Math.asin(radian)
let cosa=Math.acos(radian)



ans=a*b*sina;
ans=Number(ans).toFixed(2)
document.getElementById("question").innerHTML="যদি A = "+a+" ও B = "+b+" এবং A ও B এর মধ্যবর্তী কোণ "+angle+" হয়।তবে "+"|<span class='vector'>A</span>X<span class='vector'>B</span>| = ? ";

ans2=(a+b)*cosa
ans2=Number(ans2).toFixed(2)
ans3=a*b*sina
ans3=Number(ans3).toFixed(2)
ans4=(a**2+b**2)**0.5
ans4=Number(ans4).toFixed(2)
}

else if (e==4){

vectoroutput(c,b,a)
vectoroutput2(e,d,f)



let v1=(b*f-a*d)**2
let v2=(a*e-c*f)**2
let v3=(c*d-b*e)**2

ans=(v1+v2+v3)**0.5;
ans=Number(ans).toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> ="+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"|<span class='vector'>A</span>X<span class='vector'>B</span>| = ? ";

ans2=(v1+v2)*e
ans2=Number(ans2).toFixed(2)
ans3=v1+v2+v3
ans3=Number(ans3).toFixed(2)
ans4=(b*f-a*d+a*e-c*f+c*d-b*e)**0.5
ans4=Number(ans4).toFixed(2)

}                                                   
}

else if (z==2){

if (e==0){
vectoroutput(a,b,c)



ans=Math.abs(a);
ans=ans/(a**2+b**2+c**2)**0.5

ans=Math.acos(ans)
//console.log(ans)
ans=ans*180/p;
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও X অক্ষের মধ্যবর্তী কোণ কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==1){
vectoroutput(b,a,c)



ans=Math.abs(a);
ans=ans/(a**2+b**2+c**2)**0.5

ans=Math.acos(ans)
//console.log(ans)
ans=ans*180/p;
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও Y অক্ষের মধ্যবর্তী কোণ কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==2){
vectoroutput(c,b,a)



ans=Math.abs(a);
ans=ans/(a**2+b**2+c**2)**0.5

ans=Math.acos(ans)
//console.log(ans)
ans=ans*180/p;
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও Z অক্ষের মধ্যবর্তী কোণ কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==3){
vectoroutput(a,b,c)
let ang1,ang2

ang1=Math.abs(a);
ang1=ang1/(a**2+b**2+c**2)**0.5
ang1=Math.acos(ang1)
//console.log(ans)
ang1=ang1*180/p;




ang2=Math.abs(b);
ang2=ang2/(a**2+b**2+c**2)**0.5
ang2=Math.acos(ang2)
//console.log(ans)
ang2=ang2*180/p;


//console.log(ang1,ang2)

ans=Number(ang1)-Number(ang2)

ans=Math.abs(ans)
ans=Number(ans).toFixed(2)

let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও X অক্ষের মধ্যবর্তী কোণ এবং A ও Y অক্ষের মধ্যবর্তী কোণের পার্থক্য কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==4){
vectoroutput(a,c,b)
let ang1,ang2

ang1=Math.abs(a);
ang1=ang1/(a**2+b**2+c**2)**0.5
ang1=Math.acos(ang1)
//console.log(ans)
ang1=ang1*180/p;




ang2=Math.abs(b);
ang2=ang2/(a**2+b**2+c**2)**0.5
ang2=Math.acos(ang2)
//console.log(ans)
ang2=ang2*180/p;


//console.log(ang1,ang2)

ans=Number(ang1)-Number(ang2)

ans=Math.abs(ans)
ans=Number(ans).toFixed(2)

let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও X অক্ষের মধ্যবর্তী কোণ এবং A ও Z অক্ষের মধ্যবর্তী কোণের পার্থক্য কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}                                                         
}   

else if (z==3){

if (e==0){
vectoroutput(c,b,a)
let ang1,ang2

ang1=Math.abs(a);
ang1=ang1/(a**2+b**2+c**2)**0.5
ang1=Math.acos(ang1)
//console.log(ans)
ang1=ang1*180/p;




ang2=Math.abs(b);
ang2=ang2/(a**2+b**2+c**2)**0.5
ang2=Math.acos(ang2)
//console.log(ans)
ang2=ang2*180/p;


//console.log(ang1,ang2)

ans=Number(ang1)-Number(ang2)

ans=Math.abs(ans)
ans=Number(ans).toFixed(2)

let ansuse=ans
ans=ans+"°"
//console.log(ans)

document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+"হয়।তবে এবং A ও Y অক্ষের মধ্যবর্তী কোণ এবং A ও Z অক্ষের মধ্যবর্তী কোণের পার্থক্য কত?";
ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"
}

else if (e==1){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,b,c)
ans=(a*f-c*d)*a+(c*e-b*f)*b+(b*d-a*e)*c




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" হয়।তবে "+"(<span class='vector'>A</span>X<span class='vector'>B</span>).<span class='vector'>C</span> = ? ";



ans2=(a*f-c*d)*a-(c*e-b*f)*b-(b*d-a*e)*c
ans3=(a*f-c*d)*b+(c*e-b*f)+(b*d-a*e)
ans4=(a*f-c*d)*a+(b*f-c*e)*b+(b*d-a*d)*c

}

else if (e==2){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,b,c)
ans=(b+e)*a+(a+d)*b+(c+f)*c




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" হয়।তবে "+"(<span class='vector'>A</span>+<span class='vector'>B</span>).<span class='vector'>C</span> = ? ";



ans2=(b-e)*a+(a*d)*b+(c+f)*c
ans3=(a*f-c*d)*b+(c*e-b*f)+(b*d-a*e)
ans4=(a+e+b)+(a+d+b)+(c+f+c);

}

else if (e==3){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,b,c)
ans=(b-e)*a+(a-d)*b+(c-f)*c




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" হয়।তবে "+"(<span class='vector'>A</span>-<span class='vector'>B</span>).<span class='vector'>C</span> = ? ";



ans2=(b+e)*a+(a*d)*b+(c+f)*c
ans3=(a*f-c*d)*b+(c*e-b*f)+(b*d-a*e)
ans4=(a+e+b)+(a+d+b)+(c+f+c);
}

else if (e==4){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,c,b)
ans=(b-e)*(a+b)+(a-d)*(a+c)+(c-f)*(b+c)




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" হয়।তবে "+"(<span class='vector'>A</span>-<span class='vector'>B</span>).(<span class='vector'>A</span>+<span class='vector'>C</span>) = ?"


ans2=(b+e)*a+(a*d)*b+(c+f)*c
ans3=(b+e)*(a+b)+(a+d)*(a+c)+(c+f)*(b+c)
ans4=(b-e)+(a+b)+(a-d)+(a+c)+(c-f)+(b+c)
}
}

else if (z==4){
// have some work
if (e==0){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)

let v1=(b*f-c*e)**2
let v2=(c*d-a*f)**2
let v3=(a*e-b*d)**2

ans=(v1+v2+v3)**0.5;
ans=0.5*ans
ans=Number(ans).toFixed(2)



//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="<span class='vector'>a</span> = "+voutput1+" ও <span class='vector'>b</span> = "+voutput2+" একটি ত্রিভুজের দুটি সন্নিহিত বাহু নির্দেশ করলে ত্রিভুজটির ক্ষেত্রফল কত ? ";


ans2=(v1+v2+v3)**0.5
ans2=Number(ans2).toFixed(2)
ans3=(v1+v2+v3)*0.5
ans3=Number(ans3).toFixed(2)
ans4=((v1+v2+v3)**0.5)*2
ans4=Number(ans4).toFixed(2)
}

else if (e==1){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)

let v1=(b*f-c*e)**2
let v2=(c*d-a*f)**2
let v3=(a*e-b*d)**2

ans=(v1+v2+v3)**0.5;
ans=Number(ans).toFixed(2)


//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="<span class='vector'>a</span> = "+voutput1+" ও <span class='vector'>b</span> = "+voutput2+" একটি সামান্তরিকের দুটি সন্নিহিত বাহু নির্দেশ করলে সামান্তরিকের ক্ষেত্রফল কত ? ";


ans2=(v1+v2+v3)
ans2=Number(ans2).toFixed(2)
ans3=(v1+v2+v3)*0.5
ans3=Number(ans3).toFixed(2)
ans4=v1**0.5+v2**0.5+v3**0.5
ans4=Number(ans4).toFixed(2)

}

else if (e==2){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)

let v1=(b*f-c*e)**2
let v2=(c*d-a*f)**2
let v3=(a*e-b*d)**2

ans=(v1+v2+v3)**0.5;
ans=0.5*ans
ans=Number(ans).toFixed(2)



//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="<span class='vector'>a</span> = "+voutput1+" ও <span class='vector'>b</span> = "+voutput2+" একটি সামান্তরিকের দুইটি কর্ণ নির্দেশ করলে সামান্তরিকের ক্ষেত্রফল কত ? ";


ans2=(v1+v2+v3)**0.5
ans2=Number(ans2).toFixed(2)
ans3=(v1+v2+v3)*0.5
ans3=Number(ans3).toFixed(2)
ans4=(v1+v2+v3)**0.6
ans4=Number(ans4).toFixed(2)
}

else if (e==3){
vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,b,c)
ans=(a*f-c*d)*a+(c*e-b*f)*b+(b*d-a*e)*c




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="<span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" ভিক্টর তিনটি যদি একটি ঘন সামান্তরিকের তিনটি বাহুর নির্দেশ করে,তবে ঘন সামান্তরিকটির আয়তন কত ?"



ans2=(a*f-c*d)*a-(c*e-b*f)*b-(b*d-a*e)*c
ans3=(a*f-c*d)*b+(c*e-b*f)+(b*d-a*e)
ans4=(a*f-c*d)*a+(b*f-c*e)*b+(b*d-a*d)*c
}

else if (e==4){
let q=a*b*h

q=Number(q).toFixed(2)
ans=Math.asin(h)
ans=ans*180/p
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
document.getElementById("question").innerHTML="যদি a = "+a+" ও b = "+b+" একটি ত্রিভুজের দুইটি সন্নিহিত বাহু নির্দেশ করে এবং ত্রিভুজের ক্ষেত্রফল = "+q/2+" হয়,তবেa ও b বাহুদয়ের মধ্যবর্তী কোণ কত?"  ;

ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"     
}
}

else if(z==5){

if (e==0){
let q=a*b*h

q=Number(q).toFixed(2)
ans=Math.asin(h)
ans=ans*180/p
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
document.getElementById("question").innerHTML="যদি A = "+a+" ও B = "+b+" এবং <span class='vector'>A</span>X<span class='vector'>B</span> = "+q+"হয়।তবে এবং A ও B এর মধ্যবর্তী কোণ কত?";

ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"     
} 
   
else if (e==1){
let q=a*b*h

q=Number(q).toFixed(2)
ans=Math.asin(h)
ans=ans*180/p
ans=Number(ans).toFixed(2)
let ansuse=ans
ans=ans+"°"
document.getElementById("question").innerHTML="যদি a = "+a+" ও b = "+b+" একটি সামান্তরিকের দুইটি সন্নিহিত বাহু নির্দেশ করে এবং সামান্তরিকের ক্ষেত্রফল = "+q+" হয়,তবেa ও b বাহুদয়ের মধ্যবর্তী কোণ কত?"  ;

ans2=90+Number(ansuse)
ans2=Number(ans2).toFixed(2)+"°"
//console.log(ans2)
ans3=90-Number(ansuse)
ans3=Number(ans3).toFixed(2)+"°"
ans4=180-Number(ansuse)
ans4=Number(ans4).toFixed(2)+"°"            
} 

   
else if (e==2){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)

let v1=(a**2+b**2+c**2)**0.5
let v2=(d**2+e**2+f**2)**0.5
ans=(a*d+b*e+c*f)/v1;
ans=Number(ans).toFixed(2)
//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>A</span> এর উপর <span class='vector'>B</span> এর লম্ব অভিক্ষেপ কত  ? ";

ans2=(a*d+b*e+c*f)
ans2=Number(ans2).toFixed(2)
ans3=(a*d+b*e+c*f)/v2
ans3=Number(ans3).toFixed(2)
ans4=(a*d+b*e+c*f)/(v1*v2)
ans4=Number(ans4).toFixed(2)


    
}    

else if (e==3){
vectoroutput(a,b,c)
vectoroutput2(d,e,f)

let v1=(a**2+b**2+c**2)**0.5
let v2=(d**2+e**2+f**2)**0.5
ans=(a*d+b*e+c*f)/v2;
ans=Number(ans).toFixed(2)
//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" ও <span class='vector'>B</span> = "+voutput2+" হয়।তবে "+"<span class='vector'>B</span> এর উপর <span class='vector'>A</span> এর লম্ব অভিক্ষেপ কত  ? ";

ans2=(a*d+b*e+c*f)
ans2=Number(ans2).toFixed(2)
ans3=(a*d+b*e+c*f)/v1
ans3=Number(ans3).toFixed(2)
ans4=(a*d+b*e+c*f)/(v1*v2)
ans4=Number(ans4).toFixed(2)    
} 
  
else if (e==4){

vectoroutput(b,a,c)
vectoroutput2(e,d,f)
vectoroutput3(a,c,b)

let v1=(a*f-c*d)
let v2=(c*e-b*f)
let v3=(b*d-a*e)

let v4=(b*d-c*f)
let v5=(a*f-b*e)
let v6=(e*c-a*d)

ans=v1*v4+v2*v5+v3*v6




//ans=ans.toFixed(2)
document.getElementById("question").innerHTML="যদি <span class='vector'>A</span> = "+voutput1+" , <span class='vector'>B</span> = "+voutput2+" এবং <span class='vector'>C</span> = "+voutput3+" হয়।তবে "+"(<span class='vector'>A</span>X<span class='vector'>B</span>).(<span class='vector'>B</span>X<span class='vector'>C</span>) = ?"


ans2=v1*v2-v2*5-v3*v6
ans3=v2*v4+v3*v5+v4*v6
ans4=v2*v4+v1*v5+v3*v6 
    
}    
}
}























option=()=>{
if (anscheck==1) {
document.getElementById("no1").innerHTML=
ans;
document.getElementById("no2").innerHTML=
ans2;
document.getElementById("no3").innerHTML=
ans3;
document.getElementById("no4").innerHTML=
ans4;
}

else if (anscheck==2) {
document.getElementById("no1").innerHTML=
ans2;
document.getElementById("no2").innerHTML=
ans;
document.getElementById("no3").innerHTML=
ans3;
document.getElementById("no4").innerHTML=
ans4;  
}

else if (anscheck==3) {
document.getElementById("no1").innerHTML=ans2;
document.getElementById("no2").innerHTML=
ans3;
document.getElementById("no3").innerHTML=
ans;
document.getElementById("no4").innerHTML=
ans4;  
}

else if (anscheck==4) {
document.getElementById("no1").innerHTML=
ans2;
document.getElementById("no2").innerHTML=
ans3;
document.getElementById("no3").innerHTML=
ans4;
document.getElementById("no4").innerHTML=
ans; 
}            
}





let start=()=>{
document.getElementById("objective").style.height="auto"
document.getElementById("objective").innerHTML=
`<p id="question"></p>
<ol>                                                                         
<li  id="no1"></li>                                                          
<li  id="no2"></li>                                              
<li  id="no3"></li>                                                                       
<li  id="no4"></li>                                                         
</ol>`
objective()
math()

option()   
document.getElementById("button").innerHTML=
`<button type="submit" id="Pass" onclick="pass()">Pass</button>` 
document.getElementById("questionno").innerHTML=questionno+"/"+totalturn;
}

function startagain(){

//result environment renewing


questionarray=[0]
optionarray=[0]
anscheckarray=[0]
ansnoarray=[0]

document.getElementById("resultbox").innerHTML=""
document.getElementById("resultbox").style.height="0rem"
document.getElementById("resultbox").style.border="solid 0rem tomato"










right=0
wrong=0
questionno=0
start()            
}

function rule1(){    
document.getElementById("rulebox").innerHTML="For one correct answer you will get 1 point and for one wrong answer you will lose 0.3 point"
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule2()">Rule</button>`
}

function rule2(){   
document.getElementById("rulebox").innerHTML=""
document.getElementById("b").innerHTML=
`<button type="button" id="rulebutton" onclick="rule1()">Rule</button>`
}

function pass(){   
resultmemory()

wrong+=1
math()
  
option()
if(questionno==totalturn){
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>` 
objective2()        
}
document.getElementById("questionno").innerHTML=questionno+"/"+totalturn;

ansno=0
}

function next(){



resultmemory()




if (anscheck==ansno){    
right+=1   
//console.log("r"+right)    
}

else{
wrong+=1    
//console.log("w"+wrong)        
}

math()

option()
document.getElementById("no1").style.background="white";
document.getElementById("no2").style.background="white";
document.getElementById("no3").style.background="white";
document.getElementById("no4").style.background="white";
document.getElementById("button").innerHTML=
`<button type="submit" id="pass" onclick="pass()">Pass</button>`

if(questionno==totalturn){
document.getElementById("button").innerHTML=
`<button type="submit" id="finish" onclick="finish()">Finish</button>`  
objective2()     
}
document.getElementById("questionno").innerHTML=questionno+"/"+totalturn;
//console.log("ansss="+anscheck)                                                  
ansno=0

}

let finish=()=>{









// result showing
resultmemory()

createresultelements()

showresult()

styleresult()







document.getElementById("resultbox").style.height="40rem"

document.getElementById("resultbox").style.border="solid 0.1rem tomato"

















if (anscheck==ansno){
right+=1   
//console.log("r"+right)    
}

else{
wrong+=1    
//console.log("w"+wrong)        
} 






let result=right*1-wrong*.3
result=result/totalturn*100
result=result.toFixed(2)
//console.log(result+"%")
let css1="--p:"+result+";--b:2em;--c:#00ff6c";
let css2="--p:"+result*-1+";--b:2em;--c:red";

if(result<0){
document.getElementById("objective").innerHTML=
`<div class="pie animate" id="chart" style=`+css2+
`></div> 
<p id="comment"></p>
<div id="info"> 
    <p id="right"></p>   
     <p id="wrong"></p>  
     <p id="total"></p> 
      </div>`
document.getElementById("comment").innerHTML="Improve your mathematics skill";
document.getElementById("comment").style.color="red";
}

else{
document.getElementById("objective").innerHTML=
`<div class="pie animate" id="chart" style=`+css1+`></div> 
   <p id="comment"></p>
   <div id="info"> 
    <p id="right"></p>  
    <p id="wrong"></p>  
    <p id="total"></p>
   </div>` 
      
if(result<=30&&result>0){
document.getElementById("comment").innerHTML="You are growing";
document.getElementById("comment").style.color="#ff5f55";   
} 
  
else if(result<=60&&result>30){
document.getElementById("comment").innerHTML="A little bit more";       
document.getElementById("comment").style.color="#ff8800"
}  

else if(result<=80&&result>60){
document.getElementById("comment").innerHTML="very-good";       
document.getElementById("comment").style.color="#00ff6c"
} 
 
else if(result<100&&result>80){
document.getElementById("comment").innerHTML="perfect";           
document.getElementById("comment").style.color="#008b52"
}
  
else if(result==100){
document.getElementById("comment").innerHTML="extraordinary";            
document.getElementById("comment").style.color="#240071"
}    
}
let r=right*1
document.getElementById("right").innerHTML="correct ="+right+"="
+right+"x"+"1"+"="+r
let w=wrong*0.3
w=w.toFixed(2)
document.getElementById("wrong").innerHTML="wrong ="+wrong+"="
+wrong+"x"+"0.3"+"="+w
let total=r-w
total=total.toFixed(2) 
document.getElementById("total").innerHTML="total ="+r+"-"+w+"="
+total   
document.getElementById("button").innerHTML=
` <button type="submit" id="next" onclick="startagain()">Start Again</button>  ` 
document.getElementById("chart").innerHTML=result+"%";   
}































//result show logic


//result show logic


//result show logic
















let resultmemory=()=>{






//question memory starts


let questionmemory=document.getElementById("question").innerHTML

questionarray.push(questionmemory)

//console.log(questionarray)


//end







// option memory starts
let optionno1=document.getElementById("no1").innerHTML;
let optionno2=document.getElementById("no2").innerHTML; 
let optionno3=document.getElementById("no3").innerHTML; 
let optionno4=document.getElementById("no4").innerHTML; 
   
//console.log(optionno1)    
    
optionarray.push(optionno1)
optionarray.push(optionno2)
optionarray.push(optionno3)
optionarray.push(optionno4)

//console.log(optionarray)    
    
    
//end    
    
    
    




//anscheck memory starts



anscheckarray.push(anscheck)

//console.log(anscheckarray)


//end




//ansno memory starts



ansnoarray.push(ansno)

//console.log(ansnoarray)


//end




    
}























//creating result output elements

let createresultelements=()=>{
    
    
    
    
    
    
    
let i=0

while(i<totalturn){
  
  
//creating divbox 

let id=i+1;
    
let resultbox=document.getElementById("resultbox")
let resultdiv=document.createElement("div")  ;
let resultdivid="resultdiv"+id
resultdiv.setAttribute('id',resultdivid)
resultdiv.setAttribute("class","resultdiv")
resultbox.appendChild(resultdiv)

 
    
  



//creating question no <p>


let questionnop=document.createElement("p")  ;
let questionnopid="questionno"+id;
questionnop.setAttribute('id',questionnopid)
questionnop.setAttribute("class","resultquestionno")
resultdiv.appendChild(questionnop)




//creating  ans type  <p>


let anstypep=document.createElement("p")  ;
let anstypepid="anstype"+id;
anstypep.setAttribute('id',anstypepid)
anstypep.setAttribute("class","resultanstype")
resultdiv.appendChild(anstypep)
















//creating question <p>
    


let questionp=document.createElement("p")  ;
let questionpid="question"+id;
questionp.setAttribute('id',questionpid)
questionp.setAttribute("class","resultquestion")
resultdiv.appendChild(questionp)






  
//creating ol    

    

let ol=document.createElement("ol")  ;
let olid="ol"+id
ol.setAttribute('id',olid)
ol.setAttribute("class","resultol")
resultdiv.appendChild(ol)









//creating li  
 
 
 
let ii=1

while(ii<5){


let li=document.createElement("li")  ;
let liid=id+"no"+ii
li.setAttribute('id',liid)
li.setAttribute("class","resultli")
ol.appendChild(li)
                   
ii++    
}
 
           
i++        
}  
    
        
//console.log(resultbox.innerHTML)  


                    
    
}

















let showresult=()=>{
    
let i=0  
while(i<totalturn){
     

let id=i+1     
     
     
document.getElementById("questionno"+id).innerHTML=id+"/"+totalturn;
     
document.getElementById("question"+id).innerHTML=questionarray[id]; 
     


let ii=1
while(ii<5){

let infono=i*4+ii    
document.getElementById(id+"no"+ii).innerHTML=optionarray[infono]
      
ii++    
}
  
i++   
     
}
    
        
}




















let styleresult=()=>{

let i=0
while(i<totalturn){
let id=i+1

let anscheck=anscheckarray[id]
let ansno=ansnoarray[id]
    
if(anscheck==ansno){
  
 document.getElementById("anstype"+id).style.color="green"
 
 document.getElementById("anstype"+id).innerHTML="correct"
 
 
  
document.getElementById(id+"no"+anscheck).style.backgroundColor="#40ff63c1";  

let previousdoc=document.getElementById(id+"no"+anscheck).innerHTML

document.getElementById(id+"no"+anscheck).innerHTML=previousdoc+'<span id="spancorrect">✔</span>'

   
}


else if(anscheck!=ansno && ansno!=0){
 
 
 document.getElementById("anstype"+id).style.color="red"
 
 document.getElementById("anstype"+id).innerHTML="wrong"
 
 
 
 
    
 //console.log(id+"no"+ansno)   
document.getElementById(id+"no"+ansno).style.backgroundColor="#ff4040a5";  

let previousdoc1=document.getElementById(id+"no"+ansno).innerHTML    
    
 document.getElementById(id+"no"+ansno).innerHTML=previousdoc1+'<span id="spanwrong">✘</span>'
    
    
       
    
    
       
    
document.getElementById(id+"no"+anscheck).style.backgroundColor="#40ff63c1";  

let previousdoc2=document.getElementById(id+"no"+anscheck).innerHTML

document.getElementById(id+"no"+anscheck).innerHTML=previousdoc2+'<span id="spancorrect">✔</span>'
    
    
    
    
}




else{


document.getElementById("anstype"+id).style.color="gray"
  document.getElementById("anstype"+id).innerHTML="passed"
     
    
document.getElementById(id+"no"+anscheck).style.backgroundColor="#40ff63c1";  

let previousdoc2=document.getElementById(id+"no"+anscheck).innerHTML

document.getElementById(id+"no"+anscheck).innerHTML=previousdoc2+'<span id="spancorrect">✔</span>'
    
               
    
}

i++
    
}  
   



                   
}
