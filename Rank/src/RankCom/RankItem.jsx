export function RankItem(props) {
  const { Candidate, maxVotes, Index, opt } = props;
  const Name = Candidate.name;
  if (opt === 1) {
    return (
      <div
        className="RankItem"
        id={`RankItem${Name}`}
        style={{
          margin: '10px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          position: 'absolute',
          top: `${Index * 80 + 210}px`,
          transition: '0.2s',
        }}
      >
        {Candidate.name}
      </div>
    );
  } else {
    const tmpBox = document.getElementById(`RankBox${Name}`);
    let tmpWidth = 0;
    if (tmpBox !== null) {
      tmpWidth = tmpBox.parentNode.offsetWidth;
    }
    return (
      <div
        style={{
          margin: '10px',
          height: '80px',
          display: 'flex',
          alignItems: 'center',
          transition: '0.2s',
        }}
      >
        <div
          className="RankBox"
          id={`RankBox${Name}`}
          style={{
            width: `${Math.round((Candidate.votes / maxVotes) * tmpWidth)}px`,
            background: 'rgb(255,209,0)',
            height: '30px',
            transition: '0.2s',
            position: 'absolute',
            top: `${Index * 80 + 245}px`,
            textAlign: 'left',
            fontSize: '0.5em',
            color: 'blue',
          }}
        >
          {Candidate.votes}
        </div>
      </div>
    );
  }
}
