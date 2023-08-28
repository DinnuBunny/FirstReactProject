/*------- Get the Unique Array which consist of objects using Java Script -------*/
const array = [
    {"k1":"v11", "k2": "v12" , "k3" : "v13"},
    {"k1":"v11", "k3" : "v13", "k2": "v12" },
    {"k1":"v11", "k2": "v13"},
    {"k3" : "v13", "k2": "v12", "k1":"v11", },
  ]; 

  /*
      In the above array index 0, 1 and 3 are same but the keys order 
      is different we need to find remove the duplicate Element from the array
  */
  function sortTheObjectBasedOnKey(object) {
      const keySet = [];
      const sortedObject = {};
      for (const key in object){
          keySet.push(key);
      }
      keySet.sort();
      for (const eachKey of keySet){
          sortedObject[eachKey] = object[eachKey];
      }
      return sortedObject;
  }
  
  const sortedArray = [];
  for (const x of array){
      const sortedObject = sortTheObjectBasedOnKey(x); //calling sort the object based on key
      sortedArray.push(sortedObject); //pushing sorted object to new sorted array
  }
  
  const object = {};
  for (const x of sortedArray){
      object[JSON.stringify(x)] = "random"; 
      /*
          converting sortedArray element into string and 
          storing in object and assigning random value because objects allows only unique keys
      */
  }
  
  const uniqueArray = [];
  for (const key in object){
      uniqueArray.push(JSON.parse(key));
      /* Pushing object keys to uniqueArray */
  }
  console.log(uniqueArray);  