// ============================================
// MENU DATA & TRANSLATIONS
// ============================================

const menuData = {
    company: {
        en: [
            {
                id: 'enterprise',
                title: 'Profile',
                subtitle: 'AI-native, delivered.',
                desc: 'We merge human creativity with advanced artificial intelligence to deliver next-generation brand strategy, UI/UX design, and digital experiences.',
                cards: [
                    { title: '15 Years of Innovation', desc: 'Fifteen years of building brands, launching digital products, and designing for the future.' },
                    { title: '200+ Completed Projects', desc: 'Strategy, UI/UX, generative campaigns — designed and built for ambitious global companies.' },
                    { title: 'Global Footprint', desc: 'Medellín and Istanbul headquartered, operating globally. Remote-first but on the ground where it matters.' },
                    { title: 'AI-Native Integration', desc: 'Leveraging cutting-edge AI pipelines to achieve exceptional speed, quality, and scale.' }
                ]
            },
            {
                id: 'solutions',
                title: 'Solutions',
                subtitle: 'End-to-end creative.',
                desc: 'We provide comprehensive creative direction, digital product engineering, and automated growth loops.',
                cards: [
                    { title: 'Creative Strategy', desc: 'Positioning your brand at the intersection of technology and culture' },
                    { title: 'Product & Design', desc: 'Designing premium web, mobile, and interactive digital interfaces' },
                    { title: 'Immersive Tech', desc: 'Crafting responsive, interactive, and software-first user experiences' },
                    { title: 'Growth Systems', desc: 'Building automated content engines and performance marketing campaigns' }
                ]
            },
            {
                id: 'vision',
                title: 'Vision',
                subtitle: 'Aesthetics meet technology.',
                desc: 'Open platforms, clean design systems, and software that makes brands feel alive — from landing pages to custom applications.',
                cards: [
                    { title: 'Co-Piloted Design', desc: 'Human direction co-piloted by generative AI. Blazing speed meets human soul.' },
                    { title: 'Component-First', desc: 'Design systems built as structured code. Scalable, modular, and maintainable.' },
                    { title: 'Immersive Web', desc: 'No static templates. Every website is built as an interactive experience.' },
                    { title: 'The Long Arc', desc: 'We build visual identity and digital infrastructure that endures.' }
                ]
            }
        ],
        tr: [
            {
                id: 'enterprise',
                title: 'Profil',
                subtitle: 'Yapay zekâ destekli yaratıcılık.',
                desc: 'Gelecek nesil marka stratejisi, UI/UX tasarımı ve dijital deneyimler sunmak için insan yaratıcılığını yapay zekâ iş akışlarıyla birleştiriyoruz.',
                cards: [
                    { title: '15 Yıllık İnovasyon', desc: 'Dijital dünyada marka inşası, ürün lansmanları ve gelecek tasarımıyla geçen 15 yıl.' },
                    { title: '200+ Tamamlanmış Proje', desc: 'Strateji, UI/UX, üretken kampanyalar — küresel ölçekli vizyoner şirketler için tasarlandı ve kuruldu.' },
                    { title: 'Küresel Varlık', desc: 'Medellín ve İstanbul merkezli, tüm dünyada aktif. Uzaktan çalışma odaklı ama kilit noktalarda sahada.' },
                    { title: 'Yapay Zekâ Entegrasyonu', desc: 'Eşsiz hız, kalite ve ölçek elde etmek için en son yapay zekâ araçlarını kullanıyoruz.' }
                ]
            },
            {
                id: 'solutions',
                title: 'Çözümler',
                subtitle: 'Uçtan uca kreatif güç.',
                desc: 'Markalar için kapsamlı kreatif direktörlük, dijital ürün mühendisliği ve otomatik büyüme döngüleri sunuyoruz.',
                cards: [
                    { title: 'Kreatif Strateji', desc: 'Markanızı teknoloji ve kültürün kesişim noktasında konumlandırıyoruz' },
                    { title: 'Ürün ve Tasarım', desc: 'Web, mobil ve interaktif dijital arayüzler için premium tasarımlar' },
                    { title: 'İnteraktif Teknoloji', desc: 'Duyarlı, etkileşimli ve yazılım odaklı kullanıcı deneyimleri üretiyoruz' },
                    { title: 'Büyüme Sistemleri', desc: 'Otomatik içerik motorları ve performans pazarlama kampanyaları kuruyoruz' }
                ]
            },
            {
                id: 'vision',
                title: 'Vizyon',
                subtitle: 'Estetik teknolojiyle buluşuyor.',
                desc: 'Açık platformlar, temiz tasarım sistemleri ve markaları canlı hissettiren yazılımlar — arayüzlerden özel uygulamalara.',
                cards: [
                    { title: 'Ortak Akıl Tasarımı', desc: 'Üretken yapay zekâ ile eşgüdümlü insan direktörlüğü. Baş döndürücü hız, insan ruhuyla birleşiyor.' },
                    { title: 'Önce Bileşenler', desc: 'Yapısal kod olarak inşa edilen tasarım sistemleri. Ölçeklenebilir ve modüler.' },
                    { title: 'İnteraktif Web', desc: 'Statik şablonlar yok. Her web sitesi etkileşimli bir deneyim olarak tasarlanır.' },
                    { title: 'Geleceğe Yatırım', desc: 'Yıllarca yaşayacak görsel kimlikler ve dijital altyapılar inşa ediyoruz.' }
                ]
            }
        ]
    },
    resources: {
        en: [
            {
                id: 'ai-native-design',
                title: 'AI-Native Design',
                subtitle: 'Workflows & Automation',
                desc: 'How advanced design teams use generative AI tools to increase speed and maintain aesthetic excellence.',
                cards: [
                    { title: 'AI-Native Creative Pipelines 101', desc: 'Integrating generative tools into modern digital product design', slug: 'ai-design-workflow' },
                    { title: 'Midjourney to Production', desc: 'How to convert raw AI generations into high-quality production assets', slug: 'midjourney-production' },
                    { title: 'Speed vs. Soul in UI/UX', desc: 'Finding the balance between automated output and hand-crafted details', slug: 'uiux-optimization' },
                    { title: 'The Software-First Creative', desc: 'Why the designers of tomorrow must learn to speak in code', slug: 'ai-future-creativity' }
                ]
            },
            {
                id: 'creative-playbook',
                title: 'Creative Playbook',
                subtitle: 'Execution Guides',
                desc: 'Tactical execution playbooks for brand positioning, design systems, and launching digital products.',
                cards: [
                    { title: 'Scaling Brands in 2026', desc: 'How to build visual systems that stand out in an AI-saturated market', slug: 'brand-scaling-2026' },
                    { title: 'The Art of Naming', desc: 'A practical framework for naming products and companies that stick', slug: 'naming-conventions' },
                    { title: 'Launching Digital Products', desc: 'The first 90 days of marketing, positioning, and beta-testing', slug: 'launching-digital-products' },
                    { title: 'Design Systems that Grow', desc: 'Building modular styles that adapt from seed stage to scale-up', slug: 'design-systems-scale' }
                ]
            },
            {
                id: 'agency-pulse',
                title: 'Agency Pulse',
                subtitle: 'Industry Insights',
                desc: 'Critical analysis of the agency landscape, pricing models, and the evolution of design partnerships.',
                cards: [
                    { title: 'The 15-Year Agency Shift', desc: 'How client expectations evolved from large retainers to agile squads', slug: 'creative-agency-shift' },
                    { title: 'Why Traditional Agencies Fail', desc: 'The structural flaws of bloated teams and slow production loops', slug: 'why-traditional-agencies-fail' },
                    { title: 'Fractional Creative Direction', desc: 'Accessing world-class design leadership without the full-time cost', slug: 'fractional-creative-direction' },
                    { title: 'Immersive Web Experiences', desc: 'Why static landing pages are losing conversions to interactive sites', slug: 'future-of-brand-experience' }
                ]
            },
            {
                id: 'studio-notes',
                title: 'Studio Notes',
                subtitle: 'Behind the Scenes',
                desc: 'Lessons, mistakes, and observations from running a boutique design and strategy studio.',
                cards: [
                    { title: '15 Years, 15 Hard Truths', desc: 'The most important lessons learned from the pre-AI era to today', slug: 'fifteen-years-lessons' },
                    { title: 'Behind the Pixels', desc: 'An honest look at our internal tool stack, automation, and culture', slug: 'behind-the-scenes-story' },
                    { title: 'Building Trust Over Dinner', desc: 'Why long-term client partnerships start with alignment, not contracts', slug: 'client-relationship-trust' },
                    { title: 'The Pivot to AI-Native', desc: 'Why we tore down our traditional production pipeline to start fresh', slug: 'ai-native-studio-birth' }
                ]
            }
        ],
        tr: [
            {
                id: 'ai-native-design',
                title: 'Yapay Zekâ Tasarımı',
                subtitle: 'İş Akışları ve Otomasyon',
                desc: 'Modern tasarım ekiplerinin estetik mükemmelliği korurken yapay zekâ araçlarını nasıl kullandığı.',
                cards: [
                    { title: 'Yapay Zekâ Destekli Tasarım 101', desc: 'Üretken araçları dijital ürün geliştirme süreçlerine entegre etmek', slug: 'ai-design-workflow' },
                    { title: 'Midjourney\'den Üretime', desc: 'Yapay zekâ çıktılarının yüksek kaliteli üretim öğelerine dönüştürülmesi', slug: 'midjourney-production' },
                    { title: 'UI/UX\'te Hız ve Ruh', desc: 'Otomatik üretim ile el yapımı ince detaylar arasındaki dengeyi bulmak', slug: 'uiux-optimization' },
                    { title: 'Yazılım Odaklı Tasarımcılar', desc: 'Geleceğin tasarımcılarının neden kod dilini öğrenmesi gerekiyor', slug: 'ai-future-creativity' }
                ]
            },
            {
                id: 'creative-playbook',
                title: 'Kreatif Rehber',
                subtitle: 'Uygulama Metotları',
                desc: 'Marka konumlandırma, tasarım sistemleri ve ürün lansmanları için taktiksel rehberler.',
                cards: [
                    { title: '2026\'da Marka Ölçekleme', desc: 'Yapay zekâ çağında kalabalıktan sıyrılan görsel sistemler oluşturmak', slug: 'brand-scaling-2026' },
                    { title: 'İsimlendirmenin Sanatı', desc: 'Akılda kalıcı ürün ve şirket isimleri bulmak için pratik metotlar', slug: 'naming-conventions' },
                    { title: 'Dijital Ürün Lansmanı', desc: 'Pazarlama, konumlandırma ve beta testlerinin ilk 90 günlük takvimi', slug: 'launching-digital-products' },
                    { title: 'Büyüyen Tasarım Sistemleri', desc: 'Başlangıç aşamasından ölçeklenmeye uyum sağlayan modüler stiller', slug: 'design-systems-scale' }
                ]
            },
            {
                id: 'agency-pulse',
                title: 'Ajans Nabzı',
                subtitle: 'Sektörel İncelemeler',
                desc: 'Tasarım ortaklıklarının evrimi, fiyatlandırma modelleri ve ajans dünyasının analizi.',
                cards: [
                    { title: '15 Yıllık Ajans Dönüşümü', desc: 'Müşteri beklentilerinin hantal yapılardan çevik ekiplere kayışı', slug: 'creative-agency-shift' },
                    { title: 'Geleneksel Ajanslar Neden Başarısız?', desc: 'Hantal ekiplerin ve yavaş üretim döngülerinin yapısal sorunları', slug: 'why-traditional-agencies-fail' },
                    { title: 'Dönemsel Kreatif Direktörlük', desc: 'Tam zamanlı maliyet olmadan dünya standartlarında tasarım liderliği', slug: 'fractional-creative-direction' },
                    { title: 'Sürükleyici Web Deneyimleri', desc: 'Statik sayfaların dönüşüm oranlarında interaktif sitelerin gerisinde kalışı', slug: 'future-of-brand-experience' }
                ]
            },
            {
                id: 'studio-notes',
                title: 'Stüdyo Notları',
                subtitle: 'Perde Arkası',
                desc: 'Butik bir tasarım stüdyosu yönetirken kazanılan dersler, yapılan hatalar ve gözlemler.',
                cards: [
                    { title: '15 Yıl, 15 Acı Gerçek', desc: 'Yapay zekâ öncesi dönemden bugüne kadar öğrenilen en önemli dersler', slug: 'fifteen-years-lessons' },
                    { title: 'Piksellerin Arkası', desc: 'İç araç setimiz, otomasyon sistemlerimiz ve kültürümüze dürüst bir bakış', slug: 'behind-the-scenes-story' },
                    { title: 'Yemekte Güven İnşa Etmek', desc: 'Müşteri ortaklıklarının sözleşmelerle değil, güvenle başladığı gerçeği', slug: 'client-relationship-trust' },
                    { title: 'Yapay Zekâya Geçiş Hikayemiz', desc: 'Geleneksel üretim hatlarımızı yıkıp neden en baştan başladık?', slug: 'ai-native-studio-birth' }
                ]
            }
        ]
    },
    contact: {
        en: [
            {
                id: 'channels',
                title: 'Channels',
                subtitle: 'Reach out to us',
                desc: 'Connect with our team for design inquiries, partnership proposals, or media.',
                cards: [
                    { title: 'Creative', desc: 'creative@gunery.com' },
                    { title: 'Strategy', desc: 'strategy@gunery.com' },
                    { title: 'Careers', desc: 'careers@gunery.com' },
                    { title: 'General', desc: 'hello@gunery.com' }
                ]
            },
            {
                id: 'regions',
                title: 'Regions',
                subtitle: 'Studio Touchpoints',
                desc: 'Find our primary studio locations and regional contact representatives.',
                cards: [
                    { title: 'Medellín', desc: 'Colombia Creative Hub' },
                    { title: 'Istanbul', desc: 'Europe & Asia Hub' },
                    { title: 'London', desc: 'UK Client Relations' }
                ]
            }
        ],
        tr: [
            {
                id: 'channels',
                title: 'Kanallar',
                subtitle: 'Bize ulaşın',
                desc: 'Tasarım projeleri, iş ortaklığı teklifleri veya basın talepleri için bizimle iletişime geçin.',
                cards: [
                    { title: 'Kreatif', desc: 'creative@gunery.com' },
                    { title: 'Strateji', desc: 'strategy@gunery.com' },
                    { title: 'Kariyer', desc: 'careers@gunery.com' },
                    { title: 'Genel', desc: 'hello@gunery.com' }
                ]
            },
            {
                id: 'regions',
                title: 'Bölgeler',
                subtitle: 'Stüdyo Ofisleri',
                desc: 'Birincil stüdyo konumlarımızı ve bölgesel iletişim temsilcilerimizi bulun.',
                cards: [
                    { title: 'Medellín', desc: 'Kolombiya Kreatif Ofisi' },
                    { title: 'İstanbul', desc: 'Avrupa ve Asya Ofisi' },
                    { title: 'Londra', desc: 'İngiltere İrtibat Noktası' }
                ]
            }
        ]
    }
};

// ============================================
// ARTICLE CONTENT DATA
// ============================================

const articleContent = {
    // -------------------------------------------------------
    // AI-NATIVE DESIGN
    // -------------------------------------------------------
    'ai-design-workflow': {
        en: {
            category: 'AI-Native Design',
            title: 'AI-Native Creative Pipelines 101',
            desc: 'Generative tools are changing the design process. Here is how modern teams integrate AI without losing aesthetic depth.',
            readTime: '5 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/ai-design-workflow.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>AI is not a replacement for creativity; it is the ultimate feedback loop for testing visual ideas</li>
                        <li>The best workflows combine generative layout generation with manual typographic and component refinement</li>
                        <li>Speed is an asset, but uniqueness requires human taste and strict art direction</li>
                        <li>Designing with AI requires prompt engineering, model tuning, and unified design libraries</li>
                    </ul>
                </div>

                <h2>A New Era of Digital Craft</h2>
                <p>For decades, the design workflow followed a linear path: wireframes, mood boards, mockups, iterations, and final handoff. It was slow, predictable, and heavily constrained by production hours.</p>
                <p>That linear path is gone.</p>
                <p>AI-native design is about parallel exploration. Instead of creating two or three design directions in a week, we can generate and analyze fifty visual systems in an afternoon. But this speed comes with a danger: visual noise and generic layouts.</p>

                <div class="article-pullquote">
                    <p>"Generative AI lowers the floor for entry, but raises the ceiling for master craftsmen. Anyone can generate a layout; only a designer can build a cohesive brand experience."</p>
                </div>

                <h2>How We Build AI-Native Workflows</h2>
                <p>We approach AI as a collaborative teammate, split into three specific steps:</p>
                <p>First, **generative ideation**. We use custom-trained models to translate brand attributes (e.g., "minimalist, technical, high-premium") into visual arrays. This acts as our dynamic, endless mood-boarding process.</p>
                <p>Second, **asset synthesis**. Rather than using generic stock photos, we generate bespoke visual assets, textures, and 3D shapes that align precisely with the project's brand guidelines.</p>
                <p>Third, **human curation and structural layout**. The final product is always assembled manually. We align the typography, build custom CSS, refine grid structures, and ensure that the interactive elements feel premium, responsive, and tactile.</p>

                <div class="article-divider"></div>

                <h2>The Shift in Designer Identity</h2>
                <p>The role of the designer is shifting from "operator" to "curator and director." Instead of spending hours tweaking shadows, designers are directing models, adjusting variables, and selecting the absolute best expressions of a brand concept.</p>
                <p>This allows us to spend more time thinking about what actually matters: strategy, user psychology, information hierarchy, and motion aesthetics.</p>
            `
        },
        tr: {
            category: 'Yapay Zekâ Tasarımı',
            title: 'Yapay Zekâ Destekli Yaratıcı Süreçler 101',
            desc: 'Üretken araçlar tasarım sürecini baştan yazıyor. Estetik derinliği kaybetmeden yapay zekâyı iş akışına dahil etmenin formülü.',
            readTime: '5 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/ai-design-workflow.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Yapay zekâ yaratıcılığın yerine geçmez. Görsel fikirleri hızla test eden mükemmel bir geri bildirim aracıdır.</li>
                        <li>En iyi iş akışları, yapay zekânın taslak düzenleri ile el işi tipografiyi birleştirir.</li>
                        <li>Hız büyük bir güçtür. Ancak özgünlük için insan beğenisi ve sıkı sanat yönetimi şarttır.</li>
                        <li>Yapay zekâ ile tasarlamak; prompt mühendisliği, özel modeller ve ortak tasarım kütüphaneleri gerektirir.</li>
                    </ul>
                </div>

                <h2>Dijital Zanaatın Yeni Çağı</h2>
                <p>On yıllardır tasarım süreci doğrusal bir çizgi izledi: tel kafesler, ilham panoları, maketler ve el teslimi. Yavaştı. Tahmin edilebilirdi. Üretim saatleriyle sınırlıydı.</p>
                <p>O doğrusal çizgi artık yok oldu.</p>
                <p>Yapay zekâ odaklı tasarım, paralel keşif demektir. Haftada iki tasarım yönü yerine, bir öğleden sonra elli görsel sistem üretebiliyoruz. Ancak bu hız tehlikeyi de beraberinde getiriyor: görsel gürültü ve birbirinin kopyası şablonlar.</p>

                <div class="article-pullquote">
                    <p>"Üretken yapay zekâ giriş eşiğini düşürür. Ama usta zanaatkarlar için tavanı yükseltir. Herkes taslak üretebilir. Sadece iyi bir tasarımcı tutarlı bir marka deneyimi inşa edebilir."</p>
                </div>

                <h2>Yapay Zekâ Odaklı İş Akışımızı Nasıl Kuruyoruz?</h2>
                <p>Yapay zekaya ortak çalışan bir takım arkadaşı olarak yaklaşıyoruz. Süreci üç adıma ayırıyoruz:</p>
                <p>İlk adım, **üretken fikir bulma**. Marka kimliğini (örneğin "minimalist, teknik, üst segment") görsel dizilere dönüştürmek için özel eğitilmiş modeller kullanıyoruz. Bu bizim dinamik ve sonsuz ilham panomuz oluyor.</p>
                <p>İkinci adım, **varlık sentezi**. Sıradan hazır fotoğraflar yerine, projenin marka kurallarına tam uyan özel görsel varlıklar, dokular ve 3D formlar üretiyoruz.</p>
                <p>Üçüncü adım, **insan kürasyonu ve yapısal düzen**. Son ürün her zaman elle birleştirilir. Tipografiyi hizalarız. Özel CSS yazarız. Grid yapılarını düzenleriz. Etkileşimli öğelerin kaliteli, duyarlı ve dokunsal hissettirmesini sağlarız.</p>

                <div class="article-divider"></div>

                <h2>Tasarımcı Kimliğindeki Dönüşüm</h2>
                <p>Tasarımcının rolü "operatörlükten" "küratörlüğe ve yönetmenliğe" evriliyor. Saatlerce gölgeleri ayarlamak yerine, modelleri yönetiyoruz. Değişkenleri optimize ediyoruz. Marka konseptinin en iyi ifadesini seçiyoruz.</p>
                <p>Bu sayede gerçekten önemli olan konulara odaklanıyoruz: strateji, kullanıcı psikolojisi, bilgi hiyerarşisi ve hareket estetiği.</p>
            `
        }
    },
    'midjourney-production': {
        en: {
            category: 'AI-Native Design',
            title: 'Midjourney to Production: Generative Art to Brand Assets',
            desc: 'Moving from a beautiful prompt generation to clean, scalable, high-resolution vector and digital production assets.',
            readTime: '6 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/midjourney-production.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Raw image outputs from AI are static grids of pixels that require post-processing</li>
                        <li>Upscaling, vectorization, and color correction are mandatory steps for production environments</li>
                        <li>Unified style parameters ensure that images generated across weeks maintain visual cohesion</li>
                        <li>Layer separation and custom masking allow developers to animate AI-generated assets</li>
                    </ul>
                </div>

                <h2>The Pixel Trap</h2>
                <p>You write a shadow-accurate prompt, hit enter, and the screen renders a breathtaking visual. It has the perfect lighting, an avant-garde style, and matches your brand vibe perfectly.</p>
                <p>But when you download the file, you realize it is a flat 1024x1024 pixel file. It has compressed colors, weird artifacts, and is unusable on a 4K display or print layout.</p>
                <p>This is the pixel trap. Moving from generator to production requires a rigorous cleanup pipeline.</p>

                <div class="article-pullquote">
                    <p>"An AI generation is the starting point, not the package. The real work is taking that flat image and turning it into a responsive, scalable asset."</p>
                </div>

                <h2>The Clean-up Pipeline</h2>
                <p>To prepare generative art for production, we follow a strict pipeline:</p>
                <h3>1. Multi-Step Upscaling</h3>
                <p>We use dedicated neural network upscalers (such as Topaz Gigapixel) to increase image density by 4x to 8x, removing noise while maintaining sharp details on high-resolution displays.</p>
                <h3>2. Vector Conversion & Masking</h3>
                <p>For graphic elements, logos, and UI shapes, we translate pixels into vector paths using tracing tools, followed by hand-refinement to guarantee clean SVGs. For raster images, we create custom layered masks in Photoshop, isolating the foreground elements from the background.</p>
                <h3>3. Color Harmonization</h3>
                <p>AI models have their own color biases. We apply custom LUTs and color grading to ensure that every generated image matches our client's exact brand color space (HEX, RGB, or Pantone).</p>

                <div class="article-divider"></div>

                <h2>Making Assets Move</h2>
                <p>Static graphics are boring. By separating the layers of an AI asset, we can write custom WebGL or CSS animations. Backgrounds can slowly drift, ambient glow elements can pulse, and foreground objects can respond to mouse movement. This is how a flat pixel output becomes a premium interactive component.</p>
            `
        },
        tr: {
            category: 'Yapay Zekâ Tasarımı',
            title: "Midjourney'den Üretime: Üretken Sanatı Marka Varlıklarına Dönüştürmek",
            desc: 'Güzel bir yapay zekâ görselinden, temiz, ölçeklenebilir ve yüksek çözünürlüklü üretim varlıklarına geçişin kılavuzu.',
            readTime: '6 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/midjourney-production.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Yapay zekadan çıkan ham görüntüler düz piksel yığınlarıdır. İşlenmeleri gerekir.</li>
                        <li>Çözünürlük yükseltme, vektörleştirme ve renk doğrulama üretim ortamı için zorunludur.</li>
                        <li>Ortak stil parametreleri, farklı zamanlarda üretilen görsellerin uyumunu korur.</li>
                        <li>Katman ayırma ve özel maskeleme, geliştiricilerin yapay zekâ görsellerini oynatabilmesini sağlar.</li>
                    </ul>
                </div>

                <h2>Piksel Tuzağı</h2>
                <p>Kusursuz bir prompt yazarsınız. Enter tuşuna basarsınız. Ekranda harika bir görsel belirir. Mükemmel bir ışık. Avangart bir tarz. Marka ruhunu tam yansıtır.</p>
                <p>Ama dosyayı indirdiğinizde fark edersiniz: 1024x1024 piksellik düz bir görseldir. Renkler sıkışmıştır. Garip detay hataları vardır. 4K ekranda veya baskıda kullanılamaz.</p>
                <p>İşte piksel tuzağı budur. Üretim sürecine geçiş, sıkı bir temizlik hattı gerektirir.</p>

                <div class="article-pullquote">
                    <p>"Yapay zekâ çıktısı başlangıç noktasıdır. Bitiş çizgisi değil. Asıl iş, o düz resmi alıp duyarlı ve ölçeklenebilir bir dijital varlığa dönüştürmektir."</p>
                </div>

                <h2>Temizlik ve Üretim Hattı</h2>
                <p>Görselleri üretime hazırlamak için şu adımları izliyoruz:</p>
                <h3>1. Çok Adımlı Çözünürlük Yükseltme</h3>
                <p>Yapay zekâ tabanlı çözünürlük yükselticiler (Topaz Gigapixel gibi) kullanıyoruz. Görsel yoğunluğunu 4 ila 8 kat artırıyoruz. Gürültüyü silerken detayları koruyoruz.</p>
                <h3>2. Vektör Dönüştürme ve Maskeleme</h3>
                <p>Grafikler ve logolar için pikselleri vektör yollarına dönüştürüyoruz. Temiz SVG çıktısı için elle üzerinden geçiyoruz. Fotoğraflar için katmanlı maskeler oluşturuyoruz. Ön planı arka plandan ayırıyoruz.</p>
                <h3>3. Renk Uyumlaştırması</h3>
                <p>Yapay zekâ modelleri kendilerine has renk eğilimlerine sahiptir. Özel LUT'lar ve renk eşlemeleri uyguluyoruz. Görselleri müşterinin tam renk kodlarına (HEX veya RGB) hizalıyoruz.</p>

                <div class="article-divider"></div>

                <h2>Görselleri Canlandırmak</h2>
                <p>Statik grafikler sıkıcıdır. Yapay zekâ çıktısını katmanlarına ayırarak WebGL veya CSS animasyonları yazabiliyoruz. Arka planlar yavaşça kayıyor. Işıklar parlıyor. Ön plandaki nesneler fare hareketine yanıt veriyor. Düz bir piksel böylece etkileşimli bir deneyime dönüşüyor.</p>
            `
        }
    },
    'uiux-optimization': {
        en: {
            category: 'AI-Native Design',
            title: 'Speed vs. Soul: The UI/UX Dilemma in the Age of Templates',
            desc: 'How automated layout tools are creating a boring, uniform web, and how to inject soul back into digital experiences.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/uiux-optimization.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Modern layout engines generate standard layouts instantly, but they all look identical</li>
                        <li>A premium brand requires custom layout structures, micro-animations, and visual tension</li>
                        <li>Design systems should enforce brand rules while leaving space for artistic expression</li>
                        <li>Users remember interfaces that surprise them, not the ones that just follow standards</li>
                    </ul>
                </div>

                <h2>The Uniform Web</h2>
                <p>Every website you visit today looks the same. Hero section, three-column feature list, logo cloud, pricing table, and footer. It is clean, mobile-responsive, and completely forgettable.</p>
                <p>Automated design tools and standard templates have solved usability, but they have destroyed character.</p>
                <p>In our studio, we call this the "soul problem." When design becomes entirely automated and optimized for conversion metrics, it loses the emotional spark that connects a brand with its audience.</p>

                <div class="article-pullquote">
                    <p>"Standardization makes websites usable. Soul makes them memorable. A great user experience requires both."</p>
                </div>

                <h2>Injecting Tension and Micro-Interactions</h2>
                <p>To stand out, we purposely introduce design tension. This includes asymmetric grid systems, overlapping layouts, custom typography combinations, and subtle micro-animations that respond to user actions.</p>
                <p>When a user hovers over a button, it shouldn't just change color; it should morph, shift, or trigger a clean, lightweight animation. When they scroll, the background should interact with the scroll pace. These details signal quality and care.</p>

                <div class="article-divider"></div>

                <h2>Rules for Premium Digital Products</h2>
                <p>First, **never start with a template**. Start with a blank page and map the user flow as a narrative.</p>
                <p>Second, **use custom typography**. Relying on default system fonts makes you look generic. Select high-end typefaces that reflect the brand's personality.</p>
                <p>Third, **make it responsive but alive**. Layout transitions should be fluid, using ease-in-out curve models rather than linear animations. Design with movement in mind.</p>
            `
        },
        tr: {
            category: 'Yapay Zekâ Tasarımı',
            title: 'Hız vs. Ruh: Şablonlar Çağında UI/UX İkilemi',
            desc: 'Hazır tasarım araçlarının yarattığı tekdüze web dünyasından sıyrılmak ve arayüzlere yeniden ruh katmak.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/uiux-optimization.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Modern tasarım motorları şablonları hızla üretir ancak hepsi birbirine benzer.</li>
                        <li>Premium bir marka; özel düzenler, mikro animasyonlar ve görsel gerilim ister.</li>
                        <li>Tasarım sistemleri kuralları koyarken sanatsal özgürlüğe de alan bırakmalıdır.</li>
                        <li>Kullanıcılar sadece standartları izleyenleri değil, kendilerini şaşırtan arayüzleri hatırlar.</li>
                    </ul>
                </div>

                <h2>Tekdüze Web Dünyası</h2>
                <p>Bugün ziyaret ettiğiniz her web sitesi aynı görünüyor: Giriş bölümü, üç sütunlu özellik listesi, logolar, fiyat tablosu ve alt bilgi (footer). Temiz, mobille uyumlu ve tamamen unutulabilir.</p>
                <p>Otomatik tasarım araçları ve standart şablonlar kullanılabilirliği çözdü. Ancak karakteri yok etti.</p>
                <p>Biz buna stüdyoda "ruh problemi" diyoruz. Tasarım tamamen otomatikleştiğinde ve sadece dönüşüm metriklerine göre optimize edildiğinde, duygusal bağı kaybeder.</p>

                <div class="article-pullquote">
                    <p>"Standartlaşma web sitesini kullanılabilir kılar. Ruh ise unutulmaz yapar. Harika bir kullanıcı deneyimi her ikisini de gerektirir."</p>
                </div>

                <h2>Görsel Gerilim ve Mikro Etkileşimler</h2>
                <p>Öne çıkmak için bilerek görsel gerilim yaratıyoruz. Asimetrik ızgara sistemleri kullanıyoruz. Üst üste binen yerleşimler yapıyoruz. Özel yazı tiplerini birleştiriyoruz. Kullanıcı hareketlerine yanıt veren hafif mikro animasyonlar ekliyoruz.</p>
                <p>Kullanıcı bir butonun üzerine geldiğinde, buton sadece renk değiştirmemeli. Şekil değiştirmeli, kaymalı veya hafif bir hareketle yanıt vermeli. Sayfa kaydırıldığında arka plan da bu harekete eşlik etmeli. Bu detaylar kaliteyi gösterir.</p>

                <div class="article-divider"></div>

                <h2>Premium Dijital Ürünlerin Kuralları</h2>
                <p>İlk kural: **Asla bir şablonla başlamayın**. Boş bir sayfayla başlayın ve kullanıcı akışını bir hikaye gibi çizin.</p>
                <p>İkinci kural: **Özel tipografi kullanın**. Varsayılan sistem yazı tipleri sizi sıradan gösterir. Markanın karakterini yansıtan özel yazı tipleri seçin.</p>
                <p>Üçüncü kural: **Duyarlı ama canlı tasarlayın**. Geçişler akıcı olmalı. Doğrusal animasyonlar yerine yumuşak eğriler kullanın. Hareketi baştan tasarlayın.</p>
            `
        }
    },
    'ai-future-creativity': {
        en: {
            category: 'AI-Native Design',
            title: 'The Software-First Creative: Design Meets Engineering',
            desc: 'Why the line between designer and developer is disappearing, and why the next generation of creatives must write code.',
            readTime: '6 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/ai-future-creativity.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Designers who understand code build better products because they know structural constraints</li>
                        <li>AI bridges the gap, allowing designers to write functional prototypes and code directly</li>
                        <li>Modern digital products are interactive software, not static vectors</li>
                        <li>The best design studios have integrated teams where designers and engineers share the same vocabulary</li>
                    </ul>
                </div>

                <h2>The Old Wall is Cracking</h2>
                <p>For years, design and engineering were separate worlds. Designers worked in vector tools, exported flat mockups, and passed them to developers. The developers would then have to translate those static shapes into functional code, often losing half of the design details in the process.</p>
                <p>That wall is disappearing.</p>
                <p>Today, digital products are defined by how they move, how they load, and how they interact. You cannot design these attributes on a flat canvas. You have to design them in the medium they live in: code.</p>

                <div class="article-pullquote">
                    <p>"A designer who can write HTML, CSS, and basic JavaScript can shape the interactive behavior of a product directly. AI makes this translation instant."</p>
                </div>

                <h2>The Power of the Hybrid Creative</h2>
                <p>When designers write code, they design with structure in mind. They understand CSS Grid, flexbox, paint cycles, DOM weight, and interactive states. They don't just ask "what does it look like?" they ask "how does it build, render, and animate?"</p>
                <p>With generative AI tools, the barrier to code has vanished. Designers can describe interactive behaviors, generate clean animations, and test functional layouts in real-time. This speeds up production and results in cleaner designs.</p>

                <div class="article-divider"></div>

                <h2>The Unified Process</h2>
                <p>In our studio, we work in a unified environment. We design with code components, export responsive SVGs, write custom CSS variables, and build interactions directly. The result is a website that looks exactly as designed, loads instantly, and functions beautifully.</p>
            `
        },
        tr: {
            category: 'Yapay Zekâ Tasarımı',
            title: 'Yazılım Odaklı Yaratıcılık: Tasarım Mühendislikle Buluşuyor',
            desc: 'Tasarımcı ve yazılımcı arasındaki sınır neden kalkıyor? Yeni nesil yaratıcıların neden kod yazması gerekiyor?',
            readTime: '6 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/ai-future-creativity.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Kodu anlayan tasarımcılar yapısal sınırları bildikleri için daha iyi ürünler üretirler.</li>
                        <li>Yapay zekâ aradaki boşluğu kapatır. Tasarımcıların doğrudan çalışan kodlar üretmesini sağlar.</li>
                        <li>Modern dijital ürünler statik görseller değil, yaşayan etkileşimli yazılımlardır.</li>
                        <li>En iyi stüdyolar, tasarımcıların ve mühendislerin aynı dili konuştuğu entegre ekipler kurar.</li>
                    </ul>
                </div>

                <h2>Eski Duvar Yıkılıyor</h2>
                <p>Yıllarca tasarım ve mühendislik ayrı dünyalardı. Tasarımcılar vektör araçlarında çalışır, statik görselleri yazılımcılara teslim ederdi. Yazılımcılar ise o şekilleri koda dökmeye çalışırken detayların yarısı kaybolurdu.</p>
                <p>O duvar artık yıkılıyor.</p>
                <p>Bugün dijital ürünler nasıl hareket ettikleri, nasıl yüklendikleri ve nasıl etkileşime girdikleriyle tanımlanıyor. Bu özellikleri statik bir ekranda tasarlayamazsınız. Onları kendi doğal ortamlarında tasarlamalısınız: kod içinde.</p>

                <div class="article-pullquote">
                    <p>"HTML, CSS ve temel JavaScript yazabilen bir tasarımcı, ürünün etkileşim dilini doğrudan şekillendirebilir. Yapay zekâ bu geçişi anlık hale getiriyor."</p>
                </div>

                <h2>Hibrit Yaratıcının Gücü</h2>
                <p>Tasarımcı kod yazdığında, yapıyı düşünerek tasarlar. CSS Grid, flexbox, tarayıcı boyama döngüleri ve etkileşim durumlarını bilir. Sadece "nasıl görünüyor?" diye sormaz; "nasıl yüklenir, nasıl çizilir ve nasıl hareket eder?" diye sorar.</p>
                <p>Üretken yapay zekâ araçlarıyla kod yazma bariyeri ortadan kalktı. Tasarımcılar etkileşimleri tarif edebilir, animasyon kodları üretebilir ve çalışan taslakları anında test edebilir. Bu durum üretim sürecini hızlandırır ve daha temiz sonuçlar üretir.</p>

                <div class="article-divider"></div>

                <h2>Bütünleşik Süreç</h2>
                <p>Stüdyomuzda tek bir bütünleşik ortamda çalışıyoruz. Kod bileşenleriyle tasarlıyoruz. CSS değişkenleri kullanıyoruz. Etkileşimleri doğrudan inşa ediyoruz. Sonuçta, tam tasarlandığı gibi görünen, anında yüklenen ve kusursuz çalışan web siteleri ortaya çıkıyor.</p>
            `
        }
    },

    // -------------------------------------------------------
    // CREATIVE PLAYBOOK
    // -------------------------------------------------------
    'brand-scaling-2026': {
        en: {
            category: 'Creative Playbook',
            title: 'Scaling Brands in the Generative Era',
            desc: 'How to build visual identity and brand authority in a world flooded with cheap, automated visual content.',
            readTime: '6 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/brand-scaling-2026.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>When visual content becomes free to produce, brand trust and consistency become highly valuable</li>
                        <li>A brand is not just a logo; it is a unified system of voice, typography, and interactive behaviors</li>
                        <li>Authenticity requires custom art direction and human stories that cannot be generated</li>
                        <li>Consistency across touchpoints builds authority. Scale requires automated design guidelines</li>
                    </ul>
                </div>

                <h2>The Noise Problem</h2>
                <p>We are entering an era of visual overload. Anyone can write a prompt and generate a thousand blog graphics, social media posts, and landing page images in minutes. The internet is being flooded with visual content.</p>
                <p>When content is everywhere, attention shifts. Generic visuals are ignored. The challenge is no longer about producing *more* content; it is about standing out through distinct quality.</p>

                <div class="article-pullquote">
                    <p>"When everyone can generate design, having a recognizable, consistent, and human brand voice becomes the ultimate competitive advantage."</p>
                </div>

                <h2>Three Rules for Brand Authority</h2>
                <h3>1. Focus on Typography</h3>
                <p>Images are easy to generate; custom typography is hard to replicate. A brand's typeface selection, editorial layouts, and text styling are the core pillars of its visual identity.</p>
                <h3>2. Build Interactive Systems</h3>
                <p>A static image is easily replaced. A custom interactive layout, unique scroll effects, and bespoke micro-animations are difficult to copy. Build your brand as an interactive product, not just a set of graphics.</p>
                <h3>3. Maintain Strict Editorial Control</h3>
                <p>AI should be used to scale ideas, never to replace direction. Every piece of visual output must pass through a human editor to ensure alignment with the brand's core values.</p>

                <div class="article-divider"></div>

                <h2>Scaling Without Diluting</h2>
                <p>To grow a brand, you need design systems that developers can use easily. Build your CSS tokens, typography scales, and grid structures as a reusable component library. This ensures that every sub-brand, landing page, and product update looks exactly like the core brand.</p>
            `
        },
        tr: {
            category: 'Kreatif Rehber',
            title: 'Üretken Yapay Zekâ Çağında Markaları Ölçeklemek',
            desc: 'Ucuz ve otomatik görsel içeriğin dünyayı sardığı bir dönemde marka otoritesi ve görsel kimliği korumanın yolları.',
            readTime: '6 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/brand-scaling-2026.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Görsel içerik üretmek kolaylaştıkça, marka güveni ve tutarlılığı en değerli varlığa dönüşür.</li>
                        <li>Marka sadece bir logodan ibaret değildir; ses tonu, tipografi ve etkileşimlerin ortak sistemidir.</li>
                        <li>Özgünlük, yapay zekânın üretemeyeceği özel sanat yönetimi ve insan hikayeleri gerektirir.</li>
                        <li>Tüm temas noktalarındaki tutarlılık otorite yaratır. Ölçeklenmek için otomatik tasarım kuralları gerekir.</li>
                    </ul>
                </div>

                <h2>Görsel Gürültü Sorunu</h2>
                <p>Görsel bombardıman çağına giriyoruz. Artık herkes birkaç dakikada binlerce blog görseli, sosyal medya gönderisi ve web arayüzü üretebiliyor. İnternet yapay zekâ çıktılarıyla dolup taşıyor.</p>
                <p>İçerik her yerde olduğunda, dikkat başka yöne kayar. Sıradan görseller görmezden gelinir. Artık mesele *daha fazla* içerik üretmek değil; belirgin bir kalite farkıyla öne çıkmaktır.</p>

                <div class="article-pullquote">
                    <p>"Herkesin tasarım üretebildiği bir dünyada tutarlı, tanınabilir ve insani bir marka sesine sahip olmak en büyük rekabet avantajıdır."</p>
                </div>

                <h2>Marka Otoritesi İçin Üç Kural</h2>
                <h3>1. Tipografiye Odaklanın</h3>
                <p>Resim üretmek kolaydır, ancak özel tipografi düzenlerini taklit etmek zordur. Markanın yazı tipi seçimleri, sayfa düzenleri ve metin stilleri görsel kimliğin ana sütunlarıdır.</p>
                <h3>2. Etkileşimli Sistemler Kurun</h3>
                <p>Statik bir görsel kolayca değiştirilebilir. Ancak özel etkileşimli düzenler, kaydırma efektleri ve mikro animasyonlar kolayca kopyalanamaz. Markanızı sadece görsellerden ibaret değil, yaşayan bir ürün olarak inşa edin.</p>
                <h3>3. Sıkı Editörlük Kontrolü Uygulayın</h3>
                <p>Yapay zekâ fikirleri büyütmek için kullanılmalı, insan gözünün yerini almamalıdır. Üretilen her görsel, markanın değerlerine uyum açısından insan editörlerin filtresinden geçmelidir.</p>

                <div class="article-divider"></div>

                <h2>Değerleri Kaybetmeden Büyümek</h2>
                <p>Bir markayı büyütmek için yazılımcıların kolayca kullanabileceği tasarım sistemlerine ihtiyacınız vardır. CSS değişkenlerinizi, tipografi şemalarınızı ve ızgara yapılarınızı hazır bileşenler olarak kurun. Böylece her yeni sayfa ve ürün güncellemesi ana markanın kalitesini taşır.</p>
            `
        }
    },
    'naming-conventions': {
        en: {
            category: 'Creative Playbook',
            title: 'The Art of Naming: Creating Names That Resonate',
            desc: 'A structured, practical playbook for naming products, features, and companies in a crowded digital landscape.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/naming-conventions.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>A great name is easy to pronounce, write, and remember. Simplicity beats cleverness every time</li>
                        <li>Naming requires check-ups for domain availability, trademark conflicts, and cultural meaning</li>
                        <li>The best names evoke an emotion or define a category rather than just describing a product</li>
                        <li>A structured naming process avoids decision paralysis and corporate groupthink</li>
                    </ul>
                </div>

                <h2>Why Naming is Hard</h2>
                <p>Naming a company or a product is a difficult creative challenge. It feels highly personal, everyone in the room has a different opinion, and most dictionary words are already trademarked or have their domains registered.</p>
                <p>Most teams approach naming randomly. They host a brainstorming session, write down a hundred options, argue, and choose a compromise that satisfies no one.</p>
                <p>There is a better way.</p>

                <div class="article-pullquote">
                    <p>"A name is the first line of your brand strategy. It should clear the path, set the tone, and be easy to remember."</p>
                </div>

                <h2>Our Naming Framework</h2>
                <p>We split naming into four clear phases:</p>
                <h3>1. Strategy & Attributes</h3>
                <p>Before writing down names, define the brand strategy. What is the category? Who is the target audience? What emotional state should the name trigger? Write down five adjectives that describe the brand's personality.</p>
                <h3>2. Generation Tracks</h3>
                <p>Generate options across four tracks: **descriptive** (what it is), **metaphorical** (analogies), **invented** (new words), and **associative** (related meanings). Generate at least fifty options per track.</p>
                <h3>3. Practical Filters</h3>
                <p>Filter the list through three checks: Can you secure a clean domain? Are there active trademarks in your market? Does the word have negative meanings in other languages?</p>
                <h3>4. Context Testing</h3>
                <p>Never show names on a blank sheet. Place them in layouts, logo designs, and mockups. A name needs context to feel real.</p>
            `
        },
        tr: {
            category: 'Kreatif Rehber',
            title: 'İsimlendirmenin Sanatı: Akılda Kalıcı İsimler Yaratmak',
            desc: 'Yoğun dijital pazarda ürünlere, özelliklere ve şirketlere doğru ismi vermek için pratik ve yapısal bir oyun planı.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/naming-conventions.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>İyi bir isim kolay telaffuz edilir, yazılır ve hatırlanır. Sadelik her zaman karmaşıklığı yener.</li>
                        <li>İsim bulurken alan adı kullanılabilirliği, marka tescilleri ve kültürel anlamlar kontrol edilmelidir.</li>
                        <li>En iyi isimler ürünü tarif etmekle kalmaz, bir duygu uyandırır veya yeni bir kategori tanımlar.</li>
                        <li>Yapısal bir isimlendirme süreci, karar felcini ve ekip içi fikir ayrılıklarını önler.</li>
                    </ul>
                </div>

                <h2>İsim Vermek Neden Zordur?</h2>
                <p>Bir şirkete veya ürüne isim vermek zor bir yaratıcı süreçtir. Çok kişisel hissettirir. Toplantı odasındaki herkesin farklı bir fikri vardır. Dahası, çoğu kelime tescillenmiş veya alan adları çoktan satın alınmıştır.</p>
                <p>Çoğu ekip isimlendirmeye rastgele yaklaşır. Beyin fırtınası yaparlar, yüzlerce seçenek yazarlar, tartışırlar ve sonunda kimseyi tam memnun etmeyen bir orta yolda uzlaşırlar.</p>
                <p>Bunun daha iyi bir yolu var.</p>

                <div class="article-pullquote">
                    <p>"Bir isim, marka stratejinizin ilk cümlesidir. Yolu açmalı, tonu belirlemeli ve akılda kolayca kalmalıdır."</p>
                </div>

                <h2>İsimlendirme Metodumuz</h2>
                <p>Süreci dört net aşamaya ayırıyoruz:</p>
                <h3>1. Strateji ve Nitelikler</h3>
                <p>İsim aramaya başlamadan önce marka stratejisini tanımlayın. Kategori nedir? Hedef kitle kimdir? İsim hangi duyguyu uyandırmalı? Markanın karakterini anlatan beş sıfat seçin.</p>
                <h3>2. Üretim Kanalları</h3>
                <p>Dört farklı alanda seçenekler üretin: **tanımlayıcı** (ne olduğunu söyleyen), **metaforik** (benzetmeler), **uydurulmuş** (yeni kelimeler) ve **ilişkisel** (çağrışım yapan). Her alan için en az elli seçenek yazın.</p>
                <h3>3. Pratik Filtreler</h3>
                <p>Listeyi üç kontrolden geçirin: Temiz bir alan adı bulabiliyor musunuz? Ticari marka engeli var mı? Kelimenin diğer dillerde olumsuz bir anlamı var mı?</p>
                <h3>4. Bağlam Testi</h3>
                <p>İsimleri asla beyaz kağıt üzerinde sunmayın. Onları arayüz taslaklarında, logo tasarımlarında ve maketlerde gösterin. Bir ismin gerçekçi durması için bağlama ihtiyacı vardır.</p>
            `
        }
    },
    'launching-digital-products': {
        en: {
            category: 'Creative Playbook',
            title: 'Launching Digital Products: The First 90 Days',
            desc: 'A tactical checklist for managing product positioning, landing page development, and early user acquisition.',
            readTime: '7 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/launching-digital-products.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>A launch is a process, not a single day. The preparation starts months in advance</li>
                        <li>Your landing page is your primary salesperson. It must load instantly and explain the product in seconds</li>
                        <li>Pre-launch waitlists build momentum, test messaging, and validate early user interest</li>
                        <li>Track user analytics from day one to quickly identify friction and optimize conversions</li>
                    </ul>
                </div>

                <h2>The Launch Myth</h2>
                <p>The biggest myth in tech is: "Build it and they will come." Many teams spend six months writing code, launch on a random Tuesday, and are met with silence.</p>
                <p>A launch is not a single announcement. It is a structured campaign that guides users from awareness to interest, and finally to signup.</p>

                <div class="article-pullquote">
                    <p>"The success of a product launch is determined by what you do in the 60 days before you launch, and the 30 days after."</p>
                </div>

                <h2>Phase 1: Pre-Launch (Days 1-60)</h2>
                <p>Focus on **validation and positioning**. Build a high-converting, minimal landing page with a waitlist form. Test different taglines and value propositions. Monitor which messages get the highest conversion rate.</p>
                <p>Build a community. Share behind-the-scenes progress on social platforms, write about the problem you are solving, and invite early users to a closed beta. Their feedback will shape your product launch copy.</p>

                <h2>Phase 2: Launch Week (Days 61-70)</h2>
                <p>Coordinate your channels. Send targeted updates to your waitlist, publish articles, and launch on platform hubs (like Product Hunt). Ensure that your technical stack is ready for traffic spikes and that customer support channels are active.</p>

                <h2>Phase 3: Optimization (Days 71-90)</h2>
                <p>Analyze the data. Where are users dropping off? Are they signing up but not using the product? Use tools like Hotjar and Google Analytics to track behavior and ship daily micro-updates to optimize the flow.</p>
            `
        },
        tr: {
            category: 'Kreatif Rehber',
            title: 'Dijital Ürün Lansmanı: İlk 90 Gün',
            desc: 'Ürün konumlandırma, web sayfası geliştirme ve ilk kullanıcı edinimi süreçlerini yönetmek için taktiksel bir kontrol listesi.',
            readTime: '7 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/launching-digital-products.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Lansman tek bir gün değil, uzun bir süreçtir. Hazırlıklar aylar öncesinden başlar.</li>
                        <li>Web sayfanız birincil satış temsilcinizdir. Anında yüklenmeli ve ürünü saniyeler içinde anlatmalıdır.</li>
                        <li>Lansman öncesi bekleme listeleri heyecan yaratır, mesajları test eder ve ilgiyi ölçer.</li>
                        <li>İlk günden itibaren kullanıcı analizlerini takip edin. Sorunları çözün ve dönüşümleri optimize edin.</li>
                    </ul>
                </div>

                <h2>Lansman Efsanesi</h2>
                <p>Teknoloji dünyasının en büyük efsanesi şudur: "İnşa et, nasılsa gelirler." Birok ekip altı ay kod yazar, rastgele bir salı günü lansman yapar ve derin bir sessizlikle karşılaşır.</p>
                <p>Lansman tek bir duyurudan ibaret değildir. Kullanıcıları farkındalıktan ilgiye, oradan da kayıt aşamasına taşıyan planlı bir kampanyadır.</p>

                <div class="article-pullquote">
                    <p>"Bir ürün lansmanının başarısı, lansmandan önceki 60 günde ve sonraki 30 günde ne yaptığınızla belirlenir."</p>
                </div>

                <h2>1. Aşama: Lansman Öncesi (1-60. Günler)</h2>
                <p>Konumlandırma ve doğrulamaya odaklanın. Bekleme listesi formu olan, yüksek dönüşümlü, sade bir web sayfası kurun. Farklı sloganları test edin. Hangi mesajların daha çok ilgi gördüğünü takip edin.</p>
                <p>Topluluk oluşturun. Gelişim sürecini paylaşın, çözdüğünüz problemi anlatın ve erken kullanıcıları kapalı betaya davet edin. Onların geri bildirimleri lansman metinlerinizi şekillendirecektir.</p>

                <h2>2. Aşama: Lansman Haftası (61-70. Günler)</h2>
                <p>Tüm kanalları koordine edin. Bekleme listenize güncellemeler gönderin, makaleler yayınlayın ve ilgili platformlarda (Product Hunt gibi) öne çıkın. Altyapınızın hazır olduğundan ve destek kanallarının çalıştığından emin olun.</p>

                <h2>3. Aşama: Optimizasyon (71-90. Günler)</h2>
                <p>Verileri analiz edin. Kullanıcılar nerede ayrılıyor? Kayıt olup ürünü kullanmıyorlar mı? Davranışları izlemek için analiz araçlarını kullanın. Akışı optimize etmek için günlük küçük güncellemeler yayınlayın.</p>
            `
        }
    },
    'design-systems-scale': {
        en: {
            category: 'Creative Playbook',
            title: 'Design Systems that Scale: Seed to Series A',
            desc: 'How to build design guidelines that organize production without slowing down early-stage design iteration.',
            readTime: '6 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/design-systems-scale.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Building a design system too early kills speed. Build only what you actually need at each stage</li>
                        <li>Start with design tokens: unified colors, typography styles, and spacing rules</li>
                        <li>Develop modular layout components in code that match the design library exactly</li>
                        <li>A design system is a living product that must adapt as the core platform grows</li>
                    </ul>
                </div>

                <h2>The Design System Trap</h2>
                <p>Many early-stage startups make the same mistake. They hire a designer, and the first thing they spend three weeks on is building a massive, complex design system with hundreds of button states, inputs, and card styles.</p>
                <p>This is a waste of time. Before product-market fit, design changes daily. A complex system is difficult to maintain and slows down product iteration.</p>

                <div class="article-pullquote">
                    <p>"A design system should accelerate product development, not freeze it. Start with simple tokens and build components as they repeat."</p>
                </div>

                <h2>The Three Stages of Scale</h2>
                <h3>1. The Token Foundation (Pre-Seed)</h3>
                <p>Define the basics: 5 brand colors, a clear typography scale (H1, H2, body, caption), and an 8px layout grid. This ensures consistency without locking you into complex structures.</p>
                <h3>2. The Component Library (Seed)</h3>
                <p>As features stabilize, organize repeating elements: buttons, form inputs, modals, and headers. Convert them into reusable elements in your design tool and your codebase.</p>
                <h3>3. The Unified Platform (Series A)</h3>
                <p>Document the system. Build a dedicated portal containing component guidelines, accessibility standards, and copy patterns. Hire a dedicated design system maintainer to keep it clean.</p>
            `
        },
        tr: {
            category: 'Kreatif Rehber',
            title: 'Büyüyen Tasarım Sistemleri: Seed Aşamasından Series A\'ya',
            desc: 'Gelişimin ilk adımlarında tasarım hızını kesmeden, üretim kalitesini koruyacak kuralları inşa etmek.',
            readTime: '6 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/design-systems-scale.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Tasarım sistemini çok erken kurmak hızı öldürür. Sadece o aşamada ihtiyacınız olanı inşa edin.</li>
                        <li>Tasarım değişkenleriyle başlayın: ortak renkler, yazı tipi stilleri ve boşluk kuralları.</li>
                        <li>Kod tarafında, tasarım kütüphanesiyle birebir eşleşen modüler bileşenler geliştirin.</li>
                        <li>Tasarım sistemi yaşayan bir üründür. Ana platform büyüdükçe gelişmelidir.</li>
                    </ul>
                </div>

                <h2>Tasarım Sistemi Tuzağı</h2>
                <p>Birçok erken aşama girişim aynı hatayı yapar. Bir tasarımcı işe alırlar ve tasarımcı ilk üç haftasını yüzlerce buton durumu, girdi ve kart stili olan devasa bir sistem kurmaya harcar.</p>
                <p>Bu zaman kaybıdır. Ürün-pazar uyumu yakalanmadan önce tasarım her gün değişir. Karmaşık bir sistemi sürdürmek zordur ve ürün geliştirme hızını yavaşlatır.</p>

                <div class="article-pullquote">
                    <p>"Tasarım sistemi ürün geliştirmeyi dondurmamalı, aksine hızlandırmalıdır. Basit değişkenlerle başlayın ve bileşenleri tekrar ettikçe sisteme ekleyin."</p>
                </div>

                <h2>Ölçeklenmenin Üç Aşaması</h2>
                <h3>1. Değişken Temeli (Pre-Seed)</h3>
                <p>Temel kuralları belirleyin: 5 ana renk, net bir tipografi skalası (H1, H2, gövde, alt bilgi) ve 8 piksellik yerleşim sistemi. Bu, sizi karmaşık yapılara boğmadan tutarlılık sağlar.</p>
                <h3>2. Bileşen Kütüphanesi (Seed)</h3>
                <p>Özellikler netleştikçe tekrar eden öğeleri düzenleyin: butonlar, form girdileri, pencereler ve başlıklar. Bunları tasarım dosyanızda ve kodunuzda hazır şablonlara dönüştürün.</p>
                <h3>3. Bütünleşik Platform (Series A)</h3>
                <p>Sistemi belgeleyin. Bileşen kurallarını, erişilebilirlik standartlarını içeren özel bir portal kurun. Düzenli kalması için sistemden sorumlu bir çalışan görevlendirin.</p>
            `
        }
    },

    // -------------------------------------------------------
    // AGENCY PULSE
    // -------------------------------------------------------
    'creative-agency-shift': {
        en: {
            category: 'Agency Pulse',
            title: 'The 15-Year Agency Shift: From Retainers to Agile Units',
            desc: 'How client expectations, tool stacks, and the definition of creative partnerships have changed over 15 years.',
            readTime: '6 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/creative-agency-shift.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>The classic agency retainer model is dying. Clients want speed, clear outputs, and flexible partners</li>
                        <li>Agile, specialized teams are outperforming large, bloated agencies on creative quality</li>
                        <li>AI tools allow small, focused studios to deliver visual production that used to require massive departments</li>
                        <li>Modern clients look for strategic partners, not just executors of task lists</li>
                    </ul>
                </div>

                <h2>15 Years of Change</h2>
                <p>We started our agency journey fifteen years ago. In those days, the agency landscape was simple: large agencies, long contracts, and monthly retainer fees. Success was measured by headcount, client billing, and flashy campaign videos.</p>
                <p>That world has vanished.</p>
                <p>Today's market moves at high speed. Software updates daily, brands launch in weeks, and audiences change preferences in days. The traditional agency, with its slow review loops and bloated account managers, is too slow to compete.</p>

                <div class="article-pullquote">
                    <p>"Clients no longer pay for agency structures. They pay for visual output, strategic alignment, and execution speed."</p>
                </div>

                <h2>The Rise of the Agile Studio</h2>
                <p>The modern digital agency is small, technical, and hyper-focused. By using advanced software and AI pipelines, a team of five designers can deliver visual concepts, design systems, and code templates that used to require a team of fifty.</p>
                <p>This allows us to work directly with founders and product leads, cutting out account managers and focusing 100% of our energy on the design. The result is a faster process, cleaner communication, and higher creative quality.</p>
            `
        },
        tr: {
            category: 'Ajans Nabzı',
            title: '15 Yıllık Ajans Dönüşümü: Aylık Sözleşmelerden Çevik Ekiplere',
            desc: '15 yılda müşteri beklentilerinin, kullanılan araç setlerinin ve yaratıcı ortaklık tanımlarının nasıl değiştiğinin analizi.',
            readTime: '6 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/creative-agency-shift.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Geleneksel ajans modeli ölüyor. Müşteriler artık hız, net çıktılar ve esnek ortaklar arıyor.</li>
                        <li>Çevik ve uzman ekipler, büyük ve hantal ajanslardan daha yüksek yaratıcı kalite sunuyor.</li>
                        <li>Yapay zekâ araçları, küçük stüdyoların eskiden devasa ekipler gerektiren üretimleri yapmasını sağlıyor.</li>
                        <li>Modern markalar sadece iş listelerini uygulayanları değil, stratejik yol arkadaşları arıyor.</li>
                    </ul>
                </div>

                <h2>15 Yıllık Değişim</h2>
                <p>Ajans yolculuğumuza on beş yıl önce başladık. O günlerde ajans dünyası basitti: büyük ekipler, uzun vadeli sözleşmeler ve sabit aylık ücretler. Başarı çalışan sayısıyla ve gösterişli reklam filmleriyle ölçülürdü.</p>
                <p>O dünya tamamen yok oldu.</p>
                <p>Bugün pazar çok hızlı hareket ediyor. Yazılımlar günlük güncelleniyor, markalar haftalar içinde kuruluyor ve izleyici tercihleri gün be gün değişiyor. Yavaş onay süreçleri ve hantal yönetim kadrolarıyla eski ajanslar bu hızda rekabet edemez.</p>

                <div class="article-pullquote">
                    <p>"Müşteriler artık ajansın hantal yapısına ödeme yapmıyor. Doğrudan görsel çıktıya, stratejik uyuma ve uygulama hızına bakıyorlar."</p>
                </div>

                <h2>Çevik Stüdyoların Yükselişi</h2>
                <p>Modern dijital ajans küçük, teknik ve son derece odaklıdır. Gelişmiş yazılımlar ve yapay zekâ iş akışları sayesinde, beş kişilik bir tasarım ekibi eskiden elli kişinin yapabildiği görsel konseptleri ve kod şablonlarını üretebiliyor.</p>
                <p>Bu sayede doğrudan kurucularla ve ürün yöneticileriyle çalışıyoruz. Aradaki yöneticileri çıkarıp enerjimizin tamamını tasarıma veriyoruz. Sonuçta daha hızlı bir süreç, daha net bir iletişim ve daha yüksek yaratıcı kalite elde ediyoruz.</p>
            `
        }
    },
    'why-traditional-agencies-fail': {
        en: {
            category: 'Agency Pulse',
            title: 'Why Traditional Agencies Fail in the Tech World',
            desc: 'The structural flaws of bloated design teams, slow production loops, and how to operate at high efficiency.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/why-traditional-agencies-fail.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Traditional agencies are organized around meetings and email chains, not active design</li>
                        <li>The lack of technical understanding among account leads results in designs that cannot be built</li>
                        <li>Bloated teams create internal overhead, driving up costs and slowing down timelines</li>
                        <li>Hyper-efficient studios use automated workflows to spend 90% of their time on design</li>
                    </ul>
                </div>

                <h2>The Meeting Trap</h2>
                <p>If you have worked with a traditional agency, you know this meeting pattern. First, a kick-off meeting. Then, a strategy presentation. Next, a mood board review. Followed by feedback sessions. By week six, you still haven't seen a single layout or product screen.</p>
                <p>This delay is built into their business model. Large agencies monetize time, so they create complex processes to fill hours.</p>
                <p>For modern tech companies, this delay is highly disruptive. They need to validate ideas, design interfaces, and launch products in weeks, not quarters.</p>

                <div class="article-pullquote">
                    <p>"Traditional agencies are built for a world of monthly print cycles. Digital products require daily design iteration and continuous improvement."</p>
                </div>

                <h2>The Studio Model: Clean, Fast, Technical</h2>
                <p>We built our studio to avoid these issues. We don't have account managers. Our clients work directly with the designers. We don't write long PDF strategy documents; we build functional prototypes. We don't waste time on email threads; we collaborate live in Figma and Slack.</p>
                <p>This direct collaboration cuts out translation errors, accelerates production, and ensures that the final product matches the strategic vision.</p>
            `
        },
        tr: {
            category: 'Ajans Nabzı',
            title: 'Geleneksel Ajanslar Teknoloji Dünyasında Neden Başarısız Oluyor?',
            desc: 'Hantal tasarım ekiplerinin, yavaş üretim döngülerinin yapısal hataları ve yüksek verimlilikle çalışmanın yolları.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/why-traditional-agencies-fail.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Geleneksel ajanslar aktif tasarım üretmek yerine toplantılar ve e-posta zincirleri etrafında kuruludur.</li>
                        <li>Yönetim kadrosunun teknik bilgi eksikliği, kodlanması imkansız tasarımların yapılmasına yol açar.</li>
                        <li>Hantal ekipler iç maliyetleri artırır, süreci yavaşlatır ve bütçeleri boşa harcar.</li>
                        <li>Yüksek verimli stüdyolar, zamanlarının %90'ını doğrudan tasarıma ayırmak için otomasyon kullanır.</li>
                    </ul>
                </div>

                <h2>Toplantı Tuzağı</h2>
                <p>Geleneksel bir ajansla çalıştıysanız bu süreci bilirsiniz: Önce bir tanışma toplantısı. Sonra strateji sunumu. Ardından ilham panosu incelemesi. Daha sonra revizyon seansları. Altıncı haftaya geldiğinizde henüz tek bir arayüz yerleşimi veya ürün ekranı görmemişsinizdir.</p>
                <p>Bu yavaşlık onların iş modelinin bir parçasıdır. Büyük ajanslar zamana göre fatura keser, bu yüzden saatleri doldurmak için karmaşık süreçler yaratırlar.</p>
                <p>Modern teknoloji şirketleri için bu gecikme kabul edilemez. Onların fikirleri doğrulamaya, arayüzleri tasarlamaya ve ürünleri haftalar içinde yayına almaya ihtiyaçları vardır.</p>

                <div class="article-pullquote">
                    <p>"Geleneksel ajanslar aylık dergi basım dönemlerine göre tasarlanmıştır. Dijital ürünler ise günlük tasarım döngüleri ve sürekli gelişim gerektirir."</p>
                </div>

                <h2>Stüdyo Modeli: Temiz, Hızlı, Teknik</h2>
                <p>Stüdyomuzu bu sorunları aşmak için kurduk. Bizde müşteri temsilcileri yok. Müşterilerimiz doğrudan tasarımcılarla çalışır. Uzun strateji belgeleri yazmayız; çalışan prototipler yaparız. E-posta zincirlerinde zaman kaybetmeyiz; Figma ve Slack üzerinden anlık iletişim kurarız.</p>
                <p>Bu doğrudan iş birliği, iletişim hatalarını önler, üretimi hızlandırır ve nihai ürünün stratejik vizyonla tam eşleşmesini sağlar.</p>
            `
        }
    },
    'fractional-creative-direction': {
        en: {
            category: 'Agency Pulse',
            title: 'The Rise of the Fractional Creative Director',
            desc: 'How growing companies access top-tier design leadership and brand strategy without the overhead of a full-time executive.',
            readTime: '5 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/fractional-creative-direction.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Early-stage startups need strategic design leadership but cannot afford a full-time Chief Design Officer</li>
                        <li>Fractional Creative Directors provide high-level brand direction and oversee internal teams</li>
                        <li>This model delivers immediate value by focusing on core branding and product milestones</li>
                        <li>It allows companies to scale design resources up or down based on campaign needs</li>
                    </ul>
                </div>

                <h2>The Executive Gap</h2>
                <p>As a company grows, its design needs become more complex. You have junior designers or freelance developers shipping assets, but the brand is losing consistency. The website feels disjointed, the product UI has layout errors, and the marketing campaigns lack a unified style.</p>
                <p>You need creative leadership. But hiring a full-time, experienced Creative Director is expensive and requires months of searching.</p>
                <p>This is the executive gap. And it is driving the adoption of the fractional model.</p>

                <div class="article-pullquote">
                    <p>"You do not need a full-time executive to establish creative direction. You need high-level design strategy for key brand milestones."</p>
                </div>

                <h2>What a Fractional CD Does</h2>
                <p>A fractional Creative Director joins your leadership team for a set number of hours per week. They establish the visual guidelines, direct your internal designers, lead key branding projects, and ensure that all marketing materials match the brand identity.</p>
                <p>This gives you access to years of design experience at a fraction of the cost of a full-time executive hire, keeping your startup lean while maintaining brand quality.</p>
            `
        },
        tr: {
            category: 'Ajans Nabzı',
            title: 'Dönemsel Kreatif Direktörlüğün Yükselişi',
            desc: 'Büyüyen şirketlerin, tam zamanlı yönetici maliyetine katlanmadan üst düzey tasarım liderliğine ve marka stratejisine ulaşma yöntemi.',
            readTime: '5 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/fractional-creative-direction.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Erken aşama girişimler stratejik tasarım liderliğine ihtiyaç duyar ancak tam zamanlı bir CDO istihdam edemezler.</li>
                        <li>Dönemsel Kreatif Direktörler üst düzey yön belirler ve iç ekipleri denetler.</li>
                        <li>Bu model, ana marka değerlerine ve ürün hedeflerine odaklanarak hızlı fayda sağlar.</li>
                        <li>Şirketlerin tasarım kaynaklarını kampanya ihtiyaçlarına göre esnekçe büyütüp küçültmesini sağlar.</li>
                    </ul>
                </div>

                <h2>Yönetici Boşluğu</h2>
                <p>Şirket büyüdükçe tasarım ihtiyaçları karmaşıklaşır. Genç tasarımcılar veya serbest çalışanlar görsel üretmeye devam eder ancak markanın bütünlüğü kaybolur. Web sitesi dağınık hissettirir, arayüzde hatalar baş gösterir ve pazarlama görselleri ortak bir dilden yoksun kalır.</p>
                <p>Kreatif liderliğe ihtiyacınız vardır. Ancak tam zamanlı, deneyimli bir Kreatif Direktör işe almak pahalıdır ve doğru kişiyi bulmak aylar sürer.</p>
                <p>İşte bu durum yönetici boşluğudur. Dönemsel (fractional) modelin yaygınlaşmasının ana nedeni de budur.</p>

                <div class="article-pullquote">
                    <p>"Kreatif yönü belirlemek için tam zamanlı bir yöneticiye ihtiyacınız yoktur. Ana marka hedefleri için üst düzey tasarım stratejisine ihtiyacınız vardır."</p>
                </div>

                <h2>Dönemsel CD Ne Yapar?</h2>
                <p>Dönemsel bir Kreatif Direktör, haftada belirli bir saat ekibinize katılır. Görsel kuralları belirler, iç tasarımcıları yönetir, kilit marka projelerine liderlik eder ve tüm materyallerin marka kimliğine uymasını sağlar.</p>
                <p>Bu model, tam zamanlı bir yönetici maliyetinin çok azıyla yılların tasarım tecrübesine erişmenizi sağlar. Girişiminizi çevik tutarken marka kalitenizi korur.</p>
            `
        }
    },
    'future-of-brand-experience': {
        en: {
            category: 'Agency Pulse',
            title: 'Immersive Web: The Death of Static Landing Pages',
            desc: 'Why static web templates are losing conversions, and how interactive visual storytelling changes user engagement.',
            readTime: '6 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/future-of-brand-experience.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Static text-and-image pages feel like flat paper brochures and fail to capture user attention</li>
                        <li>Immersive design uses interactive 3D, parallax motion, and dynamic grids to engage visitors</li>
                        <li>User attention is short; interactive elements invite visitors to actively participate rather than scroll past</li>
                        <li>Performance is key: interactive sites must be optimized to load in less than two seconds</li>
                    </ul>
                </div>

                <h2>The Attention Economy</h2>
                <p>The average internet user decides whether to stay on your website within three seconds of loading. If they are met with a walls of text and stock photos, they scroll, lose interest, and leave.</p>
                <p>Static landing pages are no longer enough to differentiate a premium brand. The future is immersive web design.</p>
                <p>Immersive web design is about storytelling through movement. It treats the browser window as an interactive screen where the user controls the narrative as they scroll.</p>

                <div class="article-pullquote">
                    <p>"A website should not just be read. It should be experienced. The brands that win attention build websites that feel alive."</p>
                </div>

                <h2>Building Interactive Narratives</h2>
                <p>To create an immersive experience, we combine three elements:</p>
                <p>First, **parallax typography and grid transitions**. As the user scrolls, text layers move at different speeds, creating physical depth on the screen.</p>
                <p>Second, **active hover states**. Buttons, cards, and links should respond to cursor movement with fluid physics, signaling that the page is alive.</p>
                <p>Third, **dynamic media background integration**. We use custom ambient video backgrounds and WebGL shaders to create a premium, atmospheric mood that supports the brand's positioning.</p>
            `
        },
        tr: {
            category: 'Ajans Nabzı',
            title: 'Sürükleyici Web: Statik Sayfaların Sonu',
            desc: 'Statik web şablonlarının dönüşüm oranlarındaki düşüşü ve etkileşimli görsel hikaye anlatımının kullanıcı katılımını nasıl değiştirdiği.',
            readTime: '6 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/future-of-brand-experience.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Düz metin ve görsellerden oluşan statik sayfalar kağıt broşür hissi verir ve ilgiyi çekmekte yetersiz kalır.</li>
                        <li>Sürükleyici tasarım; etkileşimli 3D, kaydırma hareketleri ve dinamik yapılar kullanarak ziyaretçiyi bağlar.</li>
                        <li>Kullanıcının dikkat süresi kısadır; etkileşimli öğeler ziyaretçiyi pasif okuyuculuktan aktif katılımcılığa taşır.</li>
                        <li>Performans anahtardır: etkileşimli siteler iki saniyeden kısa sürede açılacak şekilde optimize edilmelidir.</li>
                    </ul>
                </div>

                <h2>Dikkat Ekonomisi</h2>
                <p>Ortalama bir internet kullanıcısı sitenizde kalıp kalmayacağına ilk üç saniyede karar verir. Eğer onları uzun metin blokları ve hazır fotoğraflar karşılarsa, sayfayı kaydırır, ilgiyi kaybeder ve çıkarlar.</p>
                <p>Statik sayfalar artık premium bir markayı ayrıştırmak için yetersizdir. Gelecek, sürükleyici web tasarımındadır.</p>
                <p>Sürükleyici tasarım, hareketle hikaye anlatmaktır. Tarayıcı penceresini, kullanıcının kaydırma hareketiyle yönlendirdiği etkileşimli bir sahne olarak görür.</p>

                <div class="article-pullquote">
                    <p>"Bir web sitesi sadece okunmamalı, deneyimlenmelidir. Dikkat çeken markalar yaşayan web siteleri inşa eder."</p>
                </div>

                <h2>Etkileşimli Hikayeler Kurmak</h2>
                <p>Sürükleyici bir deneyim yaratmak için üç öğeyi birleştiriyoruz:</p>
                <p>İlk adım, **kaydırma hareketleri ve yumuşak geçişler**. Kullanıcı sayfayı kaydırdıkça metin katmanları farklı hızlarda hareket eder ve ekranda derinlik hissi yaratır.</p>
                <p>İkinci adım, **aktif hover durumları**. Butonlar ve bağlantılar imleç hareketlerine akıcı tepkiler vermeli, sayfanın canlı olduğunu hissettirmelidir.</p>
                <p>Üçüncü adım, **dinamik arka plan entegrasyonu**. Markanın konumlandırmasını destekleyen, kaliteli ve atmosferik bir hava yaratmak için özel arka plan videoları ve WebGL kodları kullanıyoruz.</p>
            `
        }
    },

    // -------------------------------------------------------
    // STUDIO NOTES
    // -------------------------------------------------------
    'fifteen-years-lessons': {
        en: {
            category: 'Studio Notes',
            title: '15 Years, 15 Hard Truths from the Creative Frontline',
            desc: 'An honest, unfiltered summary of the lessons learned from running a creative studio from the pre-AI era to now.',
            readTime: '7 min read',
            date: 'June 2026',
            thumbnail: 'thumbnails/fifteen-years-lessons.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Relationships are the real asset. Great design is built on mutual respect and client trust</li>
                        <li>The best tool is the one that allows you to ship clean code and iterate designs fastest</li>
                        <li>Process is a shield against chaos. Never start a project without clear milestones and bounds</li>
                        <li>Taste cannot be automated. Technology shifts daily, but human direction remains irreplaceable</li>
                    </ul>
                </div>

                <h2>Fifteen Years of Design Reality</h2>
                <p>We have been running this creative studio for fifteen years. We have survived the mobile shift, the rise of responsive web design, the death of Flash, and now the emergence of AI. The tools we use today look nothing like the tools we started with.</p>
                <p>But while the tools change, the core rules of design remain the same.</p>
                <p>Here are fifteen hard truths we have learned along the way:</p>

                <div class="truths-list">
                    <div class="truth-item">
                        <div class="truth-number">01</div>
                        <div class="truth-content">
                            <h3>Great clients make great work</h3>
                            <p>The best projects are collaborations where the client respects your expertise.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">02</div>
                        <div class="truth-content">
                            <h3>Most design feedback is actually strategy feedback</h3>
                            <p>If a client dislikes a layout, it is usually because the brand positioning was not clearly defined upfront.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">03</div>
                        <div class="truth-content">
                            <h3>Simplicity is the hardest thing to design</h3>
                            <p>It is easy to hide bad design behind visual noise. It is difficult to make a minimalist layout feel premium.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">04</div>
                        <div class="truth-content">
                            <h3>Design is never done</h3>
                            <p>It is only shipped. Set strict constraints or you will iterate forever.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">05</div>
                        <div class="truth-content">
                            <h3>The best marketing is a beautiful portfolio</h3>
                            <p>Deliver exceptional work, and clients will find you.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">06</div>
                        <div class="truth-content">
                            <h3>Good design is expensive, but bad design costs more</h3>
                            <p>Rebuilding a failed brand or product is three times harder than investing in correct execution from day one.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">07</div>
                        <div class="truth-content">
                            <h3>The tools you use do not define your taste</h3>
                            <p>A bad designer with a $10,000 tool stack still makes bad designs. A great designer with a simple editor can craft a masterpiece.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">08</div>
                        <div class="truth-content">
                            <h3>If the developer cannot build it, the design is useless</h3>
                            <p>True design is not just a Figma mockup; it is the finished, shipping code. Designers must understand how things are built.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">09</div>
                        <div class="truth-content">
                            <h3>Fast is better than perfect, but quality is non-negotiable</h3>
                            <p>Shipping a clean, functional product to get market feedback beats polishing details for a year. But a buggy, broken layout kills trust instantly.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">10</div>
                        <div class="truth-content">
                            <h3>A premium brand is built on details</h3>
                            <p>The padding, the micro-interactions, the subtle typography hierarchy—these are the small things that elevate a website from generic to premium.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">11</div>
                        <div class="truth-content">
                            <h3>You are not the user</h3>
                            <p>Designing for your own ego instead of the client's audience is the fastest way to build a beautiful failure.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">12</div>
                        <div class="truth-content">
                            <h3>Meetings are where creativity goes to die</h3>
                            <p>Replace long status calls with clear async documentation and active design collaboration. Less talking, more doing.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">13</div>
                        <div class="truth-content">
                            <h3>AI is not your competitor, it is your engine</h3>
                            <p>AI will not replace creative directors, but creative directors using AI will replace those who do not.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">14</div>
                        <div class="truth-content">
                            <h3>Charging by the hour is a trap</h3>
                            <p>It punishes efficiency and aligns your incentives against the client's. Charge for value and milestone outputs.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">15</div>
                        <div class="truth-content">
                            <h3>Great design requires saying no</h3>
                            <p>No to bad fits, no to feature bloat, and no to compromising on quality. The projects you decline define your path as much as the ones you accept.</p>
                        </div>
                    </div>
                </div>

                <div class="article-pullquote">
                    <p>"Tools evolve, trends come and go, but the core value of a creative studio never changes: translating complex ideas into premium visual form."</p>
                </div>
            `
        },
        tr: {
            category: 'Stüdyo Notları',
            title: '15 Yıl, 15 Acı Gerçek: Kreatif Cepheden Gözlemler',
            desc: 'Yapay zekâ öncesi dönemden bugüne butik bir yaratıcı stüdyo yönetmekten çıkarılan dürüst ve sansürsüz derslerin özeti.',
            readTime: '7 dk okuma',
            date: 'Haziran 2026',
            thumbnail: 'thumbnails/fifteen-years-lessons.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>İlişkiler gerçek değerdir. İyi tasarım, karşılıklı saygı ve müşteri güveni üzerine kurulur.</li>
                        <li>En iyi araç, en hızlı şekilde temiz kod yazmanızı ve tasarımları denemenizi sağlayandır.</li>
                        <li>Süreç kaosu engeller. Net hedefler ve sınırlar belirlemeden hiçbir projeye başlamayın.</li>
                        <li>Beğeni ve estetik hissi otomatikleştirilemez. Teknoloji değişir ama insan gözü kalıcıdır.</li>
                    </ul>
                </div>

                <h2>On Beş Yıllık Tasarım Gerçekliği</h2>
                <p>Bu kreatif stüdyoyu on beş yıldır yönetiyoruz. Mobil devrimini, duyarlı web tasarımının yükselişini, Flash'ın ölümünü ve şimdi de yapay zekânın doğuşunu gördük. Bugün kullandığımız araçlar başladığımız güne hiç benzemiyor.</p>
                <p>Ancak araçlar değişse de tasarımın temel kuralları aynı kalıyor.</p>
                <p>İşte bu süreçte öğrendiğimiz on beş acı gerçek:</p>

                <div class="truths-list">
                    <div class="truth-item">
                        <div class="truth-number">01</div>
                        <div class="truth-content">
                            <h3>İyi müşteriler iyi işler üretir</h3>
                            <p>En iyi projeler, müşterinin uzmanlığınıza saygı duyduğu ortaklıklardır.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">02</div>
                        <div class="truth-content">
                            <h3>Tasarım geri bildirimlerinin çoğu aslında strateji sorunudur</h3>
                            <p>Eğer müşteri yerleşimi beğenmiyorsa, bu genellikle marka konumlandırmasının baştan net yapılmamasındandır.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">03</div>
                        <div class="truth-content">
                            <h3>Sadelik en zor tasarlanan şeydir</h3>
                            <p>Kötü tasarımı kalabalık görsellerin arkasına gizlemek kolaydır. Minimalist bir yerleşimi kaliteli hissettirmek zordur.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">04</div>
                        <div class="truth-content">
                            <h3>Tasarım asla tam bitmez</h3>
                            <p>Sadece yayınlanır. Katı sınırlar koymazsanız sonsuza kadar değişiklik yaparsınız.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">05</div>
                        <div class="truth-content">
                            <h3>En iyi pazarlama güzel bir portföydür</h3>
                            <p>Olağanüstü işler yapın, müşteriler sizi bulacaktır.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">06</div>
                        <div class="truth-content">
                            <h3>İyi tasarım pahalıdır, ancak kötü tasarımın faturası daha ağırdır</h3>
                            <p>Başarısız bir ürünü veya markayı yeniden inşa etmek, ilk seferinde doğru yapmaktan üç kat daha zordur.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">07</div>
                        <div class="truth-content">
                            <h3>Kullandığınız araçlar estetik algınızı belirlemez</h3>
                            <p>Zevk sahibi olmayan bir tasarımcı, en pahalı yazılımlarla bile kötü işler üretir. Gerçek bir usta ise en basit araçla bile bir başyapıt çıkarabilir.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">08</div>
                        <div class="truth-content">
                            <h3>Geliştirici tarafından kodlanamayan tasarım değersizdir</h3>
                            <p>Gerçek tasarım Figma dosyasında bitmez; yayındaki çalışan kodla hayat bulur. Tasarımcılar işin nasıl inşa edildiğini anlamak zorundadır.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">09</div>
                        <div class="truth-content">
                            <h3>Hız mükemmellikten iyidir, ancak kaliteden ödün verilemez</h3>
                            <p>Pazar geri bildirimi almak için temiz ve işlevsel bir ürünü hızlıca yayına almak, detayları bir yıl boyunca cilalamaktan daha iyidir. Ancak hatalı ve bozuk bir yerleşim güveni anında öldürür.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">10</div>
                        <div class="truth-content">
                            <h3>Premium bir marka detaylarda gizlidir</h3>
                            <p>Boşluklar, mikro etkileşimler, ince tipografi hiyerarşisi... Bir web sitesini sıradanlıktan alıp zirveye taşıyan şey bu küçük detaylardır.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">11</div>
                        <div class="truth-content">
                            <h3>Kullanıcı siz değilsiniz</h3>
                            <p>Müşterinin hedef kitlesi yerine kendi egonuz için tasarlamak, son derece estetik bir başarısızlık üretmenin en kestirme yoludur.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">12</div>
                        <div class="truth-content">
                            <h3>Toplantılar yaratıcılığın öldüğü yerdir</h3>
                            <p>Uzun durum toplantılarını net asenkron dökümantasyon ve aktif tasarım iş birliğiyle değiştirin. Az laf, çok iş.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">13</div>
                        <div class="truth-content">
                            <h3>Yapay zekâ rakibiniz değil, motorunuzdur</h3>
                            <p>Yapay zekâ kreatif direktörlerin yerini almayacak, ancak yapay zekâ kullanan kreatif direktörler kullanmayanların yerini alacak.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">14</div>
                        <div class="truth-content">
                            <h3>Saatlik ücretlendirme bir tuzaktır</h3>
                            <p>Bu model verimliliği cezalandırır ve çıkarlarınızı müşterininkilerle ters düşürür. Zamana değil, değere ve aşama çıktılarına göre fiyat belirleyin.</p>
                        </div>
                    </div>
                    <div class="truth-item">
                        <div class="truth-number">15</div>
                        <div class="truth-content">
                            <h3>İyi tasarım "hayır" diyebilmektir</h3>
                            <p>Uyumsuz müşterilere, gereksiz özellik taleplerine ve kaliteden ödün verilmesine hayır deyin. Reddettiğiniz projeler, kabul ettikleriniz kadar yolunuzu çizer.</p>
                        </div>
                    </div>
                </div>

                <div class="article-pullquote">
                    <p>"Araçlar değişir, trendler eskir, gürültü artar. Stüdyonun özü ise baki kalır: Fikirdeki karmaşayı, kusursuz bir görsel forma damıtmak."</p>
                </div>
            `
        }
    },
    'behind-the-scenes-story': {
        en: {
            category: 'Studio Notes',
            title: 'Behind the Pixels: How We Run Our Studio Stack',
            desc: 'An honest look at our internal tool stack, automated design pipelines, and daily creative operations.',
            readTime: '6 min read',
            date: 'May 2026',
            thumbnail: 'thumbnails/behind-the-scenes-story.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>We use a minimal, integrated tool stack to reduce administration and maximize design time</li>
                        <li>We design directly in code environments to test layout behavior, speed, and responsiveness</li>
                        <li>Daily asynchronous syncs replace time-wasting meetings, keeping our team focused</li>
                        <li>Our production pipeline is built to ship high-quality visual outputs in weeks</li>
                    </ul>
                </div>

                <h2>Our Operational Stack</h2>
                <p>Many creative studios are slowed down by admin. They spend half their day writing project plans, updating boards, and chasing email threads. We believe in keeping operations lean.</p>
                <p>Our stack is simple:</p>
                <h3>1. Interactive Design</h3>
                <p>We use Figma for visual design and collaborative wireframing. It acts as our shared visual whiteboard with clients.</p>
                <h3>2. Dynamic Production</h3>
                <p>We write clean, semantic HTML, CSS, and JS. We avoid heavy framework templates unless the client needs a complex app. This ensures our sites load instantly and are easily modified.</p>
                <h3>3. Asynchronous Operations</h3>
                <p>We use Slack for daily async updates and Notion for client documentation. We have one core meeting per week. The rest of the time is spent designing and coding.</p>

                <div class="article-pullquote">
                    <p>"By removing project managers and account leads, we ensure that the strategic designers are directly connected to the client."</p>
                </div>
            `
        },
        tr: {
            category: 'Stüdyo Notları',
            title: 'Piksellerin Arkası: Stüdyo Altyapımızı Nasıl Yönetiyoruz?',
            desc: 'Kullandığımız araçlar, otomatik tasarım üretim süreçleri ve günlük yaratıcı işleyişimize dürüst bir bakış.',
            readTime: '6 dk okuma',
            date: 'Mayıs 2026',
            thumbnail: 'thumbnails/behind-the-scenes-story.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Yönetim yükünü azaltmak ve tasarıma odaklanmak için sade araçlar kullanıyoruz.</li>
                        <li>Sayfa davranışını, hızı ve uyumluluğu test etmek için doğrudan kod ortamında tasarlıyoruz.</li>
                        <li>Gereksiz toplantılar yerine yazılı güncellemeleri tercih ederek ekibi odakta tutuyoruz.</li>
                        <li>Üretim hattımızı, yüksek kaliteli görsel çıktıları haftalar içinde sunacak şekilde kurduk.</li>
                    </ul>
                </div>

                <h2>Operasyonel Altyapımız</h2>
                <p>Birçok stüdyo idari işler yüzünden yavaşlar. Günün yarısını plan yazarak, e-posta kovalayarak harcarlar. Biz işleyişin sade kalmasına inanıyoruz.</p>
                <p>Kullandığımız araçlar basit:</p>
                <h3>1. Etkileşimli Tasarım</h3>
                <p>Görsel tasarım ve ortak taslaklar için Figma kullanıyoruz. Müşterilerle ortak dijital yazı tahtamız burasıdır.</p>
                <h3>2. Dinamik Üretim</h3>
                <p>Temiz, semantik HTML, CSS ve JS yazıyoruz. Karmaşık bir uygulama gerekmedikçe ağır kütüphaneleri kullanmıyoruz. Bu sayede sitelerimiz anında yüklenir ve kolayca güncellenir.</p>
                <h3>3. Asenkron Operasyonlar</h3>
                <p>Günlük yazışmalar için Slack, dökümantasyon için Notion kullanıyoruz. Haftada sadece bir kilit toplantımız var. Kalan zamanı tasarıma ve koda ayırıyoruz.</p>

                <div class="article-pullquote">
                    <p>"Proje yöneticilerini aradan çıkararak, stratejik tasarımcıların doğrudan müşteriyle temas kurmasını sağlıyoruz."</p>
                </div>
            `
        }
    },
    'client-relationship-trust': {
        en: {
            category: 'Studio Notes',
            title: 'Building Trust Over Dinner: Partnerships vs. Contracts',
            desc: 'Why the best design projects start with personal alignment, shared values, and transparency rather than contract clauses.',
            readTime: '5 min read',
            date: 'April 2026',
            thumbnail: 'thumbnails/client-relationship-trust.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>High-end design is a consultative process that requires deep client-agency trust</li>
                        <li>Contracts protect boundaries, but personal alignment ensures project success</li>
                        <li>Open, honest communication about budgets, constraints, and expectations avoids future conflict</li>
                        <li>The best client relationships are partnerships built around shared long-term goals</li>
                    </ul>
                </div>

                <h2>The Trust Economy</h2>
                <p>Branding and product design are personal. When a client hires us, they are trusting us with their company's visual identity, digital reputation, and product interface.</p>
                <p>This is a major responsibility, and it cannot be managed through a contract alone. It requires deep trust.</p>
                <p>We believe that trust is built through transparency. We are upfront about what we can do, what we cannot do, what a project will cost, and how long it will actually take.</p>

                <div class="article-pullquote">
                    <p>"A contract defines the limits of a project. Trust defines the possibilities. We prioritize building partnerships over signing agreements."</p>
                </div>

                <h2>Our Partnership Guidelines</h2>
                <p>First, **always speak the truth**. If a client's idea will hurt their product usability, we tell them honestly and explain why, offering a better solution.</p>
                <p>Second, **maintain complete budget transparency**. No hidden fees or surprise invoices. We charge fixed prices per milestone, so there are never any surprises.</p>
                <p>Third, **celebrate collaboration**. The best ideas are born when our design team and the client's internal team work together as a single unit.</p>
            `
        },
        tr: {
            category: 'Stüdyo Notları',
            title: 'Yemekte Güven İnşa Etmek: Sözleşmeler vs. Ortaklıklar',
            desc: 'En başarılı tasarım projelerinin sözleşme maddelerinden ziyade kişisel uyum, ortak değerler ve şeffaflıkla başladığının analizi.',
            readTime: '5 dk okuma',
            date: 'Nisan 2026',
            thumbnail: 'thumbnails/client-relationship-trust.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Üst seviye tasarım işi, ajans ile müşteri arasında derin bir güven ilişkisi gerektirir.</li>
                        <li>Sözleşmeler sınırları korur, ancak projenin başarısını sağlayan kişisel uyumdur.</li>
                        <li>Bütçe ve beklentiler hakkında açık iletişim kurmak gelecekteki anlaşmazlıkları önler.</li>
                        <li>En iyi müşteri ilişkileri, uzun vadeli ortak hedefler etrafında kurulan ortaklıklardır.</li>
                    </ul>
                </div>

                <h2>Güven Ekonomisi</h2>
                <p>Marka ve ürün tasarımı kişisel konulardır. Bir müşteri bizimle çalıştığında şirketin görsel kimliğini, dijital itibarını ve ürün arayüzünü bize emanet eder.</p>
                <p>Bu büyük bir sorumluluktur. Sadece sözleşmeyle yürütülemez. Derin bir güven gerektirir.</p>
                <p>Güvenin şeffaflıkla kurulduğuna inanıyoruz. Ne yapabileceğimizi, neyi yapamayacağımızı, projenin maliyetini ve ne kadar süreceğini en başta dürüstçe söyleriz.</p>

                <div class="article-pullquote">
                    <p>"Sözleşme projenin sınırlarını belirler. Güven ise sınırları aşmanızı sağlar. Anlaşma imzalamaktan ziyade ortaklık kurmaya öncelik veriyoruz."</p>
                </div>

                <h2>Ortaklık İlkelerimiz</h2>
                <p>İlk olarak, **her zaman doğruyu söyleyin**. Eğer müşterinin bir fikri ürünün kullanılabilirliğine zarar verecekse, bunu dürüstçe söyler, nedenini açıklar ve daha iyi bir çözüm öneririz.</p>
                <p>İkinci olarak, **bütçe şeffaflığını koruyun**. Gizli ücretler veya sürpriz faturalar yok. Her aşama için sabit fiyat belirleriz, böylece sürpriz yaşanmaz.</p>
                <p>Üçüncü olarak, **ortak çalışmaya değer verin**. En iyi fikirler tasarım ekibimiz ile müşterinin ekibi tek bir vücut halinde çalıştığında ortaya çıkar.</p>
            `
        }
    },
    'ai-native-studio-birth': {
        en: {
            category: 'Studio Notes',
            title: 'Rebuilding a 15-Year-Old Agency Around AI Workflows',
            desc: 'The internal story of why we tore down our traditional design pipeline to start fresh as an AI-native studio.',
            readTime: '6 min read',
            date: 'March 2026',
            thumbnail: 'thumbnails/ai-native-studio-birth.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Key Takeaways</div>
                    <ul>
                        <li>Adapting to AI required rebuilding our production pipeline and changing team roles</li>
                        <li>We transitioned from manual layout generation to automated ideation with custom art direction</li>
                        <li>This change reduced visual production times, allowing us to focus on strategy</li>
                        <li>Rebuilding our studio stack around AI has allowed us to deliver premium quality at scale</li>
                    </ul>
                </div>

                <h2>The Decision to Rebuild</h2>
                <p>In late 2024, we realized that the traditional agency model was reaching its limits. The hours spent on wireframes, resizing graphics, and copying layout templates were becoming obsolete.</p>
                <p>We had a choice: protect our traditional design pipeline, or tear it down and start fresh around AI workflows.</p>
                <p>We chose to rebuild.</p>

                <div class="article-pullquote">
                    <p>"Rebuilding a studio around AI is not about using new tools. It is about rethinking how ideas are generated, developed, and deployed."</p>
                </div>

                <h2>The Rebuilding Journey</h2>
                <p>We trained our team on custom prompt structures, model tuning, and unified design libraries. We integrated AI engines into our design tools and our codebase, allowing us to automate repeating tasks.</p>
                <p>The result has been a major increase in speed, quality, and creative options. We can now test more layout variations, explore richer visual ideas, and build customized web products in a fraction of the time, keeping our boutique team hyper-efficient and focused on strategic design.</p>
            `
        },
        tr: {
            category: 'Stüdyo Notları',
            title: '15 Yıllık Ajansı Yapay Zekâ İş Akışlarıyla Yeniden Kurmak',
            desc: 'Geleneksel üretim hattımızı tamamen yıkıp yapay zekâ odaklı bir stüdyo olarak yeniden doğuşumuzun hikayesi.',
            readTime: '6 dk okuma',
            date: 'Mart 2026',
            thumbnail: 'thumbnails/ai-native-studio-birth.png',
            body: `
                <div class="article-keypoints">
                    <div class="article-keypoints-title">Öne Çıkanlar</div>
                    <ul>
                        <li>Yapay zekaya uyum sağlamak üretim hattını yeniden kurmayı ve ekip rollerini değiştirmeyi gerektirdi.</li>
                        <li>Elle şablon üretmekten, özel sanat yönetimiyle desteklenen otomatik fikir üretimine geçtik.</li>
                        <li>Bu değişim üretim sürelerini kısalttı ve stratejiye daha fazla odaklanmamızı sağladı.</li>
                        <li>Altyapımızı yapay zekâ odaklı kurmak, premium kaliteyi ölçekli şekilde sunmamızı sağladı.</li>
                    </ul>
                </div>

                <h2>Yeniden Kurma Kararı</h2>
                <p>2024 sonlarında geleneksel ajans modelinin sınırlarına ulaştığını fark ettik. Şablon çizmekle, grafikleri yeniden boyutlandırmakla ve yerleşim kopyalamakla harcanan saatler artık geçerliliğini yitiriyordu.</p>
                <p>Önümüzde bir seçenek vardı: Ya eski üretim hattımızı koruyacaktık ya da her şeyi yıkıp yapay zekâ iş akışları etrafında baştan başlayacaktık.</p>
                <p>Biz yeniden kurmayı seçtik.</p>

                <div class="article-pullquote">
                    <p>"Yapay zekâ odaklı stüdyo kurmak yeni araçlar kullanmaktan ibaret değildir. Fikirlerin nasıl üretildiğini, geliştirildiğini ve sunulduğunu baştan düşünmektir."</p>
                </div>

                <h2>Yeniden Yapılanma Süreci</h2>
                <p>Ekibimizi özel prompt yapıları, model optimizasyonları ve ortak tasarım kütüphaneleri konusunda eğittik. Yapay zekâ motorlarını tasarım araçlarımıza ve kod tabanımıza entegre ederek tekrar eden işleri otomatikleştirdik.</p>
                <p>Sonuçta hız, kalite ve alternatif sayısında büyük bir artış elde ettik. Artık çok daha fazla yerleşim seçeneği deneyebiliyor, daha zengin görsel fikirler keşfedebiliyor ve web ürünlerini çok daha kısa sürede geliştirebiliyoruz. Bu da ekibimizi verimli kılıp stratejik tasarıma odaklanmamızı sağlıyor.</p>
            `
        }
    }
};

// ============================================
// MAIN PAGE INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // Accordion Elements
    const accordion = document.getElementById('servicesAccordion');
    const accordionItems = accordion.querySelectorAll('.accordion-item');
    const worksCard = document.getElementById('worksCard');

    function syncWorksCardHeight() {
        if (!worksCard) return;
        // Let CSS handle the card height (230px/250px) to prevent stretching and distortion
        worksCard.style.height = '';
    }

    // Language Selector Elements
    const langButtons = document.querySelectorAll('.lang-btn');
    const taglineTexts = document.querySelectorAll('.tagline-text');
    let currentLang = 'en';

    // Helper to get article translation
    function getArticle(slug) {
        const rawContent = articleContent[slug];
        if (!rawContent) return null;
        return rawContent[currentLang] || rawContent['en'];
    }

    // Navigation and Mega Menu Elements
    const navItems = document.querySelectorAll('.nav-item');
    const megaMenu = document.getElementById('megaMenu');
    const megaLeft = document.getElementById('megaLeft');
    const megaRight = document.getElementById('megaRight');

    let activeMenu = null;
    let menuTimeout = null;

    // --------------------------------------------
    // ACCORDION LOGIC
    // --------------------------------------------
    accordionItems.forEach((item) => {
        const trigger = item.querySelector('.accordion-trigger');
        const panel = item.querySelector('.accordion-panel');

        trigger.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all panels
            accordionItems.forEach((otherItem) => {
                const otherPanel = otherItem.querySelector('.accordion-panel');
                const otherTrigger = otherItem.querySelector('.accordion-trigger');
                otherItem.classList.remove('active');
                otherPanel.style.maxHeight = null;
                otherTrigger.setAttribute('aria-expanded', 'false');
            });

            // Open clicked panel if it wasn't already open
            if (!isActive) {
                item.classList.add('active');
                panel.style.maxHeight = panel.scrollHeight + 'px';
                trigger.setAttribute('aria-expanded', 'true');
                accordion.classList.add('has-active');
            } else {
                accordion.classList.remove('has-active');
            }

            // Sync works card height
            setTimeout(syncWorksCardHeight, 50);
        });
    });

    // --------------------------------------------
    // MEGA MENU RENDERING & LOGIC
    // --------------------------------------------

    const contactTranslations = {
        en: {
            directMessage: "Direct Message",
            reachOut: "Reach out to us",
            connectDesc: "Connect with our team for design inquiries, partnership proposals, or media.",
            locations: "Locations",
            locationsDesc: "We are an always-on creative team based in Istanbul, Türkiye and Medellín, Colombia.",
            namePlaceholder: "Name",
            surnamePlaceholder: "Surname",
            companyPlaceholder: "Company",
            emailPlaceholder: "Company Email",
            messagePlaceholder: "Message",
            sendBtn: "Send Message",
            sendingBtn: "Sending...",
            sentBtn: "Message Sent",
            successTitle: "Thank you!",
            successDesc: "Your message has been sent. Our team will get back to you shortly."
        },
        tr: {
            directMessage: "Doğrudan Mesaj",
            reachOut: "Bize ulaşın",
            connectDesc: "Tasarım projeleri, iş ortaklığı teklifleri veya basın talepleri için bizimle iletişime geçin.",
            locations: "Ofisler",
            locationsDesc: "İstanbul ve Medellín merkezli, her an aktif çalışan bir kreatif ekibiz.",
            namePlaceholder: "Ad",
            surnamePlaceholder: "Soyad",
            companyPlaceholder: "Şirket",
            emailPlaceholder: "Şirket E-postası",
            messagePlaceholder: "Mesaj",
            sendBtn: "Mesajı Gönder",
            sendingBtn: "Gönderiliyor...",
            sentBtn: "Mesaj Gönderildi",
            successTitle: "Teşekkürler!",
            successDesc: "Mesajınız iletildi. Ekibimiz en kısa sürede sizinle iletişime geçecektir."
        }
    };

    function validateEmailField(input) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value.trim())) {
            input.classList.add('invalid');
            return false;
        } else {
            input.classList.remove('invalid');
            return true;
        }
    }

    function handleContactSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const nameInput = form.querySelector('[name="name"]');
        const surnameInput = form.querySelector('[name="surname"]');
        const emailInput = form.querySelector('[name="email"]');
        const messageInput = form.querySelector('[name="message"]');
        const submitBtn = form.querySelector('button[type="submit"]');
        const successPanel = form.nextElementSibling;
        
        let isValid = true;
        
        [nameInput, surnameInput, messageInput].forEach(input => {
            if (!input) return;
            if (input.value.trim() === '') {
                input.classList.add('invalid');
                isValid = false;
            } else {
                input.classList.remove('invalid');
            }
        });
        
        if (emailInput) {
            if (emailInput.value.trim() === '') {
                emailInput.classList.add('invalid');
                isValid = false;
            } else {
                if (!validateEmailField(emailInput)) {
                    isValid = false;
                }
            }
        }
        
        if (!isValid) {
            form.classList.add('shake');
            setTimeout(() => {
                form.classList.remove('shake');
            }, 500);
            return;
        }
        
        const t = contactTranslations[currentLang] || contactTranslations['en'];
        submitBtn.disabled = true;
        submitBtn.classList.add('sending');
        submitBtn.querySelector('.btn-text').textContent = t.sendingBtn;
        
        const formData = new FormData(form);
        formData.append('form-name', 'contact');
        
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            submitBtn.classList.remove('sending');
            submitBtn.classList.add('success');
            submitBtn.querySelector('.btn-text').textContent = t.sentBtn;
            
            form.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
            form.style.opacity = '0';
            form.style.transform = 'translateY(-10px)';
            form.style.pointerEvents = 'none';
            
            setTimeout(() => {
                form.style.display = 'none';
                successPanel.style.display = 'flex';
                successPanel.style.opacity = '0';
                successPanel.style.transform = 'translateY(10px)';
                
                successPanel.offsetHeight; // reflow
                
                successPanel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                successPanel.style.opacity = '1';
                successPanel.style.transform = 'translateY(0)';
            }, 400);
        })
        .catch(error => {
            console.error('Error submitting to Netlify Forms:', error);
            submitBtn.disabled = false;
            submitBtn.classList.remove('sending');
            submitBtn.querySelector('.btn-text').textContent = t.sendBtn;
            alert(currentLang === 'tr' ? 'Mesaj gönderilemedi, lütfen tekrar deneyin.' : 'Failed to send message. Please try again.');
        });
    }

    function renderContactMenu(lang) {
        const t = contactTranslations[lang] || contactTranslations['en'];
        
        // Render Left Column (Contact Info Panel)
        megaLeft.innerHTML = `
            <div class="contact-info-panel">
                <div class="contact-info-section">
                    <div class="contact-info-label">${t.directMessage}</div>
                    <h2 class="contact-info-title">${t.reachOut}</h2>
                    <p class="contact-info-desc">${t.connectDesc}</p>
                </div>
                <div class="contact-info-section">
                    <div class="contact-info-label">${t.locations}</div>
                    <p class="contact-info-desc locations-text">${t.locationsDesc}</p>
                </div>
            </div>
        `;

        // Check if form already exists to avoid resetting user input
        let contactForm = megaRight.querySelector('#contact-form');
        if (contactForm) {
            const successPanel = megaRight.querySelector('.contact-success-panel');
            if (successPanel && successPanel.style.display === 'flex') {
                // Reset the form if it was submitted previously
                contactForm.reset();
                contactForm.style.display = 'block';
                contactForm.style.opacity = '1';
                contactForm.style.transform = 'none';
                contactForm.style.pointerEvents = 'auto';
                successPanel.style.display = 'none';
                
                const submitBtn = contactForm.querySelector('#contact-submit-btn');
                submitBtn.disabled = false;
                submitBtn.classList.remove('success', 'sending');
                submitBtn.querySelector('.btn-text').textContent = t.sendBtn;
                
                contactForm.querySelectorAll('.invalid').forEach(input => input.classList.remove('invalid'));
                contactForm.querySelectorAll('.has-value').forEach(input => input.classList.remove('has-value'));
            } else {
                // Just update texts
                megaRight.querySelector('#label-name').textContent = t.namePlaceholder;
                megaRight.querySelector('#label-surname').textContent = t.surnamePlaceholder;
                megaRight.querySelector('#label-company').textContent = t.companyPlaceholder;
                megaRight.querySelector('#label-email').textContent = t.emailPlaceholder;
                megaRight.querySelector('#label-message').textContent = t.messagePlaceholder;
                
                const submitBtn = megaRight.querySelector('#contact-submit-btn');
                if (submitBtn) {
                    const btnText = submitBtn.querySelector('.btn-text');
                    if (submitBtn.classList.contains('sending')) {
                        btnText.textContent = t.sendingBtn;
                    } else if (submitBtn.classList.contains('success')) {
                        btnText.textContent = t.sentBtn;
                    } else {
                        btnText.textContent = t.sendBtn;
                    }
                }
                return;
            }
        }

        // Render Right Column (Contact Form Structure)
        megaRight.innerHTML = `
            <div class="contact-form-container">
                <form id="contact-form" novalidate>
                    <div class="contact-form-grid">
                        <div class="form-group">
                            <input type="text" id="contact-name" name="name" required placeholder=" ">
                            <label for="contact-name" id="label-name">${t.namePlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="contact-surname" name="surname" required placeholder=" ">
                            <label for="contact-surname" id="label-surname">${t.surnamePlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="text" id="contact-company" name="company" placeholder=" ">
                            <label for="contact-company" id="label-company">${t.companyPlaceholder}</label>
                        </div>
                        <div class="form-group">
                            <input type="email" id="contact-email" name="email" required placeholder=" ">
                            <label for="contact-email" id="label-email">${t.emailPlaceholder}</label>
                        </div>
                    </div>
                    <div class="form-group textarea-group">
                        <textarea id="contact-message" name="message" required placeholder=" "></textarea>
                        <label for="contact-message" id="label-message">${t.messagePlaceholder}</label>
                    </div>
                    <button type="submit" id="contact-submit-btn" class="contact-btn">
                        <span class="btn-text">${t.sendBtn}</span>
                        <span class="btn-icon">
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" stroke-width="1.2"/>
                            </svg>
                        </span>
                    </button>
                </form>
                <div class="contact-success-panel" style="display: none;">
                    <div class="success-icon-container">
                        <div class="success-glow"></div>
                        <svg class="success-checkmark" viewBox="0 0 52 52">
                            <circle class="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                    </div>
                    <h3 class="success-title">${t.successTitle}</h3>
                    <p class="success-desc">${t.successDesc}</p>
                </div>
            </div>
        `;

        const form = megaRight.querySelector('#contact-form');
        form.addEventListener('submit', handleContactSubmit);

        const inputs = form.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            // Helper to set label classes on load/change
            const checkValue = () => {
                if (input.value.trim() !== '') {
                    input.classList.add('has-value');
                } else {
                    input.classList.remove('has-value');
                }
            };
            input.addEventListener('blur', () => {
                checkValue();
                if (input.type === 'email' && input.value.trim() !== '') {
                    validateEmailField(input);
                }
            });
            input.addEventListener('input', () => {
                input.classList.remove('invalid');
            });
        });
    }

    function renderMegaMenu(menuType, lang) {
        if (menuType === 'contact') {
            megaMenu.classList.add('contact-mode');
            renderContactMenu(lang);
            return;
        }
        megaMenu.classList.remove('contact-mode');

        const data = menuData[menuType][lang];
        if (!data) return;

        // Render Left list
        megaLeft.innerHTML = '';
        data.forEach((group, index) => {
            const itemElement = document.createElement('div');
            itemElement.className = `mega-item ${index === 0 ? 'active' : ''}`;
            itemElement.setAttribute('data-id', group.id);
            itemElement.innerHTML = `
                <div class="mega-item-title">${group.title}</div>
                <div class="mega-item-sub">${group.subtitle}</div>
                <div class="mega-item-desc">${group.desc}</div>
            `;
            
            // Hover left item changes right side content
            itemElement.addEventListener('mouseenter', () => {
                megaLeft.querySelectorAll('.mega-item').forEach(el => el.classList.remove('active'));
                itemElement.classList.add('active');
                renderMegaCards(group.cards, activeMenu === 'resources');
            });

            megaLeft.appendChild(itemElement);
        });

        // Render Right cards for the first item by default
        renderMegaCards(data[0].cards, menuType === 'resources');
    }

    function renderMegaCards(cards, isResource) {
        megaRight.innerHTML = '';
        cards.forEach((card, index) => {
            const cardElement = document.createElement('div');
            cardElement.className = 'mega-card' + (isResource && card.slug ? ' clickable' : '');

            if (isResource && card.slug) {
                // Get article data for preview
                const articleRaw = articleContent[card.slug];
                const article = articleRaw ? (articleRaw[currentLang] || articleRaw['en']) : null;
                const excerpt = article ? article.desc : card.desc;
                const category = article ? article.category : 'Resource';
                const readTime = article ? article.readTime : '';
                const thumbnail = article ? article.thumbnail : '';

                cardElement.innerHTML = `
                    <div class="mega-card-preview">
                        <div class="mega-card-thumb" data-gradient="${index % 4}">
                            ${thumbnail ? `<img class="mega-card-thumb-img" src="${thumbnail}" alt="${card.title}" />` : ''}
                            <div class="mega-card-thumb-gradient"></div>
                            <div class="mega-card-thumb-pattern"></div>
                            <div class="mega-card-thumb-glow"></div>
                            <span class="mega-card-thumb-label">${category} · ${readTime}</span>
                        </div>
                        <div class="mega-card-preview-body">
                            <div class="mega-card-preview-title">${card.title}</div>
                            <div class="mega-card-preview-excerpt">${excerpt}</div>
                            <div class="mega-card-preview-cta">
                                Read more
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M2.5 6H9.5M9.5 6L6.5 3M9.5 6L6.5 9" stroke="currentColor" stroke-width="1.2"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="mega-card-front">
                        <div class="mega-card-icon">
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                            <span></span><span></span><span></span>
                        </div>
                        <div class="mega-card-info">
                            <div class="mega-card-title">${card.title}</div>
                            <div class="mega-card-desc">${card.desc}</div>
                        </div>
                    </div>
                `;
            } else {
                cardElement.innerHTML = `
                    <div class="mega-card-icon">
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                        <span></span><span></span><span></span>
                    </div>
                    <div class="mega-card-info">
                        <div class="mega-card-title">${card.title}</div>
                        <div class="mega-card-desc">${card.desc}</div>
                    </div>
                `;
            }

            if (isResource && card.slug) {
                cardElement.addEventListener('click', (e) => {
                    e.stopPropagation();
                    openArticle(card.slug);
                });
            }
            megaRight.appendChild(cardElement);
        });
    }

    // Show menu dropdown
    function showMenu(menuType) {
        if (menuTimeout) clearTimeout(menuTimeout);
        activeMenu = menuType;

        // Mark active navigation item
        navItems.forEach(item => {
            if (item.getAttribute('data-menu') === menuType) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });

        // Render content
        renderMegaMenu(menuType, currentLang);

        // Dynamically align mega menu bottom edge with services accordion bottom edge
        const accordion = document.getElementById('servicesAccordion');
        if (accordion && window.innerWidth > 768) {
            const accordionRect = accordion.getBoundingClientRect();
            // 76px is the absolute top offset of the mega menu
            const calculatedHeight = Math.round(accordionRect.bottom - 76);
            // Cap at a minimum of 450px to ensure card content readability on short screens
            const finalHeight = Math.max(450, calculatedHeight);
            
            megaMenu.style.height = finalHeight + 'px';
            megaMenu.style.maxHeight = finalHeight + 'px';
        } else {
            megaMenu.style.height = '';
            megaMenu.style.maxHeight = '';
        }

        megaMenu.classList.add('active');
    }

    // Hide menu dropdown
    function hideMenu() {
        if (menuTimeout) clearTimeout(menuTimeout);
        menuTimeout = setTimeout(() => {
            megaMenu.classList.remove('active');
            megaMenu.style.maxHeight = '0px'; // Force height animation slide closed
            navItems.forEach(item => item.classList.remove('active'));
            activeMenu = null;
        }, 200);
    }

    // Event listeners for main navigation buttons
    navItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const menuType = item.getAttribute('data-menu');
            showMenu(menuType);
        });
        item.addEventListener('mouseleave', hideMenu);
    });

    // Event listeners to keep mega menu open while hovering it
    megaMenu.addEventListener('mouseenter', () => {
        if (menuTimeout) clearTimeout(menuTimeout);
    });
    megaMenu.addEventListener('mouseleave', hideMenu);


    // --------------------------------------------
    // LANGUAGE SWITCHER LOGIC
    // --------------------------------------------
    function switchLanguage(lang) {
        currentLang = lang;

        // 1. Update main nav items translations
        navItems.forEach(item => {
            const keyText = item.getAttribute(`data-${lang}`);
            if (keyText) item.textContent = keyText;
        });

        // 2. Update tagline visibility
        taglineTexts.forEach(tagline => {
            if (tagline.getAttribute('data-lang') === lang) {
                tagline.style.display = 'block';
            } else {
                tagline.style.display = 'none';
            }
        });

        // 3. Translate accordion, works card and power hint elements using data attributes
        const translatableElements = document.querySelectorAll('#servicesWrapper [data-en], #servicesWrapper [data-tr], #worksCard [data-en], #worksCard [data-tr], #powerHint [data-en], #powerHint [data-tr]');
        translatableElements.forEach(element => {
            const newText = element.getAttribute(`data-${lang}`);
            if (newText) {
                element.innerHTML = newText;
            }
        });

        // 4. Recalculate open accordion height
        const activeItem = accordion.querySelector('.accordion-item.active');
        if (activeItem) {
            const panel = activeItem.querySelector('.accordion-panel');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        // 5. If mega menu is open, re-render it in target language
        if (activeMenu) {
            renderMegaMenu(activeMenu, currentLang);
        }

        // 6. If mobile drawer is active, re-render it in target language
        if (mobileDrawer && mobileDrawer.classList.contains('active')) {
            renderMobileDrawer(currentLang);
        }

        // 7. Update power button tooltip translations
        if (typeof updatePowerTooltip === 'function') {
            updatePowerTooltip();
        }

        // Sync works card height
        setTimeout(syncWorksCardHeight, 50);
    }

    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetLang = button.getAttribute('data-lang');
            if (targetLang === currentLang) return;

            // Update switcher UI state
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Update URL search parameter for shareability (e.g. on WhatsApp)
            const url = new URL(window.location.href);
            url.searchParams.set('lang', targetLang);
            window.history.replaceState(null, '', url.pathname + url.search + url.hash);

            switchLanguage(targetLang);
        });
    });

    // --------------------------------------------
    // PARALLAX BACKGROUND EFFECT
    // --------------------------------------------
    const videoEl = document.getElementById('bgVideo');
    let rafId = null;

    document.addEventListener('mousemove', (e) => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(() => {
            const xPercent = (e.clientX / window.innerWidth - 0.5) * 2;
            const yPercent = (e.clientY / window.innerHeight - 0.5) * 2;
            const moveX = xPercent * 4;
            const moveY = yPercent * 4;
            videoEl.style.transform = `scale(1.05) translate(${moveX}px, ${moveY}px)`;
        });
    });

    // --------------------------------------------
    // ARTICLE MODAL SYSTEM
    // --------------------------------------------
    const articleOverlay = document.getElementById('articleOverlay');
    const articleClose = document.getElementById('articleClose');
    const articleScroll = document.getElementById('articleScroll');
    const articleContainer = document.getElementById('articleContainer');
    const articleProgressBar = document.getElementById('articleProgressBar');

    // Helper: get related articles for sidebar
    function getRelatedArticles(currentSlug) {
        const rawCurrent = articleContent[currentSlug];
        if (!rawCurrent) return [];
        const current = rawCurrent[currentLang] || rawCurrent['en'];

        const related = [];
        const allSlugs = Object.keys(articleContent);

        // Same category first
        allSlugs.forEach(slug => {
            const rawArt = articleContent[slug];
            if (!rawArt) return;
            const art = rawArt[currentLang] || rawArt['en'];
            if (slug !== currentSlug && art.category === current.category) {
                related.push({ slug, ...art });
            }
        });

        // Then other categories (pick 2-3 from each)
        const otherCategories = {};
        allSlugs.forEach(slug => {
            const rawArt = articleContent[slug];
            if (!rawArt) return;
            const art = rawArt[currentLang] || rawArt['en'];
            if (slug !== currentSlug && art.category !== current.category) {
                if (!otherCategories[art.category]) otherCategories[art.category] = [];
                if (otherCategories[art.category].length < 2) {
                    otherCategories[art.category].push({ slug, ...art });
                }
            }
        });

        return { sameCategory: related, otherCategories };
    }

    function openArticle(slug) {
        const rawContent = articleContent[slug];
        if (!rawContent) return;
        const content = rawContent[currentLang] || rawContent['en'];

        // Set hash for shareable URL
        history.pushState(null, '', `#/resources/${slug}`);

        // Close mega menu
        megaMenu.classList.remove('active');
        navItems.forEach(item => item.classList.remove('active'));
        activeMenu = null;

        // Get related articles for sidebar
        const related = getRelatedArticles(slug);

        // Build sidebar HTML
        let sidebarHTML = '';

        // Same category section
        if (related.sameCategory && related.sameCategory.length > 0) {
            sidebarHTML += `
                <div class="article-sidebar-section">
                    <div class="article-sidebar-label">${content.category}</div>
                    ${related.sameCategory.map(r => `
                        <a class="article-sidebar-item" href="#" data-slug="${r.slug}">
                            <img class="article-sidebar-item-thumb" src="${r.thumbnail}" alt="${r.title}">
                            <div class="article-sidebar-item-info">
                                <span class="article-sidebar-item-title">${r.title}</span>
                                <span class="article-sidebar-item-time">${r.readTime}</span>
                            </div>
                        </a>
                    `).join('')}
                </div>
            `;
        }

        // Other categories
        if (related.otherCategories) {
            Object.keys(related.otherCategories).forEach(cat => {
                const items = related.otherCategories[cat];
                if (items.length > 0) {
                    sidebarHTML += `
                        <div class="article-sidebar-section">
                            <div class="article-sidebar-label">${cat}</div>
                            ${items.map(r => `
                                <a class="article-sidebar-item" href="#" data-slug="${r.slug}">
                                    <img class="article-sidebar-item-thumb" src="${r.thumbnail}" alt="${r.title}">
                                    <div class="article-sidebar-item-info">
                                        <span class="article-sidebar-item-title">${r.title}</span>
                                        <span class="article-sidebar-item-time">${r.readTime}</span>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    `;
                }
            });
        }

        // Build article HTML with banner and sidebar
        articleContainer.innerHTML = `
            <div class="article-banner" style="background-image: url('${content.thumbnail}');">
                <div class="article-banner-fade"></div>
                <div class="article-banner-content">
                    <div class="article-breadcrumb">
                        Resources <span>&#8594;</span> <span>${content.category}</span>
                    </div>
                    <div class="article-category">${content.category}</div>
                </div>
            </div>
            <div class="article-layout">
                <div class="article-main">
                    <header class="article-hero">
                        <h1>${content.title}</h1>
                        <p class="article-hero-desc">${content.desc}</p>
                        <div class="article-meta">
                            <div class="article-meta-item">
                                <svg class="article-meta-icon" viewBox="0 0 16 16" fill="none">
                                    <rect x="2" y="2" width="12" height="12" rx="2" stroke="white" stroke-width="1"/>
                                    <line x1="2" y1="6" x2="14" y2="6" stroke="white" stroke-width="1"/>
                                    <line x1="6" y1="2" x2="6" y2="6" stroke="white" stroke-width="1"/>
                                </svg>
                                ${content.date}
                            </div>
                            <div class="article-meta-item">
                                <svg class="article-meta-icon" viewBox="0 0 16 16" fill="none">
                                    <circle cx="8" cy="8" r="6" stroke="white" stroke-width="1"/>
                                    <line x1="8" y1="4" x2="8" y2="8" stroke="white" stroke-width="1"/>
                                    <line x1="8" y1="8" x2="11" y2="10" stroke="white" stroke-width="1"/>
                                </svg>
                                ${content.readTime}
                            </div>
                            <button class="article-share-btn" id="articleShareBtn">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M4.5 6.5L9.5 3.5M4.5 7.5L9.5 10.5M5 7A1.5 1.5 0 1 1 2 7a1.5 1.5 0 0 1 3 0zM12 3A1.5 1.5 0 1 1 9 3a1.5 1.5 0 0 1 3 0zM12 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" stroke="currentColor" stroke-width="1"/>
                                </svg>
                                Share
                            </button>
                        </div>
                    </header>
                    <div class="article-body">
                        ${content.body}
                    </div>
                    <footer class="article-footer">
                        <span class="article-footer-label">Gunery Resources</span>
                        <img src="Gunery Type Logo - White.png" alt="Gunery" class="article-footer-logo">
                    </footer>
                </div>
                <aside class="article-sidebar">
                    <div class="article-sidebar-header">More Articles</div>
                    ${sidebarHTML}
                </aside>
            </div>
        `;

        // Reset scroll and show overlay
        articleScroll.scrollTop = 0;
        articleProgressBar.style.width = '0%';
        articleOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Bind sidebar navigation
        articleContainer.querySelectorAll('.article-sidebar-item').forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const targetSlug = item.getAttribute('data-slug');
                if (targetSlug && articleContent[targetSlug]) {
                    articleScroll.scrollTop = 0;
                    openArticle(targetSlug);
                }
            });
        });

        // Bind share button
        const shareBtn = document.getElementById('articleShareBtn');
        if (shareBtn) {
            shareBtn.addEventListener('click', () => {
                const url = window.location.href;
                navigator.clipboard.writeText(url).then(() => {
                    shareBtn.classList.add('copied');
                    shareBtn.innerHTML = `
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M3 7L6 10L11 4" stroke="currentColor" stroke-width="1.5"/>
                        </svg>
                        Copied!
                    `;
                    setTimeout(() => {
                        shareBtn.classList.remove('copied');
                        shareBtn.innerHTML = `
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <path d="M4.5 6.5L9.5 3.5M4.5 7.5L9.5 10.5M5 7A1.5 1.5 0 1 1 2 7a1.5 1.5 0 0 1 3 0zM12 3A1.5 1.5 0 1 1 9 3a1.5 1.5 0 0 1 3 0zM12 11a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" stroke="currentColor" stroke-width="1"/>
                            </svg>
                            Share
                        `;
                    }, 2000);
                });
            });
        }
    }

    function closeArticle() {
        articleOverlay.classList.remove('active');
        document.body.style.overflow = '';
        articleProgressBar.style.width = '0%';

        // Clear hash
        history.pushState(null, '', window.location.pathname);
    }

    // Close button
    articleClose.addEventListener('click', closeArticle);

    // Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && articleOverlay.classList.contains('active')) {
            closeArticle();
        }
    });

    // Click outside article
    articleOverlay.addEventListener('click', (e) => {
        if (e.target === articleOverlay || e.target === articleScroll) {
            closeArticle();
        }
    });

    // Reading progress bar
    articleScroll.addEventListener('scroll', () => {
        const scrollTop = articleScroll.scrollTop;
        const scrollHeight = articleScroll.scrollHeight - articleScroll.clientHeight;
        const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        articleProgressBar.style.width = progress + '%';
    });

    // --------------------------------------------
    // HASH-BASED ROUTING (Shareable URLs)
    // --------------------------------------------
    function handleHash() {
        const hash = window.location.hash;
        const match = hash.match(/^#\/resources\/(.+)$/);
        if (match) {
            const slug = match[1];
            if (articleContent[slug]) {
                openArticle(slug);
            }
        }
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);

    // Check hash on page load
    handleHash();

    // Dynamically update mega menu height on window resize if open
    window.addEventListener('resize', () => {
        if (activeMenu) {
            const accordion = document.getElementById('servicesAccordion');
            if (accordion && window.innerWidth > 768) {
                const accordionRect = accordion.getBoundingClientRect();
                const calculatedHeight = Math.round(accordionRect.bottom - 76);
                const finalHeight = Math.max(450, calculatedHeight);
                megaMenu.style.height = finalHeight + 'px';
                megaMenu.style.maxHeight = finalHeight + 'px';
            } else {
                megaMenu.style.height = '';
                megaMenu.style.maxHeight = '';
            }
        }
        
        // Sync works card height
        if (typeof syncWorksCardHeight === 'function') {
            syncWorksCardHeight();
        }
    });

    // ============================================
    // MOBILE DRAWER LOGIC & DYNAMIC ACCORDIONS
    // ============================================
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const drawerNav = document.getElementById('drawerNav');
    const drawerLangSwitcher = document.getElementById('drawerLangSwitcher');

    if (mobileMenuToggle && mobileDrawer) {
        mobileMenuToggle.addEventListener('click', () => {
            const isActive = mobileDrawer.classList.contains('active');
            if (isActive) {
                closeMobileDrawer();
            } else {
                openMobileDrawer();
            }
        });
    }

    function openMobileDrawer() {
        mobileMenuToggle.classList.add('active');
        mobileDrawer.classList.add('active');
        document.body.classList.add('scroll-locked');
        renderMobileDrawer(currentLang);
    }

    function closeMobileDrawer() {
        mobileMenuToggle.classList.remove('active');
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('scroll-locked');
    }

    function renderMobileDrawer(lang) {
        if (!drawerNav || !drawerLangSwitcher) return;

        // 1. Language switcher inside drawer
        let langButtonsHTML = '';
        const headerLangBtns = document.querySelectorAll('.header .lang-btn');
        headerLangBtns.forEach((btn, idx) => {
            const btnLang = btn.getAttribute('data-lang');
            const isActive = btnLang === lang ? 'active' : '';
            langButtonsHTML += `<button class="drawer-lang-btn ${isActive}" data-lang="${btnLang}">${btnLang.toUpperCase()}</button>`;
            if (idx < headerLangBtns.length - 1) {
                langButtonsHTML += `<span class="drawer-lang-sep">—</span>`;
            }
        });
        drawerLangSwitcher.innerHTML = langButtonsHTML;

        // Bind clicks for drawer language buttons
        drawerLangSwitcher.querySelectorAll('.drawer-lang-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const targetLang = btn.getAttribute('data-lang');
                if (targetLang === currentLang) return;
                
                // Find matching button in main switcher and click it
                const mainBtn = document.querySelector(`.header .lang-btn[data-lang="${targetLang}"]`);
                if (mainBtn) mainBtn.click();
            });
        });

        // 2. Navigation items inside drawer
        // Group 1: Company Accordion
        const companyData = menuData.company[lang];
        let companyHTML = '';
        if (companyData) {
            companyHTML = `
                <div class="drawer-sub-list">
                    ${companyData.map((group) => `
                        <div class="drawer-sub-section" data-group="${group.id}">
                            <button class="drawer-sub-trigger">
                                <span>${group.title}</span>
                                <svg class="drawer-arrow" width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                            <div class="drawer-sub-panel">
                                <div class="drawer-cards-list">
                                    ${group.cards.map(card => `
                                        <div class="drawer-card">
                                            <div class="drawer-card-title">${card.title}</div>
                                            <div class="drawer-card-desc">${card.desc}</div>
                                        </div>
                                    `).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Group 2: Resources Accordion
        const resourcesData = menuData.resources[lang];
        let resourcesHTML = '';
        if (resourcesData) {
            resourcesHTML = `
                <div class="drawer-sub-list">
                    ${resourcesData.map((group) => `
                        <div class="drawer-sub-section" data-group="${group.id}">
                            <button class="drawer-sub-trigger">
                                <span>${group.title}</span>
                                <svg class="drawer-arrow" width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                            </button>
                            <div class="drawer-sub-panel">
                                <div class="drawer-articles-list">
                                    ${group.cards.map(card => {
                                        const article = getArticle(card.slug);
                                        const thumb = article ? article.thumbnail : '';
                                        const rTime = article ? article.readTime : '';
                                        const cat = article ? article.category : '';
                                        return `
                                            <div class="drawer-article-item" data-slug="${card.slug}">
                                                ${thumb ? `<img class="drawer-article-thumb" src="${thumb}" alt="${card.title}">` : ''}
                                                <div class="drawer-article-info">
                                                    <span class="drawer-article-title">${card.title}</span>
                                                    <span class="drawer-article-meta">${cat} · ${rTime}</span>
                                                </div>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
        }

        // Group 3: Contact Form & Info Accordion
        const ct = contactTranslations[lang] || contactTranslations['en'];
        const contactHTML = `
            <div class="drawer-contact-panel">
                <div class="drawer-contact-info">
                    <div class="drawer-contact-section">
                        <div class="drawer-contact-label">${ct.directMessage}</div>
                        <div class="drawer-contact-title">${ct.reachOut}</div>
                        <p class="drawer-contact-desc">${ct.connectDesc}</p>
                    </div>
                    <div class="drawer-contact-section">
                        <div class="drawer-contact-label">${ct.locations}</div>
                        <p class="drawer-contact-desc">${ct.locationsDesc}</p>
                    </div>
                </div>
                <div class="drawer-contact-form-container">
                    <form id="drawer-contact-form" novalidate>
                        <div class="contact-form-grid">
                            <div class="form-group">
                                <input type="text" id="drawer-contact-name" name="name" required placeholder=" ">
                                <label for="drawer-contact-name">${ct.namePlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="drawer-contact-surname" name="surname" required placeholder=" ">
                                <label for="drawer-contact-surname">${ct.surnamePlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="text" id="drawer-contact-company" name="company" placeholder=" ">
                                <label for="drawer-contact-company">${ct.companyPlaceholder}</label>
                            </div>
                            <div class="form-group">
                                <input type="email" id="drawer-contact-email" name="email" required placeholder=" ">
                                <label for="drawer-contact-email">${ct.emailPlaceholder}</label>
                            </div>
                        </div>
                        <div class="form-group textarea-group">
                            <textarea id="drawer-contact-message" name="message" required placeholder=" "></textarea>
                            <label for="drawer-contact-message">${ct.messagePlaceholder}</label>
                        </div>
                        <button type="submit" id="drawer-contact-submit-btn" class="contact-btn">
                            <span class="btn-text">${ct.sendBtn}</span>
                            <span class="btn-icon">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" stroke-width="1.2"/>
                                </svg>
                            </span>
                        </button>
                    </form>
                    <div class="contact-success-panel" style="display: none; padding: 20px 0;">
                        <div class="success-icon-container">
                            <div class="success-glow"></div>
                            <svg class="success-checkmark" viewBox="0 0 52 52">
                                <circle class="success-checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                                <path class="success-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                            </svg>
                        </div>
                        <h3 class="success-title">${ct.successTitle}</h3>
                        <p class="success-desc">${ct.successDesc}</p>
                    </div>
                </div>
            </div>
        `;

        // Retrieve labels based on main nav content (to support localizations)
        const companyLabel = document.querySelector('.header .nav-item[data-menu="company"]').textContent || 'Company';
        const resourcesLabel = document.querySelector('.header .nav-item[data-menu="resources"]').textContent || 'Resources';
        const contactLabel = document.querySelector('.header .nav-item[data-menu="contact"]').textContent || 'Contact';

        drawerNav.innerHTML = `
            <div class="drawer-nav-item" data-menu="company">
                <button class="drawer-nav-trigger">
                    <span>${companyLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${companyHTML}
                </div>
            </div>
            <div class="drawer-nav-item" data-menu="resources">
                <button class="drawer-nav-trigger">
                    <span>${resourcesLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${resourcesHTML}
                </div>
            </div>
            <div class="drawer-nav-item" data-menu="contact">
                <button class="drawer-nav-trigger">
                    <span>${contactLabel}</span>
                    <svg class="drawer-arrow" width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 4L6 8L10 4" stroke="white" stroke-width="1.5"/></svg>
                </button>
                <div class="drawer-nav-panel">
                    ${contactHTML}
                </div>
            </div>
        `;

        // Bind root accordion toggles inside drawer
        drawerNav.querySelectorAll('.drawer-nav-item').forEach(item => {
            const trigger = item.querySelector('.drawer-nav-trigger');
            const panel = item.querySelector('.drawer-nav-panel');
            
            trigger.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close other root accordions
                drawerNav.querySelectorAll('.drawer-nav-item').forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.drawer-nav-panel').style.maxHeight = null;
                    }
                });

                if (isActive) {
                    item.classList.remove('active');
                    panel.style.maxHeight = null;
                } else {
                    item.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
        });

        // Bind sub-accordion toggles inside Company and Resources panels
        drawerNav.querySelectorAll('.drawer-sub-section').forEach(sub => {
            const trigger = sub.querySelector('.drawer-sub-trigger');
            const panel = sub.querySelector('.drawer-sub-panel');
            
            trigger.addEventListener('click', () => {
                const isActive = sub.classList.contains('active');
                const parentPanel = sub.closest('.drawer-nav-panel');

                // Close other sibling sub-sections
                const siblings = sub.parentElement.querySelectorAll('.drawer-sub-section');
                siblings.forEach(otherSub => {
                    if (otherSub !== sub) {
                        otherSub.classList.remove('active');
                        otherSub.querySelector('.drawer-sub-panel').style.maxHeight = null;
                    }
                });

                if (isActive) {
                    sub.classList.remove('active');
                    panel.style.maxHeight = null;
                    // Adjust parent panel height
                    if (parentPanel) {
                        parentPanel.style.maxHeight = parentPanel.scrollHeight + 'px';
                    }
                } else {
                    sub.classList.add('active');
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                    // Adjust parent panel height to fit the expanded sub-panel
                    if (parentPanel) {
                        parentPanel.style.maxHeight = (parentPanel.scrollHeight + panel.scrollHeight) + 'px';
                    }
                }
            });
        });

        // Bind article item clicks inside Resources sub-accordions
        drawerNav.querySelectorAll('.drawer-article-item').forEach(item => {
            item.addEventListener('click', () => {
                const slug = item.getAttribute('data-slug');
                if (slug) {
                    closeMobileDrawer();
                    openArticle(slug);
                }
            });
        });

        // Bind Contact Form input blur states
        const drawerForm = drawerNav.querySelector('#drawer-contact-form');
        if (drawerForm) {
            drawerForm.addEventListener('submit', handleContactSubmit);
            
            const inputs = drawerForm.querySelectorAll('input, textarea');
            inputs.forEach(input => {
                const checkValue = () => {
                    if (input.value.trim() !== '') {
                        input.classList.add('has-value');
                    } else {
                        input.classList.remove('has-value');
                    }
                };
                input.addEventListener('blur', () => {
                    checkValue();
                    if (input.type === 'email' && input.value.trim() !== '') {
                        validateEmailField(input);
                    }
                });
                input.addEventListener('input', () => {
                    input.classList.remove('invalid');
                });
            });
        }
    }

    // --------------------------------------------
    // WORKS SHOWCASE SLIDER & POWER BUTTON LOGIC
    // --------------------------------------------
    const powerBtn = document.getElementById('powerBtn');
    const worksPrevBtn = document.getElementById('worksPrevBtn');
    const worksNextBtn = document.getElementById('worksNextBtn');

    const worksData = [
        {
            image: "outdoor factory gunery.png",
            client: "Outdoor Factory",
            scopeEn: "Branding Update · Content Creation · Website Dev",
            scopeTr: "Marka Güncellemesi · İçerik Üretimi · Web Geliştirme",
            descEn: "Redesigning the digital presence for one of the world's largest amusement park builders with an overhauled identity and high-performance web experience.",
            descTr: "Görsel kimlik yenilemesi ve yüksek performanslı web deneyimi ile dünyanın en büyük tema parkı üreticilerinden birinin dijital varlığını yeniden tasarladık."
        },
        {
            image: "asfat web.png",
            client: "ASFAT",
            scopeEn: "Digital Transformation · Front-End Engineering",
            scopeTr: "Dijital Dönüşüm · Ön Uç Mühendisliği",
            descEn: "Developing a secure, modern digital platform for Turkey's state-owned defense contractor to communicate national engineering capabilities globally.",
            descTr: "Türkiye'nin devlet savunma sanayii yüklenicisi için küresel mühendislik kabiliyetlerini sergileyen güvenli ve modern bir dijital platform geliştirdik."
        }
    ];

    let currentWorkIndex = 0;

    function updatePowerTooltip() {
        if (!powerBtn) return;
        const isActive = powerBtn.classList.contains('active');
        if (currentLang === 'tr') {
            powerBtn.setAttribute('data-tooltip', isActive ? 'Kapat' : 'Portföyü Göster');
        } else {
            powerBtn.setAttribute('data-tooltip', isActive ? 'Close Showcase' : 'View Showcase');
        }
    }

    function changeWork(index) {
        if (!worksCard) return;
        const cardInner = worksCard.querySelector('.works-card-inner');
        if (!cardInner) return;
        
        cardInner.classList.add('changing');
        
        setTimeout(() => {
            currentWorkIndex = index;
            const work = worksData[currentWorkIndex];
            
            // Update image
            const img = worksCard.querySelector('.works-card-image');
            if (img) {
                img.src = work.image;
                img.alt = work.client;
            }
            
            // Update client name
            const clientName = worksCard.querySelector('.works-card-client-name');
            if (clientName) clientName.textContent = work.client;
            
            // Update scope and description texts with data attributes for translation
            const scopeTextEl = worksCard.querySelector('.works-card-scope-text');
            if (scopeTextEl) {
                scopeTextEl.setAttribute('data-en', work.scopeEn);
                scopeTextEl.setAttribute('data-tr', work.scopeTr);
                scopeTextEl.textContent = currentLang === 'tr' ? work.scopeTr : work.scopeEn;
            }
            
            const notesTextEl = worksCard.querySelector('.works-card-notes-text');
            if (notesTextEl) {
                notesTextEl.setAttribute('data-en', work.descEn);
                notesTextEl.setAttribute('data-tr', work.descTr);
                notesTextEl.textContent = currentLang === 'tr' ? work.descTr : work.descEn;
            }
            
            cardInner.classList.remove('changing');
        }, 300);
    }

    if (powerBtn && worksCard) {
        powerBtn.addEventListener('click', () => {
            const isActive = powerBtn.classList.toggle('active');
            worksCard.classList.toggle('active');
            document.body.classList.toggle('showcase-active', isActive);
            updatePowerTooltip();
        });
        // Initial setup
        updatePowerTooltip();
        syncWorksCardHeight();
    }

    if (worksPrevBtn) {
        worksPrevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            let newIndex = currentWorkIndex - 1;
            if (newIndex < 0) newIndex = worksData.length - 1;
            changeWork(newIndex);
        });
    }

    if (worksNextBtn) {
        worksNextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            let newIndex = currentWorkIndex + 1;
            if (newIndex >= worksData.length) newIndex = 0;
            changeWork(newIndex);
        });
    }

    // Check URL for language parameter on load
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    const supportedLangs = Array.from(langButtons).map(btn => btn.getAttribute('data-lang'));
    
    if (urlLang && supportedLangs.includes(urlLang.toLowerCase()) && urlLang.toLowerCase() !== 'en') {
        const targetLang = urlLang.toLowerCase();
        // Update switcher UI state
        langButtons.forEach(btn => {
            if (btn.getAttribute('data-lang') === targetLang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        switchLanguage(targetLang);
    }
});
