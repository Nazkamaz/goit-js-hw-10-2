import Notiflix, { Notify } from "notiflix";


export default function fetchCountries(name){
    // console.log(name);
   return fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,capital,population,flags,languages`)
    .then(response => {
      if(response.ok)  {return response.json();}
      
        throw new Error;
    
    })
//     .catch(error => {
//     Notiflix.Notify.failure("Oops, there is no country with that name")
    
// })

}