const help = (prefix) => {
	return `
 ⌜ *PresiBot by Presi* ⌟  

◉ *INFORMACIóN*
   ○ Prefijo: ⌜ ${prefix} ⌟
   ○ Creador: Presi 
   ○ Instagram: @illo.presi

◉ *NUEVO COMANDO*
- ${prefix}attp
Envia el comando mas un texto

◉ *NUEVOS MENUS*
- ${prefix}desmenu
Descargar musica y videos de YT
- ${prefix}version
Conoce la versión del bot
- ${prefix}welmenu
Comandos de bienvedia a grupos

◉ *PARA USAR EL BOT*
Registrate con el comando ${prefix}daftar y tu nombre

◉ *RESUELVE TUS DUDAS*
  ║
  ╠ ○ ${prefix}creador
  ╚ Dudas o problemas aqui

◉ *CREAR STICKERS*
  ║
  ╠ ○ ${prefix}sticker
  ╠ ○ ${prefix}stickergif
  ╚ 6 segundos de video

◉ *CONVERTIDORES*
  ║
  ╠ ○ ${prefix}toimg
  ╠ De sticker a JPG
  ╠ ○ ${prefix}tomp3
  ╚ De video a MP3

◉ *AUDIO*
  ║
  ╠ ○ ${prefix}bahasa
  ╚ ○ ${prefix}tts es (mas texto)

◉ *OTROS*
  ║
  ╠ ○ ${prefix}wame
  ╠ Link de Whatsapp
  ╠ ○ ${prefix}qrcode
  ╚ Coloca un texto

◉ *GRUPOS*
  ║
  ╠ ○ ${prefix}closegc
  ╠ Cerrar el grupo solo admins
  ╠ ○ ${prefix}opengc
  ╠ Abrir grupo solo admins
  ╠ ○ ${prefix}kick o pafuera
  ╠ Eliminar a un miembro 
  ╠ ○ ${prefix}promote
  ╠ Dar admin a un miembro
  ╠ ○ ${prefix}demote
  ╠ Quitar el admin
  ╠ ○ ${prefix}linkgc
  ╠ Link del grupo
  ╠ ○ ${prefix}todos
  ╚ Nombra a todos los del grupo

Para usar estas funciones el bot necesita admin
  
◉ *NSWF* 
  ║
  ╚ ○ ${prefix}nsfwmenu

Para activar los NSFW coloque el siguiente comando ${prefix}nsfw 1 y para desactivar los NSFW coloque ${prefix}nsfw 0

Illo sigueme en insta que me lo he currao

`
}

exports.help = help
