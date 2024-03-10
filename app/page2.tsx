// Importa los módulos necesarios
import Image from "next/image";
import Link from 'next/link';

// Definición del componente
const Page2 = () => {
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
        {/* Agrega más enlaces según sea necesario */}
      </nav>
      <section style={{ padding: '20px' }}>
        <h2>ACERCA DE ESTE JUEGO</h2>
        <p>
          "Supermarket Simulator" es una escalofriante simulación en primera persona en la que cada detalle de la gestión de un supermercado cobra vida.
        </p>
        <p>
          Diseña tu tienda, optimizando la eficiencia y la estética. Determina dónde se exponen los productos, gestiona tus pasillos y garantiza una experiencia de compra fluida para tus clientes.
        </p>
        <p>
          Ordena las existencias utilizando un ordenador del juego. Desembala los productos, organízalos en tu almacén y colócalos en estanterías, frigoríficos y congeladores.
        </p>
        <p>
          Escanea artículos, acepta pagos en efectivo y con tarjeta de crédito, y asegúrate de que los clientes se van satisfechos con su experiencia de compra y pago.
        </p>
        <p>
          Navegue por las complejidades de un mercado en tiempo real. Compre productos cuando los precios bajen y determine los precios más vendidos para equilibrar la satisfacción del cliente con los márgenes de beneficio.
        </p>
        <p>
          A medida que acumules beneficios, plantéate reinvertir. Amplía el espacio físico de tu tienda, mejora los interiores y adáptate continuamente a las cambiantes demandas del mundo minorista.
        </p>
        <p>
          En "Supermarket Simulator", cada decisión cuenta. ¿Estarás a la altura de las circunstancias, transformando un modesto establecimiento en una potencia del comercio minorista, equilibrando al mismo tiempo la satisfacción del cliente y las finanzas?
        </p>
      </section>
      <footer style={{ backgroundColor: '#333', color: '#fff', textAlign: 'center', padding: '10px', position: 'fixed', bottom: '0', width: '100%' }}>
        <p>Derechos de autor © 2024 Mi Supermarket Simulator</p>
      </footer>
    </div>
  );
}

// Exporta el componente
export default Page2;
