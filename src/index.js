document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form =document.getElementById("create-task-form")
  form.preventDefault;
  const forText=document.getElementById("new-task-description");
  const button=document.getElementById("subbutton");
  const tasks=document.getElementById("tasks");
   button.addEventListener("click",(e) => {
    e.preventDefault()
    tasks.innerHTML = `<li>${forText}</li>`
    console.log(forText)
    form.preventDefault;
    tasks.preventDefault;  
   })
});
