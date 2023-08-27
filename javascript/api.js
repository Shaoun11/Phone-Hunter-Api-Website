const loadphone = async () =>{
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone');
    const data=await res.json();
    const phones=data.data;
   iphoneload(phones);

}

const iphoneload =phone =>{
const phonecontainer=document.getElementById('phone-conatainer');
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

loadphone()