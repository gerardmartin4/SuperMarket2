import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px', textAlign: 'center' }}>
        <h1>Mi Supermarket</h1>
      </header>
      <nav style={{ backgroundColor: '#333', padding: '10px', textAlign: 'center' }}>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Inicio</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Productos</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Carrito</a>
        <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Contacto</a>
      </nav>
      <section style={{ padding: '20px' }}>
        <h2>Explora el Mundo del Supermercado</h2>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
          <Image
            src="/‪C:\Users\asixc1\Pictures\supermarket.jpg" // Añade la ruta correcta de tu imagen
            alt="Supermarket"
            width={400}
            height={250}
          />
          <h3>Título del Producto</h3>
          <p>Descubre los mejores productos para tu hogar. Desde alimentos frescos hasta artículos de limpieza.</p>
          <a href="#">Agregar al Carrito</a>
        </article>
        <article style={{ border: '1px solid #ddd', borderRadius: '8px', marginBottom: '20px', padding: '15px' }}>
          <Image
            src="/supermarket-image2.jpg" // Añade la ruta correcta de tu imagen
            alt="Supermarket"
            width={400}
            height={250}
          />
          <h3>Otro Producto Increíble</h3>
          <p>Encuentra ofertas y promociones emocionantes en nuestro simulador de supermercado.</p>
          <a href="#">Agregar al Carrito</a>
        </article>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Sim</p>
      </footer>
    </div>
  );
}
