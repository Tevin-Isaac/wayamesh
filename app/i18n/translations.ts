export const translations = {
  en: {
    nav: { story: 'The story', how: 'How it works', tryIt: 'Try it' },
    hero: {
      h1a: 'Send USDC.',
      h1b: 'No internet.',
      sub: 'Sign a payment with no internet. Hand it to the receiver by QR code or Bluetooth, and the first phone that finds a connection settles it on Arc in under a second. Money that moves like cash and settles like a blockchain.',
      ctaDownload: 'Download the beta',
      ctaHow: 'See how it works',
      stat1l: 'Arc settlement finality',
      stat2l: 'Servers or middlemen',
      stat3l: 'Self-custody, keys on device',
    },
    partners: { label: 'Powered by' },
    story: {
      badge: 'Why we built this',
      h1: 'Governments cut the internet.',
      h2: 'People couldn’t spend a cent.',
      p1: 'Sudan. Myanmar. Iran. When the internet went down, people couldn’t buy food, pay rent, or send money home, even with USDC sitting in their wallets. Every digital payment, crypto included, still assumes a connection.',
      p2: 'That assumption is the vulnerability. Not the money, the pipes. Across Sub-Saharan Africa, where most adults are unbanked or underbanked and connectivity is intermittent, it fails people every day.',
      p3: 'Wayamesh removes it from the payment itself. Your phone signs USDC with a hardware-bound key and hands it to the receiver by QR code or Bluetooth. The first phone to touch the internet settles it on Arc in under a second. No towers, no banks, no servers.',
      quote: '“Your money works. Even when the internet doesn’t.”',
    },
    caps: {
      badge: 'Built different',
      heading: 'Why Wayamesh',
      items: [
        {
          title: 'Offline send + handoff',
          desc: 'Sign a USDC transfer with no connection. Hand it to the receiver by QR code or Bluetooth. They hold the settlement-ready transaction, and duplicates are detected automatically when several phones carry the same payment.',
        },
        {
          title: 'Self-custodial & secure',
          desc: 'Keys are generated on your phone and stored hardware-bound in Android Keystore or iOS Secure Enclave, gated by biometrics. They never leave the device. There is no backend between you and your money.',
        },
        {
          title: 'Settles on Arc in under a second',
          desc: 'The first phone to find a connection broadcasts the payment. Arc finality is about 480ms, and the gasless smart account lets you pay fees in USDC itself, with no separate gas token.',
        },
        {
          title: 'Agent wallet with hard limits',
          desc: 'A spending envelope automation can never exceed: per-transaction, daily, and total caps, allowlists, and expiry, all enforced on your phone by a deterministic policy engine. Standing payments execute fully offline.',
        },
      ],
    },
    how: {
      badge: 'The flow',
      heading: 'How it works',
      steps: [
        {
          title: 'Sign offline',
          desc: 'You create a payment. Your phone signs the USDC transfer with its hardware-bound key, no connection needed. The signed transaction is sealed: nobody can alter the amount, the recipient, or the sender.',
        },
        {
          title: 'Hand off',
          desc: 'The payment travels to the receiver’s phone as a QR code or over Bluetooth, with no infrastructure. The receiver now holds the settlement-ready transaction and no longer depends on you reconnecting. Any phone can also courier a third party’s payment to the internet.',
        },
        {
          title: 'Settle on Arc',
          desc: 'The first phone to touch the internet broadcasts it. Arc finality is about half a second. Once settled it is irreversible: no chargebacks, no cancellation.',
        },
      ],
    },
    mobile: {
      h1: 'Money flows offline.',
      h2: 'Freedom in your pocket.',
      sub: 'Android beta out now · iOS TestFlight coming soon',
      apkTop: 'Android beta',
      apkBottom: 'Download APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Coming soon',
      faucetNote: 'Runs on Arc Testnet. Grab free test USDC at',
    },
    faq: {
      heading: 'Frequently asked questions',
      items: [
        {
          q: 'Is my money safe?',
          a: 'Your private keys are generated on your phone and stored hardware-bound in Android Keystore or iOS Secure Enclave, unlocked with biometrics. Every payment is signed locally, and the signed transaction is sealed: nobody can alter the amount, the recipient, or the sender. Even if a handoff is intercepted, nobody can touch your funds without your key.',
        },
        {
          q: 'Do you hold my funds?',
          a: 'No. Wayamesh is fully self-custodial and has no backend. Your phone talks directly to Arc, and only your device holds your private key. No custody, no servers, no middlemen. Recovery works three ways: seed phrase, PIN-protected cloud backup, or Shamir guardian shards.',
        },
        {
          q: 'How do payments work offline?',
          a: 'Your phone signs the USDC transfer with no connection, then hands it to the receiver as a QR code or over Bluetooth. The receiver needs no internet either. They hold the settlement-ready transaction and no longer depend on you reconnecting. The first phone to touch the internet broadcasts it, and Arc settles it in about half a second. Duplicates are detected automatically.',
        },
        {
          q: 'What is the agent wallet?',
          a: 'A spending envelope that AI or automation can never exceed: per-transaction, daily, and total caps, allowlists, and expiry, all enforced on your phone by a deterministic policy engine with a full audit log. Standing payments execute fully offline: due payments pass the mandate gate, sign locally, and settle at reconnect.',
        },
        {
          q: 'Can it be blocked?',
          a: 'The protocol is open source (MIT) and peer-to-peer. QR handoff works between any two phones with cameras, and Bluetooth is standard hardware no government can selectively ban. Funds settle on Arc, which is censorship-resistant by design.',
        },
      ],
    },
  },

  sw: {
    nav: { story: 'Historia yetu', how: 'Jinsi inavyofanya kazi', tryIt: 'Ijaribu' },
    hero: {
      h1a: 'Tuma USDC.',
      h1b: 'Bila intaneti.',
      sub: 'Tia sahihi malipo bila intaneti, mkabidhi mpokeaji kwa msimbo wa QR au Bluetooth, na yanakamilika kwenye Arc kwa chini ya sekunde moja, kutoka kwa simu yoyote inayopata mtandao kwanza. Pesa inayotembea kama pesa taslimu, inayokamilika kama blockchain.',
      ctaDownload: 'Pakua beta',
      ctaHow: 'Ona jinsi inavyofanya kazi',
      stat1l: 'Ukamilishaji kwenye Arc',
      stat2l: 'Seva au madalali',
      stat3l: 'Umiliki kamili, funguo kwenye simu',
    },
    partners: { label: 'Inaendeshwa na' },
    story: {
      badge: 'Kwa nini tuliijenga',
      h1: 'Serikali zilikata intaneti.',
      h2: 'Watu hawakuweza kutumia hata senti.',
      p1: 'Sudan. Myanmar. Iran. Intaneti ilipokatika, watu hawakuweza kununua chakula, kulipa kodi, wala kutuma pesa nyumbani, hata wakiwa na USDC kwenye pochi zao. Kila malipo ya kidijitali, crypto ikiwemo, bado yanahitaji muunganisho.',
      p2: 'Dhana hiyo ndiyo udhaifu, si pesa, bali mabomba. Na kote Afrika Kusini mwa Jangwa la Sahara, ambako watu wazima wengi hawana huduma kamili za benki na mtandao si wa uhakika, inawaangusha watu kila siku.',
      p3: 'Wayamesh inaiondoa dhana hiyo kutoka kwenye malipo yenyewe. Simu yako inatia sahihi USDC kwa ufunguo uliofungwa kwenye kifaa, inamkabidhi mpokeaji kwa msimbo wa QR au Bluetooth, na simu yoyote inayogusa intaneti kwanza inayakamilisha kwenye Arc kwa chini ya sekunde moja. Hakuna minara, hakuna benki, hakuna seva.',
      quote: '“Pesa yako inafanya kazi. Hata intaneti isipofanya.”',
    },
    caps: {
      badge: 'Imejengwa tofauti',
      heading: 'Kwa nini Wayamesh',
      items: [
        {
          title: 'Tuma na kukabidhi bila mtandao',
          desc: 'Tia sahihi uhamisho wa USDC bila muunganisho. Mkabidhi mpokeaji kwa msimbo wa QR au Bluetooth, anashikilia muamala uliotayari kukamilika, na nakala rudufu hugunduliwa kiotomatiki simu kadhaa zikibeba malipo yale yale.',
        },
        {
          title: 'Umiliki kamili na usalama',
          desc: 'Funguo zinatengenezwa kwenye simu na kuhifadhiwa kwenye kifaa, Android Keystore au iOS Secure Enclave, zikilindwa kwa bayometriki. Haziwahi kuondoka kwenye simu. Hakuna seva kati yako na pesa zako.',
        },
        {
          title: 'Inakamilika kwenye Arc kwa chini ya sekunde',
          desc: 'Simu yoyote inayopata muunganisho kwanza inatangaza malipo. Ukamilishaji wa Arc ni ≈480ms, na kwa akaunti mahiri isiyo na gesi unalipa ada kwa USDC yenyewe, hakuna tokeni nyingine ya gesi.',
        },
        {
          title: 'Pochi ya wakala yenye mipaka thabiti',
          desc: 'Bahasha ya matumizi ambayo otomatiki haiwezi kuvuka, kikomo cha kila muamala, cha kila siku na cha jumla, orodha za ruhusa, na muda wa kuisha, vikitekelezwa kwenye simu na injini ya sera. Malipo ya kudumu hufanyika bila mtandao kabisa.',
        },
      ],
    },
    how: {
      badge: 'Mtiririko',
      heading: 'Jinsi inavyofanya kazi',
      steps: [
        {
          title: 'Tia sahihi bila mtandao',
          desc: 'Unaunda malipo. Simu yako inatia sahihi uhamisho wa USDC kwa ufunguo wake uliofungwa kwenye kifaa, bila muunganisho wowote. Muamala uliotiwa sahihi umefungwa: kiasi, mpokeaji na mtumaji haviwezi kubadilishwa na yeyote.',
        },
        {
          title: 'Kabidhi',
          desc: 'Malipo yanafika kwenye simu ya mpokeaji kama msimbo wa QR au kupitia Bluetooth, bila miundombinu. Sasa mpokeaji anashikilia muamala uliotayari kukamilika; hategemei wewe kurudi mtandaoni. Simu yoyote pia inaweza kubeba malipo ya mtu mwingine hadi kwenye intaneti.',
        },
        {
          title: 'Kamilisha kwenye Arc',
          desc: 'Simu yoyote inayogusa intaneti kwanza inayatangaza. Ukamilishaji wa Arc ni takriban nusu sekunde. Yakishakamilika hayawezi kutenduliwa, hakuna kurudishwa, hakuna kufutwa.',
        },
      ],
    },
    mobile: {
      h1: 'Pesa inatiririka bila mtandao.',
      h2: 'Uhuru mfukoni mwako.',
      sub: 'Beta ya Android ipo sasa · iOS TestFlight inakuja hivi karibuni',
      apkTop: 'Beta ya Android',
      apkBottom: 'Pakua APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Inakuja hivi karibuni',
      faucetNote: 'Inatumia Arc Testnet, pata USDC ya majaribio bila malipo kwenye',
    },
    faq: {
      heading: 'Maswali yanayoulizwa mara kwa mara',
      items: [
        {
          q: 'Je, pesa zangu ziko salama?',
          a: 'Funguo zako za siri zinatengenezwa kwenye simu na kuhifadhiwa kwenye kifaa, Android Keystore au iOS Secure Enclave, zikifunguliwa kwa bayometriki. Kila malipo yanatiwa sahihi kwenye simu, na muamala uliotiwa sahihi umefungwa: kiasi, mpokeaji na mtumaji haviwezi kubadilishwa na yeyote. Hata kama ukabidhi ukikamatwa njiani, hakuna anayeweza kufikia pesa zako bila ufunguo wako.',
        },
        {
          q: 'Je, mnashikilia pesa zangu?',
          a: 'Hapana. Wayamesh ni ya umiliki kamili na haina seva yoyote, simu yako inazungumza moja kwa moja na Arc. Kifaa chako pekee ndicho kinachoshikilia ufunguo wako wa siri. Hakuna udhamini, hakuna seva, hakuna madalali. Urejeshaji unafanya kazi kwa njia tatu: maneno ya siri, hifadhi ya wingu inayolindwa kwa PIN, au vipande vya walinzi vya Shamir.',
        },
        {
          q: 'Malipo yanafanyaje kazi bila mtandao?',
          a: 'Simu yako inatia sahihi uhamisho wa USDC bila muunganisho, kisha inamkabidhi mpokeaji kama msimbo wa QR au kupitia Bluetooth, mpokeaji naye hahitaji intaneti. Anashikilia muamala uliotayari kukamilika na hategemei wewe kurudi mtandaoni. Simu yoyote inayogusa intaneti kwanza inayatangaza, na Arc inayakamilisha kwa takriban nusu sekunde. Nakala rudufu hugunduliwa kiotomatiki simu kadhaa zikibeba malipo yale yale.',
        },
        {
          q: 'Pochi ya wakala ni nini?',
          a: 'Bahasha ya matumizi ambayo AI au otomatiki haiwezi kamwe kuvuka: kikomo cha kila muamala, cha kila siku na cha jumla, orodha za ruhusa, na muda wa kuisha, vikitekelezwa kwenye simu na injini ya sera yenye kumbukumbu kamili ya ukaguzi. Malipo ya kudumu hufanyika bila mtandao kabisa: malipo yaliyofika wakati wake yanapita lango la mamlaka, yanatiwa sahihi kwenye simu, na yanakamilika mtandao ukipatikana.',
        },
        {
          q: 'Je, inaweza kuzuiwa?',
          a: 'Itifaki ni ya chanzo huria (MIT) na ya rika-kwa-rika. Ukabidhi wa QR unafanya kazi kati ya simu zozote mbili zenye kamera, na Bluetooth ni vifaa vya kawaida ambavyo hakuna serikali inayoweza kuvipiga marufuku kwa kuchagua. Pesa zinakamilika kwenye Arc, iliyoundwa kustahimili udhibiti.',
        },
      ],
    },
  },

  fr: {
    nav: { story: 'Notre histoire', how: 'Comment ça marche', tryIt: 'Essayer' },
    hero: {
      h1a: 'Envoyez des USDC.',
      h1b: 'Sans internet.',
      sub: 'Signez un paiement sans internet, remettez-le au destinataire par QR code ou Bluetooth, et il est réglé sur Arc en moins d’une seconde, depuis le premier téléphone qui trouve une connexion. De l’argent qui circule comme du liquide, réglé comme une blockchain.',
      ctaDownload: 'Télécharger la bêta',
      ctaHow: 'Voir comment ça marche',
      stat1l: 'Finalité de règlement sur Arc',
      stat2l: 'Serveurs ou intermédiaires',
      stat3l: 'Auto-conservation, clés sur l’appareil',
    },
    partners: { label: 'Propulsé par' },
    story: {
      badge: 'Pourquoi nous l’avons créé',
      h1: 'Des gouvernements ont coupé internet.',
      h2: 'Les gens ne pouvaient plus rien dépenser.',
      p1: 'Soudan. Myanmar. Iran. Quand internet tombait, les gens ne pouvaient plus acheter à manger, payer leur loyer ou envoyer de l’argent chez eux, même avec des USDC dans leur portefeuille. Chaque paiement numérique, crypto comprise, suppose encore une connexion.',
      p2: 'Cette supposition est la vulnérabilité, pas l’argent, les tuyaux. Et en Afrique subsaharienne, où la plupart des adultes sont peu ou pas bancarisés et où la connectivité est intermittente, elle fait défaut chaque jour.',
      p3: 'Wayamesh la retire du paiement lui-même. Votre téléphone signe des USDC avec une clé liée au matériel, les remet au destinataire par QR code ou Bluetooth, et le premier téléphone qui touche internet règle le tout sur Arc en moins d’une seconde. Pas d’antennes, pas de banques, pas de serveurs.',
      quote: '« Votre argent fonctionne. Même quand internet ne fonctionne pas. »',
    },
    caps: {
      badge: 'Conçu différemment',
      heading: 'Pourquoi Wayamesh',
      items: [
        {
          title: 'Envoi + remise hors ligne',
          desc: 'Signez un transfert USDC sans connexion. Remettez-le au destinataire par QR code ou Bluetooth, il détient la transaction prête au règlement, avec déduplication automatique quand plusieurs téléphones portent le même paiement.',
        },
        {
          title: 'Auto-conservation et sécurité',
          desc: 'Les clés sont générées sur l’appareil et stockées liées au matériel, Android Keystore ou iOS Secure Enclave, protégées par biométrie. Elles ne quittent jamais le téléphone. Aucun serveur entre vous et votre argent.',
        },
        {
          title: 'Réglé sur Arc en moins d’une seconde',
          desc: 'Le premier téléphone qui trouve une connexion diffuse le paiement. La finalité d’Arc est de ≈480 ms, et avec le compte intelligent sans gaz, vous payez les frais en USDC, pas de jeton de gaz séparé.',
        },
        {
          title: 'Portefeuille agent à limites strictes',
          desc: 'Une enveloppe de dépenses que l’automatisation ne peut jamais dépasser, plafonds par transaction, journaliers et totaux, listes d’autorisation, expiration, appliquée sur l’appareil par un moteur de règles déterministe. Les paiements récurrents s’exécutent entièrement hors ligne.',
        },
      ],
    },
    how: {
      badge: 'Le parcours',
      heading: 'Comment ça marche',
      steps: [
        {
          title: 'Signer hors ligne',
          desc: 'Vous créez un paiement. Votre téléphone signe le transfert USDC avec sa clé liée au matériel, aucune connexion nécessaire. La transaction signée est scellée : montant, destinataire et expéditeur ne peuvent être modifiés par personne.',
        },
        {
          title: 'Remettre',
          desc: 'Le paiement passe au téléphone du destinataire sous forme de QR code ou via Bluetooth, sans infrastructure. Le destinataire détient désormais la transaction prête au règlement ; il ne dépend plus de votre reconnexion. N’importe quel téléphone peut aussi convoyer le paiement d’un tiers jusqu’à internet.',
        },
        {
          title: 'Régler sur Arc',
          desc: 'Le premier téléphone qui touche internet le diffuse. La finalité d’Arc est d’environ une demi-seconde. Une fois réglé, c’est irréversible, pas de rétrofacturation, pas d’annulation.',
        },
      ],
    },
    mobile: {
      h1: 'L’argent circule hors ligne.',
      h2: 'La liberté dans votre poche.',
      sub: 'Bêta Android disponible · TestFlight iOS bientôt',
      apkTop: 'Bêta Android',
      apkBottom: 'Télécharger l’APK',
      iosTop: 'TestFlight iOS',
      iosBottom: 'Bientôt disponible',
      faucetNote: 'Fonctionne sur Arc Testnet, obtenez des USDC de test gratuits sur',
    },
    faq: {
      heading: 'Questions fréquentes',
      items: [
        {
          q: 'Mon argent est-il en sécurité ?',
          a: 'Vos clés privées sont générées sur l’appareil et stockées liées au matériel, Android Keystore ou iOS Secure Enclave, déverrouillées par biométrie. Chaque paiement est signé localement, et la transaction signée est scellée : montant, destinataire et expéditeur ne peuvent être modifiés par personne. Même si une remise est interceptée, personne ne peut accéder à vos fonds sans votre clé.',
        },
        {
          q: 'Détenez-vous mes fonds ?',
          a: 'Non. Wayamesh est entièrement auto-conservé et n’a aucun serveur, votre téléphone parle directement à Arc. Seul votre appareil détient votre clé privée. Pas de garde, pas de serveurs, pas d’intermédiaires. La récupération fonctionne de trois façons : phrase de récupération, sauvegarde cloud protégée par PIN, ou fragments Shamir confiés à des gardiens.',
        },
        {
          q: 'Comment les paiements fonctionnent-ils hors ligne ?',
          a: 'Votre téléphone signe le transfert USDC sans connexion, puis le remet au destinataire sous forme de QR code ou via Bluetooth, le destinataire n’a pas besoin d’internet non plus. Il détient la transaction prête au règlement et ne dépend plus de votre reconnexion. Le premier téléphone qui touche internet la diffuse, et Arc la règle en environ une demi-seconde. Les doublons sont détectés automatiquement quand plusieurs téléphones portent le même paiement.',
        },
        {
          q: 'Qu’est-ce que le portefeuille agent ?',
          a: 'Une enveloppe de dépenses que l’IA ou l’automatisation ne peut jamais dépasser : plafonds par transaction, journaliers et totaux, listes d’autorisation et expiration, appliqués sur l’appareil par un moteur de règles déterministe avec journal d’audit complet. Les paiements récurrents s’exécutent entièrement hors ligne : les paiements dus passent le contrôle du mandat, sont signés localement et réglés à la reconnexion.',
        },
        {
          q: 'Peut-il être bloqué ?',
          a: 'Le protocole est open-source (MIT) et pair-à-pair. La remise par QR fonctionne entre deux téléphones équipés de caméras, et le Bluetooth est un matériel standard qu’aucun gouvernement ne peut interdire sélectivement. Les fonds sont réglés sur Arc, résistant à la censure par conception.',
        },
      ],
    },
  },
  es: {
    nav: { story: 'Nuestra historia', how: 'Cómo funciona', tryIt: 'Pruébalo' },
    hero: {
      h1a: 'Envía USDC.',
      h1b: 'Sin internet.',
      sub: 'Firma un pago sin internet, entrégalo al receptor por código QR o Bluetooth, y se liquida en Arc en menos de un segundo, desde el primer teléfono que encuentre conexión. Dinero que se mueve como efectivo y se liquida como una blockchain.',
      ctaDownload: 'Descargar la beta',
      ctaHow: 'Ver cómo funciona',
      stat1l: 'Finalidad de liquidación en Arc',
      stat2l: 'Servidores o intermediarios',
      stat3l: 'Autocustodia, claves en tu dispositivo',
    },
    partners: { label: 'Impulsado por' },
    story: {
      badge: 'Por qué lo construimos',
      h1: 'Los gobiernos cortaron internet.',
      h2: 'La gente no podía gastar ni un centavo.',
      p1: 'Sudán. Myanmar. Irán. Cuando internet caía, la gente no podía comprar comida, pagar el alquiler ni enviar dinero a casa, incluso con USDC en sus billeteras. Todo pago digital, cripto incluida, sigue asumiendo una conexión.',
      p2: 'Esa suposición es la vulnerabilidad, no el dinero, las tuberías. Y en África subsahariana, donde la mayoría de los adultos no están bancarizados y la conectividad es intermitente, falla a la gente cada día.',
      p3: 'Wayamesh la elimina del propio pago. Tu teléfono firma USDC con una clave ligada al hardware, lo entrega al receptor por código QR o Bluetooth, y el primer teléfono que toque internet lo liquida en Arc en menos de un segundo. Sin antenas, sin bancos, sin servidores.',
      quote: '«Tu dinero funciona. Incluso cuando internet no.»',
    },
    caps: {
      badge: 'Construido diferente',
      heading: 'Por qué Wayamesh',
      items: [
        { title: 'Envío + entrega sin conexión', desc: 'Firma una transferencia de USDC sin conexión. Entrégala al receptor por código QR o Bluetooth, él guarda la transacción lista para liquidar, con deduplicación automática cuando varios teléfonos llevan el mismo pago.' },
        { title: 'Autocustodia y seguridad', desc: 'Las claves se generan en el dispositivo y se guardan ligadas al hardware, Android Keystore o iOS Secure Enclave, protegidas por biometría. Nunca salen del teléfono. Ningún servidor entre tú y tu dinero.' },
        { title: 'Se liquida en Arc en menos de un segundo', desc: 'El primer teléfono que encuentra conexión difunde el pago. La finalidad de Arc es ≈480 ms, y con la cuenta inteligente sin gas pagas las comisiones en el propio USDC, sin token de gas aparte.' },
        { title: 'Billetera agente con límites estrictos', desc: 'Un sobre de gasto que la automatización nunca puede exceder, límites por transacción, diarios y totales, listas de permitidos y caducidad, aplicado en el dispositivo por un motor de reglas determinista. Los pagos recurrentes se ejecutan totalmente sin conexión.' },
      ],
    },
    how: {
      badge: 'El flujo',
      heading: 'Cómo funciona',
      steps: [
        { title: 'Firma sin conexión', desc: 'Creas un pago. Tu teléfono firma la transferencia de USDC con su clave ligada al hardware, sin necesidad de conexión. La transacción firmada queda sellada: nadie puede alterar el monto, el destinatario ni el remitente.' },
        { title: 'Entrega', desc: 'El pago llega al teléfono del receptor como código QR o por Bluetooth, sin infraestructura. El receptor ya tiene la transacción lista para liquidar; no depende de que te reconectes. Cualquier teléfono puede además llevar el pago de un tercero hasta internet.' },
        { title: 'Liquida en Arc', desc: 'El primer teléfono que toca internet lo difunde. La finalidad de Arc es de medio segundo aproximadamente. Una vez liquidado es irreversible, sin contracargos, sin cancelaciones.' },
      ],
    },
    mobile: {
      h1: 'El dinero fluye sin conexión.',
      h2: 'Libertad en tu bolsillo.',
      sub: 'Beta de Android ya disponible · TestFlight de iOS próximamente',
      apkTop: 'Beta de Android',
      apkBottom: 'Descargar APK',
      iosTop: 'TestFlight de iOS',
      iosBottom: 'Próximamente',
      faucetNote: 'Funciona en Arc Testnet, consigue USDC de prueba gratis en',
    },
    faq: {
      heading: 'Preguntas frecuentes',
      items: [
        { q: '¿Mi dinero está seguro?', a: 'Tus claves privadas se generan en el dispositivo y se guardan ligadas al hardware, Android Keystore o iOS Secure Enclave, y se desbloquean con biometría. Cada pago se firma localmente y la transacción firmada queda sellada: nadie puede alterar el monto, el destinatario ni el remitente. Aunque intercepten una entrega, nadie puede acceder a tus fondos sin tu clave.' },
        { q: '¿Ustedes custodian mis fondos?', a: 'No. Wayamesh es de autocustodia total y no tiene backend, tu teléfono habla directamente con Arc. Solo tu dispositivo guarda tu clave privada. Sin custodia, sin servidores, sin intermediarios. La recuperación funciona de tres formas: frase semilla, copia en la nube protegida con PIN o fragmentos Shamir con guardianes.' },
        { q: '¿Cómo funcionan los pagos sin conexión?', a: 'Tu teléfono firma la transferencia de USDC sin conexión y la entrega al receptor como código QR o por Bluetooth, el receptor tampoco necesita internet. Él guarda la transacción lista para liquidar y no depende de que te reconectes. El primer teléfono que toque internet la difunde y Arc la liquida en medio segundo aproximadamente. Los duplicados se detectan automáticamente.' },
        { q: '¿Qué es la billetera agente?', a: 'Un sobre de gasto que la IA o la automatización nunca puede exceder: límites por transacción, diarios y totales, listas de permitidos y caducidad, aplicados en el dispositivo por un motor de reglas determinista con registro de auditoría completo. Los pagos recurrentes se ejecutan sin conexión: pasan el control del mandato, se firman localmente y se liquidan al reconectar.' },
        { q: '¿Se puede bloquear?', a: 'El protocolo es de código abierto (MIT) y entre pares. La entrega por QR funciona entre dos teléfonos con cámara, y el Bluetooth es hardware estándar que ningún gobierno puede prohibir selectivamente. Los fondos se liquidan en Arc, resistente a la censura por diseño.' },
      ],
    },
  },

  pt: {
    nav: { story: 'Nossa história', how: 'Como funciona', tryIt: 'Experimente' },
    hero: {
      h1a: 'Envie USDC.',
      h1b: 'Sem internet.',
      sub: 'Assine um pagamento sem internet, entregue ao destinatário por código QR ou Bluetooth, e ele é liquidado na Arc em menos de um segundo, a partir do primeiro telefone que encontrar conexão. Dinheiro que se move como dinheiro vivo e liquida como uma blockchain.',
      ctaDownload: 'Baixar a beta',
      ctaHow: 'Veja como funciona',
      stat1l: 'Finalidade de liquidação na Arc',
      stat2l: 'Servidores ou intermediários',
      stat3l: 'Autocustódia, chaves no dispositivo',
    },
    partners: { label: 'Desenvolvido com' },
    story: {
      badge: 'Por que construímos isto',
      h1: 'Governos cortaram a internet.',
      h2: 'As pessoas não podiam gastar um centavo.',
      p1: 'Sudão. Mianmar. Irã. Quando a internet caía, as pessoas não conseguiam comprar comida, pagar aluguel nem enviar dinheiro para casa, mesmo com USDC na carteira. Todo pagamento digital, cripto incluída, ainda pressupõe uma conexão.',
      p2: 'Essa suposição é a vulnerabilidade, não o dinheiro, os canos. E na África subsaariana, onde a maioria dos adultos não tem acesso pleno a bancos e a conectividade é intermitente, ela falha com as pessoas todos os dias.',
      p3: 'A Wayamesh remove essa suposição do próprio pagamento. Seu telefone assina USDC com uma chave vinculada ao hardware, entrega ao destinatário por código QR ou Bluetooth, e o primeiro telefone que tocar a internet liquida na Arc em menos de um segundo. Sem torres, sem bancos, sem servidores.',
      quote: '“Seu dinheiro funciona. Mesmo quando a internet não funciona.”',
    },
    caps: {
      badge: 'Construído diferente',
      heading: 'Por que Wayamesh',
      items: [
        { title: 'Envio + entrega offline', desc: 'Assine uma transferência de USDC sem conexão. Entregue ao destinatário por código QR ou Bluetooth, ele guarda a transação pronta para liquidar, com deduplicação automática quando vários telefones carregam o mesmo pagamento.' },
        { title: 'Autocustódia e segurança', desc: 'As chaves são geradas no dispositivo e armazenadas vinculadas ao hardware, Android Keystore ou iOS Secure Enclave, protegidas por biometria. Nunca saem do telefone. Nenhum servidor entre você e seu dinheiro.' },
        { title: 'Liquida na Arc em menos de um segundo', desc: 'O primeiro telefone que encontra conexão transmite o pagamento. A finalidade da Arc é ≈480 ms, e com a conta inteligente sem gás você paga as taxas no próprio USDC, sem token de gás separado.' },
        { title: 'Carteira agente com limites rígidos', desc: 'Um envelope de gastos que a automação nunca pode exceder, limites por transação, diários e totais, listas de permissão e expiração, aplicado no dispositivo por um motor de regras determinístico. Pagamentos recorrentes executam totalmente offline.' },
      ],
    },
    how: {
      badge: 'O fluxo',
      heading: 'Como funciona',
      steps: [
        { title: 'Assine offline', desc: 'Você cria um pagamento. Seu telefone assina a transferência de USDC com a chave vinculada ao hardware, sem necessidade de conexão. A transação assinada fica selada: ninguém pode alterar o valor, o destinatário ou o remetente.' },
        { title: 'Entregue', desc: 'O pagamento chega ao telefone do destinatário como código QR ou via Bluetooth, sem infraestrutura. O destinatário agora guarda a transação pronta para liquidar; não depende mais de você se reconectar. Qualquer telefone também pode levar o pagamento de um terceiro até a internet.' },
        { title: 'Liquide na Arc', desc: 'O primeiro telefone que tocar a internet transmite. A finalidade da Arc é de cerca de meio segundo. Uma vez liquidado, é irreversível, sem estornos, sem cancelamento.' },
      ],
    },
    mobile: {
      h1: 'O dinheiro flui offline.',
      h2: 'Liberdade no seu bolso.',
      sub: 'Beta para Android disponível · TestFlight para iOS em breve',
      apkTop: 'Beta Android',
      apkBottom: 'Baixar APK',
      iosTop: 'TestFlight iOS',
      iosBottom: 'Em breve',
      faucetNote: 'Roda na Arc Testnet, pegue USDC de teste grátis em',
    },
    faq: {
      heading: 'Perguntas frequentes',
      items: [
        { q: 'Meu dinheiro está seguro?', a: 'Suas chaves privadas são geradas no dispositivo e armazenadas vinculadas ao hardware, Android Keystore ou iOS Secure Enclave, desbloqueadas por biometria. Cada pagamento é assinado localmente e a transação assinada fica selada: ninguém pode alterar o valor, o destinatário ou o remetente. Mesmo que uma entrega seja interceptada, ninguém acessa seus fundos sem a sua chave.' },
        { q: 'Vocês guardam meus fundos?', a: 'Não. A Wayamesh é totalmente autocustodial e não tem backend, seu telefone fala diretamente com a Arc. Só o seu dispositivo guarda sua chave privada. Sem custódia, sem servidores, sem intermediários. A recuperação funciona de três formas: frase-semente, backup na nuvem protegido por PIN ou fragmentos Shamir com guardiões.' },
        { q: 'Como funcionam os pagamentos offline?', a: 'Seu telefone assina a transferência de USDC sem conexão e entrega ao destinatário como código QR ou via Bluetooth, o destinatário também não precisa de internet. Ele guarda a transação pronta para liquidar e não depende de você se reconectar. O primeiro telefone que tocar a internet transmite, e a Arc liquida em cerca de meio segundo. Duplicatas são detectadas automaticamente.' },
        { q: 'O que é a carteira agente?', a: 'Um envelope de gastos que a IA ou a automação nunca pode exceder: limites por transação, diários e totais, listas de permissão e expiração, aplicados no dispositivo por um motor de regras determinístico com registro de auditoria completo. Pagamentos recorrentes executam offline: passam pelo mandato, assinam localmente e liquidam ao reconectar.' },
        { q: 'Pode ser bloqueado?', a: 'O protocolo é de código aberto (MIT) e ponto a ponto. A entrega por QR funciona entre dois telefones com câmera, e o Bluetooth é hardware padrão que nenhum governo pode banir seletivamente. Os fundos liquidam na Arc, resistente à censura por design.' },
      ],
    },
  },

  ar: {
    nav: { story: 'قصتنا', how: 'كيف يعمل', tryIt: 'جرّبه' },
    hero: {
      h1a: 'أرسل USDC.',
      h1b: 'بدون إنترنت.',
      sub: 'وقّع دفعة بدون إنترنت، وسلّمها للمستلم عبر رمز QR أو البلوتوث، وتُسوَّى على Arc في أقل من ثانية، من أول هاتف يجد اتصالاً. مال يتحرك كالنقد، ويُسوَّى كسلسلة كتل.',
      ctaDownload: 'حمّل النسخة التجريبية',
      ctaHow: 'شاهد كيف يعمل',
      stat1l: 'نهائية التسوية على Arc',
      stat2l: 'خوادم أو وسطاء',
      stat3l: 'حفظ ذاتي، المفاتيح على جهازك',
    },
    partners: { label: 'مدعوم من' },
    story: {
      badge: 'لماذا بنيناه',
      h1: 'حكومات قطعت الإنترنت.',
      h2: 'لم يستطع الناس إنفاق سنت واحد.',
      p1: 'السودان. ميانمار. إيران. عندما انقطع الإنترنت، لم يستطع الناس شراء الطعام أو دفع الإيجار أو إرسال المال لعائلاتهم، حتى مع وجود USDC في محافظهم. كل دفعة رقمية، بما فيها العملات المشفرة، لا تزال تفترض وجود اتصال.',
      p2: 'هذا الافتراض هو نقطة الضعف، ليس المال، بل الأنابيب. وفي أفريقيا جنوب الصحراء، حيث معظم البالغين بلا خدمات مصرفية كاملة والاتصال متقطع، يخذل الناس كل يوم.',
      p3: 'وايامش يزيل هذا الافتراض من الدفعة نفسها. يوقّع هاتفك USDC بمفتاح مرتبط بالعتاد، ويسلّمها للمستلم عبر رمز QR أو البلوتوث، وأول هاتف يلمس الإنترنت يسوّيها على Arc في أقل من ثانية. لا أبراج، لا بنوك، لا خوادم.',
      quote: '«مالك يعمل. حتى عندما لا يعمل الإنترنت.»',
    },
    caps: {
      badge: 'مبني بشكل مختلف',
      heading: 'لماذا وايامش',
      items: [
        { title: 'إرسال وتسليم دون اتصال', desc: 'وقّع تحويل USDC دون اتصال. سلّمه للمستلم عبر رمز QR أو البلوتوث، يحتفظ بالمعاملة الجاهزة للتسوية، مع كشف تلقائي للتكرار عندما تحمل عدة هواتف الدفعة نفسها.' },
        { title: 'حفظ ذاتي وأمان', desc: 'تُولَّد المفاتيح على الجهاز وتُخزَّن مرتبطة بالعتاد، Android Keystore أو iOS Secure Enclave، محمية بالبصمة. لا تغادر الهاتف أبداً. لا خادم بينك وبين مالك.' },
        { title: 'تسوية على Arc في أقل من ثانية', desc: 'أول هاتف يجد اتصالاً يبث الدفعة. نهائية Arc نحو 480 مللي ثانية، ومع الحساب الذكي بلا غاز تدفع الرسوم بـ USDC نفسه، لا رمز غاز منفصل.' },
        { title: 'محفظة الوكيل بحدود صارمة', desc: 'مظروف إنفاق لا يمكن للأتمتة تجاوزه أبداً، حدود لكل معاملة ويومية وإجمالية، قوائم سماح، وانتهاء صلاحية، يفرضه على الجهاز محرك قواعد حتمي. الدفعات الدورية تُنفَّذ دون اتصال تماماً.' },
      ],
    },
    how: {
      badge: 'المسار',
      heading: 'كيف يعمل',
      steps: [
        { title: 'وقّع دون اتصال', desc: 'تنشئ دفعة. يوقّع هاتفك تحويل USDC بمفتاحه المرتبط بالعتاد، دون حاجة لاتصال. المعاملة الموقّعة مختومة: لا يمكن لأحد تغيير المبلغ أو المستلم أو المرسل.' },
        { title: 'سلّم', desc: 'تنتقل الدفعة إلى هاتف المستلم كرمز QR أو عبر البلوتوث، دون بنية تحتية. يحتفظ المستلم الآن بالمعاملة الجاهزة للتسوية؛ ولم يعد يعتمد على عودتك للاتصال. يمكن لأي هاتف أيضاً نقل دفعة طرف ثالث إلى الإنترنت.' },
        { title: 'سوِّ على Arc', desc: 'أول هاتف يلمس الإنترنت يبثها. نهائية Arc نحو نصف ثانية. بعد التسوية تصبح نهائية لا رجعة فيها، لا استرداد، لا إلغاء.' },
      ],
    },
    mobile: {
      h1: 'المال يتدفق دون اتصال.',
      h2: 'الحرية في جيبك.',
      sub: 'نسخة أندرويد التجريبية متاحة الآن · TestFlight لنظام iOS قريباً',
      apkTop: 'نسخة أندرويد التجريبية',
      apkBottom: 'حمّل APK',
      iosTop: 'TestFlight',
      iosBottom: 'قريباً',
      faucetNote: 'يعمل على شبكة Arc التجريبية، احصل على USDC تجريبي مجاناً من',
    },
    faq: {
      heading: 'الأسئلة الشائعة',
      items: [
        { q: 'هل مالي آمن؟', a: 'تُولَّد مفاتيحك الخاصة على الجهاز وتُخزَّن مرتبطة بالعتاد، Android Keystore أو iOS Secure Enclave، وتُفتح بالبصمة. كل دفعة تُوقَّع محلياً، والمعاملة الموقّعة مختومة: لا يمكن لأحد تغيير المبلغ أو المستلم أو المرسل. حتى لو اعتُرض التسليم، لا يمكن لأحد الوصول إلى أموالك دون مفتاحك.' },
        { q: 'هل تحتفظون بأموالي؟', a: 'لا. وايامش حفظ ذاتي بالكامل وبلا خوادم، هاتفك يتواصل مباشرة مع Arc. جهازك وحده يحمل مفتاحك الخاص. لا وصاية، لا خوادم، لا وسطاء. الاسترداد يعمل بثلاث طرق: عبارة الاسترداد، نسخة سحابية محمية برمز PIN، أو أجزاء شامير لدى أوصياء.' },
        { q: 'كيف تعمل الدفعات دون اتصال؟', a: 'يوقّع هاتفك تحويل USDC دون اتصال، ثم يسلّمه للمستلم كرمز QR أو عبر البلوتوث، والمستلم لا يحتاج إنترنت أيضاً. يحتفظ بالمعاملة الجاهزة للتسوية ولا يعتمد على عودتك للاتصال. أول هاتف يلمس الإنترنت يبثها، وتسوّيها Arc في نحو نصف ثانية. تُكشف النسخ المكررة تلقائياً.' },
        { q: 'ما هي محفظة الوكيل؟', a: 'مظروف إنفاق لا يمكن للذكاء الاصطناعي أو الأتمتة تجاوزه أبداً: حدود لكل معاملة ويومية وإجمالية، قوائم سماح، وانتهاء صلاحية، يفرضها على الجهاز محرك قواعد حتمي مع سجل تدقيق كامل. الدفعات الدورية تُنفَّذ دون اتصال: تمر عبر بوابة التفويض، وتُوقَّع محلياً، وتُسوَّى عند الاتصال.' },
        { q: 'هل يمكن حظره؟', a: 'البروتوكول مفتوح المصدر (MIT) وند-لند. تسليم QR يعمل بين أي هاتفين بكاميرا، والبلوتوث عتاد قياسي لا تستطيع أي حكومة حظره انتقائياً. الأموال تُسوَّى على Arc، مقاوم للرقابة بتصميمه.' },
      ],
    },
  },

  hi: {
    nav: { story: 'हमारी कहानी', how: 'यह कैसे काम करता है', tryIt: 'आज़माएँ' },
    hero: {
      h1a: 'USDC भेजें।',
      h1b: 'बिना इंटरनेट।',
      sub: 'बिना इंटरनेट के भुगतान साइन करें, QR कोड या ब्लूटूथ से रिसीवर को सौंपें, और जो भी फ़ोन पहले कनेक्शन पाए, वहीं से यह एक सेकंड से कम में Arc पर सेटल हो जाता है। पैसा जो नकद की तरह चलता है और ब्लॉकचेन की तरह सेटल होता है।',
      ctaDownload: 'बीटा डाउनलोड करें',
      ctaHow: 'देखें यह कैसे काम करता है',
      stat1l: 'Arc सेटलमेंट फ़ाइनलिटी',
      stat2l: 'सर्वर या बिचौलिए',
      stat3l: 'सेल्फ-कस्टडी, चाबियाँ आपके डिवाइस पर',
    },
    partners: { label: 'संचालित' },
    story: {
      badge: 'हमने इसे क्यों बनाया',
      h1: 'सरकारों ने इंटरनेट काट दिया।',
      h2: 'लोग एक पैसा भी खर्च नहीं कर पाए।',
      p1: 'सूडान। म्यांमार। ईरान। जब इंटरनेट बंद हुआ, लोग खाना नहीं खरीद पाए, किराया नहीं दे पाए, घर पैसे नहीं भेज पाए, जबकि USDC उनके वॉलेट में था। हर डिजिटल भुगतान, क्रिप्टो समेत, अब भी कनेक्शन मान कर चलता है।',
      p2: 'यही धारणा कमज़ोरी है, पैसा नहीं, पाइप। और उप-सहारा अफ़्रीका में, जहाँ अधिकांश वयस्कों के पास पूरी बैंकिंग नहीं है और कनेक्टिविटी रुक-रुक कर चलती है, यह रोज़ लोगों को धोखा देती है।',
      p3: 'Wayamesh इस धारणा को भुगतान से ही हटा देता है। आपका फ़ोन हार्डवेयर-बद्ध कुंजी से USDC साइन करता है, QR कोड या ब्लूटूथ से रिसीवर को सौंपता है, और जो भी फ़ोन पहले इंटरनेट छुए, वह Arc पर एक सेकंड से कम में सेटल कर देता है। न टावर, न बैंक, न सर्वर।',
      quote: '"आपका पैसा काम करता है। तब भी जब इंटरनेट नहीं करता।"',
    },
    caps: {
      badge: 'अलग तरह से बना',
      heading: 'Wayamesh ही क्यों',
      items: [
        { title: 'ऑफ़लाइन भेजना + हैंडऑफ़', desc: 'बिना कनेक्शन USDC ट्रांसफ़र साइन करें। QR कोड या ब्लूटूथ से रिसीवर को सौंपें, उसके पास सेटलमेंट-तैयार लेनदेन रहता है, और कई फ़ोन एक ही भुगतान ले जाएँ तो डुप्लिकेट अपने आप पकड़े जाते हैं।' },
        { title: 'सेल्फ-कस्टडी और सुरक्षा', desc: 'चाबियाँ डिवाइस पर बनती हैं और हार्डवेयर-बद्ध रहती हैं, Android Keystore या iOS Secure Enclave, बायोमेट्रिक से सुरक्षित। वे कभी फ़ोन से बाहर नहीं जातीं। आपके और आपके पैसे के बीच कोई सर्वर नहीं।' },
        { title: 'Arc पर एक सेकंड से कम में सेटल', desc: 'जो फ़ोन पहले कनेक्शन पाता है वह भुगतान प्रसारित करता है। Arc की फ़ाइनलिटी ≈480ms है, और गैसलेस स्मार्ट अकाउंट से आप फ़ीस USDC में ही देते हैं, अलग गैस टोकन नहीं।' },
        { title: 'सख़्त सीमाओं वाला एजेंट वॉलेट', desc: 'एक ख़र्च-लिफ़ाफ़ा जिसे ऑटोमेशन कभी पार नहीं कर सकता, प्रति-लेनदेन, दैनिक और कुल सीमाएँ, अनुमति-सूचियाँ, समाप्ति, डिवाइस पर नियतात्मक नीति इंजन से लागू। स्थायी भुगतान पूरी तरह ऑफ़लाइन चलते हैं।' },
      ],
    },
    how: {
      badge: 'प्रक्रिया',
      heading: 'यह कैसे काम करता है',
      steps: [
        { title: 'ऑफ़लाइन साइन करें', desc: 'आप भुगतान बनाते हैं। आपका फ़ोन हार्डवेयर-बद्ध कुंजी से USDC ट्रांसफ़र साइन करता है, कनेक्शन की ज़रूरत नहीं। साइन किया लेनदेन सील रहता है: राशि, प्राप्तकर्ता और भेजने वाला कोई नहीं बदल सकता।' },
        { title: 'हैंडऑफ़', desc: 'भुगतान QR कोड या ब्लूटूथ से रिसीवर के फ़ोन तक जाता है, बिना किसी इन्फ्रास्ट्रक्चर के। अब रिसीवर के पास सेटलमेंट-तैयार लेनदेन है; उसे आपके दोबारा कनेक्ट होने का इंतज़ार नहीं। कोई भी फ़ोन किसी तीसरे का भुगतान भी इंटरनेट तक पहुँचा सकता है।' },
        { title: 'Arc पर सेटल करें', desc: 'जो फ़ोन पहले इंटरनेट छूता है वह प्रसारित करता है। Arc की फ़ाइनलिटी लगभग आधा सेकंड है। सेटल होने के बाद यह अपरिवर्तनीय है, न चार्जबैक, न रद्दीकरण।' },
      ],
    },
    mobile: {
      h1: 'पैसा ऑफ़लाइन बहता है।',
      h2: 'आज़ादी आपकी जेब में।',
      sub: 'Android बीटा अभी उपलब्ध · iOS TestFlight जल्द आ रहा है',
      apkTop: 'Android बीटा',
      apkBottom: 'APK डाउनलोड करें',
      iosTop: 'iOS TestFlight',
      iosBottom: 'जल्द आ रहा है',
      faucetNote: 'Arc Testnet पर चलता है, मुफ़्त टेस्ट USDC पाएँ',
    },
    faq: {
      heading: 'अक्सर पूछे जाने वाले सवाल',
      items: [
        { q: 'क्या मेरा पैसा सुरक्षित है?', a: 'आपकी निजी चाबियाँ डिवाइस पर बनती हैं और हार्डवेयर-बद्ध रहती हैं, Android Keystore या iOS Secure Enclave, बायोमेट्रिक से खुलती हैं। हर भुगतान लोकल साइन होता है और साइन किया लेनदेन सील रहता है: राशि, प्राप्तकर्ता और भेजने वाला कोई नहीं बदल सकता। हैंडऑफ़ पकड़ा भी जाए, आपकी चाबी के बिना कोई आपके फंड तक नहीं पहुँच सकता।' },
        { q: 'क्या आप मेरे फंड रखते हैं?', a: 'नहीं। Wayamesh पूरी तरह सेल्फ-कस्टोडियल है और इसका कोई बैकएंड नहीं, आपका फ़ोन सीधे Arc से बात करता है। सिर्फ़ आपका डिवाइस आपकी निजी चाबी रखता है। न कस्टडी, न सर्वर, न बिचौलिए। रिकवरी तीन तरीक़ों से: सीड फ़्रेज़, PIN-सुरक्षित क्लाउड बैकअप, या शमीर गार्जियन शार्ड्स।' },
        { q: 'ऑफ़लाइन भुगतान कैसे काम करते हैं?', a: 'आपका फ़ोन बिना कनेक्शन USDC ट्रांसफ़र साइन करता है, फिर QR कोड या ब्लूटूथ से रिसीवर को सौंपता है, रिसीवर को भी इंटरनेट नहीं चाहिए। उसके पास सेटलमेंट-तैयार लेनदेन रहता है। जो फ़ोन पहले इंटरनेट छूता है वह प्रसारित करता है, और Arc लगभग आधे सेकंड में सेटल कर देता है। डुप्लिकेट अपने आप पकड़े जाते हैं।' },
        { q: 'एजेंट वॉलेट क्या है?', a: 'एक ख़र्च-लिफ़ाफ़ा जिसे AI या ऑटोमेशन कभी पार नहीं कर सकता: प्रति-लेनदेन, दैनिक और कुल सीमाएँ, अनुमति-सूचियाँ और समाप्ति, डिवाइस पर नियतात्मक नीति इंजन से लागू, पूरे ऑडिट लॉग के साथ। स्थायी भुगतान ऑफ़लाइन चलते हैं: मैंडेट गेट से गुज़रते हैं, लोकल साइन होते हैं, और कनेक्ट होते ही सेटल हो जाते हैं।' },
        { q: 'क्या इसे रोका जा सकता है?', a: 'प्रोटोकॉल ओपन-सोर्स (MIT) और पीयर-टू-पीयर है। QR हैंडऑफ़ कैमरे वाले किसी भी दो फ़ोन के बीच काम करता है, और ब्लूटूथ मानक हार्डवेयर है जिसे कोई सरकार चुनिंदा रूप से बैन नहीं कर सकती। फंड Arc पर सेटल होते हैं, डिज़ाइन से सेंसरशिप-प्रतिरोधी।' },
      ],
    },
  },

  zh: {
    nav: { story: '我们的故事', how: '工作原理', tryIt: '立即体验' },
    hero: {
      h1a: '发送 USDC。',
      h1b: '无需网络。',
      sub: '无需网络即可签署付款，通过二维码或蓝牙交给收款人，由最先联网的手机在一秒内于 Arc 上完成结算。像现金一样流动，像区块链一样结算。',
      ctaDownload: '下载测试版',
      ctaHow: '了解工作原理',
      stat1l: 'Arc 结算最终性',
      stat2l: '服务器或中间人',
      stat3l: '自主托管，密钥在您的设备上',
    },
    partners: { label: '技术支持' },
    story: {
      badge: '我们为什么打造它',
      h1: '政府切断了互联网。',
      h2: '人们一分钱也花不出去。',
      p1: '苏丹、缅甸、伊朗。互联网中断时，人们无法买食物、付房租、给家里汇款，即使钱包里就有 USDC。每一笔数字支付，包括加密货币，仍然默认需要网络连接。',
      p2: '这个假设正是脆弱点，问题不在钱，而在管道。在撒哈拉以南非洲，大多数成年人缺乏完善的银行服务且网络时断时续，它每天都在辜负人们。',
      p3: 'Wayamesh 把这个假设从支付本身中移除。您的手机用硬件绑定密钥签署 USDC，通过二维码或蓝牙交给收款人，最先联网的手机在一秒内将其在 Arc 上结算。没有基站，没有银行，没有服务器。',
      quote: '"您的钱始终有效。即使互联网失效。"',
    },
    caps: {
      badge: '与众不同',
      heading: '为什么选择 Wayamesh',
      items: [
        { title: '离线发送 + 交接', desc: '无需连接即可签署 USDC 转账。通过二维码或蓝牙交给收款人，对方持有可随时结算的交易，多部手机携带同一笔付款时自动去重。' },
        { title: '自主托管，安全可靠', desc: '密钥在设备上生成并硬件绑定存储，Android Keystore 或 iOS Secure Enclave，由生物识别保护，永不离开手机。您和您的钱之间没有任何服务器。' },
        { title: '一秒内在 Arc 上结算', desc: '最先联网的手机广播付款。Arc 最终性约为 480 毫秒，配合无燃气费智能账户，手续费直接用 USDC 支付，无需单独的燃气代币。' },
        { title: '硬性限额的代理钱包', desc: '自动化永远无法超出的支出信封，单笔、每日和总限额、白名单、有效期，由设备上的确定性策略引擎强制执行。定期付款完全离线执行。' },
      ],
    },
    how: {
      badge: '流程',
      heading: '工作原理',
      steps: [
        { title: '离线签署', desc: '您创建一笔付款。手机用硬件绑定密钥签署 USDC 转账，无需任何连接。签署后的交易被密封：金额、收款人和付款人任何人都无法更改。' },
        { title: '交接', desc: '付款以二维码或蓝牙的形式传到收款人手机，无需基础设施。收款人现在持有可随时结算的交易，不再依赖您重新联网。任何手机还可以帮第三方把付款带到互联网。' },
        { title: '在 Arc 上结算', desc: '最先联网的手机将其广播。Arc 最终性约为半秒。一旦结算即不可逆，没有拒付，没有撤销。' },
      ],
    },
    mobile: {
      h1: '资金离线流动。',
      h2: '自由尽在口袋。',
      sub: 'Android 测试版现已推出 · iOS TestFlight 即将上线',
      apkTop: 'Android 测试版',
      apkBottom: '下载 APK',
      iosTop: 'iOS TestFlight',
      iosBottom: '即将上线',
      faucetNote: '运行于 Arc 测试网，免费领取测试 USDC：',
    },
    faq: {
      heading: '常见问题',
      items: [
        { q: '我的钱安全吗？', a: '您的私钥在设备上生成并硬件绑定存储，Android Keystore 或 iOS Secure Enclave，通过生物识别解锁。每笔付款都在本地签署，签署后的交易被密封：金额、收款人和付款人任何人都无法更改。即使交接被截获，没有您的密钥也无人能动用您的资金。' },
        { q: '你们保管我的资金吗？', a: '不。Wayamesh 完全自主托管，没有后端，您的手机直接与 Arc 通信。只有您的设备持有私钥。没有托管，没有服务器，没有中间人。恢复有三种方式：助记词、PIN 保护的云备份，或 Shamir 监护人分片。' },
        { q: '离线支付如何运作？', a: '手机在无连接状态下签署 USDC 转账，然后以二维码或蓝牙交给收款人，收款人同样不需要网络。对方持有可随时结算的交易，不依赖您重新联网。最先联网的手机将其广播，Arc 约半秒内完成结算。重复交易会被自动识别。' },
        { q: '什么是代理钱包？', a: 'AI 或自动化永远无法超出的支出信封：单笔、每日和总限额、白名单和有效期，由设备上的确定性策略引擎强制执行，并带有完整审计日志。定期付款完全离线执行：到期付款通过授权检查、本地签署，联网后即结算。' },
        { q: '它会被封锁吗？', a: '协议开源（MIT）且点对点。二维码交接在任何两部带摄像头的手机之间都可用，蓝牙是任何政府都无法选择性禁用的标准硬件。资金在 Arc 上结算，设计上抗审查。' },
      ],
    },
  },

  de: {
    nav: { story: 'Unsere Geschichte', how: 'So funktioniert’s', tryIt: 'Ausprobieren' },
    hero: {
      h1a: 'Sende USDC.',
      h1b: 'Ohne Internet.',
      sub: 'Signiere eine Zahlung ohne Internet, übergib sie per QR-Code oder Bluetooth an den Empfänger, und sie wird auf Arc in unter einer Sekunde abgewickelt, vom ersten Telefon, das eine Verbindung findet. Geld, das sich wie Bargeld bewegt und wie eine Blockchain abrechnet.',
      ctaDownload: 'Beta herunterladen',
      ctaHow: 'So funktioniert’s',
      stat1l: 'Arc-Abwicklungsfinalität',
      stat2l: 'Server oder Mittelsmänner',
      stat3l: 'Self-Custody, Schlüssel auf dem Gerät',
    },
    partners: { label: 'Unterstützt von' },
    story: {
      badge: 'Warum wir es gebaut haben',
      h1: 'Regierungen kappten das Internet.',
      h2: 'Die Menschen konnten keinen Cent ausgeben.',
      p1: 'Sudan. Myanmar. Iran. Als das Internet ausfiel, konnten die Menschen kein Essen kaufen, keine Miete zahlen, kein Geld nach Hause schicken, obwohl USDC in ihren Wallets lag. Jede digitale Zahlung, Krypto eingeschlossen, setzt noch immer eine Verbindung voraus.',
      p2: 'Diese Annahme ist die Schwachstelle, nicht das Geld, die Leitungen. Und in Subsahara-Afrika, wo die meisten Erwachsenen kein oder kaum Bankkonto haben und die Verbindung ständig abbricht, lässt sie die Menschen täglich im Stich.',
      p3: 'Wayamesh entfernt sie aus der Zahlung selbst. Dein Telefon signiert USDC mit einem hardwaregebundenen Schlüssel, übergibt sie per QR-Code oder Bluetooth an den Empfänger, und das erste Telefon mit Internet wickelt sie in unter einer Sekunde auf Arc ab. Keine Masten, keine Banken, keine Server.',
      quote: '„Dein Geld funktioniert. Auch wenn das Internet es nicht tut.“',
    },
    caps: {
      badge: 'Anders gebaut',
      heading: 'Warum Wayamesh',
      items: [
        { title: 'Offline senden + übergeben', desc: 'Signiere eine USDC-Überweisung ohne Verbindung. Übergib sie per QR-Code oder Bluetooth, der Empfänger hält die abwicklungsbereite Transaktion, mit automatischer Deduplizierung, wenn mehrere Telefone dieselbe Zahlung tragen.' },
        { title: 'Self-Custody & sicher', desc: 'Schlüssel werden auf dem Gerät erzeugt und hardwaregebunden gespeichert, Android Keystore oder iOS Secure Enclave, biometrisch gesichert. Sie verlassen das Telefon nie. Kein Server zwischen dir und deinem Geld.' },
        { title: 'Abwicklung auf Arc in unter einer Sekunde', desc: 'Das erste Telefon mit Verbindung sendet die Zahlung. Arc-Finalität liegt bei ≈480 ms, und mit dem gaslosen Smart Account zahlst du Gebühren direkt in USDC, kein separates Gas-Token.' },
        { title: 'Agent-Wallet mit harten Limits', desc: 'Ein Ausgabenrahmen, den Automatisierung nie überschreiten kann, Limits pro Transaktion, täglich und gesamt, Positivlisten, Ablaufdatum, durchgesetzt auf dem Gerät von einer deterministischen Policy-Engine. Daueraufträge laufen komplett offline.' },
      ],
    },
    how: {
      badge: 'Der Ablauf',
      heading: 'So funktioniert’s',
      steps: [
        { title: 'Offline signieren', desc: 'Du erstellst eine Zahlung. Dein Telefon signiert die USDC-Überweisung mit seinem hardwaregebundenen Schlüssel, ohne Verbindung. Die signierte Transaktion ist versiegelt: Betrag, Empfänger und Absender kann niemand ändern.' },
        { title: 'Übergeben', desc: 'Die Zahlung gelangt als QR-Code oder über Bluetooth auf das Telefon des Empfängers, ohne Infrastruktur. Der Empfänger hält jetzt die abwicklungsbereite Transaktion; er hängt nicht mehr davon ab, dass du wieder online gehst. Jedes Telefon kann auch die Zahlung eines Dritten zum Internet tragen.' },
        { title: 'Auf Arc abwickeln', desc: 'Das erste Telefon mit Internet sendet sie. Arc-Finalität: rund eine halbe Sekunde. Einmal abgewickelt, ist sie unumkehrbar, keine Rückbuchungen, keine Stornierung.' },
      ],
    },
    mobile: {
      h1: 'Geld fließt offline.',
      h2: 'Freiheit in deiner Tasche.',
      sub: 'Android-Beta jetzt verfügbar · iOS TestFlight kommt bald',
      apkTop: 'Android-Beta',
      apkBottom: 'APK herunterladen',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Kommt bald',
      faucetNote: 'Läuft auf Arc Testnet, kostenloses Test-USDC gibt es auf',
    },
    faq: {
      heading: 'Häufige Fragen',
      items: [
        { q: 'Ist mein Geld sicher?', a: 'Deine privaten Schlüssel werden auf dem Gerät erzeugt und hardwaregebunden gespeichert, Android Keystore oder iOS Secure Enclave, und biometrisch entsperrt. Jede Zahlung wird lokal signiert, und die signierte Transaktion ist versiegelt: Betrag, Empfänger und Absender kann niemand ändern. Selbst wenn eine Übergabe abgefangen wird, kommt ohne deinen Schlüssel niemand an dein Geld.' },
        { q: 'Verwahrt ihr meine Gelder?', a: 'Nein. Wayamesh ist vollständig self-custodial und hat kein Backend, dein Telefon spricht direkt mit Arc. Nur dein Gerät hält deinen privaten Schlüssel. Keine Verwahrung, keine Server, keine Mittelsmänner. Wiederherstellung auf drei Wegen: Seed-Phrase, PIN-geschütztes Cloud-Backup oder Shamir-Guardian-Shares.' },
        { q: 'Wie funktionieren Zahlungen offline?', a: 'Dein Telefon signiert die USDC-Überweisung ohne Verbindung und übergibt sie per QR-Code oder Bluetooth, auch der Empfänger braucht kein Internet. Er hält die abwicklungsbereite Transaktion und hängt nicht von deiner Rückkehr ins Netz ab. Das erste Telefon mit Internet sendet sie, Arc wickelt in rund einer halben Sekunde ab. Duplikate werden automatisch erkannt.' },
        { q: 'Was ist das Agent-Wallet?', a: 'Ein Ausgabenrahmen, den KI oder Automatisierung nie überschreiten kann: Limits pro Transaktion, täglich und gesamt, Positivlisten und Ablaufdatum, durchgesetzt auf dem Gerät von einer deterministischen Policy-Engine mit vollständigem Audit-Log. Daueraufträge laufen offline: fällige Zahlungen passieren die Mandatsprüfung, signieren lokal und wickeln bei Wiederverbindung ab.' },
        { q: 'Kann es blockiert werden?', a: 'Das Protokoll ist Open Source (MIT) und Peer-to-Peer. QR-Übergabe funktioniert zwischen zwei beliebigen Telefonen mit Kamera, und Bluetooth ist Standard-Hardware, die keine Regierung gezielt verbieten kann. Gelder werden auf Arc abgewickelt, zensurresistent by design.' },
      ],
    },
  },

  ru: {
    nav: { story: 'Наша история', how: 'Как это работает', tryIt: 'Попробовать' },
    hero: {
      h1a: 'Отправляйте USDC.',
      h1b: 'Без интернета.',
      sub: 'Подпишите платёж без интернета, передайте получателю по QR-коду или Bluetooth — и он рассчитается в Arc менее чем за секунду с первого телефона, нашедшего связь. Деньги, которые движутся как наличные и рассчитываются как блокчейн.',
      ctaDownload: 'Скачать бету',
      ctaHow: 'Как это работает',
      stat1l: 'Финальность расчёта в Arc',
      stat2l: 'Серверы или посредники',
      stat3l: 'Самостоятельное хранение, ключи на устройстве',
    },
    partners: { label: 'Работает на' },
    story: {
      badge: 'Почему мы это создали',
      h1: 'Правительства отключали интернет.',
      h2: 'Люди не могли потратить ни цента.',
      p1: 'Судан. Мьянма. Иран. Когда интернет отключался, люди не могли купить еду, заплатить за жильё или отправить деньги домой — даже с USDC в кошельке. Каждый цифровой платёж, включая криптовалюту, по-прежнему предполагает соединение.',
      p2: 'Это допущение и есть уязвимость — не деньги, а «трубы». А в Африке к югу от Сахары, где большинство взрослых не имеют полноценного доступа к банкам, а связь нестабильна, оно подводит людей каждый день.',
      p3: 'Wayamesh убирает его из самого платежа. Ваш телефон подписывает USDC аппаратно-привязанным ключом, передаёт получателю по QR-коду или Bluetooth, и первый телефон, коснувшийся интернета, рассчитывает его в Arc менее чем за секунду. Ни вышек, ни банков, ни серверов.',
      quote: '«Ваши деньги работают. Даже когда интернет — нет.»',
    },
    caps: {
      badge: 'Устроен иначе',
      heading: 'Почему Wayamesh',
      items: [
        { title: 'Оффлайн-отправка + передача', desc: 'Подпишите перевод USDC без связи. Передайте получателю по QR-коду или Bluetooth — у него готовая к расчёту транзакция, а дубликаты обнаруживаются автоматически, если один платёж несут несколько телефонов.' },
        { title: 'Самостоятельное хранение и безопасность', desc: 'Ключи создаются на устройстве и хранятся аппаратно-привязанными — Android Keystore или iOS Secure Enclave — под защитой биометрии. Они никогда не покидают телефон. Между вами и вашими деньгами нет сервера.' },
        { title: 'Расчёт в Arc менее чем за секунду', desc: 'Первый телефон, нашедший связь, транслирует платёж. Финальность Arc ≈480 мс, а с безгазовым смарт-аккаунтом комиссии оплачиваются самим USDC — без отдельного газового токена.' },
        { title: 'Агентский кошелёк с жёсткими лимитами', desc: 'Конверт расходов, который автоматизация никогда не превысит — лимиты на транзакцию, день и всего, белые списки, срок действия — исполняется на устройстве детерминированным движком правил. Регулярные платежи выполняются полностью оффлайн.' },
      ],
    },
    how: {
      badge: 'Процесс',
      heading: 'Как это работает',
      steps: [
        { title: 'Подпишите оффлайн', desc: 'Вы создаёте платёж. Телефон подписывает перевод USDC аппаратно-привязанным ключом — соединение не нужно. Подписанная транзакция запечатана: сумму, получателя и отправителя никто не может изменить.' },
        { title: 'Передайте', desc: 'Платёж попадает на телефон получателя как QR-код или по Bluetooth — без инфраструктуры. Теперь у получателя готовая к расчёту транзакция; он больше не зависит от вашего выхода в сеть. Любой телефон может также донести чужой платёж до интернета.' },
        { title: 'Рассчитайте в Arc', desc: 'Первый телефон, коснувшийся интернета, транслирует его. Финальность Arc — около полсекунды. После расчёта он необратим — ни возвратов, ни отмен.' },
      ],
    },
    mobile: {
      h1: 'Деньги текут оффлайн.',
      h2: 'Свобода в вашем кармане.',
      sub: 'Android-бета уже доступна · iOS TestFlight скоро',
      apkTop: 'Android-бета',
      apkBottom: 'Скачать APK',
      iosTop: 'iOS TestFlight',
      iosBottom: 'Скоро',
      faucetNote: 'Работает в Arc Testnet — бесплатные тестовые USDC на',
    },
    faq: {
      heading: 'Частые вопросы',
      items: [
        { q: 'Мои деньги в безопасности?', a: 'Ваши приватные ключи создаются на устройстве и хранятся аппаратно-привязанными — Android Keystore или iOS Secure Enclave — и разблокируются биометрией. Каждый платёж подписывается локально, а подписанная транзакция запечатана: сумму, получателя и отправителя никто не изменит. Даже если передачу перехватят, без вашего ключа никто не получит доступ к средствам.' },
        { q: 'Вы храните мои средства?', a: 'Нет. Wayamesh полностью некастодиален и не имеет бэкенда — телефон общается с Arc напрямую. Приватный ключ есть только на вашем устройстве. Ни кастодиана, ни серверов, ни посредников. Восстановление тремя способами: сид-фраза, облачная копия под PIN или гардиан-шарды Шамира.' },
        { q: 'Как работают платежи оффлайн?', a: 'Телефон подписывает перевод USDC без связи и передаёт получателю QR-кодом или по Bluetooth — получателю интернет тоже не нужен. У него готовая к расчёту транзакция, и он не зависит от вашего выхода в сеть. Первый телефон с интернетом транслирует её, Arc рассчитывает примерно за полсекунды. Дубликаты выявляются автоматически.' },
        { q: 'Что такое агентский кошелёк?', a: 'Конверт расходов, который ИИ или автоматизация никогда не превысит: лимиты на транзакцию, день и всего, белые списки и срок действия — исполняется на устройстве детерминированным движком правил с полным журналом аудита. Регулярные платежи идут оффлайн: проходят проверку мандата, подписываются локально и рассчитываются при подключении.' },
        { q: 'Можно ли это заблокировать?', a: 'Протокол с открытым кодом (MIT) и одноранговый. Передача по QR работает между любыми двумя телефонами с камерой, а Bluetooth — стандартное оборудование, которое ни одно правительство не запретит выборочно. Средства рассчитываются в Arc — устойчивом к цензуре по самой конструкции.' },
      ],
    },
  },
};

export type Lang = keyof typeof translations;
export type Dict = (typeof translations)['en'];

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
