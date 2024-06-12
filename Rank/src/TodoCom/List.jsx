import { useEffect } from 'react';
import { ListItem } from './ListItem';

export function List(props) {
  const {
    newText,
    setNewText,
    ListItems,
    setListItems,
    ListActivation,
    activateListItems,
    ListDisplay,
    hideListItems,
    ItemsCount,
    setItemsCount,
    ListDisplayMode,
    CandidateList,
  } = props;

  useEffect(() => {
    if (newText !== '') {
      setListItems([newText, ...ListItems]);
      activateListItems([1, ...ListActivation]);
      hideListItems([1, ...ListDisplay]);
      setItemsCount(prev => prev + 1);
      // https://localhost/vote/api
      fetch('http://127.0.0.1:8000/data', {
        method: 'POST',
        body: JSON.stringify({
          ListItems: [newText, ...ListItems],
          ListActivation: [1, ...ListActivation],
          ListDisplay: [1, ...ListDisplay],
          ItemsCount: ItemsCount + 1,
          CandidateList,
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      setNewText('');
    }
  }, [newText]);

  useEffect(() => {
    document.getElementById('BoxText').value = '';
  }, [ListItems]);

  return (
    <section>
      <ul className="todo-list">
        {ListItems.map((Item, Index) => {
          if (
            (ListActivation[Index] === ListDisplayMode[0] ||
              ListActivation[Index] === ListDisplayMode[1]) &&
            ListDisplay[Index] === 1
          ) {
            return (
              <ListItem
                key={Index}
                Index={Index}
                ListItems={ListItems}
                setListItems={setListItems}
                ListActivation={ListActivation}
                activateListItems={activateListItems}
                ListDisplay={ListDisplay}
                hideListItems={hideListItems}
                setItemsCount={setItemsCount}
              />
            );
          } else {
            return null;
          }
        })}
      </ul>
    </section>
  );
}
