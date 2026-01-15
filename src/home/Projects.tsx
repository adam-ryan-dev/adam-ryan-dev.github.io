import Container from "../Container";

export default function Projects() {
  return (
    <Container
      className="w-full flex flex-col items-center scroll-m-60"
      id="projects"
    >
      <div className="max-w-300 flex flex-col gap-20 mt-30">
        <h2 className="text-2xl font-semibold ">Moje projekty</h2>
        <div className="w-full flex flex-col lg:grid grid-cols-2 gap-10 items-stretch">
          <iframe
            src="https://mp-academy.pl"
            className="w-full h-full rounded-2xl shadow-md website-iframe hidden md:block"
          />
          <div className="flex flex-col justify-between gap-5">
            <h3 className="text-xl font-semibold mb-5">
              Strona WWW dla{" "}
              <span className="text-indigo-500">MP Academy Sopot</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Stworzyłem stronę internetową dla szkoły lekcji indywidualnych
              Mania Pisania Academy of English Sopot, która cały czas przyciąga
              nowych klientów i uczniów. Strona została stworzona w stylu
              opisanym przez klienta, z personalnym podejściem. Jest ona
              informatywna i zwięzła.
            </p>
            <button
              onClick={() => window.open("https://mp-academy.pl", "_blank")}
            >
              Odwiedź stronę
            </button>
          </div>
        </div>
        <div className="w-full flex flex-col lg:grid grid-cols-2 gap-10 items-stretch">
          <iframe
            src="https://sol-finder.github.io"
            className="w-full h-full rounded-2xl shadow-md website-iframe hidden md:block"
          />
          <div className="flex flex-col justify-between gap-5">
            <h3 className="text-xl font-semibold mb-5">
              Indeks Kryptowalut{" "}
              <span className="text-indigo-500">Solfinder</span>
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Indeks Kryptowalut{" "}
              <span className="text-indigo-500">Solfinder</span> to mój osobisty
              projekt, który umożliwia szybkie i wygodne śledzenie najlepszych
              kryptowalut na rynku{" "}
              <a
                className="text-indigo-500 hover:underline"
                href="https://solana.com"
                target="_blank"
              >
                Solana.
              </a>{" "}
              Strona pozwala użytkownikom przeglądać aktualne kursy, zmiany
              procentowe w czasie rzeczywistym oraz rankingi najpopularniejszych
              tokenów. Dzięki przejrzystemu interfejsowi każdy, zarówno
              początkujący, jak i doświadczony inwestor, może łatwo znaleźć
              interesujące projekty i podejmować świadome decyzje inwestycyjne.
            </p>

            <button
              onClick={() =>
                window.open("https://sol-finder.github.io", "_blank")
              }
            >
              Odwiedź stronę
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
