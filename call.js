const chatToken = "8787864164:AAEk5nhOX4WNnCfLAeYGfTJ4Zt0MrxhWCug";
const chatID = "7431732682";

let elName = document.querySelector("#ism")
let elLastName = document.querySelector("#familya")
let elNum = document.querySelector("#telefon")

let elForm = document.querySelector("#myForm")


elForm.addEventListener("submit",(e)=>{
  e.preventDefault();


  const  foydalanuvchiMalumotlari = `
📩 Yangi foydalanuvchi:

👤 Ism: ${elName.value}
👤 Familiya: ${elLastName.value}
👤 Telefon: ${elNum.value}

  `;

  
  fetch(`https://api.telegram.org/bot${chatToken}/sendMessage`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },  
  body: JSON.stringify({
    chat_id: chatID,
    text: foydalanuvchiMalumotlari  
  })

  

  })
  .then(res=>res.json())
  .then(data=>{
    alert("yuborildi:", data);
  })          
  .catch(error=>{
    alert("xatolik:",error);
  })

})
