import Image from "next/image";

export default function Home() {
  return (
   <!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Supermarket Game Update</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f4f4f4;
    }
    #container {
      text-align: center;
    }
    h1 {
      color: #333;
    }
    p {
      color: #666;
    }
    button {
      padding: 10px 20px;
      font-size: 16px;
      cursor: pointer;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 5px;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div id="container">
    <h1>Supermarket Game Update</h1>
    <p>Avance del juego: <span id="progress">0</span>% completado</p>
    <button onclick="updateProgress()">Actualizar Avance</button>
  </div>

  <script>
    let gameProgress = 0;

    function updateProgress() {
      // Lógica para actualizar el progreso del juego
      // Puedes ajustar esto según tus necesidades
      gameProgress = Math.min(gameProgress + 10, 100);
      document.getElementById('progress').innerText = gameProgress;
    }
  </script>
</body>
</html>
  );
}
