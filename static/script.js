document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('upload-form');
    const fileInput = document.getElementById('fileInput');
    const originalAudio = document.getElementById('original-audio-element');
    const denoisedAudio = document.getElementById('denoised-audio-element');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        fetch('/upload', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log("Received response:", data);
            originalAudio.src = data.original;
            denoisedAudio.src = data.enhanced;
            console.log("Set original audio src to:", data.original);
            console.log("Set denoised audio src to:", data.enhanced);
            originalAudio.load();
            denoisedAudio.load();
        })
        .catch(error => console.error('Error:', error));
    });
});