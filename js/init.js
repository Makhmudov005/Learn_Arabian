(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space


// const btn = document.querySelector(".left")

// btn.addEventListener("click", () =>{
//   alert("Hozircha bu funkiya ishlamaydi")
// })

loader = document.querySelector(".loader")

// LOADER

setTimeout(() => {
    loader.style.opacity = 'a0'
    setTimeout(() => {
        loader.style.display = 'none'
    },1000)
},2500)