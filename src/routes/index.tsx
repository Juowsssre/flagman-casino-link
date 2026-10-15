import { createFileRoute } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import live from "@/assets/live.jpg";

const LINK = "https://sneket.net/r/iPAt";
const TITLE = "Флагман Казино (Flagman Casino) — бонус 325% от 1000₽, обзор 2026";
const DESC =
  "Обзор Флагман Казино: 3500+ игр, слоты NetEnt и Pragmatic Play, live-дилеры, рулетка и блэкджек. Получи 325% бонус при пополнении от 1000₽.";

const faq = [
  ["Как начать играть в Flagman Casino?", "Нажмите кнопку «Играть в Flagman Casino», пройдите регистрацию, пополните счёт и выберите игру в лобби."],
  ["Какой бонус даёт Флагман Казино?", "Новые игроки получают 325% бонус при пополнении счёта от 1000₽. Подробные условия отыгрыша указаны на официальном сайте казино."],
  ["Когда основано Flagman Casino?", "Флагман Казино работает с 2025 года и за это время собрало более 3500 игр, включая эксклюзивные разработки."],
  ["Какие провайдеры представлены во Флагман Казино?", "В каталоге игры от NetEnt, Microgaming, Play'n GO, Pragmatic Play и других известных студий."],
  ["Какой RTP у слотов во Flagman?", "Некоторые слоты в каталоге имеют RTP до 97%, что подтверждено независимыми исследованиями."],
  ["Легально ли работает Флагман Казино?", "Платформа следует международным стандартам лицензирования, защищает личные данные игроков и поддерживает принципы ответственной игры."],
  ["Можно ли играть с телефона?", "Сайт Флагман адаптирован под смартфоны — все слоты и live-столы запускаются прямо в браузере."],
  ["Есть ли демо-режим?", "Большинство слотов можно запустить бесплатно в демо, чтобы изучить механику без риска."],
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { name: "keywords", content: "Флагман казино, Flagman casino, Флагман казино бонус 325%, Flagman слоты, Флагман казино официальный сайт, Флагман казино регистрация, Flagman live казино, Флагман казино отзывы" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "ru_RU" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESC,
          inLanguage: "ru",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faq.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
        }),
      },
    ],
  }),
  component: Index,
});

function PlayButton({ big }: { big?: boolean }) {
  return (
    <a
      href={LINK}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`inline-flex items-center justify-center rounded-sm bg-gold font-display font-bold uppercase tracking-wide text-primary-foreground shadow-gold transition-transform hover:-translate-y-0.5 ${big ? "px-8 py-5 text-base" : "px-6 py-3 text-sm"}`}
    >
      Играть в Flagman Casino
    </a>
  );
}

const chapters = [
  ["01", "Что такое Flagman", "about"],
  ["02", "Бонус 325%", "bonus"],
  ["03", "Почему Флагман", "why"],
  ["04", "Игры", "games"],
  ["05", "Live-казино", "live"],
  ["06", "Как начать", "start"],
  ["07", "Вопросы", "faq"],
];

const games = [
  ["Слоты", "Тысячи видеослотов от Pragmatic Play, Play'n GO, NetEnt, Push Gaming и других студий. Классические «фрукты», мегавейс-механики, бонус-покупки и слоты с прогрессивными джекпотами — от спокойной игры до высокой волатильности."],
  ["Рулетка", "Европейская, французская и американская рулетка, а также шоу-форматы вроде Lightning Roulette с множителями до x500. Подходит тем, кто любит простые правила и проверенные стратегии."],
  ["Блэкджек", "Карточная классика, где решения игрока реально влияют на результат. Столы с разными лимитами, варианты с побочными ставками и быстрые раунды."],
  ["Crash-игры", "Aviator, JetX и похожие форматы: множитель растёт, а вы решаете, когда забрать выигрыш. Раунды длятся секунды — азарт в чистом виде."],
  ["Покер и баккара", "Видеопокер, Casino Hold'em, баккара с живым дилером — для тех, кто ценит стратегию и элегантность."],
  ["Игровые шоу", "Crazy Time, Monopoly Live, Dream Catcher — колёса удачи с ведущими, бонусными раундами и огромными множителями."],
];

const bonuses = [
  ["Приветственный", "325%", "бонус при пополнении счёта от 1000₽"],
  ["Минимум", "1000₽", "сумма депозита для активации бонуса"],
];

function Index() {
  return (
    <div className="min-h-screen">
      {/* Ticker */}
      <div className="overflow-hidden border-b border-border bg-muted py-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <div className="whitespace-nowrap text-center">
          ♠ Слоты · ♥ Рулетка · ♦ Блэкджек · ♣ Live-дилеры · ✦ Crash-игры · ♠ Бонусы на депозит ♥
        </div>
      </div>

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img src={hero} alt="Рулетка и фишки казино Flagman" width={1600} height={912} className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-background via-background/85 to-background/30" />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_auto] md:py-36">
          <div>
            <p className="mb-6 font-display text-xs uppercase tracking-[0.4em] text-primary">Обзор · издание 2026</p>
            <h1 className="text-4xl font-black leading-[1.05] md:text-7xl">
              Flagman <span className="text-gold">Casino</span>
              <br />
              <span className="text-2xl font-medium text-muted-foreground md:text-4xl">флагман азарта онлайн</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg text-muted-foreground">
              Честный гид по казино Флагман: какие игры здесь есть, какие бонусы ждут при депозите и как начать
              играть за пару минут.
            </p>
            <p className="mt-6 inline-block border-l-4 border-secondary bg-card/80 px-5 py-3 font-display text-lg font-bold md:text-2xl">
              Получи <span className="text-gold">325% бонус</span> при пополнении от 1000₽
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <PlayButton big />
              <a href="#bonus" className="inline-flex items-center justify-center rounded-sm border border-primary px-8 py-5 font-display text-base font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
                Получить бонус
              </a>
            </div>
          </div>
          <div className="hidden self-end font-display text-[10rem] font-black leading-none text-primary/10 md:block">♠</div>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[200px_1fr]">
        {/* Sticky table of contents */}
        <nav aria-label="Содержание" className="hidden md:block">
          <ol className="sticky top-8 space-y-3 border-l border-border pl-5">
            {chapters.map(([n, t, id]) => (
              <li key={id}>
                <a href={`#${id}`} className="group block text-sm text-muted-foreground hover:text-primary">
                  <span className="font-display text-xs text-primary">{n}</span> {t}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <main className="space-y-28">
          <section id="about" className="scroll-mt-8">
            <Chapter n="01" title="Что такое Flagman Casino" />
            <div className="grid gap-8 text-muted-foreground md:grid-cols-2">
              <p className="text-lg first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:font-black first-letter:text-primary">
                Флагман Казино (Flagman Casino) по праву считается одним из лидеров онлайн‑гемблинга. С момента основания
                в 2025 году платформа постоянно развивается и предлагает более 3500 игр, сочетая передовые технологии,
                надёжность и разнообразие развлечений. Название говорит само за себя: проект позиционирует себя как флагман среди
                игровых площадок, где каждый найдёт формат по душе.
              </p>
              <p>
                В лобби собраны тысячи слотов от ведущих провайдеров, полноценное live-казино с реальными дилерами,
                столы рулетки и блэкджека, а также модные crash-игры. Интерфейс понятен с первого взгляда: удобные
                фильтры по провайдерам, жанрам и популярности, поиск по названию и раздел новинок. Сайт отлично
                работает на смартфонах, а пополнить счёт можно популярными способами оплаты.
              </p>
            </div>
            <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
              {[["3500+", "игр в каталоге"], ["2025", "год основания"], ["до 97%", "RTP слотов"], ["325%", "бонус на депозит"]].map(([v, l]) => (
                <div key={l} className="bg-card p-6">
                  <dt className="font-display text-3xl font-black text-gold">{v}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{l}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section id="bonus" className="scroll-mt-8">
            <Chapter n="02" title="Получи 325% бонус при пополнении от 1000₽" />
            <p className="mb-10 max-w-2xl text-muted-foreground">
              Флагман Казино встречает новых игроков одним из самых щедрых приветственных предложений на рынке:
              пополните счёт от 1000₽ и получите бонус 325% к сумме депозита. Например, при пополнении на 1000₽ на
              балансе окажется значительно больше денег для игры в слоты, рулетку и live-казино.
            </p>
            <div className="space-y-px overflow-hidden rounded-sm border border-border bg-border">
              {bonuses.map(([step, val, note]) => (
                <div key={step} className="grid items-center gap-4 bg-card p-6 md:grid-cols-[180px_1fr_auto]">
                  <span className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground">{step}</span>
                  <span className="text-foreground">{note}</span>
                  <span className="font-display text-4xl font-black text-gold">{val}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Условия отыгрыша (вейджер), минимальный депозит и сроки действия бонусов уточняйте на официальном сайте
              казино — они могут меняться.
            </p>
            <div className="mt-8"><PlayButton big /></div>
          </section>

          <section id="why" className="scroll-mt-8">
            <Chapter n="03" title="Почему стоит выбрать Флагман Казино" />
            <div className="space-y-12">
              <article className="grid gap-4 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-bold text-primary">Лицензирование и легальность</h3>
                <div className="space-y-4 text-muted-foreground"><p>Флагман Казино строго следует международным стандартам лицензирования, что обеспечивает работу в рамках закона и прозрачность. Платформа имеет необходимые лицензии, гарантирующие безопасность игры, понятные условия и честные выплаты.</p><p>Казино контролирует соблюдение правил по защите личных данных игроков и поддерживает принципы ответственной игры.</p></div>
              </article>
              <article className="grid gap-4 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-bold text-primary">Разнообразие автоматов</h3>
                <div className="space-y-4 text-muted-foreground"><p>Каждая игра в каталоге проходит строгий контроль качества. Волатильность слотов варьируется от 30% до 70%, а некоторые модели имеют RTP до 97%, что подтверждено независимыми исследованиями.</p><p>Удобные фильтры сортируют игры по жанру, разработчику и бонусным функциям: классические трёхбарабанные слоты соседствуют с видеослотами с каскадными механиками и многоуровневыми раундами.</p></div>
              </article>
              <article className="grid gap-4 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-bold text-primary">Популярные провайдеры</h3>
                <div className="space-y-4 text-muted-foreground"><p>Среди партнёров Flagman Casino — NetEnt, Microgaming, Play’n GO и Pragmatic Play. Эти студии известны инновационными решениями, потрясающей графикой и тщательно выверенным игровым процессом.</p></div>
              </article>
              <article className="grid gap-4 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-bold text-primary">Эксклюзивы и джекпоты</h3>
                <div className="space-y-4 text-muted-foreground"><p>Помимо хитов, Flagman открывает доступ к редким автоматам и эксклюзивным предложениям, которые регулярно обновляются.</p><p>Слоты с прогрессивными джекпотами дают шанс выиграть крупные суммы, которые растут с каждой ставкой игроков.</p></div>
              </article>
              <article className="grid gap-4 md:grid-cols-[260px_1fr]">
                <h3 className="text-lg font-bold text-primary">Настольные игры</h3>
                <div className="space-y-4 text-muted-foreground"><p>Рулетка, блэкджек, баккара и покер представлены в нескольких вариациях. Рулетка — в европейской, американской и французской версиях, а в блэкджеке доступны столы с разными лимитами ставок.</p></div>
              </article>
            </div>
            <div className="mt-10"><PlayButton /></div>
          </section>

          <section id="games" className="scroll-mt-8">
            <Chapter n="04" title="Игры в казино Flagman" />
            <p className="mb-10 max-w-2xl text-muted-foreground">
              Главная сила Флагмана — разнообразие. Вот основные категории, с которых стоит начать знакомство.
            </p>
            <div className="grid gap-x-12 gap-y-10 md:grid-cols-2">
              {games.map(([t, d], i) => (
                <article key={t} className={i % 2 ? "md:translate-y-12" : ""}>
                  <h3 className="flex items-baseline gap-3 text-xl font-bold">
                    <span className="text-sm text-primary">{String(i + 1).padStart(2, "0")}</span> {t}
                  </h3>
                  <p className="mt-3 border-t border-border pt-3 text-muted-foreground">{d}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="live" className="scroll-mt-8 pt-10">
            <Chapter n="05" title="Live-казино: атмосфера настоящего зала" />
            <figure className="relative">
              <img src={live} alt="Живой дилер за столом блэкджека в Flagman Casino" width={1200} height={800} loading="lazy" className="aspect-[16/9] w-full rounded-sm object-cover" />
              <figcaption className="absolute bottom-4 left-4 bg-background/80 px-3 py-1 text-xs uppercase tracking-widest text-primary">Live-блэкджек</figcaption>
            </figure>
            <p className="mt-8 max-w-3xl text-muted-foreground">
              Живые игры с дилерами — важная часть предложения Flagman Casino. Платформа использует высококачественное
              оборудование для трансляций, а видеокачество и интерактивность позволяют почувствовать атмосферу
              настоящего казино. Игры ведут реальные дилеры в HD. Вы общаетесь в чате, видите каждую
              карту и каждый оборот колеса. Доступны столы с низкими лимитами для новичков и VIP-столы для хайроллеров,
              а также игровые шоу с ведущими, которые превращают каждую ставку в маленькое событие.
            </p>
          </section>

          <section id="start" className="scroll-mt-8">
            <Chapter n="06" title="Как начать играть" />
            <ol className="grid gap-6 md:grid-cols-4">
              {["Перейдите на сайт Flagman по кнопке", "Зарегистрируйтесь по email или телефону", "Пополните счёт и активируйте бонус", "Выберите игру и наслаждайтесь"].map((s, i) => (
                <li key={s} className="border-t-2 border-primary pt-4">
                  <span className="font-display text-5xl font-black text-primary/30">{i + 1}</span>
                  <p className="mt-2">{s}</p>
                </li>
              ))}
            </ol>
          </section>

          <section id="faq" className="scroll-mt-8">
            <Chapter n="07" title="Частые вопросы" />
            <div className="divide-y divide-border border-y border-border">
              {faq.map(([q, a]) => (
                <details key={q} className="group py-5">
                  <summary className="cursor-pointer list-none font-display font-bold marker:hidden">
                    <span className="mr-3 text-primary group-open:hidden">+</span>
                    <span className="mr-3 hidden text-primary group-open:inline">−</span>
                    {q}
                  </summary>
                  <p className="mt-3 pl-7 text-muted-foreground">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <section className="rounded-sm border border-primary/40 bg-card p-10 text-center">
            <h2 className="text-3xl font-black">Ваш ход</h2>
            <p className="mx-auto mt-4 max-w-md text-muted-foreground">Бонус на первый депозит ждёт. Начните игру во Flagman прямо сейчас.</p>
            <div className="mt-8"><PlayButton big /></div>
          </section>
        </main>
      </div>

      <footer className="border-t border-border py-10 text-center text-xs text-muted-foreground">
        <p>18+ · Играйте ответственно. Азартные игры могут вызывать зависимость.</p>
        <p className="mt-2">Информационный обзор Flagman Casino. Сайт не является казино и не принимает ставки.</p>
      </footer>
    </div>
  );
}

function Chapter({ n, title }: { n: string; title: string }) {
  return (
    <div className="mb-8 flex items-end gap-5">
      <span className="font-display text-6xl font-black leading-none text-primary/20 md:text-8xl">{n}</span>
      <h2 className="pb-2 text-2xl font-bold md:text-4xl">{title}</h2>
    </div>
  );
}
