

document.getElementById('triangle').addEventListener('click', function(){

    const base = getFieldValueById('triangle-base');
    const height = getFieldValueById('triangle-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please Provide you Valid Num');
         return
     }

    const area = 0.5 * base * height ;
    setElementInnerText('triangle-area', area)

    const h1 = document.getElementById('triangle-height')
     let itemTitle = h1.parentNode.parentNode.childNodes[1].innerText
     
     addToCalculateArea(itemTitle, area);

    


})

document.getElementById('rectangle').addEventListener('click', function(){
    const width = getFieldValueById('rectangle-width');
    const length = getFieldValueById('rectangle-length');

    if(isNaN(width) || isNaN(length)){
        alert('Please Provide you Valid Num');
         return
     }

    const area =  width * length ;
    setElementInnerText('rectangle-area', area)


    const h1 = document.getElementById('rectangle-length')
    let itemTitle = h1.parentNode.parentNode.childNodes[1].innerText
    
    addToCalculateArea(itemTitle, area);
  
})





document.getElementById('parallelogram').addEventListener('click', function(){
    const base = getFieldValueById('parallelogram-base');
    const height = getFieldValueById('parallelogram-height');

    if(isNaN(base) || isNaN(height)){
        alert('Please Provide you Valid Num');
         return
     }

    const area =  base * height ;
    setElementInnerText('parallelogram-area', area)


    const h1 = document.getElementById('parallelogram-height')
    let itemTitle = h1.parentNode.parentNode.childNodes[1].innerText

    addToCalculateArea(itemTitle, area);

})



document.getElementById('ellipse').addEventListener('click', function(){
    const major = getFieldValueById('ellipse-major');
    const minor = getFieldValueById('ellipse-minor');

    if(isNaN(major) || isNaN(minor)){
        alert('Please Provide you Valid Num');
         return
     }



    const area = 3.14 * major * minor ;
    const areaTwoFixed = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoFixed)



    const h1 = document.getElementById('ellipse-minor')
    let itemTitle = h1.parentNode.parentNode.childNodes[1].innerText
    addToCalculateArea(itemTitle,areaTwoFixed);

})



document.getElementById('rhombus').addEventListener('click', function(){
    const dase = getFieldValueById('rhombus-dase');
    const mase = getFieldValueById('rhombus-mase');

    if(isNaN(dase) || isNaN(mase)){
        alert('Please Provide you Valid Num');
         return
     }

    const area = 0.5 * dase * mase ;
    setElementInnerText('rhombus-area', area)



    const h1 = document.getElementById('rhombus-mase')
    let itemTitle = h1.parentNode.parentNode.childNodes[1].innerText
    addToCalculateArea(itemTitle,area);
   
})

