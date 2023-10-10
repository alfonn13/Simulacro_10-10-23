/*
Alfonso Reviejo Valle
GitHub: https://github.com/alfonn13/Simulacro_10-10-23
*/

const button = document.getElementById("button");

button.addEventListener("click", function(){
    const long = parseFloat(document.getElementById("long").value);
    const width = parseFloat(document.getElementById("width").value);

    let area = document.getElementById("area");
    let perymetre = document.getElementById("perymetre");
    
    if(!isNaN(width)|| !isNaN(long)){
        area.textContent ="Area de Rectangulo: "+ (long * width);
        perymetre.textContent ="Perimetro del Rectangulo : "+ 2*(long + width);
    }else{
        area.textContent = "Tienes que ingresar un numero correcto";
    }

    

})

