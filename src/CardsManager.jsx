
export default function CardsManager( { numberOfCards, handleClick }) {
    const returnValue = [];
    for (let i = 0; i < numberOfCards; i++) {
        returnValue.push(<Card key={i} cardNumber={i} handleClick = {handleClick} />)
    }

    //Shuffle the array

    return(
        <>
            {returnValue}
        </>
    )
}
