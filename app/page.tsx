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
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
          <h2>Acerca de este juego</h2>
          <p>"Supermarket Simulator" es un juego de simulación en primera persona en el que cada detalle de la gestión de un supermercado cobra vida.</p>
          <h3>Administración de la tienda</h3>
          <p>Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.</p>
        </article>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
