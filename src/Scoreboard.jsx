
export default function Scoreboard({ highscore, score }) {
    return (
        <div className="score">
            <div>
                <h3> Highscore: {highscore} </h3>
            </div>
            <div>
                <h3> Score: {score} </h3>
            </div>
        </div>
    )
}
