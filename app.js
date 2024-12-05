const soccers = [
    { name: 'Cristiano Ronaldo', age: 36, birthdate: '1985-07-05', country: 'Portugal', club: 'Real Madrid', reputation: 'High' },
    { name: 'Lionel Messi', age: 35, birthdate: '1987-06-24', country: 'Argentina', club: 'Barcelona', reputation: 'High' },
    { name: 'Zinedine Zidane', age: 43, birthdate: '1972-01-23', country: 'France', club: 'Paris Saint-Germain', reputation: 'High' },
    { name: 'Sergio Ramos', age: 36, birthdate: '1986-12-03', country: 'Spain', club: 'Real Madrid', reputation: 'High' },
    { name: 'Neymar', age: 29, birthdate: '1992-02-05', country: 'Brazil', club: 'Paris Saint-Germain', reputation: 'High' },]

const tbodyEl = document.querySelector('tbody');
const randomAddBtnEl = document.querySelector('.random__add');
const addPlayerBtnEl = document.querySelector('.add__player');
const closeModalBtnEl = document.querySelector('.close__modal');

randomAddBtnEl.addEventListener('click', () => {
    const randomSoccer = soccers[Math.floor(Math.random() * soccers.length)];
    const trEl = document.createElement('tr');   
    trEl.innerHTML = `
        <td>${randomSoccer.name}</td>
        <td>${randomSoccer.age}</td>
        <td>${randomSoccer.birthdate}</td>
        <td>${randomSoccer.country}</td>
        <td>${randomSoccer.club}</td>
        <td>${randomSoccer.reputation}</td>
    `;
    tbodyEl.appendChild(trEl);
});

const modalEl = document.querySelector('.modal');
const modalContentEl = document.querySelector('.modal__content');

addPlayerBtnEl.addEventListener('click', () => {
    modalEl.style.display = 'block';
});

modalContentEl.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = e.target[0].value;
    const age = e.target[1].value;
    const birthdate = e.target[2].value;
    const country = e.target[3].value;
    const club = e.target[4].value;
    const reputation = e.target[5].value;
    const trEl = document.createElement('tr');
    if (!name || !age || !birthdate || !country || !club || !reputation) {
        alert('Please fill in all fields');
        return;
    }
    if (isNaN(age)
      )  {
        alert('Age  should be number');
        return;
    }
    trEl.innerHTML = `
        <td>${name}</td>
        <td>${age}</td>
        <td>${birthdate}</td>    
        <td>${country}</td>
        <td>${club}</td>
        <td>${reputation}</td>
    `;
    tbodyEl.appendChild(trEl);
    modalEl.style.display = 'none';
});

closeModalBtnEl.addEventListener('click', () => {
    modalEl.style.display = 'none';
});


