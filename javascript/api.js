// create function on loadphone connection api website 
// tarpor variable take pathia dite hobe iphoneload e
const loadphone = async(searcht,isshowall) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searcht}
    `);
    const data=await res.json();
    const phones=data.data;
   iphoneload(phones,isshowall);

}

  
// display output
const iphoneload =(phone,isshowall) =>{
const phonecontainer=document.getElementById('phone-conatainer');
// show result evenly
phonecontainer.textContent='';
// show all buton add if else dia 
const showbtn=document.getElementById('show-all-btn')
if(phone.length >15 &&!isshowall){
    showbtn.classList.remove('hidden')
}
else{
    showbtn.classList.add('hidden')
}
// show result only 15
if (!isshowall){
    phone=phone.slice(0,15);
}

// get id on html div
// then classList and given style 
//template string add on card

 phone.forEach(phonedata => {
   const phoneapi=document.createElement('div');
   phoneapi.classList=`card lg:w-96 w-72 bg-base-100 shadow-xl`;
   phoneapi.innerHTML=`
   <figure class="px-10 pt-10">
    <img src="${phonedata.image}" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">${phonedata.brand}</h2>
    <h2 class="card-title">${phonedata.phone_name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
    <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
   `
   phonecontainer.appendChild(phoneapi)
 });
 loadingadd(false);
}
//   create searchber handle and link on html 
// link searchber on loadphone
//then callled loadphone(perameter on value)
const searchhandler = (isshowall) =>{
   const searchfiledarea=document.getElementById('search-area');
   const search=searchfiledarea.value;
   loadingadd(true);
   loadphone(search,isshowall)

}
const showall=()=>{
    searchhandler(true)
}

const loadingadd=(isloading)=>{
    const loading=document.getElementById('loading-filed');
    if(isloading){
        loading.classList.remove('hidden')
    }
    else{
        loading.classList.add('hidden')
    }
}

