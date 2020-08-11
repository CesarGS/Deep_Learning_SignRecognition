$.when( $.ready ).then(function() {
    // Document is ready.
    console.log("READY!");

    document.getElementById("flObj").addEventListener("change", event => {
        console.log("Cambio!!!");

        let filePath = document.getElementById("flObj").value;
        let fileName = filePath.indexOf("\\") >= 0 ? filePath.substring(filePath.lastIndexOf("\\")+1) : filePath.substring(filePath.lastIndexOf("//")+1);
        console.log(fileName);
        document.getElementById("btnSend").href = (fileName) ? `/path?name=${fileName}`: "#";

        

            if (event.target.files && event.target.files[0]) {
              var reader = new FileReader();          
              reader.onload = (event) => {
                var url = (event.target).result;
                document.getElementById("imgObj").src = url;                
              }
          
              reader.readAsDataURL(event.target.files[0]);
              
            }
          
        
    })
  });

    
 
