import {calcularIVA2,Producto} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[
    {
        desc:'Telefono1',
        precio: 100
    },
    {
        desc:'Telefono2',
        precio: 100
    },
]

const [total, iva]=calcularIVA2(carrito);
console.log(`Total: ${total}`)
console.log(`IVA: ${iva}`)