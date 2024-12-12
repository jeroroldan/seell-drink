import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "./components/Header";

export default function Home() {
  const products = [
    {
      name: "Speed Unlimited Original",
      description: "Energía explosiva para tus noches más intensas",
      features: ["Sabor clásico", "Máxima cafeína", "Vitaminas B"],
      image: "/speed-unlimited-original.png",
    },
    {
      name: "Speed Unlimited Tropical",
      description: "Frescura energizante con un toque exótico",
      features: [
        "Mezcla de frutas tropicales",
        "Taurina potenciada",
        "Electrolitos",
      ],
      image: "/speed-unlimited-tropical.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black text-white">
      <Header />

      <main className="container mx-auto px-4 md:px-0">
        <section className="text-center py-20">
          <h2 className="text-5xl font-extrabold mb-6 animate-pulse">
            Desata tu Energía Nocturna
          </h2>
          <p className="text-xl mb-8">
            Descubre yu poder y lleva tus noches al siguiente
            nivel
          </p>
          <Button
            size="lg"
            className="bg-neon-blue text-black hover:bg-neon-blue/80"
          >
            Explora Nuestros Sabores
          </Button>
        </section>

        <section id="productos" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12">
            Nuestros Productos
          </h2>
          <div className="grid sm:grid-cols-2 gap-8 justify-center">
            {products.map((product, index) => (
              <Card
                key={index}
                className="max-w-sm w-full mx-auto bg-gradient-to-br from-gray-800 to-gray-900 border-neon-blue hover:border-neon-pink transition-all duration-300 transform hover:scale-105"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-neon-blue">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-gray-300">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square relative mb-4 w-32 h-32 mx-auto">
                    <Image
                      src={product.image}
                      alt={product.name}
                      layout="fill"
                      objectFit="contain"
                      className="rounded-md"
                    />
                  </div>
                  <ul className="list-disc list-inside text-gray-300 text-sm">
                    {product.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-pink text-black hover:from-neon-pink hover:to-neon-blue transition-all duration-300">
                    Comprar Ahora
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <section id="about" className="py-20 text-center">
          <h2 className="text-4xl font-bold mb-6">Sobre Speed Unlimited</h2>
          <p className="text-xl mb-8">
            Nacimos para potenciar tus experiencias nocturnas. Con ingredientes
            de alta calidad y sabores únicos, Speed Unlimited te acompaña en
            cada aventura, fiesta y momento inolvidable.
          </p>
          <Button
            variant="outline"
            className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-black transition-all duration-300"
          >
            Conoce Nuestra Historia
          </Button>
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
