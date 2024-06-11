import { RankItem } from './RankItem';

export function RankList(props) {
  const { VoteCount } = props;
  const tmpVote = [...VoteCount];
  tmpVote.sort((a, b) => b.votes - a.votes);
  return (
    <div className="Rank">
      <div
        style={{
          width: '150px',
        }}
      >
        {VoteCount.map((Item, Index) => {
          let id = 0;
          for (let i = 0; i < tmpVote.length; i++) {
            if (Item.name === tmpVote[i].name) {
              id = i;
            }
          }
          return (
            <RankItem
              Candidate={Item}
              maxVotes={tmpVote[0].votes}
              key={Index}
              Index={id}
              opt={1}
            />
          );
        })}
      </div>
      <div
        style={{
          width: '70%',
        }}
      >
        {VoteCount.map((Item, Index) => {
          let id = 0;
          for (let i = 0; i < tmpVote.length; i++) {
            if (Item.name === tmpVote[i].name) {
              id = i;
            }
          }
          return (
            <RankItem
              Candidate={Item}
              maxVotes={Math.max(tmpVote[0].votes, 1)}
              key={Index}
              Index={id}
              opt={2}
            />
          );
        })}
      </div>
    </div>
  );
}
