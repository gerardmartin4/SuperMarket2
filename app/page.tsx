import Image from "next/image";

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <header style={{ backgroundColor: '#004080', color: '#fff', padding: '20px' }}>
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
            src="/foto1.jpg" // Añade la ruta correcta de tu imagen
            alt="Supermarket"
            width={400}
            height={250}
            style={{ margin: '0 auto' }} // Centra la imagen horizontalmente
          />
          <h3 style={{ marginTop: '10px' }}>Título del Producto</h3>
          <p>Descubre los mejores productos para tu hogar. Desde alimentos frescos hasta artículos de limpieza.</p>
          <a href="#" style={{ display: 'block', margin: '10px auto', backgroundColor: '#004080', color: '#fff', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none' }}>Agregar al Carrito</a>
        </article>
        {/* Otra sección similar para la segunda imagen */}
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Sim</p>
      </footer>
    </div>
  );
}
