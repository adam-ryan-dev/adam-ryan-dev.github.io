import Container from "../Container";

export default function Offer() {
  return (
    <Container
      className="w-full flex flex-col items-center scroll-m-60"
      id="offer"
    >
      <div className="max-w-300 flex flex-col gap-20">
        <h2 className="text-2xl font-semibold ">Moja oferta</h2>
        <div className="w-full flex flex-col lg:grid grid-cols-2 gap-10 items-stretch">
          <img
            src="/website.svg"
            alt="Strona WWW"
            className="shadow-md rounded-2xl"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-5">
              Spersonalizowana{" "}
              <span className="text-indigo-500">strona internetowa</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Stworzę dla Ciebie w pełni spersonalizowaną stronę internetową,
              która będzie idealnie dopasowana do Twoich potrzeb i wizji. Każdy
              Twój feedback traktuję jak klucz do perfekcji - nanoszę poprawki
              aż do pełnej satysfakcji. Strona będzie nowoczesna, responsywna i
              wzbogacona o płynne animacje, przyciągające uwagę użytkowników.
              Dzięki temu Twój biznes lub projekt zyska profesjonalny wygląd, a
              odwiedzający poczują się zachęceni do interakcji.
            </p>
            <button
              onClick={() => (document.location.href = "#contact")}
              className="mt-5 self-start w-full lg:w-auto"
            >
              Skontaktuj się
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col lg:grid grid-cols-2 gap-10 items-stretch">
          <img
            src="/server.svg"
            alt="Hosting Stron"
            className="shadow-md rounded-2xl"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-5">
              Profesjonalny <span className="text-indigo-500">hosting</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Oferuję niezawodny i szybki hosting, który zapewnia Twojej stronie
              maksymalną dostępność i bezpieczeństwo. Dzięki naszym serwerom
              Twoje strony ładują się błyskawicznie, a dane są chronione przed
              nieautoryzowanym dostępem. Dodatkowo, regularne kopie zapasowe i
              wsparcie techniczne 24/7 gwarantują, że Twój projekt będzie
              działał bez przerw, a Ty możesz skupić się na rozwijaniu swojego
              biznesu.
            </p>
            <button
              onClick={() => (document.location.href = "#contact")}
              className="mt-5 self-start w-full lg:w-auto"
            >
              Skontaktuj się
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col lg:grid grid-cols-2 gap-10 items-stretch">
          <img
            src="/app.svg"
            alt="Aplikacje i Programy"
            className="shadow-md rounded-2xl"
          />
          <div className="flex flex-col justify-between">
            <h3 className="text-xl font-semibold mb-5">
              Tworzenie{" "}
              <span className="text-indigo-500">aplikacji i programów</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Projektuję i tworzę aplikacje oraz programy dopasowane do Twoich
              potrzeb - od prostych narzędzi po zaawansowane systemy. Każdy
              projekt jest intuicyjny, wydajny i skalowalny, a jego funkcje
              dokładnie odpowiadają Twoim wymaganiom. Dzięki współpracy ze mną
              otrzymasz produkt, który działa sprawnie, wygląda nowocześnie i
              dostarcza realną wartość użytkownikom.
            </p>
            <button
              onClick={() => (document.location.href = "#contact")}
              className="mt-5 self-start w-full lg:w-auto"
            >
              Skontaktuj się
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
