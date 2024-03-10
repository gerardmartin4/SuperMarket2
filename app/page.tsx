import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px' }}>
        <h1>Mi Supermarket</h1>
      </header>
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <Link href="/">
          <a style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Inicio</a>
        </Link>
        <Link href="/page2.tsx">
          <a style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Acerca de este juego</a>
        </Link>
        <Link href="/system-requirements">
          <a style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Requisitos del Sistema</a>
        </Link>
      </nav>
      <section style={{ padding: '20px' }}>
        <h2>Explora el Mundo del Supermercado</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
          <Image
            src="/foto1.jpg" // Añade la ruta correcta de tu imagen
            alt="Supermarket"
            width={400}
            height={250}
            style={{ margin: '0 auto' }} // Centra la imagen horizontalmente
          />
          <h3 style={{ marginTop: '10px' }}>Título del Producto</h3>
          <p>Dirige tu propio supermercado. Abastece las estanterías, fija los precios a tu gusto, acepta pagos, contrata personal, amplía y diseña tu tienda. Pedidos y entregas en línea, ladrones, seguridad, mercado local.</p>
          <a href="https://store.steampowered.com/app/2670630/Supermarket_Simulator/" target="_blank" rel="noopener noreferrer" style={{ display: 'block', margin: '10px auto', backgroundColor: '#004080', color: '#fff', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none' }}>Comprar Videojuego</a>
        </article>
        {/* Otra sección similar para la segunda imagen */}
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
