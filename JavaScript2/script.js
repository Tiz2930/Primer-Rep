function mostrar() {
    const caja1 = document.getElementById("caja1");
    const caja2 = document.getElementById("caja2");
    
    if (caja1.style.display === "none") {
        caja1.style.display = "block";
        caja2.style.display = "none";
    } else {
        caja1.style.display = "none";
        caja2.style.display = "block";
    }
}