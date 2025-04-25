import { ArrowRight, CheckCircle } from "lucide-react"
import ServiceCard from "@/components/service-card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Cloud Storage",
      description: "Armazenamento seguro e escalável para todos os seus dados empresariais com backup automático.",
      icon: "cloud",
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "Análise de Dados",
      description: "Transforme seus dados em insights acionáveis com nossa plataforma de análise avançada.",
      icon: "bar-chart",
      color: "bg-red-500",
    },
    {
      id: 3,
      title: "Automação de Processos",
      description: "Automatize fluxos de trabalho repetitivos e aumente a produtividade da sua equipe.",
      icon: "settings",
      color: "bg-yellow-500",
    },
    {
      id: 4,
      title: "Gestão de Projetos",
      description: "Gerencie projetos com facilidade, acompanhe prazos e colabore com sua equipe em tempo real.",
      icon: "clipboard-list",
      color: "bg-green-500",
    },
    {
      id: 5,
      title: "CRM Inteligente",
      description: "Gerencie relacionamentos com clientes e aumente suas vendas com nosso CRM baseado em IA.",
      icon: "users",
      color: "bg-orange-500",
    },
    {
      id: 6,
      title: "Segurança Avançada",
      description: "Proteja seus dados e aplicações com nossa solução de segurança de nível empresarial.",
      icon: "shield",
      color: "bg-red-500",
    },
  ]

  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Soluções SaaS para impulsionar seu negócio
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mb-8">
              Transforme sua empresa com nossas soluções de software como serviço, projetadas para aumentar a
              produtividade e impulsionar o crescimento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90">
                Começar agora
              </Button>
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Agendar demonstração
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma ampla gama de soluções SaaS para atender às necessidades do seu negócio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                icon={service.icon}
                color={service.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Por que escolher nossa plataforma?</h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa plataforma SaaS oferece tudo o que você precisa para transformar seu negócio e alcançar novos
                patamares de sucesso.
              </p>

              <ul className="space-y-4">
                {[
                  "Implementação rápida e sem complicações",
                  "Suporte técnico 24/7",
                  "Atualizações regulares com novos recursos",
                  "Segurança de nível empresarial",
                  "Escalabilidade para crescer com seu negócio",
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-400 via-orange-500 to-red-500 rounded-xl p-1">
              <div className="bg-white rounded-lg p-8 h-full">
                <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center mb-6">
                  <p className="text-gray-500 text-center">Imagem da plataforma</p>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Experimente gratuitamente</h3>
                <p className="text-gray-600 mb-4">
                  Teste nossa plataforma por 14 dias sem compromisso e descubra como podemos ajudar seu negócio.
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600">
                  Iniciar teste gratuito
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-500 to-yellow-500 py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold text-white mb-4">Pronto para transformar seu negócio?</h2>
              <p className="text-white/90 text-lg">
                Junte-se a milhares de empresas que já estão usando nossas soluções SaaS.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-green-600 hover:bg-white/90">
                Começar agora <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
