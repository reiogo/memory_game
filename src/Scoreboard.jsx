
export default function Scoreboard({ highscore, score }) {
    return (
        <div className="score">
            <div>
                <span> Highscore: {highscore} </span>
            </div>
            <div>
                <span> Score: {score} </span>
            </div>
        </div>
    )
}
