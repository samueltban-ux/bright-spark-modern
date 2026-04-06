import { useState, useEffect, useCallback } from "react";
import { X, Calculator } from "lucide-react";

interface Device {
  name: string;
  image: string;
}

interface Category {
  title: string;
  devices: Device[];
}

const categories: Category[] = [
  {
    title: "Lasery a IPL",
    devices: [
      { name: "APOLO LASER", image: "https://i.postimg.cc/qvz2PKgH/apolo-Photoroom.png" },
      { name: "PICOLASER 500", image: "https://i.postimg.cc/0yb7TSrM/Pico-Laser.jpg" },
      { name: "IPL BETA", image: "https://i.postimg.cc/XYp9R5XX/ipl-beta-1.png" },
      { name: "EPIL EVO", image: "https://i.postimg.cc/qvz2PKgp/EVO-1.jpg" },
      { name: "MULTI WAVE", image: "https://i.postimg.cc/SxJcB9jk/epil-multi-wave.png" },
    ],
  },
  {
    title: "Telo a chudnutie",
    devices: [
      { name: "EM MASTER NEO", image: "https://i.postimg.cc/5268hzjQ/NEO.png" },
      { name: "EMS BODY", image: "https://i.postimg.cc/jSLypfCr/ems.png" },
      { name: "ROBOLEX", image: "https://i.postimg.cc/qMm8DwBT/01.jpg" },
      { name: "RIGENERA 3", image: "https://i.postimg.cc/K8Rt6T47/Rigenera-3-2.png" },
      { name: "ENDO U-SHAPE", image: "https://i.postimg.cc/RVPcpdCz/endo-u-shape.png" },
      { name: "V-SHAPE", image: "https://i.postimg.cc/pL4KRdnQ/V-SHAPE-PLATINUM.png" },
      { name: "VIEWFIX", image: "https://i.postimg.cc/Sx3ckKzc/VIEWFIX.png" },
      { name: "MED SHAPE", image: "https://i.postimg.cc/x1cLwmqk/MED-SHAPE.png" },
      { name: "KRYOLIPOLÝZA", image: "https://i.postimg.cc/Z5264qyr/X-COOL.jpg" },
    ],
  },
  {
    title: "Tvárové ošetrenia",
    devices: [
      { name: "PROFACIAL", image: "https://i.postimg.cc/T3pnzbhV/profacial.png" },
      { name: "HYDRO BEAUTY", image: "https://i.postimg.cc/bws17ndr/HYDRO.jpg" },
      { name: "HYDRO MASTER", image: "https://i.postimg.cc/vZc5JnDH/HYDRO-MASTER.jpg" },
      { name: "R.THERMA", image: "https://i.postimg.cc/jSLypfCz/R-Therma.jpg" },
      { name: "THERMA V", image: "https://i.postimg.cc/T3FnfPWW/thermavb-300x470.png" },
      { name: "CARE 7", image: "https://i.postimg.cc/CLvjr7Mh/0000005-e1577740712143.jpg" },
      { name: "HIFU V-MAX", image: "https://i.postimg.cc/Qx6pYmNj/Hifu-V-max.png" },
      { name: "HIFU CONTLEX", image: "https://i.postimg.cc/cLrfp36L/hifu-1.png" },
      { name: "HIFU 360 SMART", image: "https://i.postimg.cc/15Wp7BRR/360.jpg" },
      { name: "HIFU 10D", image: "https://i.postimg.cc/C5dDBvRQ/HIFU-10D.png" },
      { name: "HIFU CONTLEX SENSE", image: "https://i.postimg.cc/pr7jDDjQ/HIFU-CONTLEX-SENSE.png" },
      { name: "AQUA INJECTOR", image: "https://i.postimg.cc/Qx6pYmNs/01.png" },
      { name: "PLASMAGUN", image: "https://i.postimg.cc/Mpv1CBXV/plasmagun.png" },
      { name: "FLAMINGO", image: "https://i.postimg.cc/pLpKwjyF/plamingo.jpg" },
    ],
  },
];

const RoiCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);
  const [selectedDevice, setSelectedDevice] = useState("");
  const [cena, setCena] = useState("");
  const [pocet, setPocet] = useState("");
  const [tyzdne, setTyzdne] = useState("48");
  const [mobileTab, setMobileTab] = useState<"catalog" | "form">("catalog");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const obrat = (parseFloat(cena) || 0) * (parseFloat(pocet) || 0) * (parseFloat(tyzdne) || 0);

  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  };

  const handleClose = () => {
    setIsOpen(false);
    setShowLeadForm(false);
    document.body.style.overflow = "";
  };

  const handleSelectDevice = (name: string) => {
    setSelectedDevice(name);
    if (window.innerWidth <= 700) setMobileTab("form");
  };

  const handleLeadOpen = () => {
    if (!selectedDevice) {
      alert("Prosím, vyberte prístroj z katalógu.");
      return;
    }
    setShowLeadForm(true);
  };

  const handleLeadClose = () => setShowLeadForm(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData(e.currentTarget);
    formData.append("Pristroj", selectedDevice);
    formData.append("Cena_Osetrenia", cena + " €");
    formData.append("Klientov_Tyzdenne", pocet);
    formData.append("Rocny_Obrat", obrat + " €");

    try {
      const res = await fetch("https://formspree.io/f/mykdjyqg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
      else alert("Nastala chyba. Skúste znova.");
    } catch {
      alert("Nastala chyba. Skúste znova.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleEscape = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") { handleClose(); handleLeadClose(); }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [handleEscape]);

  return (
    <>
      {/* Floating button */}
      <button
        onClick={handleOpen}
        className="fixed bottom-[30px] right-[30px] z-[2147483640] bg-green-500 text-white border-none rounded-full px-6 py-4 text-[15px] font-extrabold cursor-pointer flex items-center gap-2.5 shadow-[0_8px_30px_rgba(34,197,94,0.55)] animate-[kalkPulse_2.5s_ease-in-out_infinite] hover:animate-none hover:-translate-y-[3px] hover:scale-[1.04] transition-transform"
        style={{ fontFamily: "-apple-system, sans-serif" }}
      >
        <Calculator className="w-5 h-5 flex-shrink-0" />
        <span className="hidden sm:inline whitespace-nowrap">Kalkulačka návratnosti</span>
      </button>

      {/* Main overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[2147483641] flex items-center justify-center p-4 bg-[rgba(15,23,42,0.88)] backdrop-blur-[5px]"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-[1100px] h-[88vh] max-h-[88vh] overflow-hidden shadow-[0_40px_80px_-10px_rgba(0,0,0,0.6)] flex flex-col relative"
            style={{ fontFamily: "-apple-system, sans-serif" }}
          >
            {/* Header */}
            <div className="bg-[#0f172a] text-white py-[22px] px-7 text-lg font-extrabold uppercase tracking-[1.5px] flex items-center justify-center shrink-0 relative">
              <span>Kalkulačka návratnosti</span>
              <button
                onClick={handleClose}
                className="absolute top-1/2 right-[18px] -translate-y-1/2 bg-white/15 border-none text-white text-[26px] cursor-pointer rounded-full w-[38px] h-[38px] flex items-center justify-center hover:bg-white/30"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile tabs */}
            <div className="flex md:hidden shrink-0 bg-[#f1f5f9] p-2 gap-1.5">
              <button
                className={`flex-1 py-2.5 border-none rounded-[10px] text-[13px] font-bold cursor-pointer ${
                  mobileTab === "catalog" ? "bg-white text-[#0f172a] shadow-sm" : "bg-transparent text-[#64748b]"
                }`}
                onClick={() => setMobileTab("catalog")}
              >
                📋 Vybrať prístroj
              </button>
              <button
                className={`flex-1 py-2.5 border-none rounded-[10px] text-[13px] font-bold cursor-pointer ${
                  mobileTab === "form" ? "bg-white text-[#0f172a] shadow-sm" : "bg-transparent text-[#64748b]"
                }`}
                onClick={() => setMobileTab("form")}
              >
                📊 Kalkulačka
              </button>
            </div>

            {/* Body */}
            <div className="flex flex-col md:flex-row flex-1 min-h-0 overflow-hidden">
              {/* Left: Form */}
              <div className={`md:w-[370px] md:shrink-0 p-6 flex flex-col bg-white overflow-y-auto ${
                mobileTab === "form" ? "flex" : "hidden md:flex"
              }`}>
                <div className="flex flex-col mb-3">
                  <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px]">Vybraný prístroj</label>
                  <input
                    type="text"
                    value={selectedDevice}
                    placeholder="← Vyberte z katalógu"
                    readOnly
                    className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px]">Cena ošetrenia (€)</label>
                  <input
                    type="number"
                    value={cena}
                    onChange={(e) => setCena(e.target.value)}
                    placeholder="Napr. 80"
                    className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px]">Počet klientov za týždeň</label>
                  <input
                    type="number"
                    value={pocet}
                    onChange={(e) => setPocet(e.target.value)}
                    placeholder="Napr. 10"
                    className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                  />
                </div>
                <div className="flex flex-col mb-3">
                  <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px]">Počet týždňov v roku</label>
                  <input
                    type="number"
                    value={tyzdne}
                    onChange={(e) => setTyzdne(e.target.value)}
                    className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                  />
                </div>

                <div className="bg-[#f0fdf4] p-4 rounded-[14px] text-center border-2 border-[#dcfce7] my-3.5">
                  <small className="text-[#166534] text-[11px] font-bold uppercase tracking-[0.5px] block">
                    Váš ročný potenciálny obrat
                  </small>
                  <div className="text-[34px] font-black text-[#14532d] mt-1">
                    {obrat.toLocaleString("sk-SK")} €
                  </div>
                </div>

                <button
                  onClick={handleLeadOpen}
                  className="w-full bg-green-500 text-white border-none py-[18px] rounded-[13px] text-sm font-black cursor-pointer uppercase tracking-[0.4px] shadow-[0_0_20px_rgba(34,197,94,0.5)] mt-auto animate-[kalkPulse_2s_infinite] hover:animate-none hover:bg-green-600"
                >
                  Získať zisk, návratnosť a cenu prístroja
                </button>
              </div>

              {/* Right: Catalog */}
              <div className={`flex-1 min-w-0 p-[18px_20px] border-l border-[#e2e8f0] md:border-l bg-[#f8fafc] overflow-y-auto ${
                mobileTab === "catalog" ? "flex flex-col" : "hidden md:flex md:flex-col"
              }`}>
                {categories.map((cat) => (
                  <div key={cat.title}>
                    <div className="text-[11px] font-extrabold uppercase text-[#64748b] tracking-[0.8px] mt-5 mb-2 border-b-2 border-[#e2e8f0] pb-[5px] first:mt-0">
                      {cat.title}
                    </div>
                    <div className="grid grid-cols-[repeat(auto-fill,minmax(110px,1fr))] gap-2">
                      {cat.devices.map((device) => (
                        <button
                          key={device.name}
                          onClick={() => handleSelectDevice(device.name)}
                          className={`border-2 rounded-[11px] p-[9px_7px] text-center cursor-pointer bg-white flex flex-col items-center hover:border-[#94a3b8] hover:-translate-y-[2px] transition-all ${
                            selectedDevice === device.name
                              ? "border-green-500 bg-[#f0fdf4] shadow-[0_0_0_3px_rgba(34,197,94,0.15)]"
                              : "border-[#e2e8f0]"
                          }`}
                        >
                          <img
                            src={device.image}
                            alt={device.name}
                            className="w-full h-20 object-contain mb-1.5 rounded-md"
                          />
                          <span className="text-[10px] font-extrabold text-[#0f172a] uppercase leading-tight block">
                            {device.name}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lead form overlay */}
      {showLeadForm && (
        <div
          className="fixed inset-0 z-[2147483647] flex items-center justify-center p-5 bg-[rgba(15,23,42,0.97)]"
          onClick={(e) => e.target === e.currentTarget && handleLeadClose()}
        >
          <div className="bg-white w-[90%] max-w-[450px] p-10 rounded-[26px] text-center relative">
            <button
              onClick={handleLeadClose}
              className="absolute top-3.5 right-4 text-3xl cursor-pointer text-[#94a3b8] bg-none border-none"
            >
              <X className="w-6 h-6" />
            </button>

            {submitted ? (
              <div className="text-center py-5">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-xl font-extrabold text-[#0f172a] mb-3">Hotovo!</h2>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-2">
                  Váš výpočet odošleme na váš email o 5–10 minút.
                </p>
                <p className="text-[15px] text-[#475569] leading-relaxed mb-5">
                  Nájdete tam všetky informácie o zisku, návratnosti a cene prístroja.
                </p>
                <button
                  onClick={() => { handleClose(); handleLeadClose(); setSubmitted(false); }}
                  className="bg-[#0f172a] text-white border-none py-3 px-6 rounded-[10px] text-sm font-bold cursor-pointer"
                >
                  ✕ Zatvoriť a vrátiť sa na stránku
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-lg font-extrabold text-[#0f172a] mb-5 leading-relaxed">
                  Zadajte meno a email pre{" "}
                  <span className="text-green-500">zistenie zisku, ceny a návratnosti</span>{" "}
                  prístroja
                </h2>
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-col mb-3">
                    <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px] text-left">
                      Meno a priezvisko
                    </label>
                    <input
                      type="text"
                      name="Meno"
                      required
                      className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                    />
                  </div>
                  <div className="flex flex-col mb-5">
                    <label className="text-[11px] font-bold mb-1 text-[#1e293b] uppercase tracking-[0.4px] text-left">
                      E-mailová adresa
                    </label>
                    <input
                      type="email"
                      name="Email"
                      required
                      className="p-3 border-2 border-[#e2e8f0] rounded-[11px] text-[15px] font-semibold bg-white text-[#0f172a] outline-none focus:border-green-500"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-green-500 text-white border-none py-[18px] rounded-[13px] text-[15px] font-black cursor-pointer uppercase shadow-[0_0_20px_rgba(34,197,94,0.5)] disabled:opacity-60"
                  >
                    {submitting ? "Odosielam..." : "Odomknúť výsledky"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        @keyframes kalkPulse {
          0%, 100% { box-shadow: 0 8px 30px rgba(34,197,94,0.55); }
          50% { box-shadow: 0 8px 50px rgba(34,197,94,0.85); }
        }
      `}</style>
    </>
  );
};

export default RoiCalculator;
