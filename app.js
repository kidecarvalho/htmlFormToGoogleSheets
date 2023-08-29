const scriptURL = 'https://script.google.com/macros/s/AKfycbxmCa2NRZ01cGofQinL1xtkxDyIfxerwNyhWbPtYP_Q1uLkKQOI5W0tDnKCwD18CIfZ/exec';

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Thank you, your form was submitted successfuly!'))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('error!', error.message))
})