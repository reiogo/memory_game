import { useState, useEffect } from 'react';
export default function Card( {cardNumber, handleClick}) {
    

    // const url = 'https://api.giphy.com/v1/stickers/trending?api_key=Fi1heNSa9vWOm57oaxXR7zZa7QMSnMZs'
    const url = '#';
    const [imgUrl, setImgUrl] = useState('#');
    
    useEffect(()=> {
            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(response) {
                    console.log(response)
                    const img = response.data[cardNumber].images.original.url;
                    setImgUrl(img);
                })
                .catch(function(err){
                    console.log(err)
                })
    }, [cardNumber])
    return (
        <div data-value={cardNumber} className = "card" onClick={handleClick}>
            <img src = {imgUrl} data-value={cardNumber}/>
        </div>
    )
}
