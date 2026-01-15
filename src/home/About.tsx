import Container from "../Container";

export default function About() {
    return (
      <Container className="w-full flex justify-center scroll-m-60" id="about">
        <div className="max-w-150">
          <h2 className="text-2xl font-semibold ">Krótko o mnie</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Jestem uczniem Gdyńskiej Trójki, pasjonuję się komputerami,
            programowaniem i systemami (m.in. zdecentralizowanymi). Tworzę
            projekty, aplikacje i strony, które pomagają ludziom w codziennym
            użytkowaniu technologii.
          </p>
        </div>
      </Container>
    );
}