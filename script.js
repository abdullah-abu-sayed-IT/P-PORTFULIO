/* PRELOADER */
window.onload=()=>{document.getElementById("preloader").style.display="none";}

/* PARTICLES + INTERACTION */
particlesJS("particles-js",{
  "particles":{
    "number":{"value":100,"density":{"enable":true,"value_area":800}},
    "color":{"value":"#6366f1"},
    "shape":{"type":"circle"},
    "opacity":{"value":0.6,"random":true},
    "size":{"value":4,"random":true},
    "line_linked":{"enable":true,"distance":150,"color":"#6366f1","opacity":0.3,"width":1},
    "move":{"enable":true,"speed":3,"direction":"none","out_mode":"bounce"}
  },
  "interactivity":{
    "detect_on":"canvas",
    "events":{
      "onhover":{"enable":true,"mode":"grab"},
      "onclick":{"enable":true,"mode":"push"}
    },
    "modes":{"grab":{"distance":140,"line_linked":{"opacity":0.5}},"push":{"particles_nb":4}}
  },
  "retina_detect":true
});

/* SCROLL PROGRESS */
window.addEventListener("scroll",()=>{
let s=document.documentElement.scrollTop;
let h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.getElementById("progressBar").style.width=(s/h)*100+"%";
document.getElementById("topBtn").style.display=s>300?"block":"none";
});

/* DARK MODE */
document.getElementById("modeToggle").onclick=()=>{
document.body.classList.toggle("light");
};

/* TYPING EFFECT */
const text="Aspiring Software Developer • Python • DSA • Web Dev";
let i=0;
function typing(){
if(i<text.length){document.getElementById("typing").innerHTML+=text.charAt(i);i++;setTimeout(typing,40);}
}
typing();

/* REVEAL ANIMATION */
const observer=new IntersectionObserver(entries=>{
entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("active");});
});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

/* SKILL BAR ANIMATION */
document.querySelectorAll(".bar span").forEach(bar=>{
new IntersectionObserver(entries=>{
entries.forEach(e=>{
if(e.isIntersecting){bar.style.width=bar.dataset.width;}
});
}).observe(bar);
});

/* MODAL */
function openModal(title,desc){
document.getElementById("modal").style.display="flex";
document.getElementById("modalTitle").innerText=title;
document.getElementById("modalDesc").innerText=desc;
}
function closeModal(){document.getElementById("modal").style.display="none";}

/* BACK TO TOP */
document.getElementById("topBtn").onclick=()=>{window.scrollTo({top:0,behavior:'smooth'});}

/* PROJECT FILTER */
const filterBtns=document.querySelectorAll(".filters button");
filterBtns.forEach(btn=>{
btn.onclick=()=>{
filterBtns.forEach(b=>b.classList.remove("active"));
btn.classList.add("active");
let filter=btn.dataset.filter;
document.querySelectorAll(".grid .card").forEach(card=>{
card.style.display=(filter=="all"||card.dataset.tech==filter)?"block":"none";
});
};
});

/* 3D CARD TILT */
document.querySelectorAll(".tilt").forEach(card=>{
card.addEventListener("mousemove",e=>{
const rect=card.getBoundingClientRect();
const x=e.clientX-rect.left;
const y=e.clientY-rect.top;
const cx=rect.width/2;
const cy=rect.height/2;
const dx=(x-cx)/cx;
const dy=(y-cy)/cy;
card.style.transform=`rotateX(${-dy*10}deg) rotateY(${dx*10}deg)`;
});
card.addEventListener("mouseleave",()=>{card.style.transform="rotateX(0deg) rotateY(0deg)";});
});

/* CUSTOM GLOWING CURSOR */
const cursor=document.createElement("div");
cursor.style.width="20px";
cursor.style.height="20px";
cursor.style.position="fixed";
cursor.style.top="0";
cursor.style.left="0";
cursor.style.pointerEvents="none";
cursor.style.borderRadius="50%";
cursor.style.background="rgba(99,102,241,0.7)";
cursor.style.boxShadow="0 0 15px #6366f1,0 0 25px #38bdf8";
cursor.style.transform="translate(-50%,-50%)";
cursor.style.transition="transform 0.1s ease, background 0.3s";
cursor.style.zIndex="9999";
document.body.appendChild(cursor);
window.addEventListener("mousemove",(e)=>{
cursor.style.top=e.clientY+"px";
cursor.style.left=e.clientX+"px";
});
