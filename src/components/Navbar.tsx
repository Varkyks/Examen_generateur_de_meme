export default function Navbar() {

  return (
    <nav className="bg-[#525285] drop-shadow-2xl flex justify-center md:justify-between gap-20 items-center md:gap-0 md:py-4 py-3 md:px-10 px-5">
      {/* Logo and Title */}
        <div className="flex items-center gap-5 mx-auto">
        <img src="https://www.bungie.net/common/destiny2_content/icons/0fb49a797caf4efb59512d86f8dcb43f.png"/>
          <h1 className="text-xl font-semibold text-center text-[#C6CD49] md:text-2xl">
          ඞ Générateur de meme édition Renégat ඞ
          </h1>
          <img src="https://www.bungie.net/common/destiny2_content/icons/0fb49a797caf4efb59512d86f8dcb43f.png"/>
        </div>
    </nav>
  );
}
