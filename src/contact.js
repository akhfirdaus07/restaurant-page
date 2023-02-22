function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')
  
    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 0812 8888 3333'
  
    const address = document.createElement('p')
    address.textContent = '🏠 Medan Merdeka, Central Jakarta, Indonesia'
  
    const restaurantLocation = document.createElement('img')
    restaurantLocation.src = '../src/images/location.png'
    restaurantLocation.alt = 'Indonesia restaurant location'
  
    contact.appendChild(phoneNumber)
    contact.appendChild(address)
    contact.appendChild(restaurantLocation)
  
    return contact
}
  
function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}
  
export default loadContact