const raw = {
  en: {
    nav: { story: 'The story', how: 'How it works', tryIt: 'Get the app', web: 'Web wallet' },
    hero: {
      badge: 'Testnet beta',
      badgeNote: 'Runs on Arc Testnet with test USDC. Mainnet is not live.',
      h1a: 'Pay in USDC,',
      h1b: 'even offline.',
      sub: 'A self-custody wallet that signs payments with no connection. Hand them over by QR, and whoever is online first settles them on Arc.',
      ctaWeb: 'Open web wallet',
      ctaDownload: 'Download Android beta',
      fact1: 'Self-custody',
      fact2: 'Works offline',
      fact3: 'QR handoff',
      fact4: 'Android + web',
    },
    partners: { label: 'Built on' },
    how: {
      badge: 'How it works',
      heading: 'Three steps. No guesswork.',
      qrNote: 'The QR code contains the signed payment itself. Whoever scans it can submit it, and nobody can change the amount or recipient.',
      steps: [
        {
          title: 'Fund your offline reserve',
          desc: 'Move USDC into a reserve held by the MeshPayV2 contract on Arc. Payments you sign offline are backed by it, so the receiver knows the money is there.',
        },
        {
          title: 'Sign a payment and hand it over',
          desc: 'No internet needed. Your phone signs the payment and shows it as a QR code. The receiver scans it and now holds it.',
        },
        {
          title: 'Whoever is online first settles it',
          desc: 'Either phone can submit the signed payment to Arc as soon as it has a connection. Once settled, it is final.',
        },
      ],
    },
    web: {
      badge: 'Use it anywhere',
      heading: 'The same wallet, in your browser.',
      sub: 'Download the app and you can also use the web wallet. It follows the same flow as the phone app, with nothing to install.',
      cta: 'Open web wallet',
      points: [
        { title: 'Create a wallet', desc: 'Set a PIN and back up a seed phrase. Your keys are encrypted in your browser.' },
        { title: 'Add to reserve', desc: 'Fund the on-chain reserve that backs your offline payments.' },
        { title: 'Send and receive', desc: 'Pay any Arc address, or show your QR code to get paid.' },
        { title: 'Scan', desc: 'Scan a payment QR code from another phone or browser.' },
      ],
      limit: 'Browsers cannot do Bluetooth, so the web wallet hands payments over by QR only.',
      capWallet: 'Wallet',
      capSend: 'Send',
      capReceive: 'Receive',
    },
    caps: {
      badge: 'What you get',
      heading: 'What is built today',
      items: [
        {
          title: 'Self-custody wallet',
          desc: 'Your keys stay on your device. Wayamesh has no account system and never holds your funds.',
        },
        {
          title: 'Offline-signed payments',
          desc: 'Payments are signed with no connection and backed by an on-chain reserve (MeshPayV2 on Arc).',
        },
        {
          title: 'QR handoff',
          desc: 'Hand a payment to someone by QR code. It works between any two devices, phone or browser. On Android there is also single-hop Bluetooth handoff.',
        },
        {
          title: 'Settle from any online phone',
          desc: 'The sender or the receiver, whichever gets a connection first, submits the payment to Arc.',
        },
        {
          title: 'M-Pesa add money and cash out',
          desc: 'Top up or withdraw through M-Pesa. This is a demo on testnet for now.',
        },
        {
          title: 'Agent spending limits',
          desc: 'Give an automation a mandate with per-payment, daily and total caps, and it cannot go past them.',
        },
      ],
    },
    story: {
      badge: 'Why we built this',
      h1: 'Governments cut the internet.',
      h2: 'People couldn’t spend a cent.',
      p1: 'Sudan. Myanmar. Iran. When the internet went down, people couldn’t buy food, pay rent, or send money home, even with USDC sitting in their wallets. Every digital payment, crypto included, still assumes a connection.',
      p2: 'That assumption is the vulnerability. Not the money, the pipes. Across Sub-Saharan Africa, where most adults are unbanked or underbanked and connectivity is intermittent, it fails people every day.',
      p3: 'Wayamesh takes the connection out of the moment of payment. You sign and hand over, and the settlement happens whenever someone is back online.',
      quote: '“Your money works. Even when the internet doesn’t.”',
    },
    get: {
      heading: 'Get Wayamesh',
      sub: 'Android beta today. iOS is coming. Or open the web wallet now.',
      note: 'Bluetooth handoff is Android only and single-hop. QR handoff works on any two devices.',
    },
    mobile: {
      apkTop: 'Android beta',
      apkBottom: 'Download APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Coming soon',
      faucetNote: 'Runs on Arc Testnet. Grab free test USDC at',
    },
    footer: {
      product: 'Product',
      code: 'Code',
      webApp: 'Web wallet',
      apk: 'Android beta (APK)',
      appRepo: 'App on GitHub',
      testnet: 'Testnet beta. Test USDC only. Mainnet is not live.',
    },
    faq: {
      heading: 'Questions',
      items: [
        {
          q: 'Is this live on mainnet?',
          a: 'No. Wayamesh runs on Arc Testnet with test USDC. Mainnet is not live, and nothing here moves real money yet.',
        },
        {
          q: 'Do you hold my funds?',
          a: 'No. It is a self-custody wallet. Your keys are created and stored on your device (or encrypted in your browser for the web wallet). Wayamesh cannot move your money. Recover a wallet with your seed phrase.',
        },
        {
          q: 'How can I pay with no internet?',
          a: 'You first fund an on-chain reserve (MeshPayV2 on Arc). Offline, your phone signs a payment against that reserve and shows it as a QR code. The receiver scans it. When either phone gets a connection, it submits the payment to Arc and it settles.',
        },
        {
          q: 'What does the QR code contain?',
          a: 'The signed payment itself: amount, recipient and your signature. It cannot be edited without breaking the signature.',
        },
        {
          q: 'Does Bluetooth work?',
          a: 'On Android there is a single-hop Bluetooth handoff. Browsers cannot do Bluetooth. QR works on any two devices, so it is the way to hand over a payment between any combination of phone and browser.',
        },
        {
          q: 'What is the agent mandate?',
          a: 'A set of limits you give to an automation: per-payment, daily and total caps, enforced on your phone, so it cannot spend more than you allowed.',
        },
      ],
    },
  },

  sw: {
    nav: { story: 'Historia yetu', how: 'Jinsi inavyofanya kazi', tryIt: 'Ijaribu' },
    partners: { label: 'Inaendeshwa na' },
    story: {
      badge: 'Kwa nini tuliijenga',
      h1: 'Serikali zilikata intaneti.',
      h2: 'Watu hawakuweza kutumia hata senti.',
      p1: 'Sudan. Myanmar. Iran. Intaneti ilipokatika, watu hawakuweza kununua chakula, kulipa kodi, wala kutuma pesa nyumbani, hata wakiwa na USDC kwenye pochi zao. Kila malipo ya kidijitali, crypto ikiwemo, bado yanahitaji muunganisho.',
      p2: 'Dhana hiyo ndiyo udhaifu, si pesa, bali mabomba. Na kote Afrika Kusini mwa Jangwa la Sahara, ambako watu wazima wengi hawana huduma kamili za benki na mtandao si wa uhakika, inawaangusha watu kila siku.',
      quote: '“Pesa yako inafanya kazi. Hata intaneti isipofanya.”',
    },
    mobile: {
      apkTop: 'Beta ya Android',
      apkBottom: 'Pakua APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Inakuja hivi karibuni',
      faucetNote: 'Inatumia Arc Testnet, pata USDC ya majaribio bila malipo kwenye',
    },
  },

  fr: {
    nav: { story: 'Notre histoire', how: 'Comment ça marche', tryIt: 'Essayer' },
    partners: { label: 'Propulsé par' },
    story: {
      badge: 'Pourquoi nous l’avons créé',
      h1: 'Des gouvernements ont coupé internet.',
      h2: 'Les gens ne pouvaient plus rien dépenser.',
      p1: 'Soudan. Myanmar. Iran. Quand internet tombait, les gens ne pouvaient plus acheter à manger, payer leur loyer ou envoyer de l’argent chez eux, même avec des USDC dans leur portefeuille. Chaque paiement numérique, crypto comprise, suppose encore une connexion.',
      p2: 'Cette supposition est la vulnérabilité, pas l’argent, les tuyaux. Et en Afrique subsaharienne, où la plupart des adultes sont peu ou pas bancarisés et où la connectivité est intermittente, elle fait défaut chaque jour.',
      quote: '« Votre argent fonctionne. Même quand internet ne fonctionne pas. »',
    },
    mobile: {
      apkTop: 'Bêta Android',
      apkBottom: 'Télécharger l’APK',
      iosTop: 'TestFlight iOS',
      iosBottom: 'Bientôt disponible',
      faucetNote: 'Fonctionne sur Arc Testnet, obtenez des USDC de test gratuits sur',
    },
  },
  es: {
    nav: { story: 'Nuestra historia', how: 'Cómo funciona', tryIt: 'Pruébalo' },
    partners: { label: 'Impulsado por' },
    story: {
      badge: 'Por qué lo construimos',
      h1: 'Los gobiernos cortaron internet.',
      h2: 'La gente no podía gastar ni un centavo.',
      p1: 'Sudán. Myanmar. Irán. Cuando internet caía, la gente no podía comprar comida, pagar el alquiler ni enviar dinero a casa, incluso con USDC en sus billeteras. Todo pago digital, cripto incluida, sigue asumiendo una conexión.',
      p2: 'Esa suposición es la vulnerabilidad, no el dinero, las tuberías. Y en África subsahariana, donde la mayoría de los adultos no están bancarizados y la conectividad es intermitente, falla a la gente cada día.',
      quote: '«Tu dinero funciona. Incluso cuando internet no.»',
    },
    mobile: {
      apkTop: 'Beta de Android',
      apkBottom: 'Descargar APK',
      iosTop: 'TestFlight de iOS',
      iosBottom: 'Próximamente',
      faucetNote: 'Funciona en Arc Testnet, consigue USDC de prueba gratis en',
    },
  },

  pt: {
    nav: { story: 'Nossa história', how: 'Como funciona', tryIt: 'Experimente' },
    partners: { label: 'Desenvolvido com' },
    story: {
      badge: 'Por que construímos isto',
      h1: 'Governos cortaram a internet.',
      h2: 'As pessoas não podiam gastar um centavo.',
      p1: 'Sudão. Mianmar. Irã. Quando a internet caía, as pessoas não conseguiam comprar comida, pagar aluguel nem enviar dinheiro para casa, mesmo com USDC na carteira. Todo pagamento digital, cripto incluída, ainda pressupõe uma conexão.',
      p2: 'Essa suposição é a vulnerabilidade, não o dinheiro, os canos. E na África subsaariana, onde a maioria dos adultos não tem acesso pleno a bancos e a conectividade é intermitente, ela falha com as pessoas todos os dias.',
      quote: '“Seu dinheiro funciona. Mesmo quando a internet não funciona.”',
    },
    mobile: {
      apkTop: 'Beta Android',
      apkBottom: 'Baixar APK',
      iosTop: 'TestFlight iOS',
      iosBottom: 'Em breve',
      faucetNote: 'Roda na Arc Testnet, pegue USDC de teste grátis em',
    },
  },

  ar: {
    nav: { story: 'قصتنا', how: 'كيف يعمل', tryIt: 'جرّبه' },
    partners: { label: 'مدعوم من' },
    story: {
      badge: 'لماذا بنيناه',
      h1: 'حكومات قطعت الإنترنت.',
      h2: 'لم يستطع الناس إنفاق سنت واحد.',
      p1: 'السودان. ميانمار. إيران. عندما انقطع الإنترنت، لم يستطع الناس شراء الطعام أو دفع الإيجار أو إرسال المال لعائلاتهم، حتى مع وجود USDC في محافظهم. كل دفعة رقمية، بما فيها العملات المشفرة، لا تزال تفترض وجود اتصال.',
      p2: 'هذا الافتراض هو نقطة الضعف، ليس المال، بل الأنابيب. وفي أفريقيا جنوب الصحراء، حيث معظم البالغين بلا خدمات مصرفية كاملة والاتصال متقطع، يخذل الناس كل يوم.',
      quote: '«مالك يعمل. حتى عندما لا يعمل الإنترنت.»',
    },
    mobile: {
      apkTop: 'نسخة أندرويد التجريبية',
      apkBottom: 'حمّل APK',
      iosTop: 'TestFlight',
      iosBottom: 'قريباً',
      faucetNote: 'يعمل على شبكة Arc التجريبية، احصل على USDC تجريبي مجاناً من',
    },
  },

  hi: {
    nav: { story: 'हमारी कहानी', how: 'यह कैसे काम करता है', tryIt: 'आज़माएँ' },
    partners: { label: 'संचालित' },
    story: {
      badge: 'हमने इसे क्यों बनाया',
      h1: 'सरकारों ने इंटरनेट काट दिया।',
      h2: 'लोग एक पैसा भी खर्च नहीं कर पाए।',
      p1: 'सूडान। म्यांमार। ईरान। जब इंटरनेट बंद हुआ, लोग खाना नहीं खरीद पाए, किराया नहीं दे पाए, घर पैसे नहीं भेज पाए, जबकि USDC उनके वॉलेट में था। हर डिजिटल भुगतान, क्रिप्टो समेत, अब भी कनेक्शन मान कर चलता है।',
      p2: 'यही धारणा कमज़ोरी है, पैसा नहीं, पाइप। और उप-सहारा अफ़्रीका में, जहाँ अधिकांश वयस्कों के पास पूरी बैंकिंग नहीं है और कनेक्टिविटी रुक-रुक कर चलती है, यह रोज़ लोगों को धोखा देती है।',
      quote: '"आपका पैसा काम करता है। तब भी जब इंटरनेट नहीं करता।"',
    },
    mobile: {
      apkTop: 'Android बीटा',
      apkBottom: 'APK डाउनलोड करें',
      iosTop: 'iOS TestFlight',
      iosBottom: 'जल्द आ रहा है',
      faucetNote: 'Arc Testnet पर चलता है, मुफ़्त टेस्ट USDC पाएँ',
    },
  },

  zh: {
    nav: { story: '我们的故事', how: '工作原理', tryIt: '立即体验' },
    partners: { label: '技术支持' },
    story: {
      badge: '我们为什么打造它',
      h1: '政府切断了互联网。',
      h2: '人们一分钱也花不出去。',
      p1: '苏丹、缅甸、伊朗。互联网中断时，人们无法买食物、付房租、给家里汇款，即使钱包里就有 USDC。每一笔数字支付，包括加密货币，仍然默认需要网络连接。',
      p2: '这个假设正是脆弱点，问题不在钱，而在管道。在撒哈拉以南非洲，大多数成年人缺乏完善的银行服务且网络时断时续，它每天都在辜负人们。',
      quote: '"您的钱始终有效。即使互联网失效。"',
    },
    mobile: {
      apkTop: 'Android 测试版',
      apkBottom: '下载 APK',
      iosTop: 'iOS TestFlight',
      iosBottom: '即将上线',
      faucetNote: '运行于 Arc 测试网，免费领取测试 USDC：',
    },
  },

  de: {
    nav: { story: 'Unsere Geschichte', how: 'So funktioniert’s', tryIt: 'Ausprobieren' },
    partners: { label: 'Unterstützt von' },
    story: {
      badge: 'Warum wir es gebaut haben',
      h1: 'Regierungen kappten das Internet.',
      h2: 'Die Menschen konnten keinen Cent ausgeben.',
      p1: 'Sudan. Myanmar. Iran. Als das Internet ausfiel, konnten die Menschen kein Essen kaufen, keine Miete zahlen, kein Geld nach Hause schicken, obwohl USDC in ihren Wallets lag. Jede digitale Zahlung, Krypto eingeschlossen, setzt noch immer eine Verbindung voraus.',
      p2: 'Diese Annahme ist die Schwachstelle, nicht das Geld, die Leitungen. Und in Subsahara-Afrika, wo die meisten Erwachsenen kein oder kaum Bankkonto haben und die Verbindung ständig abbricht, lässt sie die Menschen täglich im Stich.',
      quote: '„Dein Geld funktioniert. Auch wenn das Internet es nicht tut.“',
    },
    mobile: {
      apkTop: 'Android-Beta',
      apkBottom: 'APK herunterladen',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Kommt bald',
      faucetNote: 'Läuft auf Arc Testnet, kostenloses Test-USDC gibt es auf',
    },
  },

  ru: {
    nav: { story: 'Наша история', how: 'Как это работает', tryIt: 'Попробовать' },
    partners: { label: 'Работает на' },
    story: {
      badge: 'Почему мы это создали',
      h1: 'Правительства отключали интернет.',
      h2: 'Люди не могли потратить ни цента.',
      p1: 'Судан. Мьянма. Иран. Когда интернет отключался, люди не могли купить еду, заплатить за жильё или отправить деньги домой — даже с USDC в кошельке. Каждый цифровой платёж, включая криптовалюту, по-прежнему предполагает соединение.',
      p2: 'Это допущение и есть уязвимость — не деньги, а «трубы». А в Африке к югу от Сахары, где большинство взрослых не имеют полноценного доступа к банкам, а связь нестабильна, оно подводит людей каждый день.',
      quote: '«Ваши деньги работают. Даже когда интернет — нет.»',
    },
    mobile: {
      apkTop: 'Android-бета',
      apkBottom: 'Скачать APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Скоро',
      faucetNote: 'Работает в Arc Testnet — бесплатные тестовые USDC на',
    },
  },
};

type Dict0 = typeof raw.en;
type DeepPartial<T> = { [K in keyof T]?: T[K] extends readonly unknown[] ? T[K] : T[K] extends object ? DeepPartial<T[K]> : T[K] };

export type Lang = keyof typeof raw;
export type Dict = Dict0;

/* Any key a language has not translated falls back to English. */
function merge<T extends object>(base: T, over: DeepPartial<T> | undefined): T {
  if (!over) return base;
  const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
  for (const k of Object.keys(over) as (keyof T & string)[]) {
    const b = base[k], o = over[k];
    if (o === undefined) continue;
    out[k] = b && typeof b === 'object' && !Array.isArray(b) ? merge(b as object, o as DeepPartial<object>) : o;
  }
  return out as T;
}

export const translations = Object.fromEntries(
  (Object.keys(raw) as Lang[]).map((l) => [l, merge(raw.en, raw[l] as unknown as DeepPartial<Dict0>)]),
) as Record<Lang, Dict>;

/* country: ISO 3166-1 alpha-2 code for flag images (flag emoji does not
   render on Windows, so the UI shows small flag images instead) */
export const LANGS: { code: Lang; flag: string; country: string; name: string }[] = [
  { code: 'en', flag: '🇺🇸', country: 'us', name: 'English' },
  { code: 'sw', flag: '🇰🇪', country: 'ke', name: 'Kiswahili' },
  { code: 'fr', flag: '🇫🇷', country: 'fr', name: 'Français' },
  { code: 'es', flag: '🇪🇸', country: 'es', name: 'Español' },
  { code: 'pt', flag: '🇧🇷', country: 'br', name: 'Português' },
  { code: 'de', flag: '🇩🇪', country: 'de', name: 'Deutsch' },
  { code: 'ar', flag: '🇸🇦', country: 'sa', name: 'العربية' },
  { code: 'hi', flag: '🇮🇳', country: 'in', name: 'हिन्दी' },
  { code: 'zh', flag: '🇨🇳', country: 'cn', name: '中文' },
  { code: 'ru', flag: '🇷🇺', country: 'ru', name: 'Русский' },
];
