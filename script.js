
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>[...r.querySelectorAll(s)];
const themeBtn=$("#themeToggle"); const saved=localStorage.getItem("theme");
if(saved==="dark") document.body.classList.add("dark");
function syncTheme(){if(themeBtn)themeBtn.textContent=document.body.classList.contains("dark")?"☀":"☾"} syncTheme();
themeBtn?.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light");syncTheme()});
$("#menuToggle")?.addEventListener("click",()=>$("#mainNav")?.classList.toggle("open"));
$("#currentYear")?.replaceChildren(document.createTextNode(new Date().getFullYear()));
$("#calculatorSearch")?.addEventListener("input",e=>{let q=e.target.value.toLowerCase().trim();$$(".calculator-card").forEach(c=>c.classList.toggle("hidden",!c.dataset.name.toLowerCase().includes(q)))});
function n(id){return parseFloat(document.getElementById(id)?.value)}
function money(x){return Number.isFinite(x)?x.toLocaleString(undefined,{maximumFractionDigits:2}):"—"}
function show(html){const r=$("#result"); if(r)r.innerHTML=html}
function resetFields(){ $$("input").forEach(i=>{if(i.type!=="button")i.value=""}); show("Enter values and calculate."); }
