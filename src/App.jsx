import { useState, useRef, useMemo } from "react";
import html2canvas from "html2canvas";

function App() {
  const [showAddress, setShowAddress] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const cardRef = useRef(null);

  const handleReveal = () => {
    setShowAddress(true);
    setButtonDisabled(true);
  };

  const handleDownload = async () => {
    const canvas = await html2canvas(cardRef.current, {
      scale: 2,
      useCORS: true,
    });

    const link = document.createElement("a");
    link.download = "barsha-invitation.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  /* Stable Sakura */
  const petals = useMemo(() => {
    return Array.from({ length: 35 }).map(() => ({
      left: Math.random() * 100,
      duration: 6 + Math.random() * 5,
      size: 14 + Math.random() * 18,
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-purple-100 to-amber-100 overflow-hidden px-4 py-10">

      {/* Sakura */}
      {petals.map((petal, i) => (
        <span
          key={i}
          className="absolute text-pink-400 pointer-events-none animate-sakura"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.duration}s`,
            fontSize: `${petal.size}px`,
          }}
        >
          🌸
        </span>
      ))}

      {/* CARD */}
      <div
        ref={cardRef}
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-purple-200 px-6 sm:px-12 py-10 sm:py-14 text-center"
      >
        {showAddress && (
          <div className="mb-4 text-2xl sm:text-3xl">
            🎆 🎇 🎆
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl font-bold text-purple-800 mb-6 sm:mb-8">
          🌸 निमंत्रण 🌸
        </h1>

        <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
          आमच्या घरची परी आता झाली पाच महिन्यांची! ✨ <br />
          तिच्या हास्याने उजळल्या आमच्या आयुष्याच्या वाटा, <br />
          तिच्या छोट्या पावलांनी भरल्या आनंदाच्या खुणा.
        </p>

        <p className="mt-5 text-gray-700 leading-relaxed text-base sm:text-lg">
          या गोड क्षणांना साक्षी ठेवत <br />
          तिच्या बारशाच्या आनंद सोहळ्याचे आयोजन केले आहे.
        </p>

        <p className="mt-5 text-purple-700 font-semibold text-lg sm:text-xl">
          तिचे नाव अजूनही एक गोड रहस्य आहे… 💫
        </p>

        <p className="mt-4 text-gray-600 leading-relaxed text-sm sm:text-base">
          त्या मंगल क्षणी आपण उपस्थित राहून <br />
          चिमुकलीवर प्रेमाचा वर्षाव करावा <br />
          आणि आपल्या आशीर्वादांनी तिचे आयुष्य उजळून टाकावे.
        </p>

        <div className="mt-6 text-base sm:text-lg font-medium text-gray-800">
          📅 शनिवार, २८ मार्च २०२६ <br />
          सकाळी ११ वाजता
        </div>

        {/* Button */}
        <button
          onClick={handleReveal}
          disabled={buttonDisabled}
          className={`mt-8 px-8 py-3 rounded-full text-white text-base sm:text-lg font-semibold transition-all duration-500 shadow-lg
            ${
              buttonDisabled
                ? "bg-orange-400 cursor-not-allowed"
                : "bg-purple-600 hover:bg-purple-700 hover:scale-105"
            }`}
        >
          {buttonDisabled
            ? "अहो! तेच तर ठरवायचे आहे 💕"
            : "बाळाचे नाव काय 👶"}
        </button>

        {/* Address */}
        {showAddress && (
          <div className="mt-8 text-purple-800 text-base sm:text-lg font-medium leading-relaxed animate-fadeIn">
            📍 उत्सव मंगल कार्यालय <br />
            वनाज मेट्रो स्टेशन जवळ, कोथरूड, पुणे
          </div>
        )}

        {/* Names */}
        <div className="mt-10 text-gray-800 font-semibold leading-relaxed text-base sm:text-lg">
          आपले स्नेहांकित, <br />
          सौ. जागृती आणि गणेश कुलकर्णी <br />
          निमंत्रक <br />
          सौ. पौर्णिमा आणि राहुल जोशी
        </div>
      </div>

      {/* Google Map (Outside card so PNG clean rahil) */}
      {showAddress && (
        <div className="w-full max-w-2xl mt-8 px-2">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Utsav+Mangal+Karyalay+Kothrud+Pune&output=embed"
            className="w-full h-64 rounded-2xl shadow-lg border"
            loading="lazy"
          ></iframe>
        </div>
      )}

      {/* Download Button */}
      <button
        onClick={handleDownload}
        className="mt-10 px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-xl hover:scale-105 transition-all duration-300"
      >
        Download Invitation Card 📥
      </button>

      {/* Animations */}
      <style>
        {`
        @keyframes sakura {
          0% { transform: translateY(-10%); opacity: 1; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-sakura {
          animation: sakura linear infinite;
        }
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        `}
      </style>
    </div>
  );
}

export default App;