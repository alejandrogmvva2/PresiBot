const welmenu = (prefix, pushname) => {
    return `
*Comandos De Bienvenida 👋*

*PARA ACTIVAR LA BIENVENIDA*

- ${prefix}welcome 1

*PARA DESACTIVAR LA BIENVENIDA*

- ${prefix}welcome 0

_Para activar este comando Presi tiene que tener admin._
`

}

exports.welmenu = welmenu
