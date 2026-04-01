const categories = [
  {
    title: "Prístroje na ošetrenie tváre",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/PRISTROJE-NA-OSETRENIE-TVARE.jpg",
    href: "https://www.bsltrade.sk/profacial/",
    count: "15+ prístrojov",
  },
  {
    title: "Prístroje na ošetrenie tela",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/PRISTROJE-NA-OSETRENIE-TELA.jpg",
    href: "https://www.bsltrade.sk/em-master/",
    count: "12+ prístrojov",
  },
  {
    title: "IPL a Lasery",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/IPL-a-LASERY.jpg",
    href: "https://www.bsltrade.sk/apolo/",
    count: "5+ prístrojov",
  },
  {
    title: "Solária",
    image: "https://www.bsltrade.sk/wp-content/uploads/2024/09/solaria.jpg",
    href: "https://www.bsltrade.sk/tecnosole/",
    count: "10+ modelov",
  },
];

const CategoriesSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Naše <span className="text-gradient">kategórie</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ponúkame širokú škálu prístrojov pre estetickú medicínu, rehabilitáciu a wellness
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/95 via-navy/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-sky-light tracking-wider uppercase">
                  {cat.count}
                </span>
                <h3 className="text-xl font-bold text-primary-foreground mt-1 group-hover:text-sky-light transition-colors">
                  {cat.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
