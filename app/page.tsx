import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px' }}>
        <h1>Mi Supermarket</h1>
      </header>
      <section style={{ padding: '20px' }}>
        <h2>Explora el Mundo del Supermercado</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
          <Image
            src="/foto1.jpg" 
            alt="Supermarket"
            width={400}
            height={250}
            style={{ margin: '0 auto' }} 
          />
          <p>Dirige tu propio supermercado. Abastece las estanterías, fija los precios a tu gusto, acepta pagos, contrata personal, amplía y diseña tu tienda. Pedidos y entregas en línea, ladrones, seguridad, mercado local.</p>
          <a href="https://store.steampowered.com/app/2670630/Supermarket_Simulator/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px auto', backgroundColor: '#004080', color: '#fff', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none' }}>Comprar Videojuego</a>
        </article>
        <h2>Acerca de este juego</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
            <h3>Administración de la tienda</h3>
              <p>Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.</p>
            <h3>Suministra tu empresa</h3>
              <p>Ordena las existencias utilizando un ordenador del juego. Desembala los productos, organízalos en tu almacén y colócalos en estanterías, frigoríficos y congeladores.</p>
            <h3>Cajero</h3>
              <p>Navegue por las complejidades de un mercado en tiempo real. Compre productos cuando los precios bajen y determine los precios más vendidos para equilibrar la satisfacción del cliente con los márgenes de beneficio.</p>
            <h3>Mercado libre</h3>
              <p>A medida que acumules beneficios, plantéate reinvertir. Amplía el espacio físico de tu tienda, mejora los interiores y adáptate continuamente a las cambiantes demandas del mundo minorista.</p>
            <h3>Expandete</h3>
              <p>En "Supermarket Simulator", cada decisión cuenta. ¿Estarás a la altura de las circunstancias, transformando un modesto establecimiento en una potencia del comercio minorista, equilibrando al mismo tiempo la satisfacción del cliente y las finanzas?</p>
        </article>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
