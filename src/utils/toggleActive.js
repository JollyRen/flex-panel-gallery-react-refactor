export default (e) => (
  e.target.classList.toggle('clicked'),
  e.propertyName.includes('flex') ? e.target.classList.toggle('open-active') : null
)
