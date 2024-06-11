import { useEffect, useState } from 'react';
import { RankList } from './RankList';

async function getUpdate(setVoteCount) {
  let tmpListItems = [];
  let tmpListActivation = [];
  let tmpCandidateList = [];
  // https://sjtu.yydbxx.cn/vote/api
  const res = await fetch('https://sjtu.yydbxx.cn/vote/api/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      encoding: 'zh-cn',
      Accept: 'application/json',
    },
  });
  const data = await res.json();
  tmpListItems = data.ListItems;
  tmpListActivation = data.ListActivation;
  tmpCandidateList = data.CandidateList;
  const tmpCount = Update(
    tmpListItems,
    tmpListActivation,
    tmpCandidateList.map(Item => {
      return { votes: 0, name: Item };
    }),
  );

  setVoteCount(tmpCount);
  getUpdate(setVoteCount);
}

export function Rank(props) {
  const { CandidateList, ListItems, ListActivation, ItemsCount } = props;

  const InitVoteCount = CandidateList.map(Item => {
    return { votes: 0, name: Item };
  });
  const [VoteCount, setVoteCount] = useState(InitVoteCount);
  useEffect(() => {
    getUpdate(setVoteCount);
  }, []);
  useEffect(() => {
    const tmpCount = Update(ListItems, ListActivation, InitVoteCount);
    setVoteCount(tmpCount);
  }, [ItemsCount]);
  return (
    <div>
      <h2 className="Rank">
        {VoteCount.map((Item, Index) => {
          return ` `;
        })}
      </h2>
      <RankList VoteCount={VoteCount} />
    </div>
  );
}

function Update(ListItems, ListActivation, InitVoteCount) {
  const tmpCount = InitVoteCount;
  ListItems.map((Item, Index) => {
    if (ListActivation[Index] !== 0) {
      const tmp = Item.split(',');
      tmp.map(Item1 => {
        const tmp = Item1 - 1;
        if (tmp >= 0 && tmp < tmpCount.length) {
          tmpCount[tmp].votes += 1;
        }
        return Item1;
      });
    }
    return Item;
  });
  return tmpCount;
}
