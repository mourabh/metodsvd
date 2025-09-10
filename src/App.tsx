import React, { useState, useEffect } from 'react';
import { Play, Star, CheckCircle, Clock, Users, TrendingUp, ArrowRight, X } from 'lucide-react';

function App() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Empreendedor Digital",
      content: "Com o Método SVD consegui estruturar minha máquina de vendas em apenas 1 dia. Resultado: 300% de aumento nas conversões!",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Ana Costa",
      role: "Coach de Negócios",
      content: "A mentoria do Jader mudou completamente minha abordagem. Agora tenho um sistema que vende 24h por dia!",
      rating: 5,
      image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Mendes",
      role: "Consultor de Marketing",
      content: "Implementei tudo que aprendi e em 30 dias dobrei meu faturamento. O método realmente funciona!",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const benefits = [
    "Sistema completo de vendas automatizado",
    "Estratégias de copywriting que convertem",
    "Funis de vendas otimizados",
    "Técnicas avançadas de Meta Ads e Google Ads",
    "Scripts de vendas testados e aprovados",
    "Acompanhamento personalizado por 30 dias",
    "Acesso vitalício ao material",
    "Grupo VIP no Telegram"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold">Método SVD</div>
            <div className="text-sm">
              <span className="bg-red-600 px-3 py-1 rounded-full animate-pulse">
                OFERTA LIMITADA
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crie Sua <span className="text-blue-600">Máquina de Vendas</span> em Apenas 1 Dia
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Mentoria individual exclusiva com Jader Moura para implementar o sistema completo 
              que já gerou mais de R$ 50 milhões em vendas online
            </p>
            
            {/* Video Thumbnail */}
            <div className="relative mb-8">
              <div 
                className="relative bg-black rounded-2xl overflow-hidden cursor-pointer group shadow-2xl"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <img 
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop"
                  alt="Jader Moura - Método SVD"
                  className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-6 group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-12 h-12 text-white ml-1" fill="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm opacity-90">▶ Assista ao vídeo explicativo</p>
                </div>
              </div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-red-600 text-white rounded-2xl p-6 mb-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-4">⏰ Oferta Expira Em:</h3>
              <div className="flex justify-center space-x-4 text-center">
                <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
                  <div className="text-sm">Horas</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
                  <div className="text-sm">Minutos</div>
                </div>
                <div className="bg-white bg-opacity-20 rounded-lg p-4 min-w-[80px]">
                  <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
                  <div className="text-sm">Segundos</div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button className="bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
              🚀 QUERO MINHA MENTORIA AGORA
            </button>
            <p className="text-sm text-gray-600 mt-4">
              ✅ Vagas limitadas • ✅ Garantia de 7 dias • ✅ Suporte incluso
            </p>
          </div>
        </div>
      </section>

      {/* About Jader */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                  alt="Jader Moura"
                  className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Conheça <span className="text-blue-600">Jader Moura</span>
                </h2>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p>Mais de 10 anos de experiência em marketing digital</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p>Responsável por mais de R$ 50 milhões em vendas online</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p>Especialista em Meta Ads, Google Ads e funis de vendas</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p>Mentor de centenas de empreendedores de sucesso</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <p>Criador do método SVD (Sistema de Vendas Digitais)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              O Que Você Vai Aprender na Mentoria
            </h2>
            <p className="text-xl text-gray-700">
              Um sistema completo para criar sua máquina de vendas do zero
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Estratégia de Vendas</h3>
              <p className="text-gray-600">Como estruturar um funil que converte visitantes em clientes pagantes</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tráfego Pago</h3>
              <p className="text-gray-600">Domínio completo do Meta Ads e Google Ads para gerar leads qualificados</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Copywriting</h3>
              <p className="text-gray-600">Técnicas de escrita persuasiva que fazem seus prospects comprarem</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Automação</h3>
              <p className="text-gray-600">Sistema que vende 24h por dia, mesmo enquanto você dorme</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Tudo Que Está Incluído na Mentoria
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-800 font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              O Que Nossos Alunos Estão Dizendo
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                  <div className="flex items-center mb-4">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              Investimento na Sua Transformação
            </h2>
            
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="mb-6">
                <div className="text-sm text-red-600 font-bold mb-2">DE R$ 2.997 POR APENAS</div>
                <div className="text-6xl font-bold text-green-600 mb-2">R$ 497</div>
                <div className="text-lg text-gray-600">ou 12x de R$ 49,70</div>
              </div>
              
              <div className="bg-red-100 text-red-800 p-4 rounded-lg mb-6">
                <p className="font-bold">🔥 OFERTA ESPECIAL - APENAS HOJE!</p>
                <p>Economia de mais de 80% no valor original</p>
              </div>

              <button className="w-full bg-green-500 hover:bg-green-600 text-white text-xl font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4">
                💳 GARANTIR MINHA VAGA AGORA
              </button>
              
              <div className="text-sm text-gray-600 space-y-2">
                <p>✅ Garantia incondicional de 7 dias</p>
                <p>✅ Acesso imediato após a confirmação</p>
                <p>✅ Suporte direto com o Jader</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
              Perguntas Frequentes
            </h2>
            
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Como funciona a mentoria?</h3>
                <p className="text-gray-700">É uma mentoria individual de 4 horas onde você aprende na prática como implementar todo o sistema SVD no seu negócio.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Preciso ter conhecimento prévio?</h3>
                <p className="text-gray-700">Não! O método foi desenvolvido para iniciantes e avançados. Você sairá da mentoria com tudo implementado.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Como é o suporte?</h3>
                <p className="text-gray-700">Você terá 30 dias de suporte direto comigo via WhatsApp para tirar todas as dúvidas.</p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2">E se eu não ficar satisfeito?</h3>
                <p className="text-gray-700">Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-green-500 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Não Perca Esta Oportunidade Única!
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Vagas limitadas para garantir a qualidade do atendimento. 
            Garante já a sua vaga e transforme seu negócio em 24 horas!
          </p>
          
          <button className="bg-white text-green-600 text-xl font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 mb-4">
            🎯 SIM, EU QUERO TRANSFORMAR MEU NEGÓCIO!
          </button>
          
          <p className="text-sm opacity-90">
            ⚡ Últimas vagas disponíveis • 🔒 Pagamento 100% seguro
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">Método SVD</h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Transformando empreendedores em máquinas de vendas desde 2015. 
              Mais de 50 milhões em vendas geradas para nossos alunos.
            </p>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Método SVD. Todos os direitos reservados. | 
              <span className="ml-2">CNPJ: 00.000.000/0001-00</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-lg max-w-4xl w-full">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video bg-black rounded-lg flex items-center justify-center">
              <p className="text-white text-xl">Vídeo explicativo do Método SVD</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;