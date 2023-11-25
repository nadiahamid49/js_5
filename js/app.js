// search start
let search_open_btn = document.querySelector(`.searchbtn`);
let search_close_btn = document.querySelector(`#search-closebtn`);

let search_box = document.querySelector(`#search`);

search_open_btn.addEventListener(`click`, function(){
    search_box.style.transform = `scale(1)`;
})
search_close_btn.addEventListener(`click`, function(){
    search_box.style.transform = `scale(0)`;
})



// pass show hide

let pass_show_hide = document.querySelector(`#pass_show_hide`);

let password = document.querySelector(`#password`);

pass_show_hide.addEventListener(`click`,function(){
    if(password.type == "password"){
        password.type = `text`;
        pass_show_hide.innerHTML = `<i class="fa-regular fa-eye"></i>`;
    }else{
        password.type = "password"
        pass_show_hide.innerHTML = `<i class="fa-regular fa-eye-slash"></i>`;
    }
})

let signupbtn = document.querySelector(`#signupbtn`);
let pass_closebtn = document.querySelector(`#pass-closebtn`);

let signup_box= document.querySelector(`#sign_up`);

signupbtn.addEventListener(`click`, function(){
    signup_box.style.transform = `scale(1)`;
})
pass_closebtn.addEventListener(`click`, function(){
    signup_box.style.transform = `scale(0)`;
})

// sidebar start
let bar_openbtn = document.querySelector(`#barbtn`);
let bar_closebtn = document.querySelector(`#closebtn`);

let side_bar_box = document.querySelector(`.side_menu`);



bar_openbtn.addEventListener(`click`, function(){
    side_bar_box.style.transform = `scale(1)`;
})
bar_closebtn.addEventListener(`click`, function(){
    side_bar_box.style.transform = `scale(0)`;
})

