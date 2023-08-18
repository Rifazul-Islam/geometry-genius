
function getFieldValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    inputField.value = '' ;
    return value;
}

// function setValidationTools(a , b){
    
//     if(isNaN(a) || isNaN(b)){
//         alert('Please Provide you Valid Num');
//      }
// }


function setElementInnerText(elementId, area){
    const elementInnerText = document.getElementById(elementId);
   elementInnerText.innerText = area
}




function addToCalculateArea(itemTitle, values){
    const parentContainer = document.getElementById('parent-container');
    const p = document.createElement('p');
     let count = parentContainer.childElementCount ;
  
      p.classList.add('my-3')
      p.classList.add('text-center')
     p.innerHTML = `${count + 1 + '.'}  ${itemTitle} ${values}cm<sup>2</sup>
       <button class='btn btn-sm bg-indigo-600 pl-3 text-white capitalize'>Convert</button>
     `;
    
     parentContainer.appendChild(p)
  }

  






// const inputField = document.getElementById('triangle-base');
// const inputValueText = inputField.value;
// const base = parseFloat(inputValueText);
// inputField.value = '' ;

// const inputFields = document.getElementById('triangle-height');
// const inputFieldTexts = inputFields.value;
// const height = parseFloat(inputFieldTexts);