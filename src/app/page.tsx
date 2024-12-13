import Image from "next/image";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Speed Unlimited Original",
      description: "Energía explosiva para tus noches más intensas",
      price: 230,
      image: "/470.jpg",
    },
    {
      id:  2,
      name: "Speed Unlimited Tropical",
      description: "Frescura energizante con un toque exótico",
      price: 230,
      image: "/speed45.PNG",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      <Header />

      <main className="container mx-auto px-4 md:px-0">
        <section className="text-center py-10">
          <h2 className="text-5xl font-extrabold mb-6 animate-pulse">
            Desata tu Energía Nocturna
          </h2>
          <p className="text-xl mb-8">
            Descubre yu poder y lleva tus noches al siguiente nivel
          </p>
          <Button
            size="lg"
            className="bg-neon-blue text-black hover:bg-neon-blue/80"
          >
            Explora Nuestros Sabores
          </Button>
        </section>

        <section id="productos" className="py-10">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros Productos
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 justify-center">
            {products.map((product) => (
              <Card key={product.id} className="w-64 bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300">
                {/* Contenedor de imagen usando aspect-ratio para mantener proporción */}
                <div className="relative w-full aspect-square bg-gray-50">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover rounded-t-xl"
                  />
                </div>

                <CardContent className="p-4">
                  <h3
                    className="text-lg font-bold text-gray-900"
                    title={product.name}
                  >
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

      </main>

      <footer className="bg-gray-900 py-6">
        <div className="container mx-auto px-4 md:px-0 text-center">
          <p>&copy; 2024 Speed Unlimited. Todos los derechos reservados.</p>
          <p className="mt-2 text-sm text-gray-400">
            Consume responsablemente. No recomendado para menores de edad,
            mujeres embarazadas o personas sensibles a la cafeína.
          </p>
        </div>
      </footer>
    </div>
  );
}
