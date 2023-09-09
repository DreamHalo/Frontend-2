// const navMenuBtn = document.getElementById("nav-menu-btn");
// const modal = document.getElementById("modal");
// const closeBtn = document.getElementById("close-btn");
// const reds = document.querySelector(".reds");
// const redsBackdrop = document.querySelector(".reds-backdrop");

// navMenuBtn.addEventListener("click", () => {
//   modal.style.transform = "translateX(0)";
//   modal.style.transition = "all 0.2s linear";
//   reds.style.transform = "translateX(0)";
//   reds.style.transition = "all 0.2s linear";
//   redsBackdrop.style.zIndex = "997";
//   redsBackdrop.style.backgroundColor = "rgba(0, 0, 0, 0.15)";
//   redsBackdrop.style.transition = "all 0.2s linear";
// });
  




// let wrapper= document.querySelectore(".wrapper");
// const baseUrl = "https://jsonplaceholder.typicode.com";
// function getProduct(){
//   fetch(`${baseUrl}/posts`)
//   .then((res)=>res.json())
//   .then((result)=>dataRender(result))
//   .catch((err)=> console.log('error',err))
//   .finally(()=>console.info("posts successfuly loaded"));
// }

// function dataRender(data){
//   if (data.length){
//     data.forEach((item)=>{
//       const div = document.createElement("div");
//       div.classList.add("card");
//       div.innerHTML= `
//       <img src="${item?.image}" class=card-img-top "alt=${item?.title}">
//         `
//     })
//   }
// }