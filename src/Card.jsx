import { useState, useEffect } from 'react';

export default function Card( {cardNumber, handleClick}) {
    // There is a raw API key in this file, but its a free key.
    const url = 'https://api.giphy.com/v1/stickers/trending?api_key=Fi1heNSa9vWOm57oaxXR7zZa7QMSnMZs'
    
    const [imgUrl, setImgUrl] = useState('#');
    
    useEffect(()=> {
            fetch(url)
                .then(function(response) {
                    return response.json();
                })
                .then(function(response) {
                    if(imgUrl == '#'){
                        const img = 
                            response.data[cardNumber].images.original.url;
                        setImgUrl(img);
                    }
                })
                .catch(function(err){
                    console.log(err)
                })
    }, [cardNumber, imgUrl])
    return (
        <div data-value={cardNumber} className = "card" onClick={handleClick}>
            <img src={imgUrl} data-value={cardNumber} alt = {cardNumber} />
        </div>
    )
}
