const nameInput = document.querySelector(".name-input");
const generateBtn = document.querySelector(".btn");
const tagContainer = document.querySelector(".tag-container");

generateBtn.addEventListener("click", () => {
 const name = nameInput.value;  
  const nameTag = createTag(name);
   tagContainer.innerHTML += nameTag;
  
  nameInput.value = "";
})

//Hell Sir, diri na part ako ra sya gi separate aron ma identify nko sya inig design nko
//Although pwede sya ibutang sa html pero ako rang gi tuyo sir para inig naay mali or error 
//Dali ra nko makit an ug aha dapit

const createTag = (name) => {
  return `
  <div class="name-tag">
      <div class="name-tag__header">
        <h4 class="name-tag__hello"></h4>
        <p class="name-tag__introduction">NAME</p>
      </div>
      <div class="name-tag__name-container">
        <p class="name-tag__name">${name}</p>
      </div>
    </div>
  
  `;
}
//No to Copyright @XYREL