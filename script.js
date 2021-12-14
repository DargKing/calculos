const basicCalcs = {
        // Estas ecuaciones no necesitan explicacion
        suma: function (a, b) {
                let c = a + b;
                return c;
        },
        resta: function (a, b) {
                let c = a - b;
                return c;
        },
        division: function (a, b) {
                let c = a / b;
                return c;
        },
        multiplicacion: function (a, b) {
                let c = a * b;
                return c;
        }

}

const basicsEcuations = {                                            // Estas son ecuaciones basicas

        teoremaDePitagoras: function (a, b, c, sistemaDeMedida) {        // Al lado que se quiere saber su resultado se le debe de introducir como valor "null"

                if (c == null) {                          // C^2 = A^2 + B^2
                        a = a ** 2                        // Se eleva al cuadrado a
                        b = b ** 2                        // Se eleva al cuadrado b
                        let first = basicCalcs.suma(a, b)                     // Se suma a + b
                        let resultado = Math.sqrt(first).toPrecision(4);        // Se saca la raiz cuadrada de ab 
                        return resultado;                                       // Se retorna el resultado

                } else if (b == null && a < c) {           // B^2 = C^2 - A^2

                        a = a ** 2;                        // Se eleva al cuadrado a
                        c = c ** 2;                        // Se eleva al cuadrado c
                        let first = basicCalcs.resta(c, a);                   // Se resta a - c
                        let resultado = Math.sqrt(first).toPrecision(4);        // Se saca la raiz cuadrada de ca
                        return resultado;                                       // Se retorna el resultado

                } else if (a == null && b < c) {           // A^2 = C^2 - B^2

                        b = b ** 2;                        // Se eleva al cuadrado b
                        c = c ** 2;                        // Se eleva al cuadrado c
                        let first = basicCalcs.resta(c, b);                   // Se resta b - c
                        let resultado = Math.sqrt(first).toPrecision(4);        // Se saca la raiz cuadrada de cb
                        return resultado;                                       // Se retorna el resultado

                } else {
                        let error = "Hubo un error, compruebe los datos e introdusca de nuevo su valor"; // En caso de error  se retorna este texto
                        return error;                                                                    // Retorna el error
                }

        },


        MRU: function (v, x, t) {                                               /* Movimiento Rectilineo Uniforme, Todo esto esta calculado en metros/segundo
                                                                                        Se debe poner "null" a la incognita*/
                if (v == null) {                                                  // La formula es: V = X / t
                        let resultado = basicCalcs.division(x, t).toPrecision(4);            // Se divide distancia entre tiempo
                        return resultado;
                } else if (x == null) {                                            // La formula es: X = V * t
                        let resultado = basicCalcs.multiplicacion(v, t).toPrecision(4);            // Se divide distancia entre tiempo
                        return resultado;
                } else if (t == null) {                                            // La formula es: t = X / V
                        let resultado = basicCalcs.division(x, v).toPrecision(4);
                        return resultado;
                } else {
                        let error = "Hubo un error, compruebe los datos e introdusca de nuevo su valor"; // En caso de error  se retorna este texto
                        return error;                                                                    // Retorna el error
                }

        },


        MRUV: {                                                 /* Movimiento Rectilineo Uniforme Variado, todo esta calculado en m/seg
                                                                Se debe poner "null" a la incognita a calcular*/
                
                        a: function (a, vf, vo, t) {            // Este es para calcular la aceleracion
                        if (a == null) {                          // la formula es: a = Vf - Vo / t
                                let resultado = (vf - vo) / t;
                                return resultado;
                        } else if (vo == null) {                  // La formula es: Vo = Vf - a * t
                                let resultado = vf - a * t;
                                return resultado;
                        } else if (vf == null) {                  // La formula es: Vf = a * t + Vo
                                let resultado = a * t + vo;
                                return resultado;
                        } else if (t == null) {                   // La formula es: t = Vf - Vo / a
                                let resultado = vf - vo / a;
                                return resultado;

                        } else {
                                let error = "Hubo un error, compruebe los datos e introdusca de nuevo su valor"; // En caso de error  se retorna este texto
                                return error;                                                                    // Retorna el error
                        }
                },
                x: function (x, a, vo, t) {                     // Este es para calcular la distancia
                        if (x == null) {                        // Su formula es: X = Vo * t + a * t^2 / 2
                                let resultado = vo * t + ((a / 2) * (t**2));
                                return resultado;
                        } else if (a == null) {                 // Su formula es: a = 2(x) / t^2   -   2Vo / t
                                let numerador = (2 * x) * t
                                let denominador = (t**2) * (2 * vo)
                                let resultado = (numerador - denominador) / (t**2 * t) ;
                                return resultado;
                        } else if (vo == null) {

                        } else if (t == null) {

                        } else {
                                let error = "Hubo un error, compruebe los datos e introdusca de nuevo su valor"; // En caso de error  se retorna este texto
                                return error;                                                                    // Retorna el error
                        }
                }
        }
}

// Calculos basicos

console.log("Suma:", basicCalcs.suma(2, 2));
console.log("Resta:", basicCalcs.resta(10, 5));
console.log("Division:", basicCalcs.division(100, 10));
console.log("Multiplicacion:", basicCalcs.multiplicacion(10, 10));


// Ecuaciones Basicas, Para calcular estas se debe colocar en la incognita "null"

console.log("Teorema De Pitagoras:", basicsEcuations.teoremaDePitagoras(10, 10, null));                 // teoremaDePitagoras(a, b, c)
console.log("Movimiento Rectilineo Uniforme:", basicsEcuations.MRU(2, 3, null));                        // MovimientoRectilineoUniforme(v, x, t)
console.log("Movimiento Rectilineo Uniforme Variado(aceleracion):", basicsEcuations.MRUV.a(45, null, 50, 10));        /* Calcular aceleracion de 
                                                                                                                MovimientoRectilineoUniformeVariado(a, vf, vo, t)*/
console.log("Movimiento Rectilineo Uniforme Variado(distancia):", basicsEcuations.MRUV.x(1050, 19, null, 10));             /* Calcular distancia de 
                                                                                                                MovimientoRectilineoUniformeVariado(x, a, vo, t) 
                                                                                                                1050, 19, 10, 10 */

