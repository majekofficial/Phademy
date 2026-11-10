

const TOOLS=[{"id": "basic-calculator", "name": "Basic Calculator", "cat": "Math", "icon": "\ud83e\uddee", "desc": "Add, subtract, multiply, divide and percent, with exact answers and history."}, {"id": "scientific-calculator", "name": "Scientific Calculator", "cat": "Math", "icon": "\u03c0", "desc": "Trig, logs, powers, roots, factorials and memory, in degrees or radians."}, {"id": "gpa-calculator", "name": "GPA Calculator", "cat": "Student", "icon": "\ud83c\udf93", "desc": "Add your courses, credits and grades. Instant GPA on a 5.0 scale."}, {"id": "cgpa-calculator", "name": "CGPA Calculator", "cat": "Student", "icon": "\ud83c\udf93", "desc": "Add each semester's GPA and credits to get your overall CGPA."}, {"id": "grade-calculator", "name": "Grade Calculator", "cat": "Student", "icon": "\ud83c\udf93", "desc": "Enter the points you earned and the total possible points."}, {"id": "final-grade-calculator", "name": "Final Grade Calculator", "cat": "Student", "icon": "\ud83c\udf93", "desc": "Enter your current grade, target grade, and the weight of your current work."}, {"id": "study-time-calculator", "name": "Study Time Calculator", "cat": "Student", "icon": "\ud83c\udf93", "desc": "Enter your available study minutes and number of subjects."}, {"id": "percentage-calculator", "name": "Percentage Calculator", "cat": "Math", "icon": "\u2211", "desc": "Enter a number and the percentage you want to calculate."}, {"id": "fraction-calculator", "name": "Fraction Calculator", "cat": "Math", "icon": "\u2211", "desc": "Use fractions such as 3/4 and 2/3."}, {"id": "average-calculator", "name": "Average Calculator", "cat": "Math", "icon": "\u2211", "desc": "Separate numbers with commas."}, {"id": "age-calculator", "name": "Age Calculator", "cat": "Time", "icon": "\u25f7", "desc": "Choose your date of birth."}, {"id": "date-calculator", "name": "Date Calculator", "cat": "Time", "icon": "\u25f7", "desc": "Choose a start date and an end date."}, {"id": "time-duration-calculator", "name": "Time Duration Calculator", "cat": "Time", "icon": "\u25f7", "desc": "Choose a start and end time."}, {"id": "countdown-calculator", "name": "Countdown Calculator", "cat": "Time", "icon": "\u25f7", "desc": "Choose a future target date."}, {"id": "savings-goal-calculator", "name": "Savings Goal Calculator", "cat": "Money", "icon": "$", "desc": "Enter your target, current savings and months remaining."}, {"id": "salary-calculator", "name": "Salary Calculator", "cat": "Money", "icon": "$", "desc": "Choose the salary amount and how often you are paid."}, {"id": "discount-calculator", "name": "Discount Calculator", "cat": "Money", "icon": "$", "desc": "Enter the original price and discount percentage."}, {"id": "tip-calculator", "name": "Tip Calculator", "cat": "Money", "icon": "$", "desc": "Enter the bill amount and tip percentage."}, {"id": "tax-calculator", "name": "Tax Calculator", "cat": "Money", "icon": "$", "desc": "This is a general calculator, not jurisdiction-specific tax advice."}, {"id": "currency-converter", "name": "Currency Converter", "cat": "Money", "icon": "$", "desc": "Enter an amount and the current rate: target currency per 1 unit of source currency."}, {"id": "unit-converter", "name": "Unit Converter", "cat": "Everyday", "icon": "\u25cc", "desc": "Choose a conversion and enter a value."}, {"id": "bmi-calculator", "name": "BMI Calculator", "cat": "Everyday", "icon": "\u25cc", "desc": "Check your BMI in metric or US units, with your healthy weight range."}, {"id": "algebra-solver", "name": "Algebra Solver", "cat": "Math", "icon": "\u0192", "desc": "Type any expression or equation. Get it simplified, factorised or solved, with steps and a graph."}, {"id": "linear-equation-calculator", "name": "Linear Equation Calculator", "cat": "Math", "icon": "=", "desc": "Solve equations like 3x + 5 = 20 with every step shown."}, {"id": "quadratic-equation-calculator", "name": "Quadratic Equation Calculator", "cat": "Math", "icon": "x\u00b2", "desc": "Enter a, b and c. Get the roots, vertex, factors, steps and a graph."}, {"id": "simultaneous-equations-calculator", "name": "Simultaneous Equations Calculator", "cat": "Math", "icon": "\u21c4", "desc": "Solve 2, 3 or more linear equations at once, with the elimination steps."}, {"id": "change-of-subject-calculator", "name": "Change the Subject of a Formula", "cat": "Math", "icon": "\u21cc", "desc": "Rearrange any formula, like v = u + at, to make a different letter the subject."}, {"id": "area-calculator", "name": "Area Calculator", "cat": "Math", "icon": "\u25ad", "desc": "Find the area of 11 shapes with the formula, working and unit conversions."}, {"id": "volume-calculator", "name": "Volume Calculator", "cat": "Math", "icon": "\u25a3", "desc": "Volume and surface area of cubes, cylinders, cones, spheres and more."}, {"id": "slope-calculator", "name": "Slope Calculator", "cat": "Math", "icon": "\u2220", "desc": "Slope, line equation, distance, midpoint and a graph from two points."}, {"id": "calorie-calculator", "name": "Calorie Calculator", "cat": "Health", "icon": "\ud83d\udd25", "desc": "Estimate the daily calories you need to lose, maintain or gain weight."}, {"id": "statistics-calculator", "name": "Statistics Calculator", "cat": "Math", "icon": "\u03c3", "desc": "Mean, median, mode, range, quartiles and standard deviation with working."}, {"id": "permutation-combination-calculator", "name": "Permutation and Combination Calculator", "cat": "Math", "icon": "nCr", "desc": "Work out nPr, nCr and factorials with the full working."}, {"id": "sequence-calculator", "name": "Sequence Calculator", "cat": "Math", "icon": "a\u2099", "desc": "Arithmetic and geometric sequences: the nth term, the sum and more."}, {"id": "logarithm-calculator", "name": "Logarithm Calculator", "cat": "Math", "icon": "log", "desc": "Logarithms to any base, with the working and the exact answer when there is one."}, {"id": "exponent-calculator", "name": "Exponent Calculator", "cat": "Math", "icon": "x\u207f", "desc": "Powers with whole, negative, decimal or fraction exponents."}, {"id": "surd-calculator", "name": "Surd Calculator", "cat": "Math", "icon": "\u221a", "desc": "Simplify square roots, rationalise denominators and add or subtract surds."}, {"id": "matrix-calculator", "name": "Matrix Calculator", "cat": "Math", "icon": "[ ]", "desc": "Determinant, inverse, transpose and adjugate of 2 \u00d7 2 and 3 \u00d7 3 matrices."}, {"id": "inequality-calculator", "name": "Inequality Calculator", "cat": "Math", "icon": "\u2264", "desc": "Solve linear and quadratic inequalities with interval notation and a graph."}, {"id": "word-problem-solver", "name": "Word Problem Solver", "cat": "Math", "icon": "\u270e", "desc": "Age, number, ratio, speed, work, rectangle and cost problems, solved step by step."}, {"id": "motion-calculator", "name": "Equations of Motion Calculator (SUVAT)", "cat": "Physics", "icon": "v", "desc": "Give any 3 of s, u, v, a, t and find the other 2 with full working."}, {"id": "projectile-motion-calculator", "name": "Projectile Motion Calculator", "cat": "Physics", "icon": "\u2934", "desc": "Range, time of flight and maximum height with a graph of the path."}, {"id": "speed-distance-time-calculator", "name": "Speed, Distance and Time Calculator", "cat": "Physics", "icon": "\u23f1", "desc": "Find speed, distance or time in km/h, m/s or mph."}, {"id": "force-calculator", "name": "Force Calculator (Newton's Laws)", "cat": "Physics", "icon": "F", "desc": "F = ma, weight, friction and springs, solved for any unknown."}, {"id": "momentum-calculator", "name": "Momentum and Impulse Calculator", "cat": "Physics", "icon": "p", "desc": "Momentum, impulse and collisions with conservation of momentum."}, {"id": "work-energy-power-calculator", "name": "Work, Energy and Power Calculator", "cat": "Physics", "icon": "J", "desc": "Work, power, kinetic and potential energy and efficiency."}, {"id": "density-pressure-calculator", "name": "Density and Pressure Calculator", "cat": "Physics", "icon": "\u03c1", "desc": "Density, pressure, liquid pressure and upthrust."}, {"id": "ohms-law-calculator", "name": "Ohm's Law and Resistor Calculator", "cat": "Physics", "icon": "\u03a9", "desc": "Voltage, current, resistance, power, and series and parallel resistors."}, {"id": "wave-calculator", "name": "Wave Speed Calculator", "cat": "Physics", "icon": "\u223f", "desc": "Wave speed, frequency, wavelength and period."}, {"id": "heat-calculator", "name": "Specific Heat Capacity Calculator", "cat": "Physics", "icon": "\u00b0C", "desc": "Heat energy for temperature change and change of state."}, {"id": "gravitation-calculator", "name": "Gravitation Calculator", "cat": "Physics", "icon": "G", "desc": "Gravitational force and field strength between masses."}, {"id": "lens-mirror-calculator", "name": "Lens and Mirror Calculator", "cat": "Physics", "icon": "\u25d0", "desc": "Focal length, image distance and magnification."}, {"id": "simple-machines-calculator", "name": "Simple Machines Calculator", "cat": "Physics", "icon": "\u2699", "desc": "Mechanical advantage, velocity ratio and efficiency."}];
const $=s=>document.querySelector(s);
const num=v=>{const n=Number(v);return Number.isFinite(n)?n:null};
const fmt=(n,d=2)=>Number(n).toLocaleString(undefined,{maximumFractionDigits:d});
function gcd(a,b){a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1}
function reduce(n,d){if(d===0)return null;if(d<0){n=-n;d=-d}const g=gcd(n,d);return [n/g,d/g]}
function parseFraction(s){const m=String(s).trim().match(/^(-?\d+)\s*\/\s*(-?\d+)$/);if(!m||Number(m[2])===0)return null;return {n:Number(m[1]),d:Number(m[2])}}
function setResult(v){const el=$('#result');if(el)el.innerHTML='<small>Result</small><strong>'+v+'</strong>'}
function calculate(slug,live){if(SOLVERS[slug])return SOLVERS[slug].run();
 const v=id=>num($('#'+id)?.value);
 let out='Enter valid values.';
 try {
  if(slug==='percentage-calculator'){const a=v('a'),b=v('b');if(a!==null&&b!==null)out=fmt(a*b/100)+' ('+fmt(b)+'% of '+fmt(a)+')';}
  else if(slug==='average-calculator'){const raw=($('#a')?.value||'').split(',').map(x=>Number(x.trim())).filter(Number.isFinite);if(raw.length)out=fmt(raw.reduce((a,b)=>a+b,0)/raw.length);}
  else if(slug==='grade-calculator'){const a=v('a'),b=v('b');if(a!==null&&b>0)out=fmt(a/b*100)+'%';}
  else if(slug==='discount-calculator'){const a=v('a'),b=v('b');if(a!==null&&b!==null&&a>=0){const saving=a*b/100;out='Save '+mfmt(saving)+' · Pay '+mfmt(a-saving);}}
  else if(slug==='tax-calculator'){const a=v('a'),b=v('b');if(a!==null&&b!==null&&a>=0){const tax=a*b/100;out='Tax '+mfmt(tax)+' · Total '+mfmt(a+tax);}}
  else if(slug==='tip-calculator'){const a=v('a'),b=v('b');if(a!==null&&b!==null&&a>=0){const tip=a*b/100,people=v('people')||1;out='Tip '+mfmt(tip)+' · Total '+mfmt(a+tip)+' · '+mfmt((a+tip)/people)+' each';}}
  else if(slug==='salary-calculator'){const a=v('a'),unit=$('#unit')?.value;if(a!==null&&a>=0){const y=unit==='year'?a:unit==='month'?a*12:a*52;out='Year '+mfmt(y)+' · Month '+mfmt(y/12)+' · Week '+mfmt(y/52)+' · Day '+mfmt(y/260);}}
  else if(slug==='savings-goal-calculator'){const goal=v('a'),saved=v('saved'),months=v('b');if(goal!==null&&saved!==null&&months>0)out='Save '+mfmt(Math.max(0,(goal-saved)/months))+' per month';}
  else if(slug==='age-calculator'){const raw=$('#a')?.value;if(raw){const birth=new Date(raw+'T00:00:00'),now=new Date();if(birth<=now){let y=now.getFullYear()-birth.getFullYear(),m=now.getMonth()-birth.getMonth(),d=now.getDate()-birth.getDate();if(d<0){m--;d+=new Date(now.getFullYear(),now.getMonth(),0).getDate();}if(m<0){y--;m+=12;}out=y+' years, '+m+' months, '+d+' days';}}}
  else if(slug==='date-calculator'){const a=$('#a')?.value,b=$('#b')?.value;if(a&&b){const d1=new Date(a+'T00:00:00'),d2=new Date(b+'T00:00:00');out=Math.abs(Math.round((d2-d1)/86400000)).toLocaleString()+' days';}}
  else if(slug==='time-duration-calculator'){const a=$('#a')?.value,b=$('#b')?.value;if(a&&b){const [h1,m1]=a.split(':').map(Number),[h2,m2]=b.split(':').map(Number);let mins=h2*60+m2-(h1*60+m1);if(mins<0)mins+=1440;out=Math.floor(mins/60)+'h '+(mins%60)+'m';}}
  else if(slug==='countdown-calculator'){const raw=$('#a')?.value;if(raw){const target=new Date(raw+'T23:59:59'),now=new Date(),days=Math.ceil((target-now)/86400000);out=days>=0?days.toLocaleString()+' days remaining':Math.abs(days).toLocaleString()+' days ago';}}
  else if(slug==='currency-converter'){const a=v('a'),rate=v('b');if(a!==null&&rate!==null&&rate>=0)out=fmt(a*rate)+' target units';}
  else if(slug==='unit-converter'){const a=v('a'),u=$('#unit')?.value;if(a!==null){const map={'km-mi':.621371,'mi-km':1.609344,'kg-lb':2.2046226218,'lb-kg':.45359237,'m-ft':3.280839895,'ft-m':.3048,'cm-in':.3937007874,'in-cm':2.54};if(map[u])out=fmt(a*map[u],6);}}
  else if(slug==='bmi-calculator'){let hm,kg;const us=BMI.u==='us';if(us){hm=((v('hf')||0)*12+(v('hi')||0))*0.0254;kg=(v('w')||0)*0.45359237}else{hm=(v('h')||0)/100;kg=v('w')||0}
   if(hm>0&&kg>0){const bmi=kg/(hm*hm),cat=bmi<18.5?'Underweight':bmi<25?'Healthy range':bmi<30?'Overweight':'Obesity',lo=18.5*hm*hm,hi=24.9*hm*hm,age=v('age');
   const rg=us?fmt(lo/0.45359237,0)+'–'+fmt(hi/0.45359237,0)+' lb':fmt(lo,1)+'–'+fmt(hi,1)+' kg';
   out=fmt(bmi,1)+' · '+cat+'<span class="sub">Healthy weight for your height: '+rg+(age&&age<18?'<br>Under 18? BMI is read differently for young people. Ask a doctor.':'')+'</span>';}}
  else if(slug==='final-grade-calculator'){const current=v('a'),weight=v('w'),target=v('t');if(current!==null&&weight!==null&&target!==null&&weight>=0&&weight<100)out=fmt((target-current*(weight/100))/(1-weight/100),2)+'% needed';}
  else if(slug==='study-time-calculator'){const mins=v('a'),subjects=v('b');if(mins!==null&&subjects>0)out=fmt(mins/subjects,0)+' minutes per subject';}
  else if(slug==='gpa-calculator'){let p=0,c=0;document.querySelectorAll('#rows .row').forEach(r=>{const g=GR[r.querySelector('.gr').value],cr=Number(r.querySelector('.c').value);if(g!==undefined&&cr>0){p+=g*cr;c+=cr}});if(c)out=fmt(p/c,2)+'<span class="sub">'+fmt(c)+' credits · 5.0 scale</span>';}
  else if(slug==='cgpa-calculator'){let p=0,c=0;document.querySelectorAll('#rows .row').forEach(r=>{const g=r.querySelector('.p').value,cr=Number(r.querySelector('.c').value);if(g!==''&&Number.isFinite(Number(g))&&cr>0){p+=Number(g)*cr;c+=cr}});if(c)out=fmt(p/c,2)+'<span class="sub">'+fmt(c)+' credits</span>';}
  else if(slug==='fraction-calculator'){const x=parseFraction($('#a')?.value),y=parseFraction($('#b')?.value),op=$('#op')?.value;if(x&&y){let n,d;if(op==='+'){n=x.n*y.d+y.n*x.d;d=x.d*y.d;}else if(op==='-'){n=x.n*y.d-y.n*x.d;d=x.d*y.d;}else if(op==='×'){n=x.n*y.n;d=x.d*y.d;}else{if(y.n===0)throw Error('Cannot divide by zero');n=x.n*y.d;d=x.d*y.n;}const z=reduce(n,d);out=z[1]===1?String(z[0]):z[0]+'/'+z[1];}}
 } catch(e) { out=e.message||'Check your inputs.'; }
 if(live&&out==='Enter valid values.')out='—';setResult(out);
}
function card(t){return `<a class="card" href="${t.id}.html"><div class="icon">${t.icon}</div><h3>${t.name}</h3><p>${t.desc}</p><span class="arrow">Open tool →</span></a>`}
function initHome(){const grid=$('#tool-grid'),search=$('#search'),chips=$('#chips');if(!grid)return;let cat='All';['All','Student','Math','Physics','Health','Time','Money','Everyday'].forEach((x,i)=>{const b=document.createElement('button');b.className='chip'+(i===0?' active':'');b.textContent=x;b.onclick=()=>{cat=x;document.querySelectorAll('.chip').forEach(c=>c.classList.remove('active'));b.classList.add('active');render()};chips.appendChild(b)});function render(){const q=(search.value||'').toLowerCase().trim();const arr=TOOLS.filter(t=>(cat==='All'||t.cat===cat)&&(!q||(t.name+' '+t.desc+' '+t.cat).toLowerCase().includes(q)));grid.innerHTML=arr.length?arr.map(card).join(''):'<div class="empty">No tools found. Try another search.</div>'}search.addEventListener('input',render);render()}
const GR={A:5,B:4,C:3,D:2,E:1,F:0},BMI={u:'m'};
const rowHTML=k=>k==='gpa'?'<div class="row"><input placeholder="Course (optional)" aria-label="Course"><input class="c" type="number" inputmode="decimal" min="0" placeholder="Credits" aria-label="Credits"><select class="gr" aria-label="Grade"><option value="">-</option>'+Object.keys(GR).map(x=>'<option>'+x+'</option>').join('')+'</select></div>':'<div class="row"><input placeholder="Semester (optional)" aria-label="Semester"><input class="p" type="number" inputmode="decimal" step="any" min="0" placeholder="GPA" aria-label="GPA"><input class="c" type="number" inputmode="decimal" min="0" placeholder="Credits" aria-label="Credits"></div>';
const rowsHTML=k=>'<div class="rows" id="rows"><div class="rowh"><span>'+(k==='gpa'?'Course':'Semester')+'</span><span>'+(k==='gpa'?'Credits':'GPA')+'</span><span>'+(k==='gpa'?'Grade':'Credits')+'</span></div>'+rowHTML(k).repeat(k==='gpa'?5:3)+'</div><div class="rowact"><button type="button" class="link" id="addrow">+ add more '+(k==='gpa'?'courses':'semesters')+'</button><button type="button" class="link" id="clear">Clear</button></div>'+(k==='gpa'?'<div class="hint">5.0 scale: A=5, B=4, C=3, D=2, E=1, F=0.</div>':'');
const bmiFields=()=>BMI.u==='us'?'<div class="two"><div class="field"><label for="hf">Height (ft)</label><input id="hf" type="number" inputmode="decimal" min="0"></div><div class="field"><label for="hi">Height (in)</label><input id="hi" type="number" inputmode="decimal" min="0"></div></div><div class="field"><label for="w">Weight (lb)</label><input id="w" type="number" inputmode="decimal" min="0"></div>':'<div class="field"><label for="h">Height (cm)</label><input id="h" type="number" inputmode="decimal" min="0"></div><div class="field"><label for="w">Weight (kg)</label><input id="w" type="number" inputmode="decimal" min="0"></div>';
const bmiHTML=()=>'<div class="tabs"><button type="button" class="tab on" data-u="m">Metric</button><button type="button" class="tab" data-u="us">US units</button></div><div class="field"><label for="age">Age (optional)</label><input id="age" type="number" inputmode="numeric" min="2" max="120"></div><div id="bu" class="fields">'+bmiFields()+'</div>';
function extra(slug,form){if(SOLVERS[slug]&&SOLVERS[slug].init)SOLVERS[slug].init(form);
 const live=()=>calculate(slug);
 if(slug==='gpa-calculator'||slug==='cgpa-calculator'){const k=slug[0]==='g'?'gpa':'cgpa',rows=$('#rows');
  $('#addrow').onclick=()=>{for(let i=0;i<3;i++)rows.insertAdjacentHTML('beforeend',rowHTML(k))};
  $('#clear').onclick=()=>{form.querySelectorAll('input').forEach(i=>i.value='');form.querySelectorAll('select').forEach(s=>s.value='');$('#result').innerHTML='<small>Result</small><strong>—</strong>'};
  form.addEventListener('input',live);form.addEventListener('change',e=>{if(e.target.tagName==='SELECT')live()})}
 if(slug==='bmi-calculator'){form.querySelectorAll('.tab').forEach(b=>b.onclick=()=>{BMI.u=b.dataset.u;form.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===b));$('#bu').innerHTML=bmiFields();live()});form.addEventListener('input',live)}
}

function initTool(){const slug=document.body.dataset.slug;if(!slug)return;const t=TOOLS.find(x=>x.id===slug);if(!t)return;favInit(slug,t);const title=$('#tool-title');if(title)title.textContent=t.name;const desc=$('#tool-desc');if(desc)desc.textContent=t.desc;const form=$('#tool-form');if(!form)return;
 let fields='';if(SOLVERS[slug])fields=SOLVERS[slug].ui;
 const input=(id,label,type='number',placeholder='')=>`<div class="field"><label for="${id}">${label}</label><input id="${id}" type="${type}" ${placeholder?'placeholder="'+placeholder+'"':''}></div>`;
 if(slug==='percentage-calculator')fields=input('a','Number')+input('b','Percentage (%)');
 if(slug==='average-calculator')fields='<div class="field"><label for="a">Numbers</label><textarea id="a" rows="5" placeholder="10, 20, 30, 40"></textarea><div class="hint">Separate values with commas.</div></div>';
 if(slug==='grade-calculator')fields=input('a','Points earned')+input('b','Total points');
 if(slug==='discount-calculator')fields=input('a','Original price')+input('b','Discount (%)');
 if(slug==='tax-calculator')fields=input('a','Amount')+input('b','Tax (%)');
 if(slug==='tip-calculator')fields=input('a','Bill amount')+input('b','Tip (%)')+input('people','Number of people','number','1');
 if(slug==='salary-calculator')fields=input('a','Salary amount')+'<div class="field"><label for="unit">Paid</label><select id="unit"><option value="year">Yearly</option><option value="month">Monthly</option><option value="week">Weekly</option></select></div>';
 if(slug==='savings-goal-calculator')fields=input('a','Savings goal')+input('saved','Already saved','number','0')+input('b','Months remaining');
 if(slug==='age-calculator'||slug==='countdown-calculator')fields=input('a',slug==='age-calculator'?'Date of birth':'Target date','date');
 if(slug==='date-calculator')fields=input('a','Start date','date')+input('b','End date','date');
 if(slug==='time-duration-calculator')fields=input('a','Start time','time')+input('b','End time','time');
 if(slug==='currency-converter')fields=input('a','Amount')+input('b','Exchange rate','number','e.g. 1.08')+'<div class="hint">Rate means how many target-currency units equal 1 source-currency unit.</div>';
 if(slug==='unit-converter')fields=input('a','Value')+'<div class="field"><label for="unit">Conversion</label><select id="unit"><option value="km-mi">Kilometers → Miles</option><option value="mi-km">Miles → Kilometers</option><option value="kg-lb">Kilograms → Pounds</option><option value="lb-kg">Pounds → Kilograms</option><option value="m-ft">Meters → Feet</option><option value="ft-m">Feet → Meters</option><option value="cm-in">Centimeters → Inches</option><option value="in-cm">Inches → Centimeters</option></select></div>';
 if(slug==='bmi-calculator')fields=bmiHTML();
 if(slug==='final-grade-calculator')fields=input('a','Current grade (%)')+input('w','Current work weight (%)')+input('t','Target final grade (%)');
 if(slug==='study-time-calculator')fields=input('a','Available study time (minutes)')+input('b','Number of subjects');
 if(slug==='gpa-calculator')fields=rowsHTML('gpa');
 if(slug==='cgpa-calculator')fields=rowsHTML('cgpa');
 if(slug==='fraction-calculator')fields=input('a','Fraction 1','text','3/4')+input('b','Fraction 2','text','2/3')+'<div class="field"><label for="op">Operation</label><select id="op"><option>+</option><option>-</option><option>×</option><option>÷</option></select></div>';
 form.innerHTML=fields+'<button class="btn" type="button" id="calculate">Calculate</button><div class="rwrap"><div class="result" id="result" aria-live="polite"><small>Result</small><strong>—</strong></div>'+RICONS+'</div><div id="work" class="work"></div><div class="rep"><button type="button" class="link" id="report">🚩 Report a mistake</button></div>';
 $('#calculate').addEventListener('click',()=>calculate(slug));extra(slug,form);features(slug,form,t);
 form.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.tagName!=='TEXTAREA'){e.preventDefault();calculate(slug)}})
}
const GA_ID='G-94F924B79M';
const ls={get:k=>{try{return localStorage.getItem(k)}catch(e){return null}},set:(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}}};
const CURS=['₦','$','£','C$','A$','₹','R'];
let CUR=ls.get('cur')||(/-NG/i.test(navigator.language)?'₦':/-GB/i.test(navigator.language)?'£':/-IN/i.test(navigator.language)?'₹':/-ZA/i.test(navigator.language)?'R':'$');
const mfmt=n=>CUR+fmt(n);
const track=(n,p)=>{try{window.gtag&&gtag('event',n,p||{})}catch(e){}};
if(GA_ID){window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments)};gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});if(ls.get('consent')==='yes')gtag('consent','update',{analytics_storage:'granted'});gtag('js',new Date());const am=(matchMedia('(display-mode:standalone)').matches||navigator.standalone)?'installed_app':'browser';gtag('set','user_properties',{app_mode:am});gtag('config',GA_ID,{app_mode:am});const s=document.createElement('script');s.async=1;s.src='https://www.googletagmanager.com/gtag/js?id='+GA_ID;document.head.appendChild(s)}
function theme(t){document.documentElement.dataset.theme=t;const b=$('#theme');if(b)b.textContent=t==='dark'?'☀️':'🌙'}
function initChrome(){
 theme(ls.get('theme')||(matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'));
 const tb=$('#theme');if(tb)tb.onclick=()=>{const n=document.documentElement.dataset.theme==='dark'?'light':'dark';ls.set('theme',n);theme(n)};
 const cs=$('#cur');if(cs){cs.innerHTML=CURS.map(c=>'<option'+(c===CUR?' selected':'')+'>'+c+'</option>').join('');cs.onchange=()=>{CUR=cs.value;ls.set('cur',CUR);const s=document.body.dataset.slug;if(s&&$('#tool-form'))calculate(s,true)}}
 const mb=$('#menubtn');if(mb){const m=document.createElement('div');m.id='menu';m.hidden=true;
  const groups=[...new Set(TOOLS.map(t=>t.cat))];
  m.innerHTML='<div class="container"><div class="subj"><a href="mathematics.html">📐 Mathematics</a><a href="physics.html">⚛️ Physics</a></div><input id="msearch" class="search" placeholder="Search tools..." aria-label="Search tools"><div id="mlist"></div></div>';document.body.appendChild(m);
  const draw=q=>{q=(q||'').toLowerCase();$('#mlist').innerHTML=groups.map(g=>{const l=TOOLS.filter(t=>t.cat===g&&t.name.toLowerCase().includes(q));return l.length?'<h4>'+g+'</h4><div class="mg">'+l.map(t=>'<a href="'+t.id+'.html">'+t.icon+' '+t.name+'</a>').join('')+'</div>':''}).join('')||'<p class="hint">No tools found.</p>'};
  draw();$('#msearch').oninput=e=>draw(e.target.value);
  mb.onclick=()=>{m.hidden=!m.hidden;if(!m.hidden)$('#msearch').focus()}}
}
function features(slug,form,t){
 const cb=$('#calculate');if(cb)cb.style.display='none';
 const OPT=['age','saved','people','hi','msearch'];let tm;const live=()=>{if(SOLVERS[slug]){SOLVERS[slug].run();clearTimeout(tm);tm=setTimeout(()=>{const r=$('#result strong');if(r&&r.textContent.trim()!=='—')track('calculation',{tool:slug})},1200);return}const miss=[...form.querySelectorAll('input[id],textarea[id]')].some(e=>!OPT.includes(e.id)&&e.value.trim()==='');if(miss){setResult('—');return}calculate(slug,true);clearTimeout(tm);tm=setTimeout(()=>{const r=$('#result strong');if(r&&r.textContent!=='—')track('calculation',{tool:slug})},1200)};
 form.addEventListener('input',live);form.addEventListener('change',e=>{if(e.target.tagName==='SELECT')live()});
 const q=new URLSearchParams(location.search);
 if(q.get('u')==='us'){const b=form.querySelector('.tab[data-u=us]');if(b)b.click()}
 q.forEach((v,k)=>{const e=document.getElementById(k);if(e&&k!=='u'&&'value' in e)e.value=v});
 if([...q.keys()].length){calculate(slug,true);q.forEach((v,k)=>{const e=document.getElementById(k);if(e&&k!=='u'&&'value' in e)e.value=v});calculate(slug,true)}
 const txt=()=>$('#result strong').innerText.replace(/\n+/g,' · ');
 const flash=(b,m)=>{const o=b.textContent;b.textContent=m;setTimeout(()=>b.textContent=o,1600)};
 const copy=s=>(navigator.clipboard?navigator.clipboard.writeText(s):Promise.reject()).catch(()=>{const a=document.createElement('textarea');a.value=s;document.body.appendChild(a);a.select();const ok=document.execCommand('copy');a.remove();if(!ok)throw 0});
 exportUI(slug,form,t,txt,flash,copy);
 track('tool_view',{tool:slug});
}






































/*PHADEMY-NEW*/
const M=(()=>{
const BI=BigInt,gcdB=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b){[a,b]=[b,a%b]}return a},lcmB=(a,b)=>a/gcdB(a,b)*b;
class Q{constructor(n,d=1n){n=BI(n);d=BI(d);if(d<0n){n=-n;d=-d}const g=gcdB(n,d)||1n;this.n=n/g;this.d=d/g}
 add(o){return new Q(this.n*o.d+o.n*this.d,this.d*o.d)}sub(o){return new Q(this.n*o.d-o.n*this.d,this.d*o.d)}
 mul(o){return new Q(this.n*o.n,this.d*o.d)}div(o){return new Q(this.n*o.d,this.d*o.n)}neg(){return new Q(-this.n,this.d)}
 z(){return this.n===0n}isInt(){return this.d===1n}isOne(){return this.n===1n&&this.d===1n}val(){return Number(this.n)/Number(this.d)}
 cmp(o){const x=this.n*o.d-o.n*this.d;return x<0n?-1:x>0n?1:0}abs(){return this.n<0n?this.neg():this}
 toString(){return this.d===1n?String(this.n):this.n+'/'+this.d}}
const Q0=new Q(0n),Q1=new Q(1n),QM=new Q(-1n);
const dq=x=>String(x).replace(/-/g,'−');
const qIn=s=>{s=String(s).trim().replace(/\u2212/g,'-');let m=s.match(/^([-+]?\d+)\s*\/\s*(\d+)$/);if(m)return BI(m[2])===0n?null:new Q(BI(m[1]),BI(m[2]));
 const em=s.match(/^(.*?)[eE]([-+]?\d{1,3})$/);let ex=0;if(em&&em[1]){s=em[1];ex=+em[2]}if(!/^[-+]?(\d+\.?\d*|\.\d+)$/.test(s))return null;const neg=s[0]==='-';s=s.replace(/^[-+]/,'');const[a,b='']=s.split('.');let q=new Q(BI((a||'0')+b),10n**BI(b.length));if(ex>0)q=q.mul(new Q(10n**BI(ex)));else if(ex<0)q=q.div(new Q(10n**BI(-ex)));return neg?q.neg():q};
const rnd=(x,p=4)=>{if(!isFinite(x))return String(x);const s=(+x.toFixed(p)).toString();return s==='-0'?'0':s.replace('-','−')};
// ---- monomials & polynomials (Map key -> Q) ----
const mono=k=>k?k.split('|').map(p=>[p[0],+p.slice(1)]):[];
const mkey=m=>m.filter(e=>e[1]>0).sort((a,b)=>a[0]<b[0]?-1:a[0]>b[0]?1:0).map(e=>e[0]+e[1]).join('|');
const kmul=(a,b)=>{const m=new Map(mono(a));for(const[v,e]of mono(b))m.set(v,(m.get(v)||0)+e);return mkey([...m])};
const kdiv=(a,b)=>{const m=new Map(mono(a));for(const[v,e]of mono(b)){const x=(m.get(v)||0)-e;if(x<0)return null;m.set(v,x)}return mkey([...m])};
const kdeg=k=>mono(k).reduce((s,e)=>s+e[1],0),kexp=(k,v)=>{for(const[x,e]of mono(k))if(x===v)return e;return 0};
const cmpK=(a,b)=>{const A=Object.fromEntries(mono(a)),B=Object.fromEntries(mono(b));for(const v of[...new Set([...Object.keys(A),...Object.keys(B)])].sort()){const d=(A[v]||0)-(B[v]||0);if(d)return d}return 0};
const pnum=q=>new Map(q.z()?[]:[['',q]]);
const pAdd=(a,b,s=1)=>{const r=new Map(a);for(const[k,v]of b){const w=s<0?v.neg():v,o=r.get(k),x=o?o.add(w):w;x.z()?r.delete(k):r.set(k,x)}return r};
const pMul=(a,b)=>{const r=new Map();for(const[ka,va]of a)for(const[kb,vb]of b){const k=kmul(ka,kb),v=va.mul(vb),o=r.get(k),x=o?o.add(v):v;x.z()?r.delete(k):r.set(k,x)}return r};
const pScale=(a,q)=>{const r=new Map();if(!q.z())for(const[k,v]of a)r.set(k,v.mul(q));return r};
const pIsConst=a=>a.size===0||(a.size===1&&a.has('')),pConst=a=>a.get('')||Q0;
const pVars=a=>{const s=new Set();for(const k of a.keys())for(const[v]of mono(k))s.add(v);return[...s].sort()};
const pDeg=(a,v)=>{let d=0;for(const k of a.keys())d=Math.max(d,v?kexp(k,v):kdeg(k));return d};
const pCoef=(a,v,i)=>{const r=new Map();for(const[k,c]of a){let e=0;const rest=[];for(const[x,n]of mono(k)){if(x===v)e=n;else rest.push([x,n])}if(e===i)r.set(mkey(rest),c)}return r};
const okeys=p=>[...p.keys()].sort((a,b)=>kdeg(b)-kdeg(a)||cmpK(b,a));
const lead=p=>okeys(p)[0];
function pDivExact(n,d){if(!d.size)return null;let r=new Map(n),q=new Map();const ld=lead(d),cd=d.get(ld);
 for(let g=0;g<400&&r.size;g++){const lr=lead(r),m=kdiv(lr,ld);if(m===null)return null;const t=new Map([[m,r.get(lr).div(cd)]]);q=pAdd(q,t);r=pAdd(r,pMul(t,d),-1)}return r.size?null:q}
function pContent(p){if(!p.size)return{c:Q1,prim:p};let g=0n,l=1n;for(const v of p.values()){g=gcdB(g,v.n);l=lcmB(l,v.d)}const c=new Q(g,l);return{c,prim:pScale(p,Q1.div(c))}}
function pMonoGcd(...ps){let m=null;for(const p of ps)for(const k of p.keys()){const o=Object.fromEntries(mono(k));if(!m)m=o;else for(const v of Object.keys(m))m[v]=Math.min(m[v],o[v]||0)}return mkey(Object.entries(m||{}))}
const pDivMono=(p,g)=>{const r=new Map();for(const[k,c]of p)r.set(kdiv(k,g),c);return r};
const qPow=(q,e)=>{let r=Q1;for(let i=0;i<e;i++)r=r.mul(q);return r};
function pEval(p,m){let s=Q0;for(const[k,c]of p){let t=c;for(const[v,e]of mono(k)){if(!m[v])return null;t=t.mul(qPow(m[v],e))}s=s.add(t)}return s}
const tidy=p=>{const{prim}=pContent(p);if(!prim.size)return prim;const k=okeys(prim)[0];return prim.get(k).n<0n?pScale(prim,QM):prim};
// ---- rational functions ----
const R=(n,d=pnum(Q1))=>({n,d});
const rAdd=(a,b,s=1)=>R(pAdd(pMul(a.n,b.d),pMul(b.n,a.d),s),pMul(a.d,b.d));
const rMul=(a,b)=>R(pMul(a.n,b.n),pMul(a.d,b.d));
const rDiv=(a,b)=>{if(!b.n.size)throw new Error('Division by zero is not allowed.');return R(pMul(a.n,b.d),pMul(a.d,b.n))};
const rNeg=a=>R(pScale(a.n,QM),a.d);
const rPow=(a,e)=>{if(e<0){a=rDiv(R(pnum(Q1)),a);e=-e}let r=R(pnum(Q1));for(let i=0;i<e;i++)r=rMul(r,a);return r};
function rNorm(r){let{n,d}=r;if(!n.size)return R(n,pnum(Q1));
 if(!pIsConst(d)){let q=pDivExact(n,d);if(q)return R(q,pnum(Q1))}
 if(!pIsConst(n)){const q=pDivExact(d,n);if(q)return R(pnum(Q1),q)}
 const g=pMonoGcd(n,d);if(g){n=pDivMono(n,g);d=pDivMono(d,g)}
 const cn=pContent(n),cd=pContent(d),k=cn.c.div(cd.c);n=pScale(cn.prim,new Q(k.n));d=pScale(cd.prim,new Q(k.d));
 if(d.get(lead(d)).n<0n){n=pScale(n,QM);d=pScale(d,QM)}return R(n,d)}
// ---- printing ----
const SUP='⁰¹²³⁴⁵⁶⁷⁸⁹',sup=n=>String(n).split('').map(c=>SUP[+c]).join('');
const mStr=k=>mono(k).map(([v,e])=>v+(e>1?sup(e):'')).join('');
function pStr(p){if(!p.size)return'0';let ks=okeys(p);if(ks.length>1&&p.get(ks[0]).n<0n){const j=ks.findIndex(k=>p.get(k).n>0n);if(j>0)ks=[ks[j],...ks.filter((_,i)=>i!==j)]}let s='';ks.forEach((k,i)=>{const c=p.get(k),neg=c.n<0n,a=c.abs(),m=mStr(k);
 const t=!m?String(a):(a.isOne()?'':a.isInt()?String(a.n):'('+a+')')+m;s+=i===0?(neg?'−':'')+t:(neg?' − ':' + ')+t});return s}
const wrap=p=>p.size>1?'('+pStr(p)+')':pStr(p);
const isOne=p=>pIsConst(p)&&pConst(p).isOne();
function rStr(r){r=rNorm(r);return isOne(r.d)?pStr(r.n):wrap(r.n)+' / '+wrap(r.d)}
const rVars=(...rs)=>[...new Set(rs.flatMap(r=>[...pVars(r.n),...pVars(r.d)]))].filter(v=>v!=='π').sort();
// ---- parser ----
const E=m=>new Error(m);
function parseTokens(T){let i=0;
 const expr=()=>{let r=term();while(T[i]==='+'||T[i]==='-'){const o=T[i++];r=rAdd(r,term(),o==='-'?-1:1)}return r};
 const term=()=>{let r=unary();for(;;){const t=T[i];if(t==='*'||t==='/'){i++;const u=unary();r=t==='*'?rMul(r,u):rDiv(r,u)}else if(t&&(t==='('||t==='pi'||/^[a-zA-Z]$/.test(t)))r=rMul(r,power());else break}return r};
 const unary=()=>{if(T[i]==='-'){i++;return rNeg(unary())}if(T[i]==='+'){i++;return unary()}return power()};
 const power=()=>{const b=atom();if(T[i]==='^'){i++;let sg=1;if(T[i]==='-'){sg=-1;i++}else if(T[i]==='+')i++;const e=atom();
  if(!pIsConst(e.n)||!pIsConst(e.d))throw E('Powers must be whole numbers, like x^2.');const q=pConst(e.n).div(pConst(e.d));
  if(!q.isInt()||Math.abs(Number(q.n))>20)throw E('Powers must be whole numbers up to 20.');return rPow(b,sg*Number(q.n))}return b};
 const atom=()=>{const t=T[i++];if(t===undefined)throw E('The expression ends too early.');
  if(t==='(' ){const r=expr();if(T[i++]!==')')throw E('A bracket is not closed.');return r}
  if(/^(\d+\.?\d*|\.\d+)$/.test(t))return R(pnum(qIn(t)));
  if(t==='pi')return R(new Map([['π1',Q1]]));if(/^[a-zA-Z]$/.test(t))return R(new Map([[t+'1',Q1]]));
  throw E('I did not expect "'+t+'" there.')};
 const r=expr();if(i<T.length)throw E('I did not expect "'+T[i]+'" there.');return r}
function tokenize(src){const s=String(src).replace(/\*\*/g,'^').replace(/[\u2212\u2013\u2014]/g,'-').replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/²/g,'^2').replace(/³/g,'^3').replace(/π/g,'pi').replace(/\s+/g,'');
 const T=s.match(/\d+\.?\d*|\.\d+|pi|[a-zA-Z]|[-+*/^()=]|[^]/g)||[];for(const t of T)if(!/^(\d+\.?\d*|\.\d+|pi|[a-zA-Z]|[-+*/^()=])$/.test(t))throw E('I can not read the symbol "'+t+'".');return T}
const parseR=s=>{const T=tokenize(s);if(T.includes('='))throw E('Use only one expression here.');if(!T.length)throw E('Type something first.');return parseTokens(T)};
function parseEq(s){const T=tokenize(s),k=T.indexOf('=');if(k<0||T.indexOf('=',k+1)>=0)throw E('An equation needs exactly one = sign.');if(!k||k===T.length-1)throw E('Both sides of = need something.');return{l:parseTokens(T.slice(0,k)),r:parseTokens(T.slice(k+1))}}
// ---- factorising ----
function ratRoot(c){ // c: ascending Q coefficients (deg>=1), returns Q root or null
 let L=1n;for(const x of c)L=lcmB(L,x.d);const a=c.map(x=>x.n*(L/x.d));if(a[0]===0n)return Q0;
 const p0=a[0]<0n?-a[0]:a[0],pn=a[a.length-1]<0n?-a[a.length-1]:a[a.length-1];if(p0>10n**12n||pn>10n**12n)return null;
 const divs=n=>{const r=[],N=Number(n);for(let i=1;i*i<=N;i++)if(N%i===0){r.push(BI(i));if(i*i!==N)r.push(BI(N/i))}return r};
 for(const q of divs(pn))for(const p of divs(p0))for(const s of[1n,-1n]){const x=new Q(s*p,q);let v=Q0;for(let i=c.length-1;i>=0;i--)v=v.mul(x).add(c[i]);if(v.z())return x}return null}
const uniCoefs=(P,v)=>{const d=pDeg(P,v),c=[];for(let i=0;i<=d;i++)c.push(pConst(pCoef(P,v,i)));return c};
function factorP(P){if(!P.size)return'0';const k0=lead(P),sg=P.get(k0).n<0n?QM:Q1;let{c,prim}=pContent(P);c=c.mul(sg);prim=pScale(prim,sg);
 const g=pMonoGcd(prim);if(g)prim=pDivMono(prim,g);const fs=[],vs=pVars(prim);
 if(vs.length===1){const v=vs[0];for(let t=0;t<30&&pDeg(prim,v)>=2;t++){const x=ratRoot(uniCoefs(prim,v));if(x===null)break;
  const f=new Map([[v+'1',new Q(x.d)],...(x.z()?[]:[['',x.n<0n?new Q(-x.n):new Q(-x.n)]])]);if(!x.z())f.set('',new Q(-x.n));
  const qt=pDivExact(prim,f);if(!qt)break;prim=qt;const pc=pContent(prim);c=c.mul(pc.c);prim=pc.prim;fs.push(pStr(f))}}
 const cnt={};fs.forEach(f=>cnt[f]=(cnt[f]||0)+1);
 let s=c.isOne()?'':c.n===-1n&&c.isInt()?'−':c.isInt()?String(c.n).replace('-','−'):'('+dq(c)+')';s+=mStr(g);
 for(const f of Object.keys(cnt))s+='('+f+')'+(cnt[f]>1?sup(cnt[f]):'');
 if(!isOne(R(prim)))s+=(prim.size>1&&(s||g)?'('+pStr(prim)+')':pStr(prim));else if(!s)s='1';return s}
const factorR=r=>{r=rNorm(r);return isOne(r.d)?factorP(r.n):'('+factorP(r.n)+') / ('+factorP(r.d)+')'};
// ---- quadratics (numeric, exact) ----
function sqrtSimp(m){if(m===0n)return[0n,1n];if(m<2n**52n){const t=BI(Math.round(Math.sqrt(Number(m))));if(t*t===m)return[t,1n]}let s=1n,r=m;for(let p=2n;p*p<=r&&p<100000n;p++)while(r%(p*p)===0n){r/=p*p;s*=p}return[s,r]}
function pmStr(u,w,r,im){const rad=r===1n?'':'√'+r,core=(im?'i':'')+rad,L=lcmB(u.d,w.d),pn=u.n*(L/u.d),wn=w.n*(L/w.d);
 const t=(wn===1n&&core?'':String(wn))+core,num=pn===0n?'±'+t:String(pn).replace('-','−')+' ± '+t;return L===1n?num:(pn===0n?num+' / '+L:'('+num+') / '+L)}
function quadNum(a,b,c){const D=b.mul(b).sub(new Q(4n).mul(a).mul(c)),two=a.mul(new Q(2n)),u=b.neg().div(two),out={D,roots:[],kind:'',main:'',approx:''};
 if(D.z()){out.kind='double';out.roots=[{rhs:dq(u),re:u.val(),im:0}];out.main=dq(u);out.approx=u.isInt()?'':rnd(u.val());return out}
 const neg=D.n<0n,[s,r]=sqrtSimp((neg?-D.n:D.n)*D.d),w=new Q(s,D.d).div(two).abs();
 if(!neg&&r===1n){const x1=u.add(w),x2=u.sub(w);out.kind='rational';out.roots=[x2,x1].sort((p,q)=>p.cmp(q)).map(x=>({rhs:dq(x),re:x.val(),im:0}));out.main=out.roots.map(x=>x.rhs).join(' or ')}
 else{const rt=Math.sqrt(Number(r)),wf=w.val()*rt;out.kind=neg?'complex':'surd';
  out.main=pmStr(u,w,r,neg);const rhs=out.main;out.roots=[{rhs:rhs.replace('±','+'),re:u.val(),im:neg?wf:0,v:neg?0:u.val()+wf,pm:true},{rhs:rhs.replace('±','−'),re:u.val(),im:neg?-wf:0,v:neg?0:u.val()-wf}];
  out.approx=neg?rnd(u.val())+' ± '+rnd(wf)+'i':rnd(u.val()+wf)+' or '+rnd(u.val()-wf)}return out}
function durand(c){const n=c.length-1,a=c.map(x=>x/c[n]);let z=[];for(let k=0;k<n;k++){const ang=2*Math.PI*k/n+.4,r=1+Math.max(...a.slice(0,n).map(Math.abs));z.push([r*Math.cos(ang),r*Math.sin(ang)])}
 const mul=(p,q)=>[p[0]*q[0]-p[1]*q[1],p[0]*q[1]+p[1]*q[0]],sub=(p,q)=>[p[0]-q[0],p[1]-q[1]],div=(p,q)=>{const d=q[0]*q[0]+q[1]*q[1];return[(p[0]*q[0]+p[1]*q[1])/d,(p[1]*q[0]-p[0]*q[1])/d]};
 for(let it=0;it<500;it++){z=z.map((zi,i)=>{let f=[1,0];for(let j=n-1;j>=0;j--)f=mul(f,zi),f[0]+=a[j];let den=[1,0];z.forEach((zj,j)=>{if(j!==i)den=mul(den,sub(zi,zj))});return sub(zi,div(f,den))})}return z}
// ---- equation solving ----
function solveFor(l,r,v){const P0=pAdd(pMul(l.n,r.d),pMul(r.n,l.d),-1),steps=[],res={P:P0,v,steps,sols:[],main:'',approx:'',check:[],kind:''};
 const nl=rNorm(l),nr=rNorm(r);steps.push(`Start with: ⟦${rStr(nl)} = ${rStr(nr)}⟧`);
 if(!isOne(nl.d)||!isOne(nr.d))steps.push('Multiply both sides to clear the fractions.');
 if(!P0.size){res.main='Every value works (both sides are always equal).';res.kind='all';return res}
 if(pDeg(P0,v)===0){res.main=pIsConst(P0)?'No solution (the two sides can never be equal).':`This equation does not contain ${v}.`;res.kind='none';return res}
 const P=tidy(P0),deg=pDeg(P,v);steps.push(`Bring everything to one side: ⟦${pStr(P)} = 0⟧`);
 const cs=A=>pIsConst(A)?(q=>q.isOne()?'':q.n===-1n&&q.isInt()?'−':q.isInt()?dq(q.n):'('+dq(q)+')')(pConst(A)):wrap(A);
 const sg=B=>{if(!B.size)return'';const s=pStr(B);return B.size===1?(s[0]==='−'?' − '+s.slice(1):' + '+s):' + ('+s+')'};
 const num1=pVars(P).length===1;
 if(deg===1){const A=pCoef(P,v,1),B=pCoef(P,v,0);steps.push(`Collect the ⟦${v}⟧ terms: ⟦${cs(A)}${v}${sg(B)} = 0⟧`);steps.push(`Move the other terms across: ⟦${cs(A)}${v} = ${pStr(pScale(B,QM))}⟧`);
  const sol=rNorm(R(pScale(B,QM),A)),rhs=rStr(sol);if(!isOne(R(A)))steps.push(`Divide both sides by ⟦${pIsConst(A)?dq(pConst(A)):wrap(A)}⟧: ⟦${v} = ${rhs}⟧`);
  res.kind='linear';let val=null;if(num1&&pIsConst(sol.n)&&pIsConst(sol.d)){val=pConst(sol.n).div(pConst(sol.d));res.approx=val.isInt()?'':rnd(val.val());res.sols.push({rhs,re:val.val(),im:0,q:val});
   const a=pEval(l.n,{[v]:val}),b=pEval(l.d,{[v]:val}),c=pEval(r.n,{[v]:val}),d=pEval(r.d,{[v]:val});if(a&&c&&b&&d&&!b.z()&&!d.z()){const L=a.div(b),Rr=c.div(d);if(L.cmp(Rr)===0)res.check.push(`Check: left side = ${dq(L)} and right side = ${dq(Rr)} ✓`)}}
  else res.sols.push({rhs});res.main=`${v} = ${rhs}`;return res}
 if(deg===2){const A=pCoef(P,v,2),B=pCoef(P,v,1),C=pCoef(P,v,0);
  if(pIsConst(A)&&pIsConst(B)&&pIsConst(C)&&num1){const a=pConst(A),b=pConst(B),c=pConst(C),qn=quadNum(a,b,c);
   steps.push(`This is a quadratic in ⟦${v}⟧, with ⟦a = ${dq(a)}⟧, ⟦b = ${dq(b)}⟧, ⟦c = ${dq(c)}⟧`);steps.push(`Discriminant: ⟦b² − 4ac = ${dq(b.mul(b))} − 4(${dq(a)})(${dq(c)}) = ${dq(qn.D)}⟧`);
   steps.push(qn.D.z()?`The discriminant is 0, so there is one repeated root: ⟦${v} = −b / 2a⟧`:qn.D.n>0n?`The discriminant is positive, so there are two real roots: ⟦${v} = (−b ± √D) / 2a⟧`:`The discriminant is negative, so there are no real roots, only complex ones: ⟦${v} = (−b ± √D) / 2a⟧`);steps.push(`Substitute the values: ⟦${v} = (−(${dq(b)}) ± √(${dq(qn.D)})) / 2(${dq(a)})⟧`);
   res.kind=qn.kind;res.sols=qn.roots;res.approx=qn.approx;
   res.main=qn.kind==='rational'?qn.roots.map(x=>`${v} = ${x.rhs}`).join(' or '):`${v} = ${qn.main}`;res.note=qn.kind==='complex'?'No real solutions (the roots are complex numbers)':qn.kind==='double'?'Repeated root (the curve just touches the x-axis)':'';steps.push(`So: ⟦${res.main}⟧`);
   if(qn.kind==='rational'||qn.kind==='double'){for(const x of qn.roots){const q=qIn(x.rhs);if(q){const a2=pEval(l.n,{[v]:q}),b2=pEval(l.d,{[v]:q}),c2=pEval(r.n,{[v]:q}),d2=pEval(r.d,{[v]:q});if(a2&&c2&&b2&&d2&&!b2.z()&&!d2.z()&&a2.div(b2).cmp(c2.div(d2))===0)res.check.push(`Check ${v} = ${x.rhs}: left side = right side = ${dq(a2.div(b2))} ✓`)}}}
   else if(qn.kind==='surd')steps.push('The root is not a whole number or fraction, so it is left as an exact surd (a decimal is shown too).');
   return res}
  if(!pIsConst(A)||true){res.kind='symbolic';steps.push(`This is a quadratic in ⟦${v}⟧, with ⟦a = ${pStr(A)}⟧, ⟦b = ${pStr(B)||'0'}⟧, ⟦c = ${pStr(C)}⟧`);
   let rhs;if(!B.size){rhs='±√('+rStr(R(pScale(C,QM),A))+')';steps.push(`There is no ${v} term, so ⟦${v}² = ${rStr(R(pScale(C,QM),A))}⟧`);steps.push(`Take the square root of both sides: ⟦${v} = ${rhs}⟧`)}
   else{const D=pAdd(pMul(B,B),pScale(pMul(A,C),new Q(4n)),-1),A2=pScale(A,new Q(2n));rhs='('+pStr(pScale(B,QM))+' ± √('+pStr(D)+')) / '+wrap(A2);steps.push(`Use the quadratic formula: ⟦${v} = (−b ± √(b² − 4ac)) / 2a⟧`);steps.push(`Substitute: ⟦${v} = ${rhs}⟧`)}
   res.sols=[{rhs:rhs.replace('±','+')},{rhs:rhs.replace('±','−')}];res.main=`${v} = ${rhs}`;return res}}
 if(num1){const c=uniCoefs(P,v);steps.push(`This is a degree-${deg} equation. Look for whole-number or fraction roots using the rational root test.`);
  let cur=c.slice();const roots=[];let tries=0;while(cur.length>3&&tries++<20){const x=ratRoot(cur);if(x===null)break;roots.push(x);
   const n=cur.length-1,q=new Array(n);let carry=Q0;for(let i=n;i>=1;i--){carry=cur[i].add(carry.mul(x));q[i-1]=carry}cur=q;steps.push(`⟦${v} = ${dq(x)}⟧ is a root, so ⟦(${pStr(new Map([[v+'1',Q1],...(x.z()?[]:[['',x.neg()]])]))})⟧ is a factor.`)}
  let items=roots.map(x=>({rhs:dq(x),re:x.val(),im:0,q:x}));
  if(cur.length===3){const qn=quadNum(cur[2],cur[1],cur[0]);steps.push(`The remaining quadratic gives: ⟦${v} = ${qn.main}⟧`);items=items.concat(qn.roots.filter(x=>!x.pm||true))}
  else if(cur.length===2){const x=cur[0].neg().div(cur[1]);items.push({rhs:dq(x),re:x.val(),im:0,q:x})}
  else if(cur.length>3){const z=durand(cur.map(x=>x.val()));steps.push('The remaining roots are not simple fractions, so they are found numerically.');z.forEach(p=>{if(Math.abs(p[1])<1e-7)items.push({rhs:rnd(p[0],6),re:p[0],im:0,approxOnly:true})})}
  res.kind='poly';res.sols=items;res.main=items.map(x=>`${v} = ${x.rhs}`).join(' or ');res.approx=items.some(x=>x.approxOnly)?'approximate real roots':'';if(!items.length)res.main='No real solutions.';return res}
 throw E('I can solve equations up to degree 2 with several letters, and higher degrees with one letter.')}
// ---- linear systems ----
function solveSys(lines){const eqs=lines.map(s=>{const{l,r}=parseEq(s);return pAdd(pMul(l.n,r.d),pMul(r.n,l.d),-1)});
 const vars=[...new Set(eqs.flatMap(pVars))].sort();if(vars.includes('π'))throw E('π is not supported in systems yet.');
 for(const p of eqs)for(const k of p.keys())if(kdeg(k)>1)throw E('Only straight-line (linear) equations are supported here: no x², xy or similar.');
 if(!vars.length)throw E('Add some letters, like x and y.');
 const rows=eqs.map(p=>[...vars.map(v=>p.get(v+'1')||Q0),(p.get('')||Q0).neg()]),m=rows.length,n=vars.length,steps=[];const orig=rows.map(r=>r.slice());
 const rs=r=>{const p=new Map();vars.forEach((v,j)=>{if(!r[j].z())p.set(v+'1',r[j])});return(p.size?pStr(p):'0')+' = '+dq(r[n])};
 steps.push('Write the equations:');rows.forEach((r,i)=>steps.push(`Equation (${i+1}):  ⟦${rs(r)}⟧`));steps.push('Now remove one letter at a time (elimination).');
 let pr=0;const piv=[];
 for(let c=0;c<n&&pr<m;c++){let k=pr;while(k<m&&rows[k][c].z())k++;if(k===m)continue;
  if(k!==pr){[rows[k],rows[pr]]=[rows[pr],rows[k]];steps.push(`Swap R${pr+1} and R${k+1}.`)}
  const pv=rows[pr][c];if(!pv.isOne()){rows[pr]=rows[pr].map(x=>x.div(pv));steps.push(`Divide equation (${pr+1}) by ${dq(pv)}:  ⟦${rs(rows[pr])}⟧`)}
  for(let i=0;i<m;i++)if(i!==pr&&!rows[i][c].z()){const f=rows[i][c];rows[i]=rows[i].map((x,j)=>x.sub(f.mul(rows[pr][j])));steps.push(`Equation (${i+1}) − (${dq(f)}) × equation (${pr+1}):  ⟦${rs(rows[i])}⟧`)}
  piv.push(c);pr++}
 const out={vars,steps,sol:{},type:'',main:'',approx:'',eqs};
 for(let i=pr;i<m;i++)if(!rows[i][n].z()){out.type='none';out.main='No solution: the equations contradict each other.';return out}
 const free=vars.filter((_,j)=>!piv.includes(j));
 if(free.length){out.type='many';out.main=piv.map((c,i)=>{const p=new Map();if(!rows[i][n].z())p.set('',rows[i][n]);free.forEach(f=>{const a=rows[i][vars.indexOf(f)];if(!a.z())p.set(f+'1',a.neg())});return`${vars[c]} = ${pStr(p)}`}).join(',  ');out.note=`${free.join(', ')} can be any number`;return out}
 out.type='one';piv.forEach((c,i)=>out.sol[vars[c]]=rows[i][n]);
 if(m===2&&n===2){const[[a1,b1,c1],[a2,b2,c2]]=orig;
  if([a1,b1,c1,a2,b2,c2].every(x=>x.isInt())&&!a1.z()&&!a2.z()){
   const X=vars[0],Y=vars[1],g=new Q(gcdB(a1.n,a2.n)),m1=a2.abs().div(g),m2=a1.abs().div(g),sc=(r,k)=>r.map(x=>x.mul(k)),e3=sc(orig[0],m1),e4=sc(orig[1],m2),same=(a1.n>0n)===(a2.n>0n),e5=e3.map((x,j)=>same?x.sub(e4[j]):x.add(e4[j]));
   const yv=e5[2].div(e5[1]),xv=c1.sub(b1.mul(yv)).div(a1),l3=m1.isOne()?1:3,l4=m2.isOne()?2:4,eq=(r,t)=>`⟦${rs(r)}        …(${t})⟧`,co=q=>q.isOne()?'':q.n===-1n&&q.isInt()?'−':dq(q),L=[];
   L.push('Step 1: Write the equations.',eq(orig[0],1),eq(orig[1],2),`Step 2: Eliminate ${X}.`);
   if(!m1.isOne())L.push(`Multiply equation (1) by ${m1}:`,eq(e3,3));if(!m2.isOne())L.push(`Multiply equation (2) by ${m2}:`,eq(e4,4));
   L.push(same?`Subtract equation (${l4}) from equation (${l3}):`:`Add equation (${l3}) and equation (${l4}):`,`⟦${rs(e5)}⟧`);
   if(!e5[1].isOne())L.push(`Divide both sides by ${dq(e5[1])}:`);L.push(`⟦${Y} = ${dq(yv)}⟧`);
   L.push(`Step 3: Find ${X}. Substitute ⟦${Y} = ${dq(yv)}⟧ into equation (1):`,`⟦${co(a1)}${X}${b1.z()?'':(b1.n<0n?' − ':' + ')+(b1.abs().isOne()?'':b1.abs())+'('+dq(yv)+')'} = ${dq(c1)}⟧`);
   if(!b1.z())L.push(`⟦${co(a1)}${X} = ${dq(c1.sub(b1.mul(yv)))}⟧`);if(!a1.isOne())L.push(`⟦${X} = ${dq(xv)}⟧`);
   L.push('Final answer:',`⟦${X} = ${dq(xv)},  ${Y} = ${dq(yv)}⟧`);out.steps=L}}out.main=vars.map(v=>`${v} = ${dq(out.sol[v])}`).join(',  ');
 const ap=vars.filter(v=>!out.sol[v].isInt()).map(v=>`${v} ≈ ${rnd(out.sol[v].val())}`);out.approx=ap.join(',  ');out.rows=eqs;return out}
// ---- evaluate ----
function evalR(r,m){const a=pEval(r.n,m),b=pEval(r.d,m);if(a===null||b===null)return null;if(b.z())return'undefined';return a.div(b)}
return{sqrtSimp,gcdB,lcmB,Q,qIn,dq,rnd,parseR,parseEq,rNorm,rStr,pStr,solveFor,solveSys,factorR,factorP,quadNum,rVars,evalR,pEval,pVars,pDeg,pCoef,uniCoefs,tidy,pAdd,pMul,pScale,R,pnum,isOne,pIsConst,pConst,Q0,Q1,QM,mono}})();
if(typeof module!=='undefined')module.exports=M;

const TX=(()=>{
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
const friendly=e=>e&&e.constructor===Error?e.message:"I couldn't work that out. Check your brackets and symbols, for example 5x + 3y = 6 or (x+1)(x−2).";
const KP=['x','y','z','^','(',')','+','−','×','÷','=','π','⌫'];
const kp=()=>'<div class="kp" role="group" aria-label="Math keys">'+KP.map(k=>'<button type="button" data-k="'+k+'">'+k+'</button>').join('')+'</div>';
const exs=a=>'<div class="exs"><span>Try:</span>'+a.map(e=>'<button type="button" class="chip" data-ex="'+e+'">'+e.replace(/;/g,'  ;  ')+'</button>').join('')+'</div>';
const textInit=()=>{const f=$('#tool-form');
 f.addEventListener('pointerdown',e=>{if(e.target.closest('.kp button,.exs button'))e.preventDefault()});
 f.addEventListener('click',e=>{const b=e.target.closest('.kp [data-k],.exs [data-ex]');if(!b)return;const q=$('#q');
  if(b.dataset.ex!==undefined)q.value=b.dataset.ex.replace(/;/g,'\n');
  else{const k=b.dataset.k,s=q.selectionStart??q.value.length,t=q.selectionEnd??s;if(k==='⌫'){if(s!==t)q.setRangeText('',s,t,'end');else if(s>0)q.setRangeText('',s-1,s,'end')}else q.setRangeText(k,s,t,'end')}
  q.dispatchEvent(new Event('input',{bubbles:true}));q.focus()})};
let WK=false;
const ea=x=>esc(x).replace(/"/g,'&quot;');
const matchParen=(t,i)=>{let d=0;for(let k=i;k<t.length;k++){if(t[k]==='(')d++;else if(t[k]===')'){d--;if(!d)return k}}return -1};
const matchBack=(t,j)=>{let d=0;for(let k=j;k>=0;k--){if(t[k]===')')d++;else if(t[k]==='('){d--;if(!d)return k}}return -1};
const stripP=t=>t[0]==='('&&matchParen(t,0)===t.length-1?t.slice(1,-1):t;
function leaf(t){let o='',i=0;while(i<t.length){const c=t[i];
 if(c==='√'){let inner;if(t[i+1]==='('){const e=matchParen(t,i+1);inner=t.slice(i+2,e<0?t.length:e);i=(e<0?t.length:e)+1}else{const m=t.slice(i+1).match(/^[0-9A-Za-zπ²³⁴⁵⁶⁷⁸⁹]+/);inner=m?m[0]:'';i+=1+inner.length}
  o+='<span class="rad"><span class="rs">√</span><span class="ov">'+mh(inner)+'</span></span>';continue}
 const f=t.slice(i).match(/^(\d+)\/(\d+)/);if(f){o+='<span class="fr"><span class="n">'+f[1]+'</span><span class="d">'+f[2]+'</span></span>';i+=f[0].length;continue}
 const w=t.slice(i).match(/^[A-Za-z]+/);if(w){o+='<i>'+w[0]+'</i>';i+=w[0].length;continue}
 o+=c==='<'?'&lt;':c==='>'?'&gt;':c==='&'?'&amp;':c;i++}return o}
function mh(t){const i=t.indexOf(' / ');if(i<0)return leaf(t);const L=t.slice(0,i),Rt=t.slice(i+3);let ln,rn;
 if(L.endsWith(')')){const j=matchBack(L,L.length-1);ln=j>=0?L.slice(j):L}else{const m=L.match(/[^\s(]+$/);ln=m?m[0]:L}
 if(Rt[0]==='('){const k=matchParen(Rt,0);rn=k>=0?Rt.slice(0,k+1):Rt}else{const m=Rt.match(/^[^\s),]+/);rn=m?m[0]:Rt}
 return mh(L.slice(0,L.length-ln.length))+'<span class="fr"><span class="n">'+mh(stripP(ln))+'</span><span class="d">'+mh(stripP(rn))+'</span></span>'+mh(Rt.slice(rn.length))}
const mb=t=>{t=String(t);return'<span class="math" data-p="'+ea(t)+'">'+t.split(' or ').map(p=>p.split(',  ').map(q=>'<span class="mp">'+mh(q)+'</span>').join(',<span class="gap"></span>')).join('<span class="orw">or</span>')+'</span>'};
const ans=S=>{const pl=S.kind==='none'||S.kind==='all'||S.type==='none';return'<span class="ans'+(pl?' plain':'')+'">'+(pl?esc(S.main):mb(S.main))+'</span>'+(S.note?sub(S.note):'')};
const plainText=el=>{const c=el.cloneNode(true);c.querySelectorAll('.math[data-p]').forEach(m=>m.replaceWith(document.createTextNode(m.dataset.p)));c.querySelectorAll('.sub').forEach(x=>x.prepend('\n'));return c.textContent};
const stepHTML=x=>String(x).split(/⟦(.*?)⟧/).map((p,i)=>i%2?mb(p):esc(p)).join('');
const stepsHTML=(st,ck)=>'<button type="button" class="wbtn" id="wbtn">'+(WK?'Hide workings ▴':'Show workings ▾')+'</button><div id="wk" class="steps"'+(WK?'':' hidden')+'><ol>'+st.map(x=>'<li data-p="'+ea(String(x).replace(/[⟦⟧]/g,''))+'">'+stepHTML(x)+'</li>').join('')+'</ol>'+(ck||[]).map(c=>'<p class="ok">'+esc(c)+'</p>').join('')+'</div>';
document.addEventListener('click',e=>{const b=e.target.closest('#wbtn');if(!b)return;WK=!WK;const w=$('#wk');if(w)w.hidden=!WK;b.textContent=WK?'Hide workings ▴':'Show workings ▾'});
const sub=t=>t?'<span class="sub">'+esc(t)+'</span>':'';
const fail=m=>{setResult('—');$('#work').innerHTML='<div class="err">'+esc(m)+'</div>'};
const clear=()=>{setResult('—');$('#work').innerHTML=''};
// ---------- graph ----------
function plot(cv,curves,pts,o){o=o||{};const dpr=Math.min(window.devicePixelRatio||1,2),W=Math.max((cv.parentNode.clientWidth||320)-2,260),H=Math.round(W*.62);
 cv.hidden=false;cv.style.height=H+'px';cv.width=W*dpr;cv.height=H*dpr;const g=cv.getContext('2d');g.scale(dpr,dpr);
 const cs=getComputedStyle(document.documentElement),C=n=>cs.getPropertyValue(n).trim();let x0=o.x0===undefined?-6:o.x0,x1=o.x1===undefined?6:o.x1,lo=Infinity,hi=-Infinity;const N=240;
 curves.forEach(c=>{if(c.f)for(let i=0;i<=N;i++){const y=c.f(x0+(x1-x0)*i/N);if(isFinite(y)&&Math.abs(y)<1e7){lo=Math.min(lo,y);hi=Math.max(hi,y)}}});
 pts.forEach(p=>{lo=Math.min(lo,p.y);hi=Math.max(hi,p.y)});if(!isFinite(lo)){lo=-1;hi=1}lo=Math.min(lo,0);hi=Math.max(hi,0);if(hi-lo<1e-9){lo-=1;hi+=1}const pad=(hi-lo)*.12;lo-=pad;hi+=pad;
 const L=38,Rr=10,T=10,B=22,px=x=>L+(x-x0)/(x1-x0)*(W-L-Rr),py=y=>T+(hi-y)/(hi-lo)*(H-T-B);
 const step=(a,b)=>{const raw=(b-a)/5,p=Math.pow(10,Math.floor(Math.log10(raw))),m=raw/p;return(m<1.5?1:m<3.5?2:m<7.5?5:10)*p};
 const sx=step(x0,x1),sy=step(lo,hi);g.font='11px system-ui,sans-serif';g.lineWidth=1;g.strokeStyle=C('--line')||'#ddd';g.fillStyle=C('--muted')||'#888';
 for(let x=Math.ceil(x0/sx)*sx;x<=x1+1e-9;x+=sx){g.beginPath();g.moveTo(px(x),T);g.lineTo(px(x),H-B);g.stroke();g.textAlign='center';g.fillText(+x.toFixed(6)+'',px(x),H-8)}
 for(let y=Math.ceil(lo/sy)*sy;y<=hi+1e-9;y+=sy){g.beginPath();g.moveTo(L,py(y));g.lineTo(W-Rr,py(y));g.stroke();g.textAlign='right';g.fillText(+y.toFixed(6)+'',L-4,py(y)+4)}
 g.strokeStyle=C('--text')||'#000';g.lineWidth=1.4;if(x0<=0&&x1>=0){g.beginPath();g.moveTo(px(0),T);g.lineTo(px(0),H-B);g.stroke()}if(lo<=0&&hi>=0){g.beginPath();g.moveTo(L,py(0));g.lineTo(W-Rr,py(0));g.stroke()}
 const cols=['#2563eb','#f59e0b','#10b981'];
 curves.forEach((c,k)=>{g.strokeStyle=cols[k%3];g.lineWidth=2.2;g.beginPath();if(c.vx!==undefined){g.moveTo(px(c.vx),T);g.lineTo(px(c.vx),H-B)}else{let on=false;for(let i=0;i<=N;i++){const x=x0+(x1-x0)*i/N,y=c.f(x);if(!isFinite(y)||y<lo-5*(hi-lo)||y>hi+5*(hi-lo)){on=false;continue}on?g.lineTo(px(x),py(y)):g.moveTo(px(x),py(y));on=true}}g.stroke()});
 pts.forEach(p=>{g.fillStyle='#ef4444';g.beginPath();g.arc(px(p.x),py(p.y),4,0,7);g.fill();if(p.t){const r=px(p.x)>W-90;g.fillStyle=C('--text')||'#000';g.textAlign=r?'right':'left';g.fillText(p.t,px(p.x)+(r?-7:7),py(p.y)+(p.below?17:-7))}})}
const domain=xs=>{xs=xs.filter(isFinite);if(!xs.length)return{x0:-6,x1:6};const a=Math.min(...xs),b=Math.max(...xs),p=Math.max(2,(b-a)*.5);return{x0:a-p,x1:b+p}};
function drawPoly(P,roots,vertex){const cv=$('#plot');if(!cv)return;const vs=M.pVars(P).filter(x=>x!=='π');
 if(vs.length===1&&M.pDeg(P,vs[0])>=1&&M.pDeg(P,vs[0])<=6){const c=M.uniCoefs(P,vs[0]).map(q=>q.val()),f=x=>c.reduceRight((a,b)=>a*x+b,0);
  const rx=roots.filter(r=>r.im===0).map(r=>r.v!==undefined?r.v:r.re),xs=rx.slice();if(vertex)xs.push(vertex.x);
  plot(cv,[{f}],rx.map(x=>({x,y:0,below:true,t:'('+M.rnd(x,3)+', 0)'})).concat(vertex?[{x:vertex.x,y:vertex.y,t:'vertex ('+M.rnd(vertex.x,3)+', '+M.rnd(vertex.y,3)+')'}]:[]),domain(xs))}
 else if(vs.length===2&&M.pDeg(P,vs[0])<=1&&M.pDeg(P,vs[1])<=1&&!P.has(vs[0]+'1|'+vs[1]+'1')){plot(cv,[lineOf(P,vs)],[],{x0:-10,x1:10})}}
const lineOf=(P,vs)=>{const a=(P.get(vs[0]+'1')||M.Q0).val(),b=(P.get(vs[1]+'1')||M.Q0).val(),c=(P.get('')||M.Q0).val();return b!==0?{f:x=>-(a*x+c)/b}:{vx:-c/a}};
// ---------- algebra / linear / change of subject ----------
function algRun(mode){const q=$('#q').value.trim(),w=$('#work'),o=$('#opts');
 if(!q){clear();o.innerHTML='';o.dataset.sig='';return}
 try{
  if(q.includes('=')){const{l,r}=M.parseEq(q),vs=M.rVars(l,r),key='S'+vs.join('');
   if(o.dataset.sig!==key){o.dataset.sig=key;o.innerHTML=vs.length?'<div class="field"><label for="v">'+(mode==='cos'?'Make this letter the subject':'Solve for')+'</label><select id="v">'+vs.map(x=>'<option'+(x===(vs.includes('x')?'x':vs[0])?' selected':'')+'>'+x+'</option>').join('')+'</select></div>':''}
   const sel=$('#v'),v=sel?sel.value:null;
   if(!v){const a=M.evalR(l,{}),b=M.evalR(r,{});setResult(a&&b&&a.cmp&&b.cmp&&a.cmp(b)===0?'True ✓':'False ✗');w.innerHTML='';return}
   const S=M.solveFor(l,r,v);setResult(ans(S)+sub(S.approx&&(S.approx==='approximate real roots'?'Approximate decimal values':v+' ≈ '+S.approx)));
   w.innerHTML=stepsHTML(S.steps,S.check)+'<canvas id="plot" hidden></canvas>';if(mode!=='cos')drawPoly(S.P,S.sols,null)}
  else{if(mode==='cos'){fail('Type a formula with an equals sign, for example v = u + at.');o.innerHTML='';o.dataset.sig='';return}
   const r=M.parseR(q),vs=M.rVars(r),key='E'+vs.join('');
   if(o.dataset.sig!==key){o.dataset.sig=key;o.innerHTML=vs.length?'<div class="field"><label>Evaluate (optional): give each letter a value</label><div class="evals">'+vs.map(x=>'<label class="ev">'+x+' = <input id="e_'+x+'" inputmode="decimal" placeholder="?"></label>').join('')+'</div></div>':''}
   const ex=M.rStr(r),fc=M.factorR(r),map={};let all=vs.length>0;vs.forEach(x=>{const e=$('#e_'+x),qv=e&&M.qIn(e.value);if(qv)map[x]=qv;else all=false});
   const val=!vs.length?M.evalR(r,{}):all?M.evalR(r,map):null,vt=val===null?'':val==='undefined'?'undefined (division by zero)':M.dq(val)+(val.isInt()?'':'  ≈ '+M.rnd(val.val()));
   setResult(val==='undefined'?esc(vt):'<span class="ans">'+mb(vs.length?ex:vt)+'</span>');let h='<div class="ln"><b>Expanded and simplified:</b> '+mb(ex)+'</div>'+(fc!==ex?'<div class="ln"><b>Factorised:</b> '+mb(fc)+'</div>':'<div class="ln muted">Nothing more to factorise.</div>');
   if(vs.length&&val!==null)h+='<div class="ln"><b>Value:</b> '+mb(vt)+'</div>';
   w.innerHTML=h+'<div class="hint" style="margin-top:8px">Add an equals sign to solve it, for example '+esc(ex)+' = 0</div><canvas id="plot" hidden></canvas>';
   if(vs.length===1&&M.isOne(M.rNorm(r).d)){try{const S=M.solveFor(r,M.R(M.pnum(M.Q0)),vs[0]);drawPoly(M.rNorm(r).n,S.sols,null)}catch(e){drawPoly(M.rNorm(r).n,[],null)}}}
 }catch(e){fail(friendly(e))}}
const algUI=(ph,ex,lbl,hint)=>'<div class="field"><label for="q">'+lbl+'</label><input id="q" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="'+ph+'">'+kp()+exs(ex)+'<div class="hint">'+hint+'</div></div><div id="opts"></div>';
const H1='Write powers as x^2 or x². Use brackets and fractions like 1/2. Letters next to each other multiply (5xy).';
// ---------- quadratic ----------
const fld=(id,l)=>'<div class="field"><label for="'+id+'">'+l+'</label><input id="'+id+'" type="text" inputmode="decimal" autocomplete="off" placeholder="0"></div>';
function quadRun(){const v=['a','b','c'].map(k=>$('#'+k).value.trim());if(v.every(x=>!x)){clear();$('#eqp').textContent='ax² + bx + c = 0';return}
 const q=v.map(M.qIn);if(q.some(x=>x===null)){if(v.every(Boolean)||v.some(x=>x&&!M.qIn(x)))return fail('Enter numbers like 2, −3, 0.5 or 1/2 in each box.');return clear()}
 if(q[0].z())return fail('a cannot be 0, because then it is not a quadratic. Try the Linear Equation Calculator.');
 const[a,b,c]=q,P=new Map([['x2',a],...(b.z()?[]:[['x1',b]]),...(c.z()?[]:[['',c]])]);$('#eqp').textContent=M.pStr(P)+' = 0';
 try{const S=M.solveFor(M.R(P),M.R(M.pnum(M.Q0)),'x'),two=a.mul(new M.Q(2n)),h=b.neg().div(two),k=c.sub(b.mul(b).div(new M.Q(4n).mul(a)));
  setResult(ans(S)+sub(S.approx&&'x ≈ '+S.approx));
  const sgn=(h.n>0n?'− ':'+ ')+M.dq(h.abs()),vf=(a.isOne()?'':a.n===-1n&&a.isInt()?'−':M.dq(a.isInt()?a:'('+a+')'))+'(x '+(h.z()?'':sgn)+')²'+(k.z()?'':(k.n<0n?' − ':' + ')+M.dq(k.abs()));
  const info=[['Discriminant (b² − 4ac)',M.dq(b.mul(b).sub(new M.Q(4n).mul(a).mul(c)))],['Vertex','('+M.dq(h)+', '+M.dq(k)+')'],['Axis of symmetry','x = '+M.dq(h)],['y-intercept','(0, '+M.dq(c)+')'],['Vertex form','y = '+vf],['Factorised',M.factorP(P)+' = 0']];
  $('#work').innerHTML=stepsHTML(S.steps,S.check)+'<div class="steps"><h3>More about this parabola</h3>'+info.map(i=>'<div class="ln"><b>'+i[0]+':</b> '+mb(i[1])+'</div>').join('')+'</div><canvas id="plot" hidden></canvas>';
  drawPoly(P,S.sols,{x:h.val(),y:k.val()})}catch(e){fail(friendly(e))}}
// ---------- simultaneous ----------
function sysRun(){const lines=$('#q').value.split('\n').map(s=>s.trim()).filter(Boolean);if(!lines.length)return clear();
 if(lines.length<2)return fail('Add at least two equations, one per line. Example: 2x + 3y = 12 on the first line and x − y = 1 on the second.');
 try{const S=M.solveSys(lines);setResult(ans(S)+sub(S.approx));$('#work').innerHTML=stepsHTML(S.steps,S.type==='one'?['Check: put these values back into each original equation and both sides match ✓']:[])+'<canvas id="plot" hidden></canvas>';
  if(S.vars.length===2&&S.eqs.length<=3){const cu=S.eqs.map(p=>lineOf(p,S.vars)),pt=S.type==='one'?[{x:S.sol[S.vars[0]].val(),y:S.sol[S.vars[1]].val(),t:'('+M.rnd(S.sol[S.vars[0]].val(),3)+', '+M.rnd(S.sol[S.vars[1]].val(),3)+')'}]:[];
   const d=pt.length?{x0:pt[0].x-6,x1:pt[0].x+6}:{x0:-8,x1:8};plot($('#plot'),cu,pt,d)}}catch(e){fail(friendly(e))}}
const SOLVERS={
 'algebra-solver':{ui:algUI('e.g. 5x + 3y − 6 = 0',['5x+3y-6=0','(x+2)(x-3)','x^2-5x+6=0','2x^3-3x^2-11x+6=0'],'Type an expression or an equation',H1),init:textInit,run:()=>algRun('alg')},
 'linear-equation-calculator':{ui:algUI('e.g. 3x + 5 = 20',['3x+5=20','2(x-4)=x+7','x/3+2=5','0.5x=3'],'Type your equation',H1),init:textInit,run:()=>algRun('alg')},
 'change-of-subject-calculator':{ui:algUI('e.g. v = u + at',['v=u+at','s=ut+1/2at^2','E=1/2mv^2','A=πr^2','1/f=1/u+1/v','y=mx+c'],'Type your formula',H1+' Then choose which letter should be the subject.'),init:textInit,run:()=>algRun('cos')},
 'quadratic-equation-calculator':{ui:'<div class="eqp" id="eqp">ax² + bx + c = 0</div><div class="three">'+fld('a','a (x² number)')+fld('b','b (x number)')+fld('c','c (number)')+'</div><div class="hint">Type numbers, decimals or fractions like 1/2. Leave a box empty for 0 only if it is b or c.</div>',run:quadRun},
 'simultaneous-equations-calculator':{ui:'<div class="field"><label for="q">Type your equations, one per line</label><textarea id="q" rows="3" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="2x + 3y = 12\nx − y = 1"></textarea>'+kp()+exs(['2x+3y=12;x-y=1','x+y+z=6;2x-y+z=3;x+2y-z=2','x+y=2;2x+2y=4'])+'<div class="hint">Works with 2, 3 or more letters. Equations must be straight-line (linear).</div></div>',init:textInit,run:sysRun}};
// ---------- sharing as image / PDF ----------
const IC={copy:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="11" height="11" rx="2"/><path d="M5 15V6a2 2 0 0 1 2-2h9"/></svg>',share:'<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 10.5l6.8-4M8.6 13.5l6.8 4"/></svg>'};
const RICONS='<div class="ricons"><button type="button" class="ib" id="copy" aria-label="Copy result" title="Copy result">'+IC.copy+'</button><button type="button" class="ib" id="share" aria-label="Share result" title="Share result">'+IC.share+'</button><div class="pop" id="pop" hidden><button type="button" data-a="img">🖼️  Share as image</button><button type="button" data-a="pdf">📄  Share as PDF</button><button type="button" data-a="link">🔗  Copy link</button><button type="button" data-a="txt">📝  Copy text</button></div></div>';
function toast(m){if(!m)return;let t=$('#toast');if(!t){t=document.createElement('div');t.id='toast';document.body.appendChild(t)}t.textContent=m;t.className='on';clearTimeout(t._h);t._h=setTimeout(()=>t.className='',2200)}
function snap(t,form){const inputs=[];form.querySelectorAll('.field').forEach(f=>{const l=f.querySelector('label'),e=f.querySelector('input:not([id^=e_]),select,textarea');if(l&&e&&e.value&&!f.querySelector('.evals'))inputs.push([l.textContent.trim(),e.tagName==='SELECT'?e.selectedOptions[0].textContent:e.value.trim().replace(/\n/g,'  ;  ')])});
 form.querySelectorAll('#rows .row').forEach(r=>{const v=[...r.querySelectorAll('input,select')].map(e=>e.value).filter(Boolean);if(v.length>=2)inputs.push(['Row',v.join(' · ')])});
 return{title:t.name,inputs,res:plainText($('#result strong')).split('\n').map(x=>x.trim()).filter(Boolean),steps:[...document.querySelectorAll('#work .steps li,#work .ln')].map(e=>e.dataset.p!==undefined?e.dataset.p:plainText(e).trim())}}
function drawImg(s,cb){const W=1080,P=64,HD=130,c=document.createElement('canvas'),g=c.getContext('2d'),FF='-apple-system,"Segoe UI",Roboto,Arial,sans-serif',dt=new Date().toLocaleDateString(undefined,{day:'numeric',month:'short',year:'numeric'});
 const wr=(txt,px,wt,max)=>{g.font=wt+' '+px+'px '+FF;const out=[];String(txt).split('\n').forEach(par=>{let l='';par.split(' ').forEach(w=>{const t=l?l+' '+w:w;if(g.measureText(t).width>max&&l){out.push(l);l=w}else l=t});out.push(l)});return out};
 const it=[],tx=(t,px,wt,col,gap,max)=>it.push({k:'t',ls:wr(t,px,wt,max||W-2*P),px,wt,col,gap:gap||0});
 tx(s.title,50,'800','#0b1b3a',16);s.inputs.slice(0,8).forEach(i=>tx(i[0]+': '+i[1],30,'500','#4b5b7a',4));it.push({k:'sp',h:18},{k:'b0'});
 s.res.forEach((l,i)=>tx(l,i?30:i===0&&l.length>28?44:62,i?'500':'800',i?'#4b5b7a':'#0b1b3a',10,W-2*P-56));it.push({k:'b1'});
 if(s.steps.length){it.push({k:'sp',h:26});tx('Working',34,'800','#0b1b3a',8);s.steps.slice(0,18).forEach(l=>tx(l,27,'500','#33415c',6))}
 let box=null;const run=d=>{let y=HD+46,bt=0,inb=false;for(const e of it){if(e.k==='sp')y+=e.h;else if(e.k==='b0'){bt=y;y+=28;inb=true}else if(e.k==='b1'){y+=14;box={y:bt,h:y-bt};inb=false}
   else{for(const l of e.ls){y+=e.px*1.3;if(d){g.font=e.wt+' '+e.px+'px '+FF;g.fillStyle=e.col;g.textAlign='left';g.fillText(l,P+(inb?28:0),y)}}y+=e.gap}}return y};
 const end=run(false);c.width=W;c.height=end+120;g.fillStyle='#ffffff';g.fillRect(0,0,W,c.height);
 g.fillStyle='#eaf1ff';(g.roundRect||g.rect).call(g.beginPath()||g,P-4,box.y,W-2*P+8,box.h,26);g.fill();
 g.fillStyle='#0b1b3a';g.fillRect(0,0,W,HD);g.font='800 56px '+FF;g.textAlign='left';let x=P;[['ph','#fff'],['a','#60a5fa'],['demy','#fff']].forEach(([t,col])=>{g.fillStyle=col;g.fillText(t,x,84);x+=g.measureText(t).width});
 g.font='500 26px '+FF;g.fillStyle='#9db6e4';g.textAlign='right';g.fillText(dt,W-P,82);run(true);
 g.fillStyle='#8a97b5';g.font='500 24px '+FF;g.textAlign='left';g.fillText('Calculated on Phademy  ·  free calculators for everyone',P,c.height-50);c.toBlob(cb,'image/png')}
function pdfBlob(s){const cl=t=>String(t).replace(/₦/g,'NGN ').replace(/₹/g,'INR ').replace(/√/g,'sqrt').replace(/π/g,'pi').replace(/−/g,'-').replace(/≈/g,'~').replace(/≤/g,'<=').replace(/≥/g,'>=').replace(/→/g,'->').replace(/←/g,'<-').replace(/[⁰⁴⁵⁶⁷⁸⁹]/g,m=>'^'+'⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(m)).replace(/[±]/g,'+/-').replace(/[✓]/g,'(ok)').replace(/[^\x20-\x7E\u00A0-\u00FF]/g,'?').replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
 const L=[];const add=(t,sz,b,col)=>{const mx=Math.floor(495/(sz*(b?.56:.5)));String(t).split('\n').forEach(par=>{let l='';par.split(' ').forEach(w=>{const n=l?l+' '+w:w;if(n.length>mx&&l){L.push({t:l,sz,b,col});l=w}else l=n});L.push({t:l,sz,b,col})})};
 add(s.title,20,1,'0.04 0.11 0.23');s.inputs.slice(0,10).forEach(i=>add(i[0]+': '+i[1],11,0,'0.3 0.36 0.48'));L.push({t:'',sz:8});s.res.forEach((l,i)=>add(l,i?11:16,i?0:1,i?'0.3 0.36 0.48':'0.15 0.39 0.92'));
 if(s.steps.length){L.push({t:'',sz:10});add('Working',13,1,'0.04 0.11 0.23');s.steps.slice(0,40).forEach(l=>add(l,10.5,0,'0.2 0.25 0.35'))}
 const pages=[];let cur=[],y=770;L.forEach(l=>{if(y<70){pages.push(cur);cur=[];y=790}cur.push([l,y]);y-=l.sz*1.5});pages.push(cur);
 const objs=[];const o=(n,s)=>objs[n-1]=s;o(1,'<< /Type /Catalog /Pages 2 0 R >>');const kids=pages.map((_,i)=>(5+i*2)+' 0 R').join(' ');o(2,'<< /Type /Pages /Kids ['+kids+'] /Count '+pages.length+' >>');
 o(3,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>');o(4,'<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>');
 pages.forEach((pg,i)=>{let st='0.04 0.11 0.23 rg 0 812 595 30 re f BT /F2 14 Tf 1 1 1 rg 50 821 Td (phademy) Tj ET\n';pg.forEach(([l,yy])=>{if(l.t)st+='BT /F'+(l.b?2:1)+' '+l.sz+' Tf '+l.col+' rg 50 '+yy.toFixed(1)+' Td ('+cl(l.t)+') Tj ET\n'});
  st+='BT /F1 8 Tf 0.5 0.55 0.65 rg 50 28 Td (Calculated on Phademy - page '+(i+1)+' of '+pages.length+') Tj ET';o(6+i*2,'<< /Length '+st.length+' >>\nstream\n'+st+'\nendstream');o(5+i*2,'<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R /F2 4 0 R >> >> /Contents '+(6+i*2)+' 0 R >>')});
 let out='%PDF-1.4\n',off=[];objs.forEach((s,i)=>{off.push(out.length);out+=(i+1)+' 0 obj\n'+s+'\nendobj\n'});const xr=out.length;out+='xref\n0 '+(objs.length+1)+'\n0000000000 65535 f \n'+off.map(n=>String(n).padStart(10,'0')+' 00000 n \n').join('')+'trailer\n<< /Size '+(objs.length+1)+' /Root 1 0 R >>\nstartxref\n'+xr+'\n%%EOF';
 const u=new Uint8Array(out.length);for(let i=0;i<out.length;i++)u[i]=out.charCodeAt(i)&255;return new Blob([u],{type:'application/pdf'})}
async function shareFile(blob,name,title){const f=new File([blob],name,{type:blob.type});if(navigator.canShare&&navigator.canShare({files:[f]})){try{await navigator.share({files:[f],title});return'shared'}catch(e){if(e&&e.name==='AbortError')return'cancel'}}
 const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download=name;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(a.href),5000);return'saved'}
function exportUI(slug,form,t,_txt,flash,copy){const pop=$('#pop'),txt=()=>plainText($('#result strong')).split('\n').map(x=>x.trim()).filter(Boolean).join(' · ')||'—';
 const link=()=>{const p=new URLSearchParams();form.querySelectorAll('input[id],select[id],textarea[id]').forEach(e=>{if(e.value&&e.id!=='msearch'&&!e.id.startsWith('e_'))p.set(e.id,e.value)});if(typeof BMI!=='undefined'&&BMI.u==='us'&&slug==='bmi-calculator')p.set('u','us');return location.href.split('?')[0].split('#')[0]+(p.toString()?'?'+p:'')};
 const ctext=()=>t.name+': '+txt();const ok=()=>txt()!=='—';
 $('#copy').onclick=()=>{if(!ok())return toast('Enter your values first');copy(ctext()).then(()=>toast('Result copied ✓')).catch(()=>toast('Could not copy'));track('copy',{tool:slug})};
 const rp=$('#report');if(rp)rp.onclick=()=>{const s=snap(t,form),b=['Tool: '+t.name,'Page: '+location.href.split('#')[0],'','What I entered:',...s.inputs.map(i=>' - '+i[0]+': '+i[1]),'','Result shown: '+(s.res.join(' ')||'(none)'),'','What looks wrong (please describe):',''].join('\n'),u='mailto:'+CONTACT+'?subject='+encodeURIComponent('Mistake in '+t.name)+'&body='+encodeURIComponent(b);document.documentElement.dataset.mailto=u;location.href=u};
 $('#share').onclick=e=>{e.stopPropagation();pop.hidden=!pop.hidden};document.addEventListener('click',e=>{if(!pop.contains(e.target))pop.hidden=true});
 pop.onclick=async e=>{const b=e.target.closest('button');if(!b)return;pop.hidden=true;const a=b.dataset.a;track('share',{tool:slug,how:a});
  if(!ok()&&a!=='link')return toast('Enter your values first');const s=snap(t,form),nm=slug+'-result';
  const done=r=>toast(r==='saved'?'Saved to your device ✓':r==='shared'?'':'');
  if(a==='img')drawImg(s,blob=>shareFile(blob,nm+'.png',t.name).then(done));
  else if(a==='pdf')shareFile(pdfBlob(s),nm+'.pdf',t.name).then(done);
  else if(a==='link'){const u=link();try{if(navigator.share){await navigator.share({title:t.name+' | Phademy',text:ok()?ctext():t.name,url:u});return}}catch(x){if(x&&x.name==='AbortError')return}copy(u).then(()=>toast('Link copied ✓')).catch(()=>toast('Could not copy'))}
  else copy(ctext()).then(()=>toast('Text copied ✓')).catch(()=>toast('Could not copy'))}}
return{SOLVERS,exportUI,RICONS,H:{esc,mb,mh,sub,fail,clear,stepsHTML,plot,domain,friendly,textInit,drawPoly,lineOf,exs,ea,kp}}})();
const SOLVERS=TX.SOLVERS,exportUI=TX.exportUI,RICONS=TX.RICONS;

(()=>{
const{esc,mb,mh,sub,fail,clear,stepsHTML,plot,domain,friendly,textInit,drawPoly,lineOf,exs,ea}=TX.H;
const dq=M.dq,Q=M.Q,Q0=M.Q0,Q1=M.Q1,BI=BigInt;
const F=(x,d=4)=>{if(!isFinite(x))return String(x);return(+x.toFixed(d)).toLocaleString('en-US',{maximumFractionDigits:d}).replace('-','−')};
const w=q=>q.n<0n?'('+dq(q)+')':dq(q);
const sci=b=>{const s=b.toString(),neg=s[0]==='-',d=neg?s.slice(1):s;if(d.length<=40)return(neg?'−':'')+d.replace(/\B(?=(\d{3})+(?!\d))/g,',');return(neg?'−':'')+d[0]+'.'+d.slice(1,6)+' × 10^'+(d.length-1)+'  ('+d.length+' digits)'};
function render(r){const main=r.html?'<span class="ans">'+r.html+'</span>':r.text!==undefined?'<span class="ans">'+esc(r.text)+'</span>':'<span class="ans">'+mb(r.main)+'</span>';
 setResult(main+(r.note?sub(r.note):'')+(r.approx?sub(r.approx):''));
 const info=r.info&&r.info.length?'<div class="steps"><h3>'+(r.infoTitle||'More results')+'</h3>'+r.info.map(i=>'<div class="ln"><b>'+esc(i[0])+':</b> '+(i[2]==='m'?mb(i[1]):i[2]==='h'?i[1]:esc(i[1]))+'</div>').join('')+'</div>':'';
 $('#work').innerHTML=(r.steps&&r.steps.length?stepsHTML(r.steps,r.check):'')+info+(r.plot?'<canvas id="plot" hidden></canvas>':'');if(r.plot)r.plot($('#plot'))}
function mkTool(slug,S){const hh=S.heads||[];
 const fi=([id,l,ph,k,op])=>'<div class="field"><label for="'+id+'">'+l+'</label>'+((k==='sel'||k==='selh')?'<select id="'+id+'"'+(k==='selh'?' data-h="1"':'')+'>'+op.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('')+'</select>':k==='area'?'<textarea id="'+id+'" rows="4" spellcheck="false" placeholder="'+(ph||'')+'"></textarea>':(k==='text'||k==='topt')?'<input id="'+id+'" type="text" autocomplete="off" placeholder="'+(ph||'')+'">':'<input id="'+id+'" type="text" inputmode="decimal" autocomplete="off" placeholder="'+(ph||'')+'">')+'</div>';
 const dyn=h=>'<div class="'+((c=>c===3?'three':c===2?'two':'fields')(typeof S.cols==='function'?S.cols(h):S.cols))+'" id="dyn">'+S.fields(h).map(fi).join('')+'</div>';
 const heads=hh.map(x=>'<div class="field"><label for="'+x.id+'">'+x.label+'</label><select id="'+x.id+'">'+x.opts.map(o=>'<option value="'+o[0]+'">'+o[1]+'</option>').join('')+'</select></div>').join('');
 const H=()=>Object.fromEntries([...hh.map(x=>[x.id,$('#'+x.id).value]),...[...document.querySelectorAll('#dyn select[data-h]')].map(e=>[e.id,e.value])]),raw=id=>{const e=$('#'+id);return e?e.value.trim():''};
 const f={raw,q:id=>M.qIn(raw(id)),n:id=>{const q=M.qIn(raw(id));return q?q.val():null},has:id=>raw(id)!==''};
 SOLVERS[slug]={ui:heads+dyn(Object.fromEntries(hh.map(x=>[x.id,x.opts[0][0]])))+(S.hint?'<div class="hint">'+S.hint+'</div>':''),
  init(form){form.addEventListener('change',e=>{if(!hh.some(x=>x.id===e.target.id)&&!(e.target.dataset&&e.target.dataset.h))return;const old={};form.querySelectorAll('#dyn input,#dyn textarea,#dyn select').forEach(i=>old[i.id]=i.value);const fromHead=hh.some(x=>x.id===e.target.id),h0=H();if(fromHead)delete h0.find;$('#dyn').outerHTML=dyn(h0);form.querySelectorAll('#dyn input,#dyn textarea,#dyn select').forEach(i=>{if(old[i.id]===undefined)return;if(i.tagName==='SELECT'){if(i.dataset.h&&fromHead)return;if([...i.options].some(o=>o.value===old[i.id]))i.value=old[i.id]}else i.value=old[i.id]})})},
  run(){const h=H(),fs=S.fields(h),kind={};fs.forEach(x=>kind[x[0]]=x[3]||'num');const need=fs.filter(x=>x[3]!=='opt'&&x[3]!=='topt').map(x=>x[0]);
   if(need.some(id=>!f.has(id)))return clear();if(need.some(id=>kind[id]==='num'&&!f.q(id)))return fail('Please enter numbers like 5, −2.5 or 1/2 in every box.');
   let r;try{r=S.run(h,f)}catch(e){return fail(friendly(e))}if(r===null)return clear();if(typeof r==='string')return fail(r);render(r)}}}
const UL={mm:.001,cm:.01,m:1,km:1000,in:.0254,ft:.3048,yd:.9144,mi:1609.344},uo=Object.keys(UL).map(u=>[u,u]);
const st3=(form,sub,res,u)=>['Formula: ⟦'+form+'⟧','Substitute the values: ⟦'+sub+'⟧','Calculate: '+res+(u?' '+u:'')];
// ================= AREA =================
const AREA={
 square:{n:'Square',f:[['a','Side (a)']],run:(v,u)=>({A:v.a*v.a,steps:st3('A = a²','A = '+F(v.a)+'²','⟦A = '+F(v.a*v.a)+'⟧',u+'²'),extra:[['Perimeter',F(4*v.a)+' '+u],['Diagonal',F(v.a*Math.SQRT2)+' '+u]]})},
 rectangle:{n:'Rectangle',f:[['l','Length (l)'],['w','Width (w)']],run:(v,u)=>({A:v.l*v.w,steps:st3('A = l × w','A = '+F(v.l)+' × '+F(v.w),'⟦A = '+F(v.l*v.w)+'⟧',u+'²'),extra:[['Perimeter',F(2*(v.l+v.w))+' '+u],['Diagonal',F(Math.hypot(v.l,v.w))+' '+u]]})},
 triangle:{n:'Triangle (base and height)',f:[['b','Base (b)'],['h','Height (h)']],run:(v,u)=>({A:v.b*v.h/2,steps:st3('A = 1/2 × b × h','A = 1/2 × '+F(v.b)+' × '+F(v.h),'⟦A = '+F(v.b*v.h/2)+'⟧',u+'²')})},
 heron:{n:'Triangle (3 sides)',f:[['a','Side a'],['b','Side b'],['c','Side c']],run:(v,u)=>{const{a,b,c}=v;if(a+b>=c+1e-12&&a+c>=b+1e-12&&b+c>=a+1e-12){}else return 'These three sides cannot make a triangle: the two shorter sides must add up to more than the longest side.';
  if(a+b<=c||a+c<=b||b+c<=a)return 'These three sides cannot make a triangle: the two shorter sides must add up to more than the longest side.';const s=(a+b+c)/2,A=Math.sqrt(s*(s-a)*(s-b)*(s-c));
  return{A,steps:['Semi-perimeter: ⟦s = (a + b + c) / 2⟧ = ⟦('+F(a)+' + '+F(b)+' + '+F(c)+') / 2 = '+F(s)+'⟧','Heron\'s formula: ⟦A = √(s(s − a)(s − b)(s − c))⟧','Substitute: ⟦A = √('+F(s)+' × '+F(s-a)+' × '+F(s-b)+' × '+F(s-c)+')⟧','Calculate: ⟦A = '+F(A)+'⟧ '+u+'²'],extra:[['Perimeter',F(a+b+c)+' '+u]]}}},
 circle:{n:'Circle',f:[['r','Radius (r)']],run:(v,u)=>({A:Math.PI*v.r*v.r,steps:st3('A = π × r²','A = π × '+F(v.r)+'²','⟦A = '+F(Math.PI*v.r*v.r)+'⟧',u+'²'),extra:[['Circumference',F(2*Math.PI*v.r)+' '+u],['Diameter',F(2*v.r)+' '+u]]})},
 parallelogram:{n:'Parallelogram',f:[['b','Base (b)'],['h','Height (h)']],run:(v,u)=>({A:v.b*v.h,steps:st3('A = b × h','A = '+F(v.b)+' × '+F(v.h),'⟦A = '+F(v.b*v.h)+'⟧',u+'²')})},
 trapezium:{n:'Trapezium (trapezoid)',f:[['a','Parallel side a'],['b','Parallel side b'],['h','Height (h)']],run:(v,u)=>({A:(v.a+v.b)*v.h/2,steps:st3('A = 1/2 × (a + b) × h','A = 1/2 × ('+F(v.a)+' + '+F(v.b)+') × '+F(v.h),'⟦A = '+F((v.a+v.b)*v.h/2)+'⟧',u+'²')})},
 rhombus:{n:'Rhombus / kite',f:[['p','Diagonal 1 (d₁)'],['q','Diagonal 2 (d₂)']],run:(v,u)=>({A:v.p*v.q/2,steps:st3('A = 1/2 × d₁ × d₂','A = 1/2 × '+F(v.p)+' × '+F(v.q),'⟦A = '+F(v.p*v.q/2)+'⟧',u+'²')})},
 ellipse:{n:'Ellipse',f:[['a','Semi-axis a'],['b','Semi-axis b']],run:(v,u)=>({A:Math.PI*v.a*v.b,steps:st3('A = π × a × b','A = π × '+F(v.a)+' × '+F(v.b),'⟦A = '+F(Math.PI*v.a*v.b)+'⟧',u+'²')})},
 sector:{n:'Sector of a circle',f:[['r','Radius (r)'],['t','Angle (degrees)']],run:(v,u)=>{if(v.t>360)return 'The angle must be 360° or less.';const A=v.t/360*Math.PI*v.r*v.r;return{A,steps:st3('A = (θ / 360) × π × r²','A = ('+F(v.t)+' / 360) × π × '+F(v.r)+'²','⟦A = '+F(A)+'⟧',u+'²'),extra:[['Arc length',F(v.t/360*2*Math.PI*v.r)+' '+u]]}}},
 annulus:{n:'Ring (annulus)',f:[['R','Outer radius (R)'],['r','Inner radius (r)']],run:(v,u)=>{if(v.r>=v.R)return 'The inner radius must be smaller than the outer radius.';const A=Math.PI*(v.R*v.R-v.r*v.r);return{A,steps:st3('A = π × (R² − r²)','A = π × ('+F(v.R)+'² − '+F(v.r)+'²)','⟦A = '+F(A)+'⟧',u+'²')}}},
 polygon:{n:'Regular polygon',f:[['n','Number of sides (n)'],['s','Side length (s)']],run:(v,u)=>{if(v.n<3||v.n!==Math.floor(v.n)||v.n>100)return 'The number of sides must be a whole number from 3 to 100.';const A=v.n*v.s*v.s/(4*Math.tan(Math.PI/v.n));return{A,steps:st3('A = (n × s²) / (4 tan(π / n))','A = ('+F(v.n)+' × '+F(v.s)+'²) / (4 tan(π / '+F(v.n)+'))','⟦A = '+F(A)+'⟧',u+'²'),extra:[['Perimeter',F(v.n*v.s)+' '+u]]}}}};
mkTool('area-calculator',{cols:2,heads:[{id:'shape',label:'Shape',opts:Object.entries(AREA).map(([k,v])=>[k,v.n])},{id:'unit',label:'Units',opts:uo}],fields:h=>AREA[h.shape].f,
 run:(h,f)=>{const s=AREA[h.shape],v={};s.f.forEach(x=>v[x[0]]=f.n(x[0]));if(Object.values(v).some(x=>!(x>0)))return 'Every measurement must be a positive number.';const r=s.run(v,h.unit);if(typeof r==='string')return r;
  const m2=r.A*UL[h.unit]**2,info=[...(r.extra||[]),['In square metres',F(m2,6)+' m²'],['In square feet',F(m2/0.09290304)+' ft²']];if(m2>=4046.8564224)info.push(['In acres',F(m2/4046.8564224)+' acres']);if(m2>=10000)info.push(['In hectares',F(m2/10000)+' ha']);
  return{text:F(r.A)+' '+h.unit+'²',steps:r.steps,info,infoTitle:'More about this shape'}}});
// ================= VOLUME =================
const VOL={
 cube:{n:'Cube',f:[['a','Side (a)']],run:(v,u)=>{const V=v.a**3;return{V,steps:st3('V = a³','V = '+F(v.a)+'³','⟦V = '+F(V)+'⟧',u+'³'),extra:[['Surface area',F(6*v.a*v.a)+' '+u+'²']]}}},
 cuboid:{n:'Cuboid (box)',f:[['l','Length (l)'],['w','Width (w)'],['h','Height (h)']],run:(v,u)=>{const V=v.l*v.w*v.h;return{V,steps:st3('V = l × w × h','V = '+F(v.l)+' × '+F(v.w)+' × '+F(v.h),'⟦V = '+F(V)+'⟧',u+'³'),extra:[['Surface area',F(2*(v.l*v.w+v.l*v.h+v.w*v.h))+' '+u+'²']]}}},
 cylinder:{n:'Cylinder',f:[['r','Radius (r)'],['h','Height (h)']],run:(v,u)=>{const V=Math.PI*v.r*v.r*v.h;return{V,steps:st3('V = π × r² × h','V = π × '+F(v.r)+'² × '+F(v.h),'⟦V = '+F(V)+'⟧',u+'³'),extra:[['Curved surface area',F(2*Math.PI*v.r*v.h)+' '+u+'²'],['Total surface area',F(2*Math.PI*v.r*(v.r+v.h))+' '+u+'²']]}}},
 cone:{n:'Cone',f:[['r','Radius (r)'],['h','Height (h)']],run:(v,u)=>{const V=Math.PI*v.r*v.r*v.h/3,l=Math.hypot(v.r,v.h);return{V,steps:st3('V = 1/3 × π × r² × h','V = 1/3 × π × '+F(v.r)+'² × '+F(v.h),'⟦V = '+F(V)+'⟧',u+'³'),extra:[['Slant height',F(l)+' '+u],['Total surface area',F(Math.PI*v.r*(v.r+l))+' '+u+'²']]}}},
 sphere:{n:'Sphere',f:[['r','Radius (r)']],run:(v,u)=>{const V=4/3*Math.PI*v.r**3;return{V,steps:st3('V = 4/3 × π × r³','V = 4/3 × π × '+F(v.r)+'³','⟦V = '+F(V)+'⟧',u+'³'),extra:[['Surface area',F(4*Math.PI*v.r*v.r)+' '+u+'²']]}}},
 hemisphere:{n:'Hemisphere',f:[['r','Radius (r)']],run:(v,u)=>{const V=2/3*Math.PI*v.r**3;return{V,steps:st3('V = 2/3 × π × r³','V = 2/3 × π × '+F(v.r)+'³','⟦V = '+F(V)+'⟧',u+'³'),extra:[['Total surface area',F(3*Math.PI*v.r*v.r)+' '+u+'²']]}}},
 pyramid:{n:'Pyramid (rectangular base)',f:[['l','Base length (l)'],['w','Base width (w)'],['h','Height (h)']],run:(v,u)=>{const V=v.l*v.w*v.h/3;return{V,steps:st3('V = 1/3 × l × w × h','V = 1/3 × '+F(v.l)+' × '+F(v.w)+' × '+F(v.h),'⟦V = '+F(V)+'⟧',u+'³')}}},
 prism:{n:'Triangular prism',f:[['b','Triangle base (b)'],['t','Triangle height (h)'],['L','Prism length (L)']],run:(v,u)=>{const V=v.b*v.t/2*v.L;return{V,steps:st3('V = 1/2 × b × h × L','V = 1/2 × '+F(v.b)+' × '+F(v.t)+' × '+F(v.L),'⟦V = '+F(V)+'⟧',u+'³')}}}};
mkTool('volume-calculator',{cols:2,heads:[{id:'shape',label:'Shape',opts:Object.entries(VOL).map(([k,v])=>[k,v.n])},{id:'unit',label:'Units',opts:uo}],fields:h=>VOL[h.shape].f,
 run:(h,f)=>{const s=VOL[h.shape],v={};s.f.forEach(x=>v[x[0]]=f.n(x[0]));if(Object.values(v).some(x=>!(x>0)))return 'Every measurement must be a positive number.';const r=s.run(v,h.unit),m3=r.V*UL[h.unit]**3;
  return{text:F(r.V)+' '+h.unit+'³',steps:r.steps,infoTitle:'More about this shape',info:[...(r.extra||[]),['In cubic metres',F(m3,6)+' m³'],['In litres',F(m3*1000)+' L'],['In cubic feet',F(m3/0.028316846592)+' ft³']]}}});
// ================= SLOPE =================
mkTool('slope-calculator',{cols:2,fields:()=>[['x1','x₁','e.g. 2'],['y1','y₁','e.g. 1'],['x2','x₂','e.g. 6'],['y2','y₂','e.g. 4']],hint:'Type whole numbers, decimals or fractions like 1/2 for the two points.',
 run:(h,f)=>{const[x1,y1,x2,y2]=['x1','y1','x2','y2'].map(f.q),dx=x2.sub(x1),dy=y2.sub(y1);if(dx.z()&&dy.z())return 'The two points are the same, so there is no line. Enter two different points.';
  const d2=dx.mul(dx).add(dy.mul(dy)),dist=Math.sqrt(d2.val()),mid='('+dq(x1.add(x2).div(new Q(2)))+', '+dq(y1.add(y2).div(new Q(2)))+')';
  let ds=M.rnd(dist);if(d2.isInt()){const[s,r]=M.sqrtSimp(d2.n);ds=(r===1n?String(s):(s===1n?'':s)+'√'+r)+(r===1n?'':'  ≈ '+M.rnd(dist))}
  const info=[['Distance between the points',ds,'m'],['Midpoint',mid,'m']];
  const pts=[{x:x1.val(),y:y1.val(),t:'('+M.rnd(x1.val(),2)+', '+M.rnd(y1.val(),2)+')'},{x:x2.val(),y:y2.val(),t:'('+M.rnd(x2.val(),2)+', '+M.rnd(y2.val(),2)+')'}];
  const steps=['Slope formula: ⟦m = (y₂ − y₁) / (x₂ − x₁)⟧','Substitute the points: ⟦m = ('+w(y2)+' − '+w(y1)+') / ('+w(x2)+' − '+w(x1)+')⟧'];
  if(dx.z()){steps.push('The bottom is 0 (x₂ = x₁), so the slope is undefined: this is a vertical line.');info.unshift(['Equation of the line','x = '+dq(x1),'m'],['Angle with the x-axis','90°']);
   return{text:'Slope is undefined (vertical line)',steps,info,infoTitle:'More about this line',plot:cv=>plot(cv,[{vx:x1.val()}],pts,domain([x1.val(),0,x1.val()+2]))}}
  const m=dy.div(dx),c=y1.sub(m.mul(x1)),T=M.parseR('(('+m.n+')*('+c.d+')*x+('+c.n+')*('+m.d+'))/(('+m.d+')*('+c.d+'))');
  steps.push('Subtract: ⟦m = '+dq(dy)+' / '+dq(dx)+'⟧','Simplify: ⟦m = '+dq(m)+'⟧'+(m.isInt()?'':' ≈ '+M.rnd(m.val())),'Now find the y-intercept using ⟦y = mx + c⟧ with the point '+'('+dq(x1)+', '+dq(y1)+'): ⟦c = y − mx = '+w(y1)+' − '+w(m)+'×'+w(x1)+' = '+dq(c)+'⟧');
  let A=dy,B=dx.neg(),C=dy.mul(x1).sub(dx.mul(y1));const L=M.lcmB(M.lcmB(A.d,B.d),C.d);[A,B,C]=[A,B,C].map(q=>q.mul(new Q(L)));const g=M.gcdB(M.gcdB(A.n,B.n),C.n)||1n;[A,B,C]=[A,B,C].map(q=>q.div(new Q(g)));
  if(A.n<0n||(A.z()&&B.n<0n))[A,B,C]=[A,B,C].map(q=>q.neg());
  info.unshift(['Equation of the line','y = '+M.rStr(T),'m'],['Standard form',M.rStr(M.parseR('('+A+')*x+('+B+')*y'))+' = '+dq(C),'m'],['Rise over run',dq(dy)+' / '+dq(dx),'m'],['Angle with the x-axis',F(Math.atan(m.val())*180/Math.PI)+'°'],['Gradient as a percentage',F(Math.abs(m.val())*100)+'%'],['y-intercept','(0, '+dq(c)+')','m'],['x-intercept',m.z()?'none (horizontal line)':'('+dq(x1.sub(y1.div(m)))+', 0)',m.z()?'t':'m']);
  return{main:'m = '+dq(m),approx:m.isInt()?'':'m ≈ '+M.rnd(m.val()),steps,info,infoTitle:'More about this line',plot:cv=>plot(cv,[{f:x=>m.val()*x+c.val()}],pts,domain([x1.val(),x2.val(),0]))}}});
// ================= CALORIES =================
mkTool('calorie-calculator',{heads:[{id:'sex',label:'Sex (used in the formula)',opts:[['m','Male'],['f','Female']]},{id:'un',label:'Units',opts:[['m','Metric (kg, cm)'],['us','US (lb, ft, in)']]},{id:'act',label:'Activity level',opts:[['1.2','Sedentary: little or no exercise'],['1.375','Light: exercise 1–3 days a week'],['1.55','Moderate: exercise 3–5 days a week'],['1.725','Very active: exercise 6–7 days a week'],['1.9','Extra active: hard training or a physical job']]}],
 fields:h=>h.un==='us'?[['age','Age (years)'],['wt','Weight (lb)'],['ft','Height (ft)'],['inn','Height (in)','0']]:[['age','Age (years)'],['wt','Weight (kg)'],['ht','Height (cm)']],hint:'This estimates calories using the Mifflin–St Jeor formula. It is a guide, not medical advice.',
 need:null,run:(h,f)=>{const age=f.n('age'),us=h.un==='us';let kg=f.n('wt'),cm;if(us){kg*=0.45359237;cm=((f.n('ft')||0)*12+(f.n('inn')||0))*2.54}else cm=f.n('ht');
  if(!(age>=15&&age<=100))return 'The formula is meant for ages 15 to 100. Please enter your age in years.';if(!(kg>20&&kg<400&&cm>100&&cm<260))return 'Please check your weight and height. They look outside the normal range.';
  const male=h.sex==='m',bmr=10*kg+6.25*cm-5*age+(male?5:-161),a=+h.act,tdee=bmr*a,r10=x=>Math.round(x/10)*10,floor=male?1500:1200;
  const goal=(l,d)=>{const t=tdee+d;return[l,t<floor?F(r10(floor))+' calories/day (minimum safe level; '+F(r10(t))+' would be too low)':F(r10(t))+' calories/day']};
  const mac=tdee;return{text:F(r10(tdee),0)+' calories per day to maintain your weight',note:'Your resting metabolism (BMR) is about '+F(r10(bmr),0)+' calories a day.',
   steps:['Convert to metric: weight '+F(kg,1)+' kg, height '+F(cm,1)+' cm','BMR (resting calories) = 10 × weight + 6.25 × height − 5 × age '+(male?'+ 5':'− 161'),'BMR = 10 × '+F(kg,1)+' + 6.25 × '+F(cm,1)+' − 5 × '+F(age,0)+(male?' + 5':' − 161')+' = '+F(bmr,0)+' calories','Daily calories = BMR × activity factor = '+F(bmr,0)+' × '+a+' = '+F(tdee,0)+' calories','1 kg of body weight is about 7,700 calories, so each 0.5 kg per week needs about 550 calories a day more or less.'],
   infoTitle:'Calories for your goal',info:[goal('Lose 0.25 kg (0.5 lb) a week',-275),goal('Lose 0.5 kg (1 lb) a week',-550),['Maintain your weight',F(r10(tdee))+' calories/day'],goal('Gain 0.25 kg a week',275),goal('Gain 0.5 kg a week',550),['Balanced split at maintenance','Protein '+F(mac*.25/4,0)+' g · Carbs '+F(mac*.5/4,0)+' g · Fat '+F(mac*.25/9,0)+' g']]}}});
// ================= STATISTICS =================
mkTool('statistics-calculator',{fields:()=>[['d','Your numbers','e.g. 4, 8, 15, 16, 23, 42','area']],hint:'Separate the numbers with commas, spaces or new lines. You can paste a whole column.',
 run:(h,f)=>{const xs=f.raw('d').split(/[\s,;]+/).filter(Boolean).map(M.qIn);if(!xs.length||xs.some(x=>!x))return 'Use numbers only, separated by commas, spaces or new lines.';if(xs.length>500)return 'Please use up to 500 numbers.';
  const n=xs.length,sum=xs.reduce((a,b)=>a.add(b),Q0),mean=sum.div(new Q(n)),s=[...xs].sort((a,b)=>a.cmp(b)),med=a=>{const k=a.length;return k%2?a[(k-1)/2]:a[k/2-1].add(a[k/2]).div(new Q(2))};
  const md=med(s),lo=s.slice(0,Math.floor(n/2)),hi=s.slice(Math.ceil(n/2)),q1=lo.length?med(lo):s[0],q3=hi.length?med(hi):s[n-1],cnt=new Map();xs.forEach(x=>cnt.set(dq(x),(cnt.get(dq(x))||0)+1));
  const mx=Math.max(...cnt.values()),modes=mx===1?[]:[...cnt].filter(e=>e[1]===mx).map(e=>e[0]),ss=xs.reduce((a,x)=>a.add(x.sub(mean).mul(x.sub(mean))),Q0),pv=ss.div(new Q(n)),sv=n>1?ss.div(new Q(n-1)):null;
  const qa=q=>dq(q)+(q.isInt()?'':'  ≈ '+M.rnd(q.val())),sd=q=>M.rnd(Math.sqrt(q.val()),4);
  const dev=xs.slice(0,8).map(x=>'('+dq(x)+' − '+dq(mean)+')²').join(' + ')+(n>8?' + …':'');
  return{text:'Mean = '+M.rnd(mean.val(),4)+'   Median = '+M.rnd(md.val(),4)+'   '+(modes.length?'Mode = '+modes.join(', '):'No mode'),
   steps:['Sort the data: '+s.slice(0,40).map(dq).join(', ')+(n>40?', …':''),'Mean = sum ÷ count: ⟦mean = '+dq(sum)+' ÷ '+n+' = '+dq(mean)+'⟧'+(mean.isInt()?'':' ≈ '+M.rnd(mean.val())),'Median = the middle value of the sorted list'+(n%2?' (position '+((n+1)/2)+')':' (the average of positions '+n/2+' and '+(n/2+1)+')')+': '+qa(md),'Mode = the value that appears most often: '+(modes.length?modes.join(', ')+' (appears '+mx+' times)':'none, every value appears once'),'Deviations from the mean, squared: ⟦'+dev+'⟧','Sum of squared deviations = '+qa(ss),'Population variance = sum ÷ n = '+qa(pv)+', so standard deviation = √variance = '+sd(pv),sv?'Sample variance = sum ÷ (n − 1) = '+qa(sv)+', so standard deviation = '+sd(sv):'Sample standard deviation needs at least 2 numbers.'],
   infoTitle:'All the statistics',info:[['Count (n)',String(n)],['Sum',dq(sum),'m'],['Mean',qa(mean),'m'],['Median',qa(md),'m'],['Mode',modes.length?modes.join(', '):'none'],['Smallest',dq(s[0]),'m'],['Largest',dq(s[n-1]),'m'],['Range',dq(s[n-1].sub(s[0])),'m'],['Lower quartile (Q1)',qa(q1),'m'],['Upper quartile (Q3)',qa(q3),'m'],['Interquartile range',qa(q3.sub(q1)),'m'],['Variance (population)',qa(pv),'m'],['Standard deviation (population)',sd(pv)],['Variance (sample)',sv?qa(sv):'needs 2+ numbers','m'],['Standard deviation (sample)',sv?sd(sv):'needs 2+ numbers']]}}});
// ================= PERMUTATIONS & COMBINATIONS =================
const fact=n=>{let r=1n;for(let i=2n;i<=n;i++)r*=i;return r};
mkTool('permutation-combination-calculator',{cols:2,fields:()=>[['n','Total items (n)','e.g. 10'],['r','Items chosen (r)','e.g. 3']],hint:'Whole numbers only. n can be up to 1000.',
 run:(h,f)=>{const nq=f.q('n'),rq=f.q('r');if(!nq.isInt()||!rq.isInt())return 'n and r must be whole numbers.';const n=nq.n,r=rq.n;if(n<0n||r<0n)return 'n and r cannot be negative.';if(n>1000n)return 'Please use n up to 1000.';if(r>n)return 'r cannot be bigger than n (you cannot choose more items than you have).';
  const nPr=fact(n)/fact(n-r),nCr=nPr/fact(r),prod=r<=8n?Array.from({length:Number(r)},(_,i)=>String(n-BI(i))).join(' × ')||'1':String(n)+' × '+String(n-1n)+' × … × '+String(n-r+1n);
  return{text:'Combinations C('+n+', '+r+') = '+sci(nCr)+'     Permutations P('+n+', '+r+') = '+sci(nPr),
   steps:['Permutations (order matters): ⟦P(n, r) = n! / (n − r)!⟧','⟦P('+n+', '+r+') = '+prod+'⟧ = '+sci(nPr),'Combinations (order does not matter): ⟦C(n, r) = P(n, r) ÷ r!⟧','⟦C('+n+', '+r+') = '+sci(nPr)+' ÷ '+sci(fact(r))+'⟧ = '+sci(nCr)],
   infoTitle:'Related counts',info:[['n factorial (n!)',sci(fact(n))],['r factorial (r!)',sci(fact(r))],['Arrangements with repetition (nʳ)',sci(n**r)],['Combinations with repetition',sci(fact(n+r-1n)/(fact(r)*fact(n-1n)))]]}}});
// ================= SEQUENCES =================
mkTool('sequence-calculator',{cols:2,heads:[{id:'ty',label:'Type of sequence',opts:[['a','Arithmetic (add the same amount each time)'],['g','Geometric (multiply by the same amount each time)']]}],
 fields:h=>[['a','First term (a)','e.g. 3'],[h.ty==='a'?'d':'r',h.ty==='a'?'Common difference (d)':'Common ratio (r)',h.ty==='a'?'e.g. 4':'e.g. 2'],['n','Position (n)','e.g. 10']],
 run:(h,f)=>{const a=f.q('a'),c=f.q(h.ty==='a'?'d':'r'),nq=f.q('n');if(!nq.isInt()||nq.n<1n||nq.n>200n)return 'n must be a whole number from 1 to 200.';const n=Number(nq.n),N=new Q(n);let tn,sn,sym,steps,terms=[];
  const arith=h.ty==='a';if(arith){tn=a.add(N.sub(Q1).mul(c));sn=N.div(new Q(2)).mul(new Q(2).mul(a).add(N.sub(Q1).mul(c)));for(let i=0;i<8&&i<n+2;i++)terms.push(a.add(new Q(i).mul(c)));
   steps=['nth term: ⟦aₙ = a + (n − 1)d⟧','Substitute: ⟦a'+n+' = '+w(a)+' + ('+n+' − 1) × '+w(c)+'⟧','Calculate: ⟦a'+n+' = '+dq(tn)+'⟧','Sum of the first n terms: ⟦Sₙ = n/2 × (2a + (n − 1)d)⟧','Substitute: ⟦S'+n+' = '+n+'/2 × (2×'+w(a)+' + ('+n+' − 1)×'+w(c)+')⟧','Calculate: ⟦S'+n+' = '+dq(sn)+'⟧']}
  else{let pw=Q1;for(let i=0;i<n-1;i++)pw=pw.mul(c);tn=a.mul(pw);if(c.isOne())sn=a.mul(N);else sn=a.mul(Q1.sub(pw.mul(c))).div(Q1.sub(c));let t=a;for(let i=0;i<8&&i<n+2;i++){terms.push(t);t=t.mul(c)}
   steps=['nth term: ⟦aₙ = a × rⁿ⁻¹⟧','Substitute: ⟦a'+n+' = '+w(a)+' × '+w(c)+'^'+(n-1)+'⟧','Calculate: ⟦a'+n+' = '+dq(tn)+'⟧','Sum of the first n terms: ⟦Sₙ = a(1 − rⁿ) / (1 − r)⟧ (if r = 1 then Sₙ = n × a)','Calculate: ⟦S'+n+' = '+dq(sn)+'⟧']}
  const qt=q=>q.isInt()?(q.n>10n**30n||q.n<-(10n**30n)?sci(q.n):dq(q)):dq(q)+'  ≈ '+M.rnd(q.val());const info=[['First terms',terms.map(dq).join(', ')+', …'],['Sum of the first '+n+' terms',qt(sn),'t']];
  if(!arith&&c.abs().cmp(Q1)<0&&!c.z())info.push(['Sum to infinity (since |r| < 1)',dq(a.div(Q1.sub(c))),'m']);
  return{text:'Term '+n+' (aₙ) = '+qt(tn)+'     Sum of first '+n+' terms = '+qt(sn),steps,info,infoTitle:'More about this sequence'}}});
// ================= LOGARITHM & EXPONENT =================
mkTool('logarithm-calculator',{cols:2,fields:()=>[['b','Base (b)','e.g. 2'],['x','Number (x)','e.g. 8']],hint:'The base must be positive and not 1. The number must be positive.',
 run:(h,f)=>{const b=f.q('b'),x=f.q('x');if(b.n<=0n||b.isOne())return 'The base must be positive and not equal to 1.';if(x.n<=0n)return 'You can only take the logarithm of a positive number.';
  const y=Math.log(x.val())/Math.log(b.val());let ex=null;for(let k=-60;k<=60;k++){let p=Q1;try{for(let i=0;i<Math.abs(k);i++)p=p.mul(b);if(k<0)p=Q1.div(p);if(p.cmp(x)===0){ex=k;break}}catch(e){}}
  const bs=dq(b),xs=dq(x);return{text:'log base '+bs+' of '+xs+' = '+(ex!==null?ex:M.rnd(y,6)),note:ex!==null?'This is exact: '+bs+' to the power '+ex+' = '+xs:'',
   steps:['The meaning of a logarithm: if ⟦b^y = x⟧ then ⟦y = log_b(x)⟧','Change of base: ⟦log_b(x) = ln(x) / ln(b)⟧','Substitute: ⟦y = ln('+xs+') / ln('+bs+') = '+F(Math.log(x.val()),6)+' / '+F(Math.log(b.val()),6)+'⟧','y = '+M.rnd(y,6),'Check: '+bs+' to the power '+M.rnd(y,6)+' = '+F(Math.pow(b.val(),y),6)],
   infoTitle:'Other logarithms of '+xs,info:[['Common log (base 10)',F(Math.log10(x.val()),6)],['Natural log (base e)',F(Math.log(x.val()),6)],['Binary log (base 2)',F(Math.log2(x.val()),6)]]}}});
mkTool('exponent-calculator',{cols:2,fields:()=>[['a','Base (a)','e.g. 2'],['e','Exponent (n)','e.g. 10 or −2 or 1/2']],hint:'Exponents can be negative, decimals or fractions.',
 run:(h,f)=>{const a=f.q('a'),e=f.q('e');if(e.isInt()){if(a.z()&&e.n<=0n)return 'Zero cannot be raised to zero or a negative power.';const k=Number(e.n<0n?-e.n:e.n);if(k>400)return 'Please use an exponent between −400 and 400.';let p=Q1;for(let i=0;i<k;i++)p=p.mul(a);const V=e.n<0n?Q1.div(p):p;
   const s=V.isInt()?sci(V.n):dq(V)+'  ≈ '+(Math.abs(V.val())<1e-6||Math.abs(V.val())>1e12?V.val().toExponential(6).replace('-','−'):M.rnd(V.val(),8));
   return{text:dq(a)+' to the power '+dq(e)+' = '+s,steps:e.n<0n?['A negative exponent means reciprocal: ⟦a^(−n) = 1 / aⁿ⟧','⟦'+w(a)+'^('+dq(e)+') = 1 / '+w(a)+'^'+k+'⟧','Calculate: '+dq(V)]:['Multiply the base by itself '+k+' times: ⟦'+w(a)+'^'+k+'⟧','Result: '+s]}}
  if(a.n<=0n)return 'For fraction or decimal exponents, the base must be positive.';const V=Math.pow(a.val(),e.val());return{text:dq(a)+' to the power '+dq(e)+' ≈ '+(Math.abs(V)<1e-6||Math.abs(V)>1e12?V.toExponential(6):M.rnd(V,8)),steps:['A fractional exponent is a root: ⟦a^(p/q) = q-th root of (aᵖ)⟧','For example, the power 1/2 means the square root.','Result ≈ '+M.rnd(V,8)]}}});
// ================= SURDS =================
const sqS=n=>M.sqrtSimp(BI(n)),rad=(s,r)=>r===1n?String(s):(s===1n?'':String(s))+'√'+r,cf=x=>x===1n?'':String(x);
mkTool('surd-calculator',{cols:2,heads:[{id:'md',label:'What do you want to do?',opts:[['s','Simplify a square root'],['r','Rationalise a denominator: a / (b + c√d)'],['a','Add or subtract: a√b ± c√d']]}],
 fields:h=>h.md==='s'?[['n','Number under the root','e.g. 72']]:h.md==='r'?[['a','a (top)','e.g. 6'],['b','b','e.g. 2'],['c','c (can be negative)','e.g. 1'],['d','d (under the root)','e.g. 3']]:[['a','a','e.g. 3'],['b','b (under the root)','e.g. 8'],['c','c (use a negative for subtracting)','e.g. 2'],['d','d (under the root)','e.g. 18']],hint:'Whole numbers only.',
 run:(h,f)=>{const I=id=>{const q=f.q(id);return q&&q.isInt()?q.n:null},v={};for(const id of['n','a','b','c','d'])if(f.has(id)){v[id]=I(id);if(v[id]===null)return 'Please use whole numbers.'}
  if(h.md==='s'){const n=v.n;if(n<0n)return 'The number under the root cannot be negative.';const[s,r]=sqS(n);return{main:'√'+n+' = '+rad(s,r),approx:r===1n?'':'≈ '+M.rnd(Math.sqrt(Number(n)),6),steps:r===1n?['⟦√'+n+'⟧ is a perfect square: ⟦'+s+'² = '+n+'⟧','So ⟦√'+n+' = '+s+'⟧']:['Find the biggest perfect square that divides '+n+': ⟦'+s+'² = '+s*s+'⟧, and ⟦'+n+' = '+s*s+' × '+r+'⟧','⟦√'+n+' = √('+s*s+' × '+r+') = √'+s*s+' × √'+r+'⟧','⟦√'+n+' = '+rad(s,r)+'⟧']}}
  if(h.md==='a'){const[s1,r1]=sqS(v.b<0n?-v.b:v.b),[s2,r2]=sqS(v.d<0n?-v.d:v.d),A=v.a*s1,C=v.c*s2;if(v.b<0n||v.d<0n)return 'Numbers under roots must be positive.';
   const steps=['Simplify each root: ⟦√'+v.b+' = '+rad(s1,r1)+'⟧ and ⟦√'+v.d+' = '+rad(s2,r2)+'⟧','So the expression is ⟦'+v.a+'×'+rad(s1,r1)+' + ('+v.c+')×'+rad(s2,r2)+'⟧ = ⟦'+rad(A,r1).replace(/^1(?=√)/,'')+(C<0n?' − ':' + ')+rad(C<0n?-C:C,r2)+'⟧'];
   if(r1===r2){const t=A+C;steps.push('The roots match (both √'+r1+'), so combine the numbers in front: ⟦('+A+' + '+C+')√'+r1+'⟧');return{main:t===0n?'0':rad(t,r1).replace(/^−?1(?=√)/,x=>x[0]==='−'?'−':''),approx:'≈ '+M.rnd(Number(t)*Math.sqrt(Number(r1)),6),steps}}
   steps.push('The roots are different, so the terms cannot be combined.');return{main:rad(A,r1)+(C<0n?' − ':' + ')+rad(C<0n?-C:C,r2),approx:'≈ '+M.rnd(Number(A)*Math.sqrt(Number(r1))+Number(C)*Math.sqrt(Number(r2)),6),steps}}
  let{a,b,c,d}=v;if(d<=0n)return 'd must be a positive whole number.';const steps=[];const[s,r]=sqS(d);if(s>1n){steps.push('Simplify the root first: ⟦√'+d+' = '+rad(s,r)+'⟧, so c becomes '+c*s+' and d becomes '+r);c*=s;d=r}
  if(d===1n)return 'The root is a whole number here, so no rationalising is needed: just work out the bottom as normal.';const den=b*b-c*c*d;if(den===0n)return 'This bottom equals zero, so the fraction is undefined.';
  const bot=(x,y)=>(x===0n?'':x+(y<0n?' − ':' + '))+(x===0n?(y<0n?'−':''):'')+cf(y<0n?-y:y)+'√'+d,conj=(x,y)=>bot(x,-y);
  steps.unshift('Original: ⟦'+a+' / ('+bot(b,c)+')⟧');steps.push('Multiply top and bottom by the conjugate (change the sign between the terms): ⟦'+conj(b,c)+'⟧','Bottom: ⟦('+bot(b,c)+')('+conj(b,c)+') = '+b+'² − '+c+'²×'+d+' = '+b*b+' − '+c*c*d+' = '+den+'⟧ (no root left)');
  let p=a*b,q=-a*c;steps.push('Top: ⟦'+a+'('+conj(b,c)+') = '+(p===0n?'':p)+(q<0n?' − ':(p===0n?'':' + '))+cf(q<0n?-q:q)+'√'+d+'⟧');
  let g=M.gcdB(M.gcdB(p,q),den);if(den<0n)g=-g;p/=g;q/=g;const dd=den/g,num=(p===0n?'':String(p))+(q<0n?(p===0n?'−':' − '):(p===0n?'':' + '))+cf(q<0n?-q:q)+'√'+d;
  return{main:dd===1n?num:(p!==0n&&q!==0n?'('+num+')':num)+' / '+dd,approx:'≈ '+M.rnd(Number(a)/(Number(b)+Number(c)*Math.sqrt(Number(d))),6),steps:[...steps,'Simplify: ⟦'+(dd===1n?num:'('+num+') / '+dd)+'⟧']}}});
// ================= MATRIX =================
const mat=(rows)=>'<span class="math" data-p="'+ea('['+rows.map(r=>r.join(' ')).join(' ; ')+']')+'"><span class="mat" style="grid-template-columns:repeat('+rows[0].length+',auto)">'+rows.map(r=>r.map(x=>'<span>'+mh(x)+'</span>').join('')).join('')+'</span></span>';
const det2=(a,b,c,d)=>a.mul(d).sub(b.mul(c)),minor=(m,i,j)=>m.filter((_,r)=>r!==i).map(r=>r.filter((_,c)=>c!==j));
const det=m=>m.length===1?m[0][0]:m.length===2?det2(m[0][0],m[0][1],m[1][0],m[1][1]):m[0].reduce((s,x,j)=>s.add((j%2?x.neg():x).mul(det(minor(m,0,j)))),Q0);
mkTool('matrix-calculator',{heads:[{id:'sz',label:'Matrix size',opts:[['2','2 × 2'],['3','3 × 3']]},{id:'op',label:'Operation',opts:[['det','Determinant'],['inv','Inverse'],['tr','Transpose'],['adj','Adjugate (adjoint)']]}],
 cols:h=>+h.sz===3?3:2,fields:h=>{const n=+h.sz,o=[];for(let i=0;i<n;i++)for(let j=0;j<n;j++)o.push(['m'+i+j,'Row '+(i+1)+' · Col '+(j+1),'0']);return o},hint:'Type whole numbers, decimals or fractions like 1/2.',
 run:(h,f)=>{const n=+h.sz,m=Array.from({length:n},(_,i)=>Array.from({length:n},(_,j)=>f.q('m'+i+j))),S=x=>dq(x),D=det(m),mr=r=>r.map(S);
  const detSteps=n===2?['For a 2 × 2 matrix: ⟦det = ad − bc⟧','⟦det = ('+w(m[0][0])+')('+w(m[1][1])+') − ('+w(m[0][1])+')('+w(m[1][0])+') = '+S(D)+'⟧']:['Expand along the first row: ⟦det = a(ei − fh) − b(di − fg) + c(dh − eg)⟧','⟦det = '+m[0].map((x,j)=>(j%2?'−':'+')+' '+w(x)+'×('+S(det(minor(m,0,j)))+')').join(' ').replace(/^\+ /,'')+'⟧','⟦det = '+S(D)+'⟧'];
  if(h.op==='det')return{text:'Determinant = '+S(D)+(D.isInt()?'':'  ≈ '+M.rnd(D.val())),steps:detSteps,note:D.z()?'The determinant is 0, so the matrix has no inverse (it is singular).':''};
  if(h.op==='tr'){const t=m[0].map((_,j)=>m.map(r=>r[j]));return{html:mat(t.map(mr)),steps:['Swap rows and columns: the entry in row i, column j moves to row j, column i.']}}
  const cof=m.map((r,i)=>r.map((_,j)=>{const mn=n===2?m[1-i][1-j]:det(minor(m,i,j));return((i+j)%2?mn.neg():mn)})),adj=cof[0].map((_,j)=>cof.map(r=>r[j]));
  const cs=['Cofactor matrix (each entry is a minor with a + or − sign): '+cof.map(r=>'['+mr(r).join('  ')+']').join('  ;  '),'Adjugate = the transpose of the cofactor matrix.'];
  if(h.op==='adj')return{html:mat(adj.map(mr)),steps:cs};
  if(D.z())return 'This matrix has no inverse because its determinant is 0.';
  return{html:mat(adj.map(r=>r.map(x=>S(x.div(D))))),note:'Inverse = (1 / det) × adjugate, with det = '+S(D),steps:[...detSteps,...cs,'Inverse = (1 / '+S(D)+') × adjugate: divide every entry of the adjugate by '+S(D)+'.'],check:['Check: A × A⁻¹ = the identity matrix ✓']}}});
// ================= INEQUALITIES =================
const kpx='<div class="kp" role="group" aria-label="Math keys">'+['x','y','^','(',')','+','−','×','÷','<','>','≤','≥','⌫'].map(k=>'<button type="button" data-k="'+k+'">'+k+'</button>').join('')+'</div>';
SOLVERS['inequality-calculator']={ui:'<div class="field"><label for="q">Type your inequality</label><input id="q" type="text" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="e.g. 2x + 3 ≤ 11">'+kpx+exs(['2x+3<=11','-3x>12','x^2-5x+6>0','(x-1)(x+2)<0'])+'<div class="hint">Use &lt; &gt; ≤ ≥ (or &lt;= and &gt;=). One letter only.</div></div>',init:textInit,
 run(){const q=$('#q').value.trim();if(!q)return clear();try{
  const s=q.replace(/≤/g,'<=').replace(/≥/g,'>=').replace(/=</g,'<=').replace(/=>/g,'>='),m=s.match(/(<=|>=|<|>)/g);if(!m||m.length!==1)throw new Error('Type exactly one inequality sign: <, >, ≤ or ≥.');
  const op=m[0],parts=s.split(op),l=M.parseR(parts[0]),r=M.parseR(parts[1]),vs=M.rVars(l,r);if(vs.length!==1)throw new Error('Use exactly one letter, for example x.');
  const v=vs[0],nl=M.rNorm(l),nr=M.rNorm(r);if(!M.pIsConst(nl.d)||!M.pIsConst(nr.d))throw new Error('A letter in the bottom of a fraction is not supported yet.');
  const P0=M.pAdd(M.pMul(nl.n,nr.d),M.pMul(nr.n,nl.d),-1),deg=M.pDeg(P0,v),cf=M.uniCoefs(P0,v).map(x=>x.val()),pv=x=>cf.reduceRight((a,b)=>a*x+b,0),strict=op==='<'||op==='>',less=op[0]==='<',sym=op.replace('<=','≤').replace('>=','≥'),steps=['Start with: ⟦'+M.rStr(nl)+' '+sym+' '+M.rStr(nr)+'⟧'];
  if(!P0.size||deg===0){const c=pv(0),ok=c===0?!strict:less?c<0:c>0;throw new Error(ok?'This is always true: every number works.':'This is never true: no number works.')}
  const S=M.solveFor(nl,nr,v),roots=S.sols.filter(x=>x.im===0).map(x=>({val:x.v!==undefined?x.v:x.re,t:x.rhs.replace('±','')})).sort((a,b)=>a.val-b.val);let main,iv;
  if(deg===1){const rt=roots[0],flip=cf[1]<0,lf=flip?!less:less;steps.push('Solve like an equation to find the critical value: ⟦'+v+' = '+rt.t+'⟧');if(flip)steps.push('The letter ended up with a negative number in front, so dividing flips the inequality sign.');
   const s2=lf?(strict?'<':'≤'):(strict?'>':'≥');main=v+' '+s2+' '+rt.t;iv=lf?'(−∞, '+rt.t+(strict?')':']'):(strict?'(':'[')+rt.t+', ∞)'}
  else{steps.push('Find where the expression equals 0 (the critical values): '+(roots.length?roots.map(x=>v+' = '+x.t).join(' and '):'it never equals 0'),'Test a number in each region to see where the inequality is true.');
   const incl=!strict,bd=[-Infinity,...roots.map(x=>x.val),Infinity],reg=[];
   for(let i=0;i<bd.length-1;i++){const a=bd[i],b=bd[i+1],mid=a===-Infinity?(isFinite(b)?b-1:0):b===Infinity?a+1:(a+b)/2,val=pv(mid);reg.push({a,b,ai:i?roots[i-1].t:null,bi:i<roots.length?roots[i].t:null,ok:less?val<0:val>0})}
   const out=[];reg.forEach(g=>{if(!g.ok)return;const p=out[out.length-1];if(p&&incl&&p.b===g.a){p.b=g.b;p.bi=g.bi}else out.push({...g})});
   if(incl)roots.forEach((x,i)=>{if(!reg[i].ok&&!reg[i+1].ok)out.push({a:x.val,b:x.val,ai:x.t,bi:x.t,pt:true})});out.sort((p,q)=>p.a-q.a);
   if(!out.length)throw new Error('This is never true: no number works.');if(out.length===1&&out[0].a===-Infinity&&out[0].b===Infinity)throw new Error('This is always true: every number works.');
   const wd=g=>g.pt?v+' = '+g.ai:(g.a===-Infinity?'':v+' '+(incl?'≥':'>')+' '+g.ai)+(g.a===-Infinity||g.b===Infinity?'':' and ')+(g.b===Infinity?'':v+' '+(incl?'≤':'<')+' '+g.bi),iw=g=>g.pt?'{'+g.ai+'}':(g.a===-Infinity?'(−∞':(incl?'[':'(')+g.ai)+', '+(g.b===Infinity?'∞)':g.bi+(incl?']':')'));
   main=out.map(wd).join('  or  ');iv=out.map(iw).join(' ∪ ');out.forEach(g=>steps.push('The region '+iw(g)+' makes it true.'))}
  steps.push('Solution: ⟦'+main+'⟧');setResult('<span class="ans">'+mb(main)+'</span>'+sub('Interval notation: '+iv));$('#work').innerHTML=stepsHTML(steps)+'<canvas id="plot" hidden></canvas>';
  if(deg<=6){const xs=roots.map(x=>x.val);plot($('#plot'),[{f:pv}],roots.map(x=>({x:x.val,y:0,below:true,t:'('+M.rnd(x.val,3)+', 0)'})),domain(xs.length?xs:[0]))}}catch(e){fail(friendly(e))}}};
// ================= WORD PROBLEMS =================
const nm=(id,d)=>{const e=$('#'+id),t=e&&e.value.trim();return t?t.slice(0,24):d};
const fq=q=>q.isInt()?F(Number(q.n),0):F(q.val(),2),eqS=(s,v)=>{const{l,r}=M.parseEq(s);return M.solveFor(l,r,v)},qv=S=>S.sols[0]&&S.sols[0].q,NONE='There is no sensible answer for these numbers. Check the values in your question.';
const WP={
 age:{n:'Ages: "a times as old", then some years later',f:h=>[['A','Older person (name)','Older person','topt'],['B','Younger person (name)','Younger person','topt'],['k','The older is … times the younger now','e.g. 4'],['m','After some years the older is … times the younger','e.g. 3'],['y','Number of years later','e.g. 5']],
  run:f=>{const k=f.q('k'),m=f.q('m'),y=f.q('y'),A=nm('A','Older'),B=nm('B','Younger');const S=eqS(`(${k})x+(${y})=(${m})(x+(${y}))`,'x'),x=qv(S);if(!x||x.n<=0n)return NONE;const o=x.mul(k);
   return{text:B+' is '+fq(x)+' years old now and '+A+' is '+fq(o),steps:[`Let the younger person's age now be ⟦x⟧. The older is ${dq(k)} times as old, so ⟦${dq(k)}x⟧.`,`After ${dq(y)} years: younger = ⟦x + ${dq(y)}⟧ and older = ⟦${dq(k)}x + ${dq(y)}⟧.`,`Then the older is ${dq(m)} times the younger: ⟦${dq(k)}x + ${dq(y)} = ${dq(m)}(x + ${dq(y)})⟧`,...S.steps.slice(1),`So ⟦x = ${dq(x)}⟧. ${B}: ${fq(x)} years. ${A}: ⟦${dq(k)} × ${dq(x)} = ${dq(o)}⟧ years.`],check:[`Check: after ${dq(y)} years they are ${fq(x.add(y))} and ${fq(o.add(y))}, and ${fq(o.add(y))} ÷ ${fq(x.add(y))} = ${dq(m)} ✓`]}}},
 cons:{n:'Consecutive numbers with a given sum',f:h=>[['t','Type of numbers','','sel',[['1','consecutive whole numbers'],['2','consecutive even numbers'],['3','consecutive odd numbers']]],['k','How many numbers','e.g. 3'],['S','Their sum','e.g. 48']],
  run:f=>{const k=f.q('k'),Sm=f.q('S'),t=f.raw('t');if(!k.isInt()||k.n<2n||k.n>20n)return 'The count must be a whole number from 2 to 20.';const kk=Number(k.n),d=t==='1'?1:2,add=d*kk*(kk-1)/2,S=eqS(`${kk}x+${add}=(${Sm})`,'x'),x=qv(S);
   if(!x||!x.isInt()||(t==='2'&&x.n%2n!==0n)||(t==='3'&&x.n%2n===0n))return 'No such numbers exist for these values (the first number would not be a suitable '+(t==='1'?'whole number':t==='2'?'even number':'odd number')+').';
   const nums=Array.from({length:kk},(_,i)=>x.n+BI(i*d)),lbl=['whole numbers','even numbers','odd numbers'][t-1],ex=kk<=5?Array.from({length:kk},(_,i)=>i===0?'x':'(x + '+i*d+')').join(' + '):'x + (x + '+d+') + (x + '+2*d+') + … + (x + '+(kk-1)*d+')';
   return{text:'The numbers are '+nums.join(', '),steps:[`Let the first number be ⟦x⟧. The next ones go up by ${d}.`,`Their sum: ⟦${ex} = ${dq(Sm)}⟧`,`Collect like terms: ⟦${kk}x + ${add} = ${dq(Sm)}⟧`,...S.steps.slice(1),`So the first number is ⟦x = ${dq(x)}⟧ and the ${kk} consecutive ${lbl} are ${nums.join(', ')}.`],check:[`Check: ${nums.join(' + ')} = ${nums.reduce((a,b)=>a+b,0n)} ✓`]}}},
 share:{n:'Sharing an amount in a ratio',f:h=>[['T','Amount to share','e.g. 90000'],['R','Ratio, like 2:3:5','2:3:5','text']],
  run:f=>{const T=f.q('T'),rs=f.raw('R').split(/[:\s,]+/).filter(Boolean).map(M.qIn);if(rs.length<2||rs.some(x=>!x||x.n<=0n))return 'Write the ratio with positive numbers, like 2:3:5.';const tot=rs.reduce((a,b)=>a.add(b),Q0),one=T.div(tot);
   return{text:'The shares are '+rs.map(x=>fq(one.mul(x))).join(', '),steps:['Add the ratio parts: ⟦'+rs.map(dq).join(' + ')+' = '+dq(tot)+'⟧ parts in total','Value of one part: ⟦'+dq(T)+' ÷ '+dq(tot)+' = '+dq(one)+'⟧',...rs.map((x,i)=>'Share '+(i+1)+': ⟦'+dq(x)+' × '+dq(one)+' = '+dq(one.mul(x))+'⟧')],check:['Check: '+rs.map(x=>fq(one.mul(x))).join(' + ')+' = '+fq(T)+' ✓']}}},
 meet:{n:'Distance, speed and time: two travellers',f:h=>[['dr','How are they moving?','','sel',[['t','towards each other'],['s','the same way (the faster one catches up)']]],['D','Distance between them (km)','e.g. 300'],['v1','Speed of the first (km/h)','e.g. 60'],['v2','Speed of the second (km/h)','e.g. 40']],
  run:f=>{const D=f.q('D'),v1=f.q('v1'),v2=f.q('v2'),tw=f.raw('dr')==='t';if(!tw&&v1.cmp(v2)<=0)return 'For the same direction, the first traveller must be faster than the second.';const S=eqS(tw?`${v1}t+${v2}t=${D}`:`${v1}t-${v2}t=${D}`,'t'),t=qv(S);if(!t||t.n<=0n)return NONE;const hr=Math.floor(t.val()),mi=Math.round((t.val()-hr)*60);
   return{text:'They meet after '+fq(t)+' hours'+(t.isInt()?'':' ('+hr+' h '+mi+' min)'),steps:['Let ⟦t⟧ be the time in hours until they meet. Distance = speed × time.',`In ⟦t⟧ hours the first travels ⟦${dq(v1)}t⟧ km and the second travels ⟦${dq(v2)}t⟧ km.`,tw?`They are moving towards each other, so together they cover the gap: ⟦${dq(v1)}t + ${dq(v2)}t = ${dq(D)}⟧`:`The faster one gains on the slower one, so the gap closes: ⟦${dq(v1)}t − ${dq(v2)}t = ${dq(D)}⟧`,...S.steps.slice(1),`They meet after ⟦t = ${dq(t)}⟧ hours.`],check:[`The first traveller covers ${fq(v1.mul(t))} km before they meet ✓`],infoTitle:'Where they meet',info:[['Distance travelled by the first',fq(v1.mul(t))+' km'],['Distance travelled by the second',fq(v2.mul(t))+' km']]}}},
 work:{n:'Work done together (pipes, workers)',f:h=>[['a','First finishes alone in (days)','e.g. 6'],['b','Second finishes alone in (days)','e.g. 12']],
  run:f=>{const a=f.q('a'),b=f.q('b');if(a.n<=0n||b.n<=0n)return 'The times must be positive numbers.';const S=eqS(`1/(${a})+1/(${b})=1/t`,'t'),t=qv(S);return{text:'Together they finish in '+fq(t)+' days',steps:['In one day the first does ⟦1/'+dq(a)+'⟧ of the job and the second does ⟦1/'+dq(b)+'⟧.','Let ⟦t⟧ be the days needed together. In one day they do ⟦1/t⟧ of the job:','⟦1/'+dq(a)+' + 1/'+dq(b)+' = 1/t⟧',...S.steps.slice(1),'Together they take ⟦t = '+dq(t)+'⟧ days.'],check:['In '+fq(t)+' days: '+fq(t.div(a))+' + '+fq(t.div(b))+' = '+fq(t.div(a).add(t.div(b)))+' of the job ✓']}}},
 rect:{n:'Rectangle with a given perimeter',f:h=>[['rl','How are the sides related?','','sel',[['d','the length is … more than the width'],['m','the length is … times the width']]],['P','Perimeter','e.g. 40'],['k','The "more than" amount or the multiple','e.g. 4']],
  run:f=>{const P=f.q('P'),k=f.q('k'),d=f.raw('rl')==='d',S=eqS(d?`2(x+(x+(${k})))=(${P})`:`2(x+(${k})x)=(${P})`,'x'),x=qv(S);if(!x||x.n<=0n)return NONE;const L=d?x.add(k):x.mul(k);if(L.n<=0n)return NONE;
   return{text:'Width = '+fq(x)+',  Length = '+fq(L)+',  Area = '+fq(x.mul(L)),steps:['Let the width be ⟦x⟧. The length is '+(d?'⟦x + '+dq(k)+'⟧':'⟦'+dq(k)+'x⟧')+'.','Perimeter = 2 × (width + length): ⟦2('+(d?'x + (x + '+dq(k)+')':'x + '+dq(k)+'x')+') = '+dq(P)+'⟧',...S.steps.slice(1),'Width ⟦x = '+dq(x)+'⟧, length = '+fq(L)+', area = width × length = '+fq(x.mul(L))],check:['Perimeter = 2 × ('+fq(x)+' + '+fq(L)+') = '+fq(x.add(L).mul(new Q(2)))+' ✓']}}},
 tix:{n:'Two items with a total number and total cost',f:h=>[['n1','First item (name)','Adult tickets','topt'],['n2','Second item (name)','Child tickets','topt'],['p1','Price of one first item','e.g. 500'],['p2','Price of one second item','e.g. 300'],['N','Total number of items','e.g. 20'],['M','Total money','e.g. 8000']],
  run:f=>{const p1=f.q('p1'),p2=f.q('p2'),N=f.q('N'),Mo=f.q('M'),n1=nm('n1','first item'),n2=nm('n2','second item'),S=M.solveSys(['x+y='+N,p1+'x+'+p2+'y='+Mo]);if(S.type!=='one')return 'These numbers do not give one clear answer. Check the prices and totals.';const x=S.sol.x,y=S.sol.y;
   if(!x.isInt()||!y.isInt()||x.n<0n||y.n<0n)return 'These numbers do not give whole, positive counts, so there is no sensible answer. Check the values.';
   return{text:dq(x)+' × '+n1+'  and  '+dq(y)+' × '+n2,steps:[`Let ⟦x⟧ be the number of ${n1} and ⟦y⟧ the number of ${n2}.`,`Total number: ⟦x + y = ${dq(N)}⟧.  Total money: ⟦${dq(p1)}x + ${dq(p2)}y = ${dq(Mo)}⟧.`,'Solve the two equations together:',...S.steps],check:[`Check: ${dq(x)} + ${dq(y)} = ${dq(N)} and ${dq(p1)}×${dq(x)} + ${dq(p2)}×${dq(y)} = ${dq(p1.mul(x).add(p2.mul(y)))} ✓`]}}}};
mkTool('word-problem-solver',{heads:[{id:'ty',label:'What kind of problem is it?',opts:Object.entries(WP).map(([k,v])=>[k,v.n])}],fields:h=>WP[h.ty].f(h),hint:'Fill in the numbers from your question. The solver sets up the equation and solves it step by step.',run:(h,f)=>WP[h.ty].run(f)});
TX.H.mkTool=mkTool;TX.H.render=render;TX.H.F=F;
})();

(()=>{
const{mkTool,F}=TX.H,{plot,domain}=TX.H;const dq=M.dq;
const SUPD='⁰¹²³⁴⁵⁶⁷⁸⁹',sup=s=>String(s).replace(/-/g,'⁻').replace(/\d/g,d=>SUPD[d]);
const dispRaw=raw=>{raw=String(raw).trim().replace(/-/g,'−');const m=raw.match(/^(−?[\d.]+)[eE]([−+]?\d+)$/);return m?m[1]+' × 10'+sup(m[2].replace('+','').replace('−','-')):raw};
const paren=s=>/^\d+(\.\d+)?$/.test(s)?s:'('+s+')';
const fmtV=x=>{if(!isFinite(x))return String(x);if(x===0)return '0';const a=Math.abs(x);if(a>=1e6||a<1e-3){const[m,e]=x.toExponential(4).split('e');return m.replace(/\.?0+$/,'').replace('-','−')+' × 10'+sup(String(+e))}return Number(x.toPrecision(6)).toLocaleString('en-US',{maximumFractionDigits:8}).replace('-','−')};
const G=[['9.8','9.8 m/s² (standard)'],['10','10 m/s² (often used in exams)'],['9.81','9.81 m/s²']];
// put x between factors that were written side by side, e.g. at² becomes 2 × 10²
function subst(t,vt){const T=t.match(/[A-Za-z]|\d+(?:\.\d+)?|[⁰¹²³⁴⁵⁶⁷⁸⁹]+|\s+|[^]/g)||[];let o='',prev=false;for(const k of T){const fac=/^[A-Za-z]$/.test(k)||/^\d/.test(k);if(fac){if(prev)o+=' × ';o+=/^[A-Za-z]$/.test(k)?vt(k):k;prev=true}else{o+=k;prev=/^[⁰¹²³⁴⁵⁶⁷⁸⁹]/.test(k)&&prev}}
 const mp=(s,i)=>{let d=0;for(let k=i;k<s.length;k++){if(s[k]==='(')d++;else if(s[k]===')'&&!--d)return k}return -1},wr=s=>/ /.test(s)&&!(s[0]==='('&&mp(s,0)===s.length-1)?'('+s+')':s;
 let d=0,at=-1;for(let k=0;k<o.length;k++){if(o[k]==='(')d++;else if(o[k]===')')d--;else if(d===0&&o.substr(k,3)===' / '){at=k;break}}
 return at<0?o:wr(o.slice(0,at))+' / '+wr(o.slice(at+3))}
// ---- core: rearrange symbolically, substitute numbers, solve exactly ----
function pcalc(eq,unk,known,meta,disp,o){o=o||{};const sym=c=>(meta[c]&&meta[c][2])||c,S=s=>s.replace(/[A-Za-z]/g,sym),u=o.unit?' '+o.unit:'';
 const{l,r}=M.parseEq(eq),sy=M.solveFor(l,r,unk),subs=eq.replace(/[A-Za-z]/g,ch=>known[ch]?'('+known[ch].q.toString()+')':ch),pe=M.parseEq(subs),sn=M.solveFor(pe.l,pe.r,unk);
 if(sn.kind==='all')return 'Every value would work with these numbers, so the unknown cannot be found.';if(sn.kind==='none'||!sn.sols.length)return 'These values do not fit this formula (for example a zero where it cannot be zero).';
 let vals=[...new Set(sn.sols.filter(x=>x.im===0).map(x=>+(x.v!==undefined?x.v:x.re).toPrecision(10)))];if(!vals.length)return 'There is no real answer for these values (the result would be a complex number).';
 let note='';if(o.pos){const p=vals.filter(x=>x>1e-12);if(!p.length)return 'There is no positive answer for these values.';if(p.length<vals.length)note='A negative '+meta[unk][0].toLowerCase()+' is not possible, so that answer is left out.';vals=p}
 vals.sort((a,b)=>a-b);const steps=['Formula: ⟦'+disp+'⟧'];
 if(sy.kind==='linear'&&sn.kind==='linear'){const vt=ch=>known[ch]?paren(dispRaw(known[ch].raw)):ch;steps.push('Make '+sym(unk)+' the subject: ⟦'+S(sy.main)+'⟧','Substitute the values: ⟦'+sym(unk)+' = '+subst(sy.sols[0].rhs,vt)+'⟧','Calculate: ⟦'+sym(unk)+' = '+fmtV(vals[0])+'⟧'+u)}
 else steps.push('Make '+sym(unk)+' the subject: ⟦'+S(sy.main)+'⟧','Substitute the values and solve:',...sn.steps,vals.length>1?'The answers are: '+vals.map(fmtV).join(' or ')+u:'Answer: '+fmtV(vals[0])+u);
 return{vals,steps,check:sn.check||[],note}}
// ---- generic formula tool: pick formula, pick the unknown, fill the rest ----
function physTool(slug,FL,opt){opt=opt||{};const heads=[];if(FL.length>1)heads.push({id:'fm',label:'Formula',opts:FL.map((f,i)=>[i,f.n+': '+f.disp])});if(opt.heads)heads.push(...opt.heads);
 mkTool(slug,{heads,hint:opt.hint||'Use the units shown. You can type decimals, fractions and numbers like 5.97e24.',
  fields:h=>{const f=FL[+h.fm||0],L=Object.keys(f.v),unk=L.includes(h.find)?h.find:L[0],ul=opt.ulab?opt.ulab(h):{};
   return[['find','What do you want to find?','','selh',L.map(l=>[l,f.v[l][0]+' ('+f.v[l][2]+')'])],...L.filter(l=>l!==unk).map(l=>{const m=f.v[l],un=ul[l]||m[1],lb=m[0]+(un?' ('+un+')':'');return m[3]?[l,lb,'','sel',m[3]]:[l,lb,'e.g. '+(m[4]||'10')]})]},
  run:(h,fx)=>{const f=FL[+h.fm||0],L=Object.keys(f.v),unk=L.includes(h.find)?h.find:L[0],ul=opt.ulab?opt.ulab(h):{},known={};
   for(const l of L)if(l!==unk)known[l]={q:fx.q(l),raw:fx.raw(l)};const un=ul[unk]||f.v[unk][1],r=pcalc(f.eq,unk,known,f.v,f.disp,{unit:un,pos:f.v[unk][5]});if(typeof r==='string')return r;
   const s=f.v[unk][2];return{text:s+' = '+r.vals.map(fmtV).join(' or ')+(un?' '+un:''),note:r.note,steps:r.steps,check:r.check}}})}
const V=(name,unit,sym,opts,ex,pos)=>[name,unit,sym,opts,ex,pos];
physTool('force-calculator',[
 {n:'Newton\'s second law',disp:'F = m × a',eq:'F=m*a',v:{F:V('Force','N','F'),m:V('Mass','kg','m',0,'5',1),a:V('Acceleration','m/s²','a')}},
 {n:'Weight',disp:'W = m × g',eq:'W=m*g',v:{W:V('Weight','N','W'),m:V('Mass','kg','m',0,'5',1),g:V('Gravity','m/s²','g',G)}},
 {n:'Friction',disp:'F = μ × R',eq:'F=u*R',v:{F:V('Friction force','N','F'),u:V('Coefficient of friction','','μ',0,'0.4',1),R:V('Normal reaction','N','R',0,'50',1)}},
 {n:'Hooke\'s law (springs)',disp:'F = k × e',eq:'F=k*e',v:{F:V('Force','N','F'),k:V('Spring constant','N/m','k',0,'200',1),e:V('Extension','m','e',0,'0.05')}}]);
physTool('speed-distance-time-calculator',[{n:'Speed',disp:'v = d / t',eq:'v=d/t',v:{v:V('Speed','','v'),d:V('Distance','','d'),t:V('Time','','t',0,'2',1)}}],
 {heads:[{id:'us',label:'Units',opts:[['kmh','km, hours, km/h'],['ms','metres, seconds, m/s'],['mph','miles, hours, mph']]}],hint:'Pick the units that match your question. The calculation works the same in any units, as long as you keep them consistent.',ulab:h=>({kmh:{v:'km/h',d:'km',t:'hours'},ms:{v:'m/s',d:'m',t:'s'},mph:{v:'mph',d:'miles',t:'hours'}}[h.us||'kmh'])});
physTool('momentum-calculator',[
 {n:'Momentum',disp:'p = m × v',eq:'p=m*v',v:{p:V('Momentum','kg m/s','p'),m:V('Mass','kg','m',0,'4',1),v:V('Velocity','m/s','v')}},
 {n:'Impulse',disp:'F × t = m × (v − u)',eq:'F*t=m*(v-u)',v:{F:V('Force','N','F'),t:V('Time','s','t',0,'0.5',1),m:V('Mass','kg','m',0,'2',1),v:V('Final velocity','m/s','v'),u:V('Initial velocity','m/s','u')}},
 {n:'Collision (momentum is conserved)',disp:'m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂',eq:'a*b+c*d=a*e+c*f',v:{e:V('Final velocity of object 1','m/s','v₁'),a:V('Mass of object 1','kg','m₁',0,'2',1),b:V('Initial velocity of object 1','m/s','u₁'),c:V('Mass of object 2','kg','m₂',0,'3',1),d:V('Initial velocity of object 2','m/s','u₂'),f:V('Final velocity of object 2','m/s','v₂')}}]);
physTool('work-energy-power-calculator',[
 {n:'Work done',disp:'W = F × d',eq:'W=F*d',v:{W:V('Work done','J','W'),F:V('Force','N','F'),d:V('Distance moved','m','d')}},
 {n:'Power (from work)',disp:'P = W / t',eq:'P=W/t',v:{P:V('Power','W','P'),W:V('Work done','J','W'),t:V('Time','s','t',0,'4',1)}},
 {n:'Power (from force and speed)',disp:'P = F × v',eq:'P=F*v',v:{P:V('Power','W','P'),F:V('Force','N','F'),v:V('Speed','m/s','v')}},
 {n:'Kinetic energy',disp:'E = 1/2 × m × v²',eq:'E=1/2*m*v^2',v:{E:V('Kinetic energy','J','E'),m:V('Mass','kg','m',0,'2',1),v:V('Speed','m/s','v')}},
 {n:'Potential energy',disp:'E = m × g × h',eq:'E=m*g*h',v:{E:V('Potential energy','J','E'),m:V('Mass','kg','m',0,'2',1),g:V('Gravity','m/s²','g',G),h:V('Height','m','h')}},
 {n:'Efficiency',disp:'η = (Eout / Ein) × 100',eq:'n=(o/i)*100',v:{n:V('Efficiency','%','η'),o:V('Useful energy output','J','Eout'),i:V('Total energy input','J','Ein',0,'100',1)}}]);
physTool('density-pressure-calculator',[
 {n:'Density',disp:'ρ = m / V',eq:'p=m/V',v:{p:V('Density','kg/m³','ρ'),m:V('Mass','kg','m'),V:V('Volume','m³','V',0,'0.5',1)}},
 {n:'Pressure',disp:'P = F / A',eq:'P=F/A',v:{P:V('Pressure','Pa','P'),F:V('Force','N','F'),A:V('Area','m²','A',0,'0.2',1)}},
 {n:'Pressure in a liquid',disp:'P = ρ × g × h',eq:'P=p*g*h',v:{P:V('Pressure','Pa','P'),p:V('Liquid density','kg/m³','ρ',0,'1000',1),g:V('Gravity','m/s²','g',G),h:V('Depth','m','h')}},
 {n:'Upthrust (Archimedes)',disp:'U = ρ × g × V',eq:'U=p*g*V',v:{U:V('Upthrust','N','U'),p:V('Fluid density','kg/m³','ρ',0,'1000',1),g:V('Gravity','m/s²','g',G),V:V('Volume submerged','m³','V')}}]);
physTool('ohms-law-calculator',[
 {n:'Ohm\'s law',disp:'V = I × R',eq:'V=I*R',v:{V:V('Voltage','V','V'),I:V('Current','A','I'),R:V('Resistance','Ω','R',0,'10',1)}},
 {n:'Electrical power',disp:'P = V × I',eq:'P=V*I',v:{P:V('Power','W','P'),V:V('Voltage','V','V'),I:V('Current','A','I')}},
 {n:'Power from current',disp:'P = I² × R',eq:'P=I^2*R',v:{P:V('Power','W','P'),I:V('Current','A','I'),R:V('Resistance','Ω','R')}},
 {n:'Power from voltage',disp:'P = V² / R',eq:'P=V^2/R',v:{P:V('Power','W','P'),V:V('Voltage','V','V'),R:V('Resistance','Ω','R',0,'10',1)}},
 {n:'Charge',disp:'Q = I × t',eq:'Q=I*t',v:{Q:V('Charge','C','Q'),I:V('Current','A','I'),t:V('Time','s','t')}},
 {n:'Electrical energy',disp:'E = V × I × t',eq:'E=V*I*t',v:{E:V('Energy','J','E'),V:V('Voltage','V','V'),I:V('Current','A','I'),t:V('Time','s','t')}},
 {n:'Resistors in series',disp:'R = R₁ + R₂',eq:'r=a+b',v:{r:V('Total resistance','Ω','R'),a:V('Resistor 1','Ω','R₁'),b:V('Resistor 2','Ω','R₂')}},
 {n:'Resistors in parallel',disp:'1 / R = 1 / R₁ + 1 / R₂',eq:'1/r=1/a+1/b',v:{r:V('Total resistance','Ω','R'),a:V('Resistor 1','Ω','R₁',0,'6',1),b:V('Resistor 2','Ω','R₂',0,'3',1)}}]);
physTool('wave-calculator',[
 {n:'Wave speed',disp:'v = f × λ',eq:'v=f*w',v:{v:V('Wave speed','m/s','v'),f:V('Frequency','Hz','f',0,'50',1),w:V('Wavelength','m','λ',0,'2',1)}},
 {n:'Frequency and period',disp:'f = 1 / T',eq:'f=1/T',v:{f:V('Frequency','Hz','f'),T:V('Period','s','T',0,'0.02',1)}}]);
physTool('heat-calculator',[
 {n:'Heat energy (temperature change)',disp:'Q = m × c × ΔT',eq:'Q=m*c*d',v:{Q:V('Heat energy','J','Q'),m:V('Mass','kg','m',0,'2',1),c:V('Specific heat capacity','J/(kg °C)','c',0,'4200',1),d:V('Temperature change','°C','ΔT')}},
 {n:'Heat energy (change of state)',disp:'Q = m × L',eq:'Q=m*l',v:{Q:V('Heat energy','J','Q'),m:V('Mass','kg','m',0,'0.5',1),l:V('Specific latent heat','J/kg','L',0,'334000',1)}}]);
physTool('gravitation-calculator',[
 {n:'Newton\'s law of gravitation',disp:'F = (G × m₁ × m₂) / r²',eq:'F=G*a*b/r^2',v:{F:V('Gravitational force','N','F'),G:V('Gravitational constant','N m²/kg²','G',[['6.674e-11','6.674 × 10⁻¹¹ (standard)']]),a:V('Mass 1','kg','m₁',0,'5.97e24',1),b:V('Mass 2','kg','m₂',0,'70',1),r:V('Distance between centres','m','r',0,'6.37e6',1)}},
 {n:'Gravitational field strength',disp:'g = (G × M) / r²',eq:'g=G*M/r^2',v:{g:V('Field strength','N/kg','g'),G:V('Gravitational constant','N m²/kg²','G',[['6.674e-11','6.674 × 10⁻¹¹ (standard)']]),M:V('Mass of the planet','kg','M',0,'5.97e24',1),r:V('Distance from the centre','m','r',0,'6.37e6',1)}}]);
physTool('lens-mirror-calculator',[
 {n:'Lens and mirror formula',disp:'1 / f = 1 / u + 1 / v',eq:'1/f=1/u+1/v',v:{f:V('Focal length','','f'),u:V('Object distance','','u',0,'30'),v:V('Image distance','','v',0,'60')}},
 {n:'Magnification',disp:'m = v / u',eq:'m=v/u',v:{m:V('Magnification','','m'),v:V('Image distance','','v',0,'60'),u:V('Object distance','','u',0,'30',1)}}],{hint:'Use the same unit (for example cm) for every distance. Real objects and real images count as positive distances.'});
physTool('simple-machines-calculator',[
 {n:'Mechanical advantage',disp:'MA = Load / Effort',eq:'a=l/e',v:{a:V('Mechanical advantage','','MA'),l:V('Load','N','Load',0,'400',1),e:V('Effort','N','Effort',0,'100',1)}},
 {n:'Velocity ratio',disp:'VR = (Effort distance) / (Load distance)',eq:'v=x/y',v:{v:V('Velocity ratio','','VR'),x:V('Distance moved by the effort','m','d(effort)',0,'4',1),y:V('Distance moved by the load','m','d(load)',0,'1',1)}},
 {n:'Efficiency',disp:'η = (MA / VR) × 100',eq:'n=(a/v)*100',v:{n:V('Efficiency','%','η'),a:V('Mechanical advantage','','MA'),v:V('Velocity ratio','','VR',0,'5',1)}}]);
// ================= SUVAT =================
const SVM={s:['Displacement','m','s'],u:['Initial velocity','m/s','u'],v:['Final velocity','m/s','v'],a:['Acceleration','m/s²','a'],t:['Time','s','t']};
const SV={s:{eq:'v=u+a*t',disp:'v = u + a × t'},v:{eq:'s=u*t+1/2*a*t^2',disp:'s = u × t + 1/2 × a × t²'},t:{eq:'v^2=u^2+2*a*s',disp:'v² = u² + 2 × a × s'},a:{eq:'s=(u+v)/2*t',disp:'s = (u + v) / 2 × t'},u:{eq:'s=v*t-1/2*a*t^2',disp:'s = v × t − 1/2 × a × t²'}};
mkTool('motion-calculator',{fields:()=>[['s','Displacement, s (m)','e.g. 100','opt'],['u','Initial velocity, u (m/s)','e.g. 0','opt'],['v','Final velocity, v (m/s)','e.g. 20','opt'],['a','Acceleration, a (m/s²)','e.g. 2','opt'],['t','Time, t (s)','e.g. 10','opt']],hint:'Fill in any THREE of the five boxes. Leave the other two empty: those are the ones that will be found. Use negative numbers for slowing down.',
 run:(h,fx)=>{const L=['s','u','v','a','t'],given=L.filter(l=>fx.has(l));if(!given.length)return null;for(const l of given)if(!fx.q(l))return 'Please enter numbers like 5, −2.5 or 1/2.';if(given.length<3)return null;
  if(given.length>3)return 'You filled in '+given.length+' boxes. Fill in exactly three and leave two empty: those are the ones to find.';
  const un=L.filter(l=>!given.includes(l)),known=Object.fromEntries(given.map(l=>[l,{q:fx.q(l),raw:fx.raw(l)}])),steps=[],res=[],check=[];let note='',two=0;
  for(const x of un){const y=un.find(z=>z!==x),r=pcalc(SV[y].eq,x,known,SVM,SV[y].disp,{unit:SVM[x][1],pos:x==='t'});if(typeof r==='string')return 'Could not find '+SVM[x][0].toLowerCase()+': '+r;
   steps.push('Finding '+SVM[x][0].toLowerCase()+' ('+x+'), using the equation that does not contain '+y+':',...r.steps);res.push(x+' = '+r.vals.map(fmtV).join(' or ')+' '+SVM[x][1]);check.push(...r.check);if(r.vals.length>1)two=1;if(r.note)note+=r.note+' '}
  if(two)note='Two answers are possible, for example when something passes the same point going up and then coming down. Use v = u + at to match each time with its velocity. '+note;return{text:res.join('     '),steps,check,note:note.trim()}}});
// ================= PROJECTILE =================
mkTool('projectile-motion-calculator',{cols:2,fields:()=>[['u','Launch speed (m/s)','e.g. 20'],['th','Launch angle (degrees)','e.g. 45'],['h0','Starting height (m, optional)','0','opt'],['g','Gravity','','sel',G]],
 run:(h,fx)=>{const u=fx.n('u'),th=fx.n('th'),g=fx.n('g'),h0=fx.has('h0')?fx.n('h0'):0;if(h0===null)return 'Please enter a number for the starting height, or leave it empty.';if(!(u>0))return 'The launch speed must be a positive number.';if(th<-90||th>90)return 'The angle must be between −90° and 90°.';if(h0<0)return 'The starting height cannot be negative.';
  const r=th*Math.PI/180,ux=u*Math.cos(r),uy=u*Math.sin(r),disc=uy*uy+2*g*h0,t=(uy+Math.sqrt(disc))/g,H=h0+(uy>0?uy*uy/(2*g):0),tH=Math.max(uy/g,0),R=ux*t,vy=uy-g*t,vf=Math.hypot(ux,vy),ang=Math.atan2(Math.abs(vy),ux)*180/Math.PI;
  const steps=['Split the launch speed into parts: ⟦uₓ = u cos θ = '+F(u)+' × cos '+F(th)+'° = '+F(ux)+'⟧ m/s and ⟦uᵧ = u sin θ = '+F(u)+' × sin '+F(th)+'° = '+F(uy)+'⟧ m/s','Time of flight (until it lands): ⟦t = (uᵧ + √(uᵧ² + 2gh₀)) / g⟧','Substitute: ⟦t = ('+F(uy)+' + √('+F(uy)+'² + 2 × '+g+' × '+F(h0)+')) / '+g+' = '+F(t)+'⟧ s','Range (horizontal distance): ⟦R = uₓ × t = '+F(ux)+' × '+F(t)+' = '+F(R)+'⟧ m',uy>0?'Maximum height: ⟦H = h₀ + uᵧ² / (2g) = '+F(H)+'⟧ m, reached after ⟦uᵧ / g = '+F(tH)+'⟧ s':'It is thrown level or downwards, so the highest point is the starting point.','Speed when it lands: ⟦√(uₓ² + (uᵧ − gt)²) = '+F(vf)+'⟧ m/s, at '+F(ang)+'° below the horizontal'];
  const f=x=>h0+x*Math.tan(r)-g*x*x/(2*ux*ux);return{text:'Range = '+F(R)+' m     Time of flight = '+F(t)+' s     Maximum height = '+F(H)+' m',steps,infoTitle:'All the results',info:[['Time of flight',F(t)+' s'],['Range',F(R)+' m'],['Maximum height',F(H)+' m'],['Time to reach maximum height',F(tH)+' s'],['Landing speed',F(vf)+' m/s'],['Landing angle',F(ang)+'° below horizontal']],note:'Air resistance is ignored.',
   plot:cv=>{const xs=ux>1e-9?Array.from({length:3},(_,i)=>R*i/2):[0,1];plot(cv,[{f}],[{x:0,y:h0,t:'start'},...(uy>0&&ux>1e-9?[{x:ux*tH,y:H,t:'highest ('+F(H,2)+' m)'}]:[]),{x:R,y:0,t:'lands ('+F(R,2)+' m)'}],{x0:-R*0.05,x1:R*1.05||1})}}}});
})();

const CE=(()=>{
const Q=M.Q,Q0=M.Q0,Q1=M.Q1,BI=BigInt;
const mk=q=>({q,f:q.val()}),mf=f=>({q:null,f});
const err=(m,inc)=>{const e=new Error(m);e.calc=1;if(inc)e.inc=1;return e};
const isZero=v=>v.q?v.q.z():v.f===0;
const add=(a,b,s)=>a.q&&b.q?mk(s<0?a.q.sub(b.q):a.q.add(b.q)):mf(s<0?a.f-b.f:a.f+b.f);
const mul=(a,b)=>a.q&&b.q?mk(a.q.mul(b.q)):mf(a.f*b.f);
const div=(a,b)=>{if(isZero(b))throw err('Cannot divide by zero');return a.q&&b.q?mk(a.q.div(b.q)):mf(a.f/b.f)};
const neg=a=>a.q?mk(a.q.neg()):mf(-a.f);
function isqrt(n){if(n<2n)return n;let x=BI(Math.floor(Math.sqrt(Number(n))));while(x*x>n)x--;while((x+1n)*(x+1n)<=n)x++;return x}
function pow(a,b){
 if(a.q&&b.q&&b.q.isInt()){const n=b.q.n<0n?-b.q.n:b.q.n;if(a.q.z()&&b.q.n<=0n){if(b.q.n===0n)return mk(Q1);throw err('Cannot divide by zero')}
  if(n<=3000n&&(String(a.q.n).length+String(a.q.d).length)*Number(n)<6000){let r=Q1;const base=a.q;for(let i=0n;i<n;i++)r=r.mul(base);return mk(b.q.n<0n?Q1.div(r):r)}}
 const r=Math.pow(a.f,b.f);if(Number.isNaN(r))throw err('The result is not a real number');if(!Number.isFinite(r))throw err('The number is too large');return mf(r)}
function sqrt(a){if(a.f<0||(a.q&&a.q.n<0n))throw err('Cannot take the square root of a negative number');
 if(a.q){const n=isqrt(a.q.n),d=isqrt(a.q.d);if(n*n===a.q.n&&d*d===a.q.d)return mk(new Q(n,d))}return mf(Math.sqrt(a.f))}
function fact(a){if(!a.q||!a.q.isInt()||a.q.n<0n)throw err('Factorial needs a whole number, 0 or more');if(a.q.n>400n)throw err('The number is too large');let r=1n;for(let i=2n;i<=a.q.n;i++)r*=i;return mk(new Q(r))}
// ---------- tokens ----------
function lex(src){const s=String(src).replace(/[×·]/g,'*').replace(/÷/g,'/').replace(/[−–—]/g,'-').replace(/π/g,'pi').replace(/√/g,'sqrt').replace(/²/g,'^2').replace(/³/g,'^3').replace(/\s+/g,'').toLowerCase();
 const t=s.match(/\d+\.?\d*|\.\d+|[a-z]+|[-+*/^()!%]|[^]/g)||[];for(const k of t)if(!/^(\d+\.?\d*|\.\d+|[a-z]+|[-+*/^()!%])$/.test(k))throw err('I can not read the symbol "'+k+'"');return t}
const FN=new Set(['sin','cos','tan','asin','acos','atan','ln','log','sqrt','abs','exp']),CONST=new Set(['pi','e','ans','mem']);
function evaluate(src,o){o=o||{};const T=lex(src);if(!T.length)throw err('Type a calculation',1);if(T.length>400)throw err('That expression is too long');let i=0;const deg=!!o.deg;
 const end=()=>err('The calculation is not finished',1);
 const peek=()=>T[i],isStart=t=>t!==undefined&&(t==='('||FN.has(t)||CONST.has(t)||/^[\d.]/.test(t));
 function expr(){let l=term();while(peek()==='+'||peek()==='-'){const op=T[i++];const r=term();let rv=r.v;if(r.pct)rv=mul(l.v,r.v);l={v:add(l.v,rv,op==='-'?-1:1),pct:false}}return l}
 function term(){let l=unary(),n=1;for(;;){const t=peek();if(t==='*'||t==='/'){i++;const r=unary();l={v:t==='*'?mul(l.v,r.v):div(l.v,r.v),pct:false};n++}else if(t==='('||FN.has(t)||CONST.has(t)){const r=unary();l={v:mul(l.v,r.v),pct:false};n++}else break}return l}
 function unary(){if(peek()==='-'){i++;const r=unary();return{v:neg(r.v),pct:r.pct}}if(peek()==='+'){i++;return unary()}return power()}
 function power(){const b=post();if(peek()==='^'){i++;const e=unary();return{v:pow(b.v,e.v),pct:false}}return b}
 function post(){let p=primary();while(peek()==='!'||peek()==='%'){if(T[i++]==='!')p={v:fact(p.v),pct:false};else p={v:div(p.v,mk(new Q(100n))),pct:true}}return p}
 function primary(){const t=T[i++];if(t===undefined)throw end();
  if(/^\d|^\./.test(t)){const q=M.qIn(t);if(!q)throw err('Check the number "'+t+'"');return{v:mk(q),pct:false}}
  if(t==='('){const r=expr();if(peek()!==')'){if(peek()===undefined)throw end();throw err('Check the brackets')}i++;return{v:r.v,pct:false}}
  if(t==='pi')return{v:mf(Math.PI),pct:false};if(t==='e')return{v:mf(Math.E),pct:false};
  if(t==='ans'){if(!o.ans)throw err('There is no previous answer yet');return{v:o.ans,pct:false}}
  if(t==='mem'){if(!o.mem)throw err('Memory is empty');return{v:o.mem,pct:false}}
  if(FN.has(t)){let a;if(peek()==='('){i++;a=expr().v;if(peek()!==')'){if(peek()===undefined)throw end();throw err('Check the brackets')}i++}else{if(peek()===undefined)throw end();a=unary().v}return{v:fn(t,a),pct:false}}
  if(t===')')throw err('Check the brackets');if(/^[*/^!%]$/.test(t))throw err('A number is needed before "'+t+'"');throw err('I do not know "'+t+'"')}
 const rad=x=>deg?x*Math.PI/180:x,outA=x=>deg?x*180/Math.PI:x,cl=x=>Math.abs(x)<1e-14?0:x;
 function fn(n,a){const x=a.f;switch(n){
  case'sin':return mf(cl(Math.sin(rad(x))));case'cos':return mf(cl(Math.cos(rad(x))));
  case'tan':if(deg&&Math.abs(((x%180)+180)%180-90)<1e-12)throw err('Tangent is undefined at this angle');return mf(cl(Math.tan(rad(x))));
  case'asin':if(x<-1||x>1)throw err('Inverse sine needs a number from −1 to 1');return mf(cl(outA(Math.asin(x))));case'acos':if(x<-1||x>1)throw err('Inverse cosine needs a number from −1 to 1');return mf(cl(outA(Math.acos(x))));case'atan':return mf(cl(outA(Math.atan(x))));
  case'ln':if(!(x>0))throw err('Logarithms need a number above 0');if(a.q&&a.q.isOne())return mk(Q0);return mf(Math.log(x));
  case'log':if(!(x>0))throw err('Logarithms need a number above 0');{const r=Math.log10(x);return Number.isInteger(Math.round(r*1e9)/1e9)&&Math.abs(r-Math.round(r))<1e-12?mk(new Q(BI(Math.round(r)))):mf(r)}
  case'sqrt':return sqrt(a);case'abs':return a.q?mk(a.q.abs()):mf(Math.abs(x));case'exp':{const r=Math.exp(x);if(!Number.isFinite(r))throw err('The number is too large');return mf(r)}}}
 const r=expr();if(i<T.length){if(T[i]===')')throw err('Check the brackets');throw err('Check the calculation near "'+T[i]+'"')}
 return fmt(r.v)}
const SUPD='⁰¹²³⁴⁵⁶⁷⁸⁹',sup=s=>String(s).replace(/-/g,'⁻').replace(/\d/g,d=>SUPD[d]);
function fnum(x){if(x===0||Object.is(x,-0))return '0';const a=Math.abs(x);if(a>=1e15||a<1e-6){const[m,e]=x.toExponential(11).split('e');return m.replace(/\.?0+$/,'').replace('-','−')+' × 10'+sup(String(+e))}return String(+x.toPrecision(12)).replace('-','−')}
function fmt(v){let text,frac=null,plain;
 if(v.q){const q=v.q;if(q.isInt()){const s=q.n.toString(),ng=s[0]==='-',d=ng?s.slice(1):s;if(d.length>20){text=(ng?'−':'')+(d[0]+'.'+d.slice(1,12)).replace(/\.?0+$/,'')+' × 10'+sup(d.length-1);plain='ans'}else{text=(ng?'−':'')+d;plain=s}}
  else{text=fnum(q.val());plain=/×/.test(text)?'ans':String(+q.val().toPrecision(12));if(q.d<=1000000n)frac=(q.n<0n?'−':'')+(q.n<0n?-q.n:q.n)+'/'+q.d}}
 else{text=fnum(v.f);plain=/×/.test(text)?'ans':String(+v.f.toPrecision(12))}
 return{v,text,frac,plain}}
return{evaluate,fmt}})();
if(typeof module!=='undefined')module.exports=CE;

(()=>{
const{esc,sub,clear,textInit}=TX.H;
let DEG=true,ANS=null,MEM=null,fresh=false;try{DEG=ls.get('calcdeg')!=='rad'}catch(e){}
const B=(l,t,v,c)=>'<button type="button" class="'+(c||'')+'" data-'+t+'="'+v+'" aria-label="'+(l==='⌫'?'Backspace':l.replace(/<[^>]+>/g,''))+'">'+l+'</button>';
const num=['7','8','9','÷','4','5','6','×','1','2','3','−','0','.','=','+'];
const numPad=()=>num.map(k=>k==='='?B('=','a','eq','eq'):'÷×−+'.includes(k)?B(k,'k',k,'op'):B(k,'k',k)).join('');
const basicPad='<div class="kp calc c4">'+B('AC','a','ac','op')+B('⌫','k','⌫','op')+B('%','k','%','op')+B('÷','k','÷','op')+['7','8','9'].map(k=>B(k,'k',k)).join('')+B('×','k','×','op')+['4','5','6'].map(k=>B(k,'k',k)).join('')+B('−','k','−','op')+['1','2','3'].map(k=>B(k,'k',k)).join('')+B('+','k','+','op')+B('±','a','neg','op')+B('0','k','0')+B('.','k','.')+B('=','a','eq','eq')+'</div>';
const sciPad='<div class="kp calc c5">'+B('<span id="degbtn">'+(DEG?'Deg':'Rad')+'</span>','a','deg','fn')+B('sin','k','sin(','fn')+B('cos','k','cos(','fn')+B('tan','k','tan(','fn')+B('AC','a','ac','op')
 +B('sin⁻¹','k','asin(','fn')+B('cos⁻¹','k','acos(','fn')+B('tan⁻¹','k','atan(','fn')+B('ln','k','ln(','fn')+B('log','k','log(','fn')
 +B('π','k','π','fn')+B('e','k','e','fn')+B('x²','k','^2','fn')+B('xʸ','k','^','fn')+B('√','k','√(','fn')
 +B('(','k','(','fn')+B(')','k',')','fn')+B('n!','k','!','fn')+B('%','k','%','fn')+B('⌫','k','⌫','op')+'</div><div class="kp calc c4">'
 +B('MC','a','mc','mem')+B('MR','a','mr','mem')+B('M+','a','mp','mem')+B('M−','a','mm','mem')+B('7','k','7')+B('8','k','8')+B('9','k','9')+B('÷','k','÷','op')+B('4','k','4')+B('5','k','5')+B('6','k','6')+B('×','k','×','op')+B('1','k','1')+B('2','k','2')+B('3','k','3')+B('−','k','−','op')+B('Ans','k','ans','fn')+B('0','k','0')+B('.','k','.')+B('+','k','+','op')+B('±','a','neg','op')+B('','k','','hide')+B('','k','','hide')+B('=','a','eq','eq')+'</div>';
const ui=(pad,ph)=>'<div class="field"><label for="q">Calculation</label><input id="q" type="text" inputmode="none" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="'+ph+'"></div>'+pad+'<div class="hint" id="mem"></div><div class="hint">You can also type with your keyboard. Percent works like a phone calculator: 200 + 10% = 220.</div>';
const hist=()=>{try{return JSON.parse(ls.get('calchist')||'[]')}catch(e){return[]}};
function drawHist(){const h=hist(),w=$('#work');if(!w)return;w.innerHTML=h.length?'<div class="hist-box"><div class="hh"><b>History</b><button type="button" class="link" data-a="hclear">Clear</button></div>'+h.map((x,i)=>'<button type="button" class="hi" data-a="hist" data-i="'+i+'"><span>'+esc(x[0])+'</span><b>= '+esc(x[1])+'</b></button>').join('')+'</div>':''}
function show(r){setResult('<span class="ans">'+esc(r.text)+'</span>'+(r.frac?sub('As a fraction: '+r.frac):''))}
function evalNow(q,tolerant){try{const r=CE.evaluate(q,{deg:DEG,ans:ANS,mem:MEM});return r}catch(e){if(e.inc&&tolerant)return null;if(e.calc){const x=new Error(e.message);x.calc=1;x.inc=e.inc;throw x}throw e}}
function run(){const q=$('#q').value.trim();if(!q)return clear();try{const r=evalNow(q,true);if(r)show(r);else setResult('<small>Result</small><strong>—</strong>')}catch(e){setResult('<span class="ans plain">'+esc(e.calc?e.message:'Check the calculation')+'</span>')}}
function commit(){const i=$('#q'),q=i.value.trim();if(!q)return;try{const r=evalNow(q,false);ANS=r.v;show(r);const h=hist();h.unshift([q,r.text]);ls.set('calchist',JSON.stringify(h.slice(0,10)));drawHist();i.value=r.plain;fresh=true}catch(e){setResult('<span class="ans plain">'+esc(e.calc?e.message:'Check the calculation')+'</span>')}}
function memDraw(){const m=$('#mem');if(m)m.textContent=MEM?'Memory: '+CE.fmt(MEM).text:''}
function act(a,b){const i=$('#q');
 if(a==='eq')return commit();
 if(a==='ac'){i.value='';fresh=false;return run()}
 if(a==='neg'){const v=i.value;i.value=/^[−-]/.test(v)?v.replace(/^[−-]/,''):'−'+v;return run()}
 if(a==='deg'){DEG=!DEG;try{ls.set('calcdeg',DEG?'deg':'rad')}catch(e){}$('#degbtn').textContent=DEG?'Deg':'Rad';return run()}
 if(a==='mc'){MEM=null;return memDraw()}
 if(a==='mr'){fresh=false;i.setRangeText('mem',i.selectionStart??i.value.length,i.selectionEnd??i.value.length,'end');return run()}
 if(a==='mp'||a==='mm'){try{const r=evalNow(i.value.trim()||'0',false),cur=MEM||{q:M.Q0,f:0};MEM=a==='mp'?(cur.q&&r.v.q?{q:cur.q.add(r.v.q),f:cur.q.add(r.v.q).val()}:{q:null,f:cur.f+r.v.f}):(cur.q&&r.v.q?{q:cur.q.sub(r.v.q),f:cur.q.sub(r.v.q).val()}:{q:null,f:cur.f-r.v.f});memDraw()}catch(e){setResult('<span class="ans plain">'+esc(e.calc?e.message:'Check the calculation')+'</span>')}return}
 if(a==='hclear'){ls.set('calchist','[]');return drawHist()}
 if(a==='hist'){const x=hist()[+b.dataset.i];if(x){i.value=x[0];fresh=false;run()}}}
function init(form){drawHist();memDraw();
 form.addEventListener('click',e=>{const b=e.target.closest('[data-a]');if(b){act(b.dataset.a,b);return}const k=e.target.closest('.kp [data-k]');if(k&&fresh){fresh=false;if(/^([0-9.(]|sin|cos|tan|asin|acos|atan|ln|log|√|π|e$|ans)/.test(k.dataset.k))$('#q').value=''}},true);
 form.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.id==='q'){e.preventDefault();commit()}});
 form.addEventListener('input',e=>{if(e.target.id==='q')fresh=false});textInit()}
SOLVERS['basic-calculator']={ui:ui(basicPad,'e.g. 12.5 × (3 + 4)'),init,run};
SOLVERS['scientific-calculator']={ui:ui(sciPad,'e.g. sin(30) + √(16) × 2^3'),init,run};
})();

const CONTACT='hello@phademy.com';
const lsGet=k=>{try{return JSON.parse(ls.get(k)||'[]')}catch(e){return[]}};
function favInit(slug,t){const r=lsGet('recent').filter(x=>x!==slug);r.unshift(slug);ls.set('recent',JSON.stringify(r.slice(0,8)));
 const d=$('#tool-desc');if(!d)return;const b=document.createElement('button');b.type='button';b.className='favbtn';
 const draw=()=>{const on=lsGet('fav').includes(slug);b.textContent=on?'★ Saved to favourites':'☆ Save to favourites';b.setAttribute('aria-pressed',on)};
 b.onclick=()=>{let f=lsGet('fav');f=f.includes(slug)?f.filter(x=>x!==slug):[slug,...f];ls.set('fav',JSON.stringify(f));draw()};draw();d.insertAdjacentElement('afterend',b)}
function homeMine(){const g=$('#tool-grid');if(!g)return;const s=g.closest('.section');if(!s)return;const fav=lsGet('fav');
 const sec=(title,ids)=>{const a=ids.map(i=>TOOLS.find(t=>t.id===i)).filter(Boolean);return a.length?'<section class="section mine"><div class="container"><div class="section-head"><div><h2>'+title+'</h2></div></div><div class="grid">'+a.map(card).join('')+'</div></div></section>':''};
 const h=sec('★ Your favourites',fav)+sec('Recently used',lsGet('recent').filter(x=>!fav.includes(x)).slice(0,6));if(h)s.insertAdjacentHTML('beforebegin',h)}
function pwaInit(){let ev=null;try{if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))navigator.serviceWorker.register('sw.js').catch(()=>{})}catch(e){}
 const box=document.querySelector('#menu .container');
 if(box){box.insertAdjacentHTML('afterbegin','<div class="inst"><button type="button" id="installbtn" hidden>📲 Install the Phademy app</button><p id="iosnote" class="hint" hidden>To install on iPhone: tap the Share button, then “Add to Home Screen”.</p></div>');
  const ib=$('#installbtn');ib.onclick=async()=>{if(!ev)return;ev.prompt();try{await ev.userChoice}catch(e){}ev=null;ib.hidden=true};
  const sa=matchMedia('(display-mode:standalone)').matches||navigator.standalone;if(/iphone|ipad|ipod/i.test(navigator.userAgent)&&!sa)$('#iosnote').hidden=false}
 window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();ev=e;const ib=$('#installbtn');if(ib)ib.hidden=false});window.addEventListener('appinstalled',()=>track('app_installed'));homeMine();popularRow();consentInit()}

function consentInit(){const c=ls.get('consent');
 const ban=()=>{if($('#cbanner'))return;const d=document.createElement('div');d.id='cbanner';d.setAttribute('role','dialog');d.setAttribute('aria-label','Cookie choices');
  d.innerHTML='<p>We use cookies to understand how Phademy is used and to improve it. You can accept or decline. <a href="privacy.html">Privacy Policy</a></p><div class="cb"><button type="button" id="cno">Decline</button><button type="button" id="cyes">Accept</button></div>';document.body.appendChild(d);
  const set=v=>{ls.set('consent',v);try{window.gtag&&gtag('consent','update',{analytics_storage:v==='yes'?'granted':'denied'})}catch(x){}d.remove()};$('#cyes').onclick=()=>set('yes');$('#cno').onclick=()=>set('no')};
 const f=document.querySelector('footer');if(f&&!$('#cookie-settings')){const a=document.createElement('a');a.href='#';a.id='cookie-settings';a.textContent='Cookie settings';a.onclick=ev=>{ev.preventDefault();ban()};const L=f.querySelector('a[href="terms.html"]');(L?L.parentNode:f).appendChild(a)}
 if(!c)ban()}
function popularRow(){const ch=$('#chips');if(!ch||$('.poprow'))return;const L=[['basic-calculator','🧮 Basic'],['scientific-calculator','π Scientific'],['percentage-calculator','% Percentage'],['bmi-calculator','BMI'],['age-calculator','Age'],['quadratic-equation-calculator','x² Quadratic'],['algebra-solver','ƒ Algebra solver'],['unit-converter','Unit converter']].filter(x=>TOOLS.some(t=>t.id===x[0]));
 ch.insertAdjacentHTML('beforebegin','<div class="poprow"><span>Popular:</span>'+L.map(x=>'<a class="chip" href="'+x[0]+'.html">'+x[1]+'</a>').join('')+'</div>')}

/*END-NEW*/
initChrome();pwaInit();initHome();initTool();

