function uploadImage() {
    const input = document.getElementById('imageInput');
    const grid = document.getElementById('imageGrid');

    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function(e) {
            // Membuat elemen card baru
            const card = document.createElement('div');
            card.className = 'card';
            
            const img = document.createElement('img');
            img.src = e.target.result;
            
            card.appendChild(img);
            grid.prepend(card); // Menambah gambar ke posisi paling depan
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        alert("Pilih gambar dulu ya!");
    }
}
