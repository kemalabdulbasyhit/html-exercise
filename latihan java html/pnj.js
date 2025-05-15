document.getElementById('hitungButton').addEventListener('click', function() {
  const jariJari = parseFloat(document.getElementById('jariJari').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);

  // Menghitung volume tabung
  const volume = Math.PI * jariJari * jariJari * tinggi;

  // Menghitung luas permukaan tabung
  const luasPermukaan = 2 * Math.PI * jariJari * (jariJari + tinggi);

  document.getElementById('volume').innerText = 'Volume Tabung: ' + volume.toFixed(2) + ' satuan kubik';
  document.getElementById('luasPermukaan').innerText = 'Luas Permukaan Tabung: ' + luasPermukaan.toFixed(2) + ' satuan persegi';
});