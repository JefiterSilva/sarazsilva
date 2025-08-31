import About from './components/about';
import BestSellerCard from './components/best-seller-card';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import PromoModal from './components/promo-modal';

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header em tela inteira */}
      <section className="h-screen">
        <Header />
      </section>

      {/* Conteúdo principal */}
      <div id="main-content">
        <PromoModal />
        <BestSellerCard />
        <About />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
