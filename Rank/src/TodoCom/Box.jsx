import { useState } from 'react';
import { HeadButton } from './HeadButton';
import { HeadInput } from './HeadInput';
import { List } from './List';
import { ListManage } from './ListMange';

export function Box(props) {
  const {
    ListItems,
    setListItems,
    ListActivation,
    activateListItems,
    ListDisplay,
    hideListItems,
    ItemsCount,
    setItemsCount,
    ListDisplayMode,
    setDisplayMode,
    CandidateList,
  } = props;
  const [newText, setNewText] = useState('');
  return (
    <div className="todoapp">
      <h1>V O T E S</h1>
      <header className="header">
        <HeadInput setNewText={setNewText} />
      </header>
      <HeadButton
        ListActivation={ListActivation}
        activateListItems={activateListItems}
        ListDisplay={ListDisplay}
        setItemsCount={setItemsCount}
      />
      <List
        newText={newText}
        setNewText={setNewText}
        ListItems={ListItems}
        setListItems={setListItems}
        ListActivation={ListActivation}
        activateListItems={activateListItems}
        ListDisplay={ListDisplay}
        hideListItems={hideListItems}
        ItemsCount={ItemsCount}
        setItemsCount={setItemsCount}
        ListDisplayMode={ListDisplayMode}
        CandidateList={CandidateList}
      />
      <ListManage
        ListItems={ListItems}
        ItemsCount={ItemsCount}
        ListActivation={ListActivation}
        ListDisplay={ListDisplay}
        hideListItems={hideListItems}
        setDisplayMode={setDisplayMode}
      />
    </div>
  );
}
