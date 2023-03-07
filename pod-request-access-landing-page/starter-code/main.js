submit.addEventListener('click', e => {
    e.preventDefault();

    const re =  /^(([^<>()[]\\.,;:\s@\"]+(\.[^<>()[]\\.,;:\s@\"]+)*)|(\".+\"))@(([[0-9]{1,3}\‌​.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === '') {
      error.innerHTML = 'Oops! Please add your email';
    
    
   } else if (!re.test(email.value)) {
    error.innerHTML = 'Oops! Please check your email';
   } else {
    error.innerHTML = '';
   }


  });