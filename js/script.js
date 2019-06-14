'use strict';

const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = document.getElementById('countries');
const btn = document.getElementById('search');

btn.addEventListener('click', searchCountries);

function searchCountries() {
    const countryName = document.getElementById('country-name').value;
    if (!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function (resp) {
            return resp.json();
        })
        .then(showCountriesList);
}

function showCountriesList(resp) {
    countriesList.innerHTML = '';
    btn.disabled = true;
        resp.forEach(function (item) {
            const liEl = document.createElement('h1')
            liEl.innerHTML = '<img src="' + item.flag + '" height="50">' + ' ' + item.name;
            countriesList.appendChild(liEl); 
            const liEl1 = document.createElement('p');
            liEl1.innerHTML = 'Background Information:';
            countriesList.appendChild(liEl1);     
            const liEl2 = document.createElement('li');
            liEl2.innerHTML = '<span class="bold">Native name:</span> ' + item.nativeName;
            countriesList.appendChild(liEl2);
            const liEl3 = document.createElement('li');
            liEl3.innerHTML = '<span class="bold">Code:</span> ' + item.alpha2Code;
            countriesList.appendChild(liEl3);
            const liEl4 = document.createElement('li');
            liEl4.innerHTML = '<span class="bold">Capital:</span> ' + item.capital;
            countriesList.appendChild(liEl4);
            const liEl5 = document.createElement('li');
            liEl5.innerHTML = '<span class="bold">Region:</span> ' + item.region;
            countriesList.appendChild(liEl5);
            const liEl6 = document.createElement('li');
            liEl6.innerHTML = '<span class="bold">Currency:</span> ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')';
            countriesList.appendChild(liEl6);
            const liEl7 = document.createElement('li');
            liEl7.innerHTML = '<span class="bold">Language:</span> ' +  item.languages[0].name;
            countriesList.appendChild(liEl7);
            const liEl8 = document.createElement('li');
            liEl8.innerHTML = '<span class="bold">Area:</span> ' +  item.area +  ' km 2';
            countriesList.appendChild(liEl8);
            btn.disabled = false;
        });
}