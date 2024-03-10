import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px' }}>
        <h1 style={{ fontSize: '3em' }}>Mi Supermarket</h1>
      </header>
      <section style={{ padding: '20px' }}>
        <h2 style={{ fontSize: '2em' }}>Explora el Mundo del Supermercado</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px',backgroundColor: '#000', marginBottom: '20px', padding: '15px' }}>
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
        <h2 style={{ fontSize: '2em' }}>Acerca de este juego</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px',backgroundColor: '#000', marginBottom: '20px', padding: '15px' }}>
            <h3 style={{ fontSize: '1em' }}>Administración de la tienda</h3>
              <p>Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.</p>
              <Image
                src="/Gestion.jpg" 
                alt="Cajero"
                width={400}
                height={250}
                style={{ margin: '0 auto' }} 
              />
            <h3 style={{ fontSize: '1em' }}>Suministra tu empresa</h3>
              <p>Ordena las existencias utilizando un ordenador del juego. Desembala los productos, organízalos en tu almacén y colócalos en estanterías, frigoríficos y congeladores.</p>
              <Image
                src="/Almacenamiento.jpg" 
                alt="Cajero"
                width={400}
                height={250}
                style={{ margin: '0 auto' }} 
              />
            <h3 style={{ fontSize: '1em' }}>Cajero</h3>
              <p>Escanea artículos, acepta pagos en efectivo y con tarjeta de crédito, y asegúrate de que los clientes se van satisfechos con su experiencia de compra y pago.</p>
              <Image
                src="/Cajero.jpg" 
                alt="Cajero"
                width={400}
                height={250}
                style={{ margin: '0 auto' }} 
              />
            <h3 style={{ fontSize: '1em' }}>Mercado libre</h3>
              <p>Navegue por las complejidades de un mercado en tiempo real. Compre productos cuando los precios bajen y determine los precios más vendidos para equilibrar la satisfacción del cliente con los márgenes de beneficio.</p>
              <Image
                src="/MercadoLibre.jpg" 
                alt="Cajero"
                width={400}
                height={250}
                style={{ margin: '0 auto' }} 
              />
            <h3 style={{ fontSize: '1em' }}>Expandete</h3>
              <p>A medida que acumules beneficios, plantéate reinvertir. Amplía el espacio físico de tu tienda, mejora los interiores y adáptate continuamente a las cambiantes demandas del mundo minorista.</p>
              <Image
                src="/Expansion.jpg" 
                alt="Supermarket"
                width={400}
                height={250}
                style={{ margin: '0 auto' }} 
              />
        </article>
        <h2 style={{ fontSize: '2em' }}>Requisitos del Sistema</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px', display: 'flex',backgroundColor: '#000', justifyContent: 'space-between', flexWrap: 'wrap'  }}>
          <div style={{ width: '48%' }}>
            <h3 style={{ fontSize: '1em' }}>MÍNIMO</h3>
            <p>SO: Windows (64-bit) 10</p>
            <p>Procesador: i5 3550 / RYZEN 5 2500X</p>
            <p>Memoria: 4 GB de RAM</p>
            <p>Gráficos: NVIDIA GTX 1050 / AMD R9 270X</p>
            <p>DirectX: Versión 11</p>
            <p>Almacenamiento: 5 GB de espacio disponible</p>
          </div>
          <div style={{ width: '48%' }}>
            <h3 style={{ fontSize: '1em' }}>RECOMENDADO</h3>
            <p>SO: Windows (64-bit) 10</p>
            <p>Procesador: i5 7600K / Ryzen 5 2600x</p>
            <p>Memoria: 8 GB de RAM</p>
            <p>Gráficos: NVIDIA GTX 1060 / AMD RX 480</p>
            <p>DirectX: Versión 11</p>
            <p>Almacenamiento: 5 GB de espacio disponible</p>
          </div>
        </article>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}
