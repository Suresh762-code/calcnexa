const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const themeBtn=$("#themeToggle");
const saved=localStorage.getItem("theme");
if(saved==="dark") document.body.classList.add("dark");
function syncTheme(){if(themeBtn){const dark=document.body.classList.contains("dark");themeBtn.textContent=dark?"☀":"☾";themeBtn.setAttribute("aria-label",dark?"Switch to light mode":"Switch to dark mode")}} syncTheme();
themeBtn?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");syncTheme()});
const menuBtn=$("#menuToggle"), nav=$("#mainNav");
menuBtn?.addEventListener("click",()=>{nav?.classList.toggle("open");menuBtn.setAttribute("aria-expanded",nav?.classList.contains("open")?"true":"false")});
$$("#mainNav a").forEach(a=>a.addEventListener("click",()=>{nav?.classList.remove("open");menuBtn?.setAttribute("aria-expanded","false")}));
$("#currentYear")?.replaceChildren(document.createTextNode(new Date().getFullYear()));

const searchInput=$("#calculatorSearch"), cards=$$(".calculator-card"), filterButtons=$$(".filter-btn"), emptyState=$("#calculatorEmpty");
let activeCategory="all";
function filterCalculators(){if(!cards.length)return;const q=(searchInput?.value||"").toLowerCase().trim();let visible=0;cards.forEach(card=>{const name=(card.dataset.name||card.textContent).toLowerCase();const category=card.dataset.category||"";const showCard=name.includes(q)&&(activeCategory==="all"||category===activeCategory);card.classList.toggle("hidden",!showCard);if(showCard)visible++});if(emptyState)emptyState.style.display=visible?"none":"block"}
searchInput?.addEventListener("input",filterCalculators);
filterButtons.forEach(button=>button.addEventListener("click",()=>{filterButtons.forEach(b=>b.classList.remove("active"));button.classList.add("active");activeCategory=button.dataset.filter||"all";filterCalculators()}));
$$("[data-jump-filter]").forEach(button=>button.addEventListener("click",()=>{activeCategory=button.dataset.jumpFilter;filterButtons.forEach(b=>b.classList.toggle("active",b.dataset.filter===activeCategory));document.getElementById("calculators")?.scrollIntoView({behavior:"smooth"});filterCalculators()}));
document.addEventListener("keydown",e=>{if(e.key==="/"&&searchInput&&document.activeElement!==searchInput){e.preventDefault();searchInput.focus()}});
const blogSearch=$("#blogSearch"), blogGuides=$$(".blog-guide"), blogEmpty=$("#blogEmpty");
blogSearch?.addEventListener("input",e=>{const q=e.target.value.toLowerCase().trim();let visible=0;blogGuides.forEach(g=>{const ok=(g.dataset.title||g.textContent).toLowerCase().includes(q);g.classList.toggle("hidden",!ok);if(ok)visible++});if(blogEmpty)blogEmpty.style.display=visible?"none":"block"});
function n(id){return parseFloat(document.getElementById(id)?.value)}
function money(x){return Number.isFinite(x)?x.toLocaleString(undefined,{maximumFractionDigits:2}):"—"}
function show(html){const r=$("#result");if(r){r.innerHTML=html;r.setAttribute("aria-live","polite")}}
function resetFields(){$$(".calc-box input, .calc-box textarea").forEach(i=>{if(i.type!=="button")i.value=""});show("Enter values and calculate.")}
