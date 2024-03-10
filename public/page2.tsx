import Image from "next/image";
import Link from 'next/link';

const Page2  {
  return (
   return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px' }}>
        <h1>Mi Supermarket</h1>
      </header>
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <Link href="/">
          <a style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Inicio</a>
        </Link>
        <Link href="/page2">
          <a style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Page 2</a>
        </Link>
         </nav>
      <section style={{ padding: '20px' }}>
        <h2>ACERCA DE ESTE JUEGO</h2>
        <p>
          "Supermarket Simulator" es una escalofriante simulación en primera persona en la que cada detalle de la gestión de un supermercado cobra vida.
        </p>
        <p>
          Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.
        </p>
        {/* ... Añade más párrafos según sea necesario */}
      </section>
      {/* ... Agrega más secciones según sea necesario */}
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
export default Page2;
