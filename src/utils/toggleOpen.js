export default (e) =>
  e.target.nodeName === 'P'
    ? e.target.parentElement.classList.toggle('open')
    : e.target.classList.toggle('open')
