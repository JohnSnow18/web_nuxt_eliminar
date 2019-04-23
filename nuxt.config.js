export default{
    head: { //creamos una clave y hace un encabezado
        title: "Mi pagina con nuxt",
        meta:[
            {
                "charset" : "utf8",
                name: "viewport", content: "width=device-wind, initial-scale=1.0"
            }
        ]

    },
    modules: [ //modules es un arreglo
        'bootstrap-vue/nuxt'
    ]
}