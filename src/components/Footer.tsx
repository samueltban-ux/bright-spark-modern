const Footer = () => {
  return (
    <footer className="bg-navy-dark py-8 border-t border-primary-foreground/10">
      <div className="container mx-auto px-4 text-center">
        <img
          src="https://www.bsltrade.sk/wp-content/uploads/2024/09/log90.png"
          alt="BSL Trade s.r.o."
          className="h-10 mx-auto mb-4 brightness-200"
        />
        <p className="text-primary-foreground/50 text-sm">
          © {new Date().getFullYear()} BSL Trade s.r.o. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
