import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container">
      <header className="header">
        <h1>Mi Supermarket</h1>
      </header>
      <section className="main-section">
        <h2>Explora el Mundo del Supermercado</h2>
        <article className="main-article">
          <Image
            src="/foto1.jpg" 
            alt="Supermarket"
            width={400}
            height={250}
            style={{ margin: '0 auto' }} 
          />
          <p>Dirige tu propio supermercado. Abastece las estanterías, fija los precios a tu gusto, acepta pagos, contrata personal, amplía y diseña tu tienda. Pedidos y entregas en línea, ladrones, seguridad, mercado local.</p>
          <a href="https://store.steampowered.com/app/2670630/Supermarket_Simulator/" target="_blank" rel="noopener noreferrer" className="buy-button">Comprar Videojuego</a>
        </article>
        
        <article className="about-game">
          <h3>ACERCA DE ESTE JUEGO</h3>
          <p>"Supermarket Simulator" es una escalofriante simulación en primera persona en la que cada detalle de la gestión de un supermercado cobra vida.</p>
          <p>Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.</p>
  
          <p>Ordena las existencias utilizando un ordenador del juego. Desembala los productos, organízalos en tu almacén y colócalos en estanterías, frigoríficos y congeladores.</p>
  
          <p>Escanea artículos, acepta pagos en efectivo y con tarjeta de crédito, y asegúrate de que los clientes se van satisfechos con su experiencia de compra y pago.</p>
  
          <p>Navegue por las complejidades de un mercado en tiempo real. Compre productos cuando los precios bajen y determine los precios más vendidos para equilibrar la satisfacción del cliente con los márgenes de beneficio.</p>
  
          <p>A medida que acumules beneficios, plantéate reinvertir. Amplía el espacio físico de tu tienda, mejora los interiores y adáptate continuamente a las cambiantes demandas del mundo minorista.</p>
  
          <p>En "Supermarket Simulator", cada decisión cuenta. ¿Estarás a la altura de las circunstancias, transformando un modesto establecimiento en una potencia del comercio minorista, equilibrando al mismo tiempo la satisfacción del cliente y las finanzas?</p>
        </article>
      </section>
      <footer className="footer">
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
