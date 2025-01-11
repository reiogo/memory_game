
export default function Scoreboard({ highscore, score }) {
    return (
        <div className="score">
                <h2> Highscore: {highscore} </h2>
                <h2> Score: {score} </h2>
        </div>
    )
}
