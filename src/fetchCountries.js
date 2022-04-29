import Notiflix, { Notify } from "notiflix";


export default function fetchCountries(name){
    // console.log(name);
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if(response.ok)  {return response.json();}
      
        return Notiflix.Notify.failure("Oops, there is no country with that name")
    
    })
    // .then(countries => {
    //     console.log(countries);
    //     if(countries.length > 10){
    //       return  Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
    //     }
//         else if(countries.length > 1 && countries.length < 10){
// const listMarcup = countries.map(({name, flags}) => {
//     return `<li>
//     <img
//             src="${flags.svg}"
//             alt="${name} flag"
//             width='14px'
//     />
//     <p>${name}</p>
//     </li>`
//         })
// .join('');
// countriList.insertAdjacentHTML('afterbegin', listMarcup);
//         }
//     })
   
// .catch(error => {
//     console.log(error)
    
// })
}