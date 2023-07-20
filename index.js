// template_7biilga
// service_6ysqb4x
// user_Diyf0FUTmIVkNQBaBnC9R
const loading = document.querySelector('.modal__overlay--loading');
const success = document.querySelector('.modal__overlay--success');
const scaleFactor = 1 / 20;

function moveBackground(e) {
  const shapes = document.querySelectorAll('.shape');
  const x = e.clientX * scaleFactor;
  const y = e.clientY * scaleFactor;
  
  shapes.forEach((shape, i) => {
    const direction = i % 2 === 0 ? -1 : 1;
    shape.style.transform = `translate(${x * direction}px, ${y * direction}px)`
  })
}

function toggleContrast() {
  document.body.classList.toggle('dark-theme');
}

async function contact(e) {
  e.preventDefault();

  loading.classList.add('modal__overlay--visible');
  try {
    await emailjs
    .sendForm(
      'service_6ysqb4x',
      'template_7biilga',
      e.target,
      'user_Diyf0FUTmIVkNQBaBnC9R'
    )
    loading.classList.remove('modal__overlay--visible');
    success.classList.add('modal__overlay--visible');
  } catch (error) {
    loading.classList.remove('modal__overlay--visible');
    success.classList.remove('modal__overlay--visible');
    alert("The email service is temporarily unavailable. Please contact me directly on jonathanfwong@gmail.com");
  }
}

function toggleModal() {
  document.body.classList.toggle('modal--open');
}