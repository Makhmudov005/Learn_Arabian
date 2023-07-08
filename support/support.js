document.getElementById("supportForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Boshqa sahifaga yuborishni oldini olamiz
  
    // Formadagi qiymatlarni olish
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
  
    // Validatsiya yoki qayta ishlash kerak bo'lgan biror amallarni bajarish
    // ...
  
    // Forma maydonlarini tozalash
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  
    // Muvaffaqiyatli xabar chiqarish
    alert("Xabaringiz uchun rahmat!");
  
    // Kerakli bo'lsa, AJAX yordamida formani serverga yuborish mumkin
    // ...
  
    // Boshqa sahifaga yo'naltirish
    // window.location.href = "tashakkur.html";
  });
  