
// Synchronous blocking code
function sync() {
  const btn = document.querySelector('button');
  btn.addEventListener('click', () =>{

    // Step 1
    alert("The paragraph appears only after you close the alert");

    //Step 2
    let pElem = document.createElement('p');
    pElem.textContent = 'Now adding a new paragraph !';
    document.body.appendChild(pElem);

  });
}



export{
  sync
};
