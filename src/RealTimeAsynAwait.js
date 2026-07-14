function waitForElement(locator,timeout){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let isElementFound=false;
            console.log(`waiting for seconds:`,timeout);
            if(isElementFound){

                let element=`driver.findElement(${locator})`;
                resolve(element);

            }
            else{
                reject('404NOTFOUND');

            } 

        },timeout);
    });
}

function click(element){
    console.log('Clicking on the element:',element);

}

waitForElement('#loginBtn',5000)
                .then((elementtobeclicked)=>click(elementtobeclicked))
                .catch((error)=>console.log('element not found',error));