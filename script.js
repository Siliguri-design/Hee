document.getElementById('upload-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fileInput = document.getElementById('image-upload');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(event) {
            const img = new Image();
            img.src = event.target.result;
            img.onload = function() {
                // আপলোড করা ছবির রেজাল্ট এখানে দেখানো হবে
                document.getElementById('result-container').classList.remove('hidden');
                document.getElementById('result-image').src = img.src;
            };
        };
        reader.readAsDataURL(file);
    }
});
