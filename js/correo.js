const btn = document.getElementById('button');

document.getElementById('form')
 .addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_bvxtls6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      //alert('Sent!');
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'El correo fue enviado correctamente',
        showConfirmButton: false,
        timer: 1500
      })
    }, (err) => {
      btn.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});