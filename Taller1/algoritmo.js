// ---------------- FUNCION PRINCIPAL (restaurante) ----------------
// Declarada con "function" -> su declaración se "eleva" (hoisting).
function restaurant(age, numberDishes, saucer) {
    // Saludo inicial (output)
    console.log("Bienvenido al restaurante!");

    // ---------- VALIDACIÓN DE EDAD (if/else) ----------
    // Si la persona es menor de 12 años, se muestra un mensaje y se detiene la función.
    // Esto refleja la regla de negocio: un menor no puede pedir hasta venir con un adulto.
    if (age < 12) {
        console.log("Eres menor de edad, necesitas venir con un adulto.");
        return;
    } else {
        console.log("Puedes pedir normalmente.");
    }

    // ---------- SCOPE: variable local "total" ----------
    // Declaramos e inicializamos el acumulador en 0.
    // Esta variable existe SOLO dentro de la función (scope local).
    let total = 0;

    // Validación adicional: si numberDishes no es positivo se trata como 0.
    // (Evita bucles innecesarios o errores si pasan 0 o negativo).
    if (typeof numberDishes !== "number" || numberDishes <= 0) {
        console.log("No hay platillos para procesar. Total: $0");
        console.log("¡Gracias por tu visita!");
        return;
    }

    // Normalizamos el nombre del platillo para aceptar mayúsculas o minúsculas.
    const normalizeSaucer = String(saucer).trim().toUpperCase(); // evita errores si pasan algo que no es string.

    // ---------- BUCLE (for): repetimos por cada platillo ----------
    // 'i' está declarada con let → su scope es del bloque del for (no global).
    for (let i = 1; i <= numberDishes; i++) {
        console.log("Agregando platillo #" + i);

        // ---------- SELECCIÓN (switch): qué platillo y cuánto suma ----------
        // Se usa switch para elegir el precio según el platillo.
        switch (normalizeSaucer) {
            case "TACO":
                total += 50; // acumulador
                console.log("Taco agregado ($50)");
                break;
            case "PIZZA":
                total += 100;
                console.log("Pizza agregada ($100)");
                break;
            case "ENSALADA":
                total += 80;
                console.log("Ensalada agregada ($80)");
                break;
            default:
                // Si el platillo no es válido, se informa y no se suma nada.
                console.log("Platillo no válido (no se suma al total)");
                break;
        }
        // Fin de una iteración del for: vuelve a comprobar i <= numberDishes
    }

    // ---------- OUTPUT FINAL ----------
    console.log("Total de la cuenta: $" + total);
    console.log("¡Gracias por tu visita!");
}
// Llamada de ejemplo
restaurant(20, 3, "taco"); 
// Llamada con menor de edad
restaurant(10, 2, "pizza");
// Llamada con platillo inválido
restaurant(25, 4, "sushi");
// Llamada con 0 platillos
restaurant(30, 0, "ensalada");
// Llamada con número negativo de platillos
restaurant(30, -2, "taco");

// ---------------- NOTAS (hoisting / scope) ----------------

// HOISTING:
//  La línea que llama a `restaurant(...)` arriba funciona aunque la definición
//  de la función aparezca después en el archivo. Eso se debe a que las
//  declaraciones de función (function nombre() {...}) se "elevaron" durante
//  la fase de compilación del intérprete JS.

// SCOPE:
//  `total` fue declarado con `let` dentro de la función -> sólo existe dentro
//  de `restaurant`. Si se intenta hacer `console.log(total)` fuera de la función
//  obtendrás `ReferenceError: total is not defined`.

//  La variable `i` del for, si se intenta hacer `console.log(i);` 
//  también está limitada al bloque del for (por ser `let`).

//  En el caso de `normalizeSaucer`, al estar declarada con `const` dentro de la función,
//  también es local a la función.

//  Pasa lo mismo con los parámetros `age`, `numberDishes` y `saucer`,
//  que son locales a la función.