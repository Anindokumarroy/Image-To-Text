let extractText = () => {
    let imageInput= document.getElementById("Imageinput")
    let outPut = document.getElementById("outPut");

    let imageFile=imageInput.files[0];

    if (!imageFile) {
        outPut.innerText="Please Select A Picture" 
        return
    }

    Tesseract.recognize(
       imageFile,
       'eng'
    ).then(({data})=>{
       outPut.textContent=data.text
    }).catch((error)=>{
        console.error('Error',error);
        outPut.textContent('Error')
        
    })
}

