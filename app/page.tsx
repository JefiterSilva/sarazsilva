import About from './components/about';
import BestSellerCard from './components/best-seller-card';

import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import ProjecaoCriativaDrawer from './components/projecao-criativa-drawer';

export default function LandingPage() {
  return (
    <div className="overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header em tela inteira */}
      <section className="h-screen">
        <Header />
      </section>

      {/* Conteúdo principal */}
      <div id="main-content">
        <BestSellerCard />
        <About />
        <Main />
        <Footer />
      </div>

      {/* Drawers que abrem automaticamente */}
      {<ProjecaoCriativaDrawer />}
    </div>
  );
}
