(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
function tsp(v){var q=Math.round(v*4)/4;if(q<0.25)return 'a pinch';var tb=Math.floor(q/3),r=q-tb*3,w=Math.floor(r),fr=r-w,F={0:'',0.25:'\u00bc',0.5:'\u00bd',0.75:'\u00be'}[fr],out=[];
 if(tb)out.push(tb+' tbsp');if(w||F)out.push((w?w:'')+(F?(w?' ':'')+F:'')+' tsp');return out.join(' + ');}
var bb=$('bm-b');if(bb){var bn=$('bm-n');
 var B={garam:['Garam masala',[['Ground coriander',4],['Ground cumin',3],['Black pepper',1],['Ground cardamom',1],['Cinnamon',1],['Ground cloves',.5],['Nutmeg',.5]],'Stir in at the end of cooking; it is a finishing spice.'],
  taco:['Taco seasoning',[['Chilli powder',4],['Ground cumin',2],['Paprika',2],['Garlic granules',1],['Onion granules',1],['Dried oregano',1]],'Use 2 tablespoons for every 500 g of mince or beans. Salt the dish separately.'],
  ras:['Ras el hanout',[['Ground cumin',2],['Ground coriander',2],['Ground ginger',2],['Cinnamon',1],['Turmeric',1],['Paprika',1],['Black pepper',1],['Allspice',.5]],'Lovely rubbed onto chicken or stirred through couscous with lemon.'],
  curry:['Mild curry powder',[['Ground coriander',4],['Ground cumin',2],['Turmeric',2],['Ground ginger',1],['Mustard powder',1],['Black pepper',.5],['Chilli powder',.5]],'Fry for 30 seconds in oil after the onions, before adding liquid.'],
  ital:['Italian herb mix',[['Dried oregano',3],['Dried basil',3],['Dried thyme',2],['Dried marjoram',2],['Dried rosemary, crushed',1]],'Add to tomato sauces in the last ten minutes.'],
  bake:['Baking spice',[['Cinnamon',4],['Ground ginger',2],['Nutmeg',1],['Allspice',1],['Ground cloves',.5]],'Use 2 teaspoons in a cake or a pan of stewed fruit.']};
 on([bb,bn],function(){var b=B[bb.value],n=Math.min(24,Math.max(1,parseInt(bn.value,10)||1)),tot=b[1].reduce(function(a,x){return a+x[1];},0),t=n*3;
  $('bm-r').innerHTML='<strong>'+b[0]+'</strong><ul>'+b[1].map(function(x){return '<li><span>'+x[0]+'</span><b>'+tsp(x[1]/tot*t)+'</b></li>';}).join('')+'</ul><p>Makes about '+n+' tablespoon'+(n>1?'s':'')+'. '+b[2]+'</p>';});}
var ss=$('sb-s');if(ss){var sq=$('sb-q');
 var U={cumin:[['Ground coriander with a pinch of chilli',1],['Caraway seeds, ground',.5]],coriander:[['Equal parts cumin and caraway',.75],['Garam masala',.5]],paprika:[['Mild chilli powder',.5],['A pinch of cayenne in tomato pur\u00e9e',.25]],smoked:[['Paprika plus a pinch of cumin',1],['Chipotle chilli powder',.5]],turmeric:[['Mild curry powder',.5],['A pinch of mustard powder for colour',.5]],cinnamon:[['Allspice',.25],['Baking spice or mixed spice',1]],nutmeg:[['Mace',1],['Cinnamon',.5]],allspice:[['Equal parts cinnamon and nutmeg, pinch of cloves',1],['Ground cloves',.25]],cardamom:[['Equal parts cinnamon and nutmeg',1],['Cinnamon and ginger',1]],cayenne:[['Hot paprika',1.5],['Chilli flakes',1.5]],oregano:[['Marjoram',1],['Thyme',.75]],cloves:[['Allspice',1],['Nutmeg',1]]};
 on([ss,sq],function(){var q=Math.max(.25,parseFloat(sq.value)||1),u=U[ss.value],name=ss.options[ss.selectedIndex].text.toLowerCase();
  $('sb-r').innerHTML='<strong>Instead of '+name+'</strong><ul>'+u.map(function(x,i){return '<li><span>'+(i?'Or: ':'Best: ')+x[0]+'</span><b>'+tsp(q*x[1])+'</b></li>';}).join('')+'</ul><p>Start with the amount shown, taste, and add more if the dish needs it. A substitute changes the flavour slightly, so go gently.</p>';});}
var ff=$('fc-f');if(ff){var fmo=$('fc-m'),fs=$('fc-s');
 on([ff,fmo,fs],function(){var L={ground:[12,24],whole:[36,48],herb:[12,24]}[ff.value],m=Math.max(0,parseInt(fmo.value,10)||0)*parseFloat(fs.value),pct=Math.max(4,Math.round(100-m/L[1]*100)),t,p,c;
  if(m<=L[0]){t='Fresh';p='Use it as the recipe says.';c='#5F7A4B';}else if(m<=L[1]){t='Fading';p='Still worth using. Add about half as much again, or toast it briefly in a dry pan to wake it up.';c='#E2A100';}else{t='Past its best';p='It will not harm you, but it will add little. Smell it; if there is nothing there, replace it.';c='#B3261E';pct=Math.max(4,Math.min(pct,15));}
  $('fc-r').innerHTML='<strong>'+t+'</strong><div class="sp-meter"><i style="width:'+pct+'%;background:'+c+'"></i></div><p>'+p+'</p><p>'+(parseFloat(fs.value)>1?'Heat and light age spices faster. Move this jar to a dark cupboard away from the cooker.':'A dark cupboard is the right place. Keep the lid tight.')+'</p>';});}
})();
