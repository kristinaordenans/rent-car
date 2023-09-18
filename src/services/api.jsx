

const fetchCars = (page,limit) => {

    const url = new URL('https://65016dd9736d26322f5bab4d.mockapi.io/cars/Advert');
        url.searchParams.append('page',page);
        url.searchParams.append('limit',limit);

    return fetch('https://65016dd9736d26322f5bab4d.mockapi.io/cars/Advert',{
        method: 'GET',
        headers: {
            accept: 'application/json'
        },
    }).then(res => {
        if(res.ok){
            return res.json();
        }
    }).catch(error => console.log("error"))
}

export default fetchCars;

// console.log(fetchCars());
