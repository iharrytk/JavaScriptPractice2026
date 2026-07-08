//Input parameter as rest parameter


function selectCountry(...countryName){

    console.log('The country names are:',countryName);
    console.log(countryName.length);
    console.log("Below is list");
   for (let e of countryName) {
        console.log(e);

   }
    

}


selectCountry("USA","India","Korea");//output:The country names are: [ 'USA', 'India', 'Korea' ]
// 3
// Below is list
// USA
// India
// Korea