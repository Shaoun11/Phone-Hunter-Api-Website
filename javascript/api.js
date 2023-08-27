const loadphone = async(searcht) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searcht}
    `);
    const data=await res.json();
    const phones=data.data;
   iphoneload(phones);

}

  
// display output
const iphoneload =phone =>{
const phonecontainer=document.getElementById('phone-conatainer');
// show result evenly
phonecontainer.textContent='';
// show all buton add
const showbtn=document.getElementById('show-all-btn')
if(phone.length >15){
    showbtn.classList.remove('hidden')
}
else{
    showbtn.classList.add('hidden')
}
// show result only 15
phone=phone.slice(0,15);
 phone.forEach(phonedata => {
   const phoneapi=document.createElement('div');
   phoneapi.classList=`card w-96 bg-base-100 shadow-xl`;
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
}

const searchhandler = () =>{
   const searchfiledarea=document.getElementById('search-area');
   const search=searchfiledarea.value;
   loadphone(search)

}


