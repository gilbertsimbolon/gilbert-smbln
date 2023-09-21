function sapa() {
    // Comment : Untuk mendapatkan nilai input dari elemen input
    var pesan = document.getElementById("pesanInput").value;

    if (pesan.trim() !== "") {
        var sapaan = "Halo, senang berkenalan denganmu" + pesan + "!";
        document.getElementById("hasilSapaan").textContent = sapaan;
        document.getElementById("hasilSapaan").classList.add("show");
    }else{
        alert("Masukkan dulu namamu bujang!")
    }
    // Comment : Untuk menampilakn pesan sapaan dari elemen dengan id "hasilSapaan"
    document.getElementById("hasilSapaan").innerHTML = "Halo," + pesan + "Senang bisa berkenalan denganmu!"
}