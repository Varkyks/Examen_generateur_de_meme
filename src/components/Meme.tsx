import React from 'react'
import MemeGenerator from "../components/MemeGenerator";
export default function Meme(){
    const [allMeme,setAllMeme]=React.useState([])
    React.useEffect(() => {
        async function fetchData(){
            const res=await fetch('https://api.imgflip.com/get_memes')
            const data=await res.json()
            setAllMeme(data.data.memes)
            console.log(data.data.memes)
            if(data.data.memes){
                randomMeme()
                }
        }
        fetchData()
    }, [])
    const [meme,setMeme]=React.useState({
        topText:"",
        bottomText:"",
        imgUrl:'https://i.imgflip.com/30b1gx.jpg',
        imgAlt:'Drake Hotline Bling'
    })
    console.log(allMeme)
    function randomMeme(){
        const randomNum=Math.floor(Math.random() * allMeme.length)
        const currMeme=allMeme[randomNum]
        const memeimg=currMeme["url"]
        const memealt=currMeme["name"]
        setMeme(prevState=>({
            ...prevState,
            imgUrl:memeimg,
            imgAlt:memealt,
        }))
    }

    // const [style,setStyle]=React.useState({})
    // React.useEffect(()=>{
    //     setStyle({
    //         backgroundImage:`url(${meme.imgUrl})`,
    //         backgroundRepeat:'no-repeat',
    //         backgroundSize:'contain',
    //         backgroundPosition:'center'
    //     })
    // },[meme.imgUrl])


    return (
        <main>
            <div className='flex flex-col sm:justify-around items-center mt-3 justify-center'>
                <button className='bg-[#8585b4]  text-[#C6CD49] md:w-[477px] w-96 md:h-[40px] h-16 rounded-md font-Karla border-2 border-[#C6CD49]' onClick={randomMeme}>Générer un meme random</button>
                {/* <div className='relative w-[477px] h-[350px] rounded-sm mt-5 drop-shadow-lg' style={style}>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 top-5">{meme.topText}</h2>
                    <h2 className="text-3xl font-['Impact'] drop-shadow-lg uppercase tracking-[1px] w-[80%] -translate-x-[50%] text-center absolute text-white left-1/2 bottom-7">{meme.bottomText}</h2>
                </div> */}
            </div>
            <MemeGenerator
          imageUrl={meme.imgUrl}
          box_count={2}
          imageName={meme.imgAlt}
        />
        </main>
    )
}