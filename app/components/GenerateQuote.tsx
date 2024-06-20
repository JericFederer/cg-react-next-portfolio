import React, { useState, useEffect } from 'react'

interface Quote {
  text: string;
  author: string;
}

const GenerateQuote = () => {
  const [quote, setQuote] = useState([]);
  const quoteResult = <div>{ quote }</div>

  useEffect((): any => {
    const apiURL = 'https://type.fit/api/quotes';

    try {
      const allData = async () => {
        // ? Get quotes from API
        const response = await fetch(apiURL);
        const resData = await response.json();
        const quoteNumber = Math.floor(Math.random() * allData.length);
        const quoteObject = resData[quoteNumber];

        setQuote(quoteObject);
      };
    } catch (error) {
        const errorQuoteObject = {
          "text": "The chief task in life is simply this: to identify and separate matters so that I can say clearly to myself which are externals not under my control, and which have to do with the choices I actually control. Where then do I look for good and evil? Not to uncontrollable externals, but within myself to the choices that are my own . . .”
          "author": "—Epictetus, Discourses, 2.5.4–5"
        }
        const 
      setQuote(
        
      )
    }
  }, [])

  return (
    <div>
      { quote }
    </div>
  )
}

export default GenerateQuote
