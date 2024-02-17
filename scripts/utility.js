// function hideElementByID(elementId){
//   const element = document.getElementById('elementId');
//   element.classList.add('hidden');

// }

function hideElementByID(elementId){
  const element = document.getElementById(elementId);
  element.classList.add('hidden')


}

function showElementById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden')
}