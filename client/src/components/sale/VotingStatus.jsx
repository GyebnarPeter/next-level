import "./votingStatus.css";

function VotingStatus(props) {
  return (
    <div className="votingStatus">
        <h3>A szavazás állása</h3>
        <div className="voteItem">
            {
                props.voteState.map( vote => {
                    return (
                        <div className="votBox" key={ vote.id }>
                            <p>{ vote.name }</p>
                            <p>{ vote.count }</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default VotingStatus