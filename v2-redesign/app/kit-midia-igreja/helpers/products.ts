import {
  Cable,
  Cpu,
  EthernetPort,
  Lightbulb,
  MonitorPlay,
  Network,
  SlidersHorizontal,
  Tv,
  Zap,
} from 'lucide-react';

export const products = [
  //produto1
  {
    name: 'Switch 24 Portas Gigabit TP-Link TL-SG1024D',
    image: '/kit-midia-produtos/switch-24.png',
    category: 'Backbone de rede',
    link: 'https://www.mercadolivre.com.br/switch-24-portas-gigabit-101001000-mbps-tp-link-tl-sg1024d/p/MLB12474056?matt_event_ts=1776118922217&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=b7436294-d0d9-41f1-825b-763cb24e9d73#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=85bb088d-eacb-43a3-9b31-6053f1110a75&wid=MLB3741098133&sid=storefronts',
    installment: '12x de R$ 61,30',
    summary:
      'Centraliza computadores, transmissores, mesa de rede e pontos da cabine com folga para crescer sem estrangular o sinal.',
    highlight:
      '24 portas 10/100/1000 Mbps para estrutura maior e mais estável.',
    icon: Network,
    accent: 'from-cyan-500/25 via-sky-500/10 to-transparent',
    tag: 'Infraestrutura',
  },
  //produto2
  {
    name: 'Roteador Deco M4 Mesh Gigabit Dual-Band AC1200',
    image: '/kit-midia-produtos/deco-m4.png',
    category: 'Cobertura Wi-Fi',
    link: '',
    installment: '10x de R$ 26,41',
    summary:
      'Leva internet mais estável para áreas onde o Wi-Fi comum falha, reduzindo travamentos em apps, TV box e celular de apoio.',
    highlight:
      'Rede mesh dual-band para eliminar pontos cegos em templo e salas anexas.',
    icon: Zap,
    accent: 'from-emerald-500/25 via-teal-500/10 to-transparent',
    tag: 'Sinal sem falhas',
  },
  //produto3
  {
    name: 'Switch TP-Link LS1005G 5 Portas Gigabit',
    image: '/kit-midia-produtos/switch-5.png',
    category: 'Expansão local',
    link: 'https://www.mercadolivre.com.br/switch-tp-link-ls1005g-5-portas-gigabit-101001000-mbps/p/MLB22256194?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB6594004750&sid=storefronts',
    installment: 'Loja oficial',
    summary:
      'Ideal para ligar notebook, operador, TV box e outros dispositivos na mesma mesa sem depender de adaptações improvisadas.',
    highlight:
      'Expansão rápida para pequenas ilhas técnicas com 5 portas gigabit.',
    icon: EthernetPort,
    accent: 'from-blue-500/25 via-indigo-500/10 to-transparent',
    tag: 'Organização',
  },
  //produto4
  {
    name: 'Controlador MIDI USB KFX CR9 com 9 faders e 9 knobs',
    image: '/kit-midia-produtos/controlador-midi.png',
    category: 'Automação criativa',
    link: 'https://www.mercadolivre.com.br/controlador-midi-usb-kfx-cr9-9-faders-9-knobs-4-cenas-mac-windows/p/MLB22369260?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB3715492402&sid=storefronts',
    installment: 'Parcelamento a partir de R$ 31,06',
    summary:
      'Ajuda a disparar cenas, ajustar parâmetros e ganhar velocidade na operação ao vivo com controle físico dedicado.',
    highlight:
      'Mais controle manual para iluminação, software e cenas recorrentes.',
    icon: SlidersHorizontal,
    accent: 'from-fuchsia-500/25 via-pink-500/10 to-transparent',
    tag: 'Automação',
  },
  //produto5
  {
    name: 'Fita LED 12V 5 metros 4100K 240 LEDs',
    image: '/kit-midia-produtos/fita-led.png',
    category: 'Ambientação visual',
    link: 'https://www.mercadolivre.com.br/fita-led-16wm-240-leds-pmt-12v-5-metros-4100k-sem-fonte-cor-da-luz-branco-neutro/p/MLB23448154?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB4268204133&sid=storefronts',
    installment: 'Faixa econômica',
    summary:
      'Cria acabamento luminoso em painel, bancada e cenário, elevando a percepção de qualidade visual do ambiente.',
    highlight:
      'Iluminação neutra para cenografia, painel e reforço de ambiência.',
    icon: Lightbulb,
    accent: 'from-amber-400/25 via-yellow-400/10 to-transparent',
    tag: 'Cenário',
  },
  //produto6
  {
    name: 'TV Box Smart Pro Eletronic 4K Android 16GB 2GB RAM',
    image: '/kit-midia-produtos/tv-box.png',
    category: 'Tela de retorno',
    link: 'https://www.mercadolivre.com.br/smart-pro-eletronic-tv-box-4k-ultra-hd-android-netflix-youtube-spotify-pluto-tv-google-play-apps-streamings-wi-fi-prosb-3000-16gb-2ram-transforme-sua-tv-em-smart/p/MLB47307836?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB4235330849&sid=storefronts',
    installment: 'Parcelamento a partir de R$ 26,56',
    summary:
      'Transforma televisores em monitores inteligentes para retorno, apoio visual ou distribuição de conteúdo com mais flexibilidade.',
    highlight: '4K, Android e apps de streaming para TVs de apoio e retorno.',
    icon: Tv,
    accent: 'from-violet-500/25 via-purple-500/10 to-transparent',
    tag: 'Versatilidade',
  },
  //produto7
  {
    name: 'Fonte Driver Slim 12V 20A 240W para fita LED',
    image: '/kit-midia-produtos/fonte-driver.png',
    category: 'Energia dedicada',
    link: 'https://www.mercadolivre.com.br/fonte-driver-slim-perfil-12v-20a-240w-fita-led-cob-smd-chave/p/MLB29242399?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB4790024298&sid=storefronts',
    installment: 'Enviado pelo FULL',
    summary:
      'Entrega alimentação mais segura e consistente para fitas LED e instalações cenográficas sem gambiarra.',
    highlight: 'Potência dedicada para LED com formato slim fácil de esconder.',
    icon: Cpu,
    accent: 'from-lime-500/25 via-green-500/10 to-transparent',
    tag: 'Confiança',
  },
  //produto8
  {
    name: 'Cabo HDMI 2.0 Fibra Óptica 50m 4K 60Hz 18Gbps',
    image: '/kit-midia-produtos/cabo-hdmi.png',
    category: 'Longa distância',
    link: 'https://www.mercadolivre.com.br/cabo-hdmi-20-fibra-optica-50m-tblack-4k-uhd-60hz-18gbps-preto-conector-ouro/p/MLB24395488?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB4660717486&sid=storefronts',
    installment: '8x de R$ 53,42',
    summary:
      'Leva vídeo de alta qualidade por grandes distâncias sem perder estabilidade, ideal para igrejas com cabine afastada.',
    highlight: '4K 60Hz em 50 metros para trajetos longos e sinal limpo.',
    icon: Cable,
    accent: 'from-rose-500/25 via-orange-500/10 to-transparent',
    tag: 'Vídeo confiável',
  },
  //produto9
  {
    name: 'Adaptador USB 3.0 para HDMI multitela 1080p',
    image: '/kit-midia-produtos/adaptador-usb-hdmi.png',
    category: 'Saída extra',
    link: 'https://www.mercadolivre.com.br/cabo-adaptador-conversor-usb-para-hdmi-usb-30-multitela-hdmi-1080p-pc-notebook-mac-tv-televiso-entrada-usb-e-saida-hdmi-plug-and-play-marca-chrome-technology/p/MLB23159572?matt_event_ts=1776119175422&matt_d2id=0392ed02-2b11-4ad1-9493-dfc90fd73ca1&matt_tracing_id=8d6e9617-33ee-44fe-b93e-12f7ced95184#polycard_client=social-profile-middleend&source=lists&type=product&tracking_id=477e0b0c-6fe9-4a80-affa-35e787657537&wid=MLB4199473809&sid=storefronts',
    installment: 'Enviado pelo FULL',
    summary:
      'Resolve a falta de saída de vídeo em notebooks e PCs, liberando uma tela adicional para retorno ou monitor técnico.',
    highlight: 'Cria saída HDMI extra em setups que precisam de multitela.',
    icon: MonitorPlay,
    accent: 'from-orange-500/25 via-amber-500/10 to-transparent',
    tag: 'Multitela',
  },
] as const;
