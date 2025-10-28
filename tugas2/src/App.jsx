import { useState, useEffect } from "react";

function App() {
  const [cuaca, setCuaca] = useState({ kota: "Medan", kondisi: "Cerah" });

  useEffect(() => {
    const dataCuaca = [
      { kota: "Medan", kondisi: "Cerah" },
      { kota: "Jakarta", kondisi: "Hujan Ringan" },
      { kota: "Bandung", kondisi: "Berawan" },
      { kota: "Surabaya", kondisi: "Panas" },
      { kota: "Bali", kondisi: "Mendung" },
    ];

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % dataCuaca.length;
      setCuaca(dataCuaca[index]);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "100px",
        fontFamily: "Arial",
        color: "#fff",
        backgroundColor: "#ffb6c1", // warna pink muda
        padding: "50px",
        borderRadius: "20px",
        width: "400px",
        margin: "100px auto",
        boxShadow: "0 4px 15px rgba(255, 105, 180, 0.5)", // efek bayangan pink
      }}
    >
      <h1 style={{ color: "#fff" }}>🌸 Informasi Cuaca</h1>
      <h2>Kota: {cuaca.kota}</h2>
      <h3>Kondisi: {cuaca.kondisi}</h3>
      <p style={{ fontSize: "14px" }}>
        (Data berubah otomatis setiap 5 detik)
      </p>
    </div>
  );
}

export default App;
