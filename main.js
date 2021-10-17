var idols = ["Rabindrea.jfif","Albert.jfif","Elon.jfif"];

    var i = 0;
function next(){
    document.getElementById("img1").src=idols[i];
    i++;
    
  if(i==3){
    i=0;
      
  } 
}


var mypic = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg"];
var o = 0;
function next2(){
    document.getElementById("img2").src=mypic[o];
    o++;
    
    if (o==5){
        o=0;
    }
}

var aims = ["Min.jfif","java.png","http.jfif"];
var m = 0;
function next3(){
    
    document.getElementById("img3").src=aims[m];
    m++;
    
    if (m==3){
        m=0;
    }
}

var stories=["kabul.jpeg","parrot.jpeg","rat.jpeg","atoniment.jpeg","nu.jpeg","wish full.jpeg", "runway.jpeg","shu.jpeg","science.jpeg","shoes.jpeg","good man.jpeg","return of little master.jpeg"];
var p = 0;

var name1=["Kabuliwala", "The parrot's traning" , "The rat's feast", "Atonement", "The nuisance" ,"Wish fulfillment" ,"The Runway", "shiburam", "The scientist","The invention of shoes", " A 'Good' man ", "Return of the little Master"];
var w = 0;

function change(){
    
    document.getElementById("pic").src=stories[p];
    p++;
    document.getElementById("name").innerHTML=name1[w];
    w++;
    
    if (p==12){
       p=0;
    }
    if (w==12){
        w=0;
    }
    
    
}