function toggleMode() {
    const html = document.documentElement

   // if (html.classList.contains('light')){
  //      html.classList.remove('light')
   // } else{
   //     html.classList.add('light')
   // }
//}

html.classList.toggle('light')
// pegar a tag img
//se tiver light mode, adiciopnar a img light
//se tibver sem light mode, manter img
const img = document.querySelector("#profile img")

if(html.classList.contains('light')){
    img.setAttribute('src','./assets/light.png')
} else{

    img.setAttribute('src','./assets/dark .png')
}

}