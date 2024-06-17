import { useState } from 'react';
import { List } from './List';
import { ListManage } from './ListMange';
import { HeadInput } from './HeadInput';

export function Candidate(props) {
  const { setCandidateList } = props;
  const [ListItems, setListItems] = useState([
    '耿子聪',
    '沈御骞',
    '宋沛霖',
    '孙康宇',
    '张宇昊',
  ]);
  const [ListActivation, activateListItems] = useState([
    1, 1, 1, 1, 1,
  ]);
  const [ListDisplay, hideListItems] = useState([1, 1, 1, 1, 1, ]);
  const [ItemsCount, setItemsCount] = useState(10);
  const [ListDisplayMode, setDisplayMode] = useState([0, 1]);
  const [newText, setNewText] = useState('');
  return (
    <div className="Candidate">
      <h1>CANDIDATES</h1>
      <header className="header">
        <HeadInput setNewText={setNewText} />
      </header>
      <List
        newText={newText}
        setNewText={setNewText}
        ListItems={ListItems}
        setListItems={setListItems}
        ListActivation={ListActivation}
        activateListItems={activateListItems}
        ListDisplay={ListDisplay}
        hideListItems={hideListItems}
        setItemsCount={setItemsCount}
        ListDisplayMode={ListDisplayMode}
      />
      <ListManage
        ListItems={ListItems}
        ItemsCount={ItemsCount}
        ListActivation={ListActivation}
        ListDisplay={ListDisplay}
        hideListItems={hideListItems}
        setDisplayMode={setDisplayMode}
        setCandidateList={setCandidateList}
      />
    </div>
  );
}
