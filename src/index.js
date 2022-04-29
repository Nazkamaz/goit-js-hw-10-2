import './css/styles.css';
import fetchCountries from './fetchCountries';
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;
const field = document.querySelector('input');
const debounce = require('lodash.debounce');
const countriList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');


const handleInput = e => {
        countriList.innerHTML = '';
        countryInfo.innerHTML = '';
      return fetchCountries(e.target.value.trim()).then(countries => {
    console.log(countries);
    if (countries.length > 10) {
      return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    } else if (countries.length > 1 && countries.length < 10) {
        
     const listMarcup = countries
        .map(({ name, flags }) => {
          return `<li>
    <img
            src="${flags.svg}"
            alt="${name} flag"
            width='24px'
    />
    <p>${name}</p>
    </li>`;
        })
        .join('');
      countriList.innerHTML = listMarcup;
    } else if (countries.length === 1) {
              console.log(countries);
              const countryMarcup = countries
        .map(({ name, capital, population, flags, languages }) => {
                      return `<li>
    <img
            src="${flags.svg}"
            alt="${name} flag"
            width='24px'
    />
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>
    </li>`;
        })
        .join('');
      countryInfo.innerHTML = countryMarcup;
    }
    // else if(!response.ok){
    //     return Notiflix.Notify.warning("Oops, there is no country with that name")
    // }
  });
};

field.addEventListener('input', debounce(handleInput, DEBOUNCE_DELAY));
