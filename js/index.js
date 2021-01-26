let htmlBox = document.querySelector(".html"),
    cssBox = document.querySelector(".css"),
    jsBox = document.querySelector(".js"),
    viewBox = document.querySelector(".view")

htmlBox.onchange = change
cssBox.onchange = change
jsBox.onchange = change

function change (){
  console.log("+")
  viewBox.innerHTML = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
    </head>
    <body>
      <style>
        ${cssBox.value}
      </style>
      ${htmlBox.value}
    </body>
    </html>`
  eval(jsBox.value)
}


