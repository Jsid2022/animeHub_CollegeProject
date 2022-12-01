import { useState } from "react"

const QuoteDiv = () => {

    const [quote, setQuote] = useState(null);

    const getRandomQuote = async () => {
        const res = await fetch("https://animechan.vercel.app/api/random");
        const data = await res.json();
        setQuote(data);
    }

    return (
        <div className="mx-auto flex flex-col items-center space-y-4 my-8 md:w-[60%]">
            {quote && <p className="text-white text-lg italic font-bold text-center">{quote.quote}<br /> ~ <span className="font-normal">{quote.character}</span></p>}
            <button onClick={getRandomQuote} className="bg-[red] font-bold rounded-sm py-1.5 px-4 text-white hover:bg-[#b9e2f7] hover:text-black">
            <i className="fa fa-quote-left"></i> Get a Quote <i className="fa fa-quote-right"></i>
            </button>
        </div>
    )
}

export default QuoteDiv