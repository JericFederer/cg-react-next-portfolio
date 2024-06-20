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
       console.log(error)
    }
  }, [])

  return (
    <div>
      { quote }
    </div>
  )
}

export default GenerateQuote
