import About from './components/about';
import BestSellerCard from './components/best-seller-card';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import TopBanner from './components/top-banner';

export default function LandingPage() {
  return (
    <div className="overflow-hidden bg-[#09090b] font-sans text-slate-50 selection:bg-blue-500/30">
      <TopBanner />

      {/* Header em tela inteira */}
      <section className="min-h-[90vh]">
        <Header />
      </section>

      {/* Conteúdo principal */}
      <div
        id="main-content"
        className="relative z-10 flex flex-col gap-20 pb-20"
      >
        {/* Main Offer Component */}
        <div className="container relative z-20 mx-auto -mt-20 px-4">
          <BestSellerCard />
        </div>

        {/* Curriculum / What you will learn */}
        <div className="container mx-auto px-4">
          <About />
        </div>

        {/* Other Products */}
        <div className="container mx-auto px-4">
          <div className="mb-10 text-center">
            <h2 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              Acelere Mais Sua Evolução
            </h2>
            <p className="text-slate-400">
              Explore mais materiais e cursos para revolucionar a mídia da sua
              igreja.
            </p>
          </div>
          <Main />
        </div>
      </div>

      <Footer />
    </div>
  );
}
