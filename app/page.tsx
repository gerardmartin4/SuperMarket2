import Image from "next/image";

export default function Home() {
  return (
   <div>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '20px', textAlign: 'center' }}>
                <h1>Mi Blog</h1>
            </header>
            <nav style={{ backgroundColor: '#666', padding: '10px', textAlign: 'center' }}>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Inicio</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Artículos</a>
                <a href="#" style={{ color: '#fff', textDecoration: 'none', padding: '0 10px' }}>Contacto</a>
            </nav>
            <section style={{ padding: '20px' }}>
                <h2>Últimas publicaciones</h2>
                <article>
                    <h3>Título del primer artículo</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur metus id leo efficitur, a posuere quam finibus.</p>
                    <a href="#">Leer más</a>
                </article>
                <article>
                    <h3>Título del segundo artículo</h3>
                    <p>Sed euismod justo in tempor aliquam. Ut feugiat quam eu eros laoreet efficitur.</p>
                    <a href="#">Leer más</a>
                </article>
            </section>
            <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
                <p>Derechos de autor © 2024 Mi Blog</p>
            </footer>
        </div>
  );
}
