import { useState } from "react";
import { MdImage, MdInfo } from "react-icons/md";
import MemeGenerator from "../components/MemeGenerator";

export default function OwnMeme() {
  const [imageUrl, setImageUrl] = useState<string | null>("");
  const [imageName, setImageName] = useState("");
  const [imageLink, setImageLink] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = e.target.files;
    if (files) {
      setImageName(files[0].name);
      setImageUrl(URL.createObjectURL(files[0]));
    }
  };

  const handleImageLink = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImageLink(e.target.value);
  };

  const resetState = () => {
    setImageUrl(null);
    setImageLink("");
    setImageName("");
  };

  return (
    <>
    
    <a className="flex flex-col sm:justify-around items-center mt-3 justify-center" href="https://youtu.be/MXchbCoG2p4">
        <button className="bg-[#8585b4]  text-[#C6CD49] md:w-[477px] w-96 md:h-[40px] h-16 rounded-md font-Karla border-2 border-[#C6CD49]">Invoquer un Indien</button>
      </a>

      <a className="flex flex-col sm:justify-around items-center mt-3 justify-center" href="https://i.imgflip.com/7i2yvj.jpg">
      <button className="bg-[#8585b4]  text-[#C6CD49] md:w-[477px] w-96 md:h-[40px] h-16 rounded-md font-Karla border-2 border-[#C6CD49] mb-2">Meme pour examen</button>
    </a>
    </>
  );
}
