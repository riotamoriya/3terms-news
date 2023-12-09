// return SHA_0("ES6 Module!");
export const SHA_0 = (str) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; 
  }
  return hash;
};



const popElm = (array, element) => {
  const elementExists = array.includes(element);
  const newArray = array.filter(item => item !== element);
  return [elementExists, newArray];
}





export const main = () => {
  let myArray = [1, 2, 3, 4, 5];
  const elementToRemove = 0;
  const result = popElm(myArray, elementToRemove);


  return result;
};



console.log(main());
