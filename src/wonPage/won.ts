import '../styles.scss';

const localStorageKeys = Object.keys(localStorage);
const resArr = getResultsArray();
drawResultsList(resArr);

function getResultsArray() {
    const resArr = [];

    for(const key of localStorageKeys) {
        if (!key.match(/[+-]?([0-9]*[.])?[0-9]+/)) {
            continue;
          }

        const val = localStorage.getItem(key);
        const arr = JSON.parse(val);
        resArr.push(arr);
      }
    
    return resArr.sort(function(a, b) {          
      if (a[1] === b[1]) {
         return a[2] > b[2] ? 1 : -1;
      }

      return a[1] - b[1];
   });
}

function drawResultsList(arr: any[]): void {
    const list = document.querySelector('.won-page__rating-list');

    for(let i = 0; i < arr.length; i++) {
        if(arr.length === 10) return;
        const tr = document.createElement('tr');
        tr.className = 'won-page__rating-list';
        tr.innerHTML += `<td>${arr[i][0]}</td>`;
        tr.innerHTML += `<td>${arr[i][1]}</td>`
        tr.innerHTML += `<td>${arr[i][2]}</td>`
        list.appendChild(tr);
        console.log(list);
    }
}