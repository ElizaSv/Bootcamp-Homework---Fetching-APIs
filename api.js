function getData() {
    fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(response => {
        let fetchedData = response.products; //getting the products object from fetched json file
        console.log(fetchedData);
        let slicedArr = fetchedData.slice(0,10); //creating an array or first 10 elements from json file
        console.log(slicedArr)
        let smallArr = slicedArr.map(prop => {return {title:prop.title, price:prop.price} }) // creating new array which has only title and price properties
        smallArr.sort((priceA, priceB) => {return priceA.price - priceB.price})
        smallArr.forEach(item => {return {title:item.title, price:item.price}});
        console.log(smallArr);
        let bigArr = slicedArr.filter(elem => elem.stock >= 50);
        console.log(bigArr);
        //ADDITIONAL TASK
        let ratingArr = slicedArr.filter(elem => {return elem.rating >= 4.5 && elem.brand.toLowerCase() === "apple"});
        console.log(ratingArr)
        })
    .catch(err => console.error(err))
  };
getData()

