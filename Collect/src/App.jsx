import './App.css';
// import { Button } from './component/Button';
// import { FakeDead } from './component/FakeDead';
// import { Father } from './component/Father';
// import { Grandpa } from './component/Comm';
// import { Effect } from './component/Effect';
import { useState } from 'react';
import { Box } from './TodoCom/Box';
import { Rank } from './RankCom/Rank';
import { Candidate } from './RankCom/Candidate';

function App() {
  const [ListItems, setListItems] = useState([]);
  const [ListActivation, activateListItems] = useState([]);
  const [ListDisplay, hideListItems] = useState([]);
  const [ItemsCount, setItemsCount] = useState(0);
  const [ListDisplayMode, setDisplayMode] = useState([0, 1]);
  const [CandidateList, setCandidateList] = useState([]);
  return (
    <div className="total">
      <div className="left">
        <Box
          ListItems={ListItems}
          setListItems={setListItems}
          ListActivation={ListActivation}
          activateListItems={activateListItems}
          ListDisplay={ListDisplay}
          hideListItems={hideListItems}
          ItemsCount={ItemsCount}
          setItemsCount={setItemsCount}
          ListDisplayMode={ListDisplayMode}
          setDisplayMode={setDisplayMode}
          CandidateList={CandidateList}
        />
      </div>
      <div className="right">
        {CandidateList.length === 0 ? (
          <Candidate setCandidateList={setCandidateList} />
        ) : (
          <Rank
            CandidateList={CandidateList}
            ListItems={ListItems}
            ListActivation={ListActivation}
            ItemsCount={ItemsCount}
          />
        )}
      </div>
    </div>
  );
}

export default App;

/* function App() {
  // return (
  //   <Button
  //     color="red"
  //     onClick={() => {
  //       alert('Hello React.');
  //     }}>
  //     Hello.
  //   </Button>
  // );
  return <Effect />;
} */
