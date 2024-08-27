document.getElementById('myInput').addEventListener('input', function() {
    this.classList.add('no-border');
});

document.getElementById('custom-button').addEventListener('click', function() {
    document.getElementById('file-upload').click();
});

const fileUpload = document.getElementById('file-upload');
const customButton = document.getElementById('custom-button');
const fileInfo = document.getElementById('file-info');
const fileName = document.getElementById('file-name');
const removeFile = document.getElementById('remove-file');

customButton.addEventListener('click', function() {
    fileUpload.click();
});

fileUpload.addEventListener('change', function() {
    if (fileUpload.files.length > 0) {
        // Hide the custom button
        customButton.style.display = 'none';
        
        // Display the file info section
        fileInfo.style.display = 'inline-block';
        
        // Show the selected file name
        fileName.textContent = `Selected file: ${fileUpload.files[0].name}`;
    }
});

removeFile.addEventListener('click', function() {
    // Reset the file input
    fileUpload.value = '';
    
    // Hide the file info section
    fileInfo.style.display = 'none';
    
    // Show the custom button again
    customButton.style.display = 'inline-flex';
    
    // Reset the file name display
    fileName.textContent = 'No file selected';
   
});

