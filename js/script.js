// image file image preview
// document.getElementById('form-label').addEventListener('change',(event)=>{
//        const selected_files = event.target.files[0];
//       if(selected_files){
        //       document.getElementById('file-name').innerText = `Files Name :: ${selected_files.name}`
        //       const fileReader = new FileReader();
        //       fileReader.onload = (e)=>{
                //      document.getElementById('preview-img').src = e.target.result;
        //       }
        //       fileReader.readAsDataURL(selected_files);
//       }else{
        //       document.getElementById('preview-img').innerHTML = "Not preview image selected";
//       }
// })

// switch button
let checkbox_box = document.querySelector('#checkbox');
    let monthPackage = document.querySelectorAll('.month');
    let yearPackage = document.querySelectorAll('.year');

    checkbox_box.addEventListener('change', () => {
      if (checkbox_box.checked) {
        yearPackage.forEach((e) => e.classList.add('active'));
        yearPackage.forEach((e) => e.classList.remove('hidden'));
        monthPackage.forEach((e) => e.classList.remove('active'));
        monthPackage.forEach((e) => e.classList.add('hidden'));
      } else {
        yearPackage.forEach((e) => e.classList.remove('active'));
        yearPackage.forEach((e) => e.classList.add('hidden'));
        monthPackage.forEach((e) => e.classList.add('active'));
        monthPackage.forEach((e) => e.classList.remove('hidden'));
      }
    });




















// imgFile.addEventListener('change',(event) =>{
//        const file = event.target.files[0];
//        if(file){
//               const fileReader = new FileReader(); //new file reader create
//               fileReader.onload = (e) =>{
//                      preview_img_adding.innerHTML = `<img src = "${e.target.result}" alt="preview image"/>`
//               }
//               fileReader.readAsDataURL(file);
//        }else{
//               preview_img_adding.innerHTML = "No image are selected";
//        }
// })