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
    setItemsCount,
    ListDisplayMode,
  } = props;

  useEffect(() => {
    if (newText !== '') {
      setListItems([newText, ...ListItems]);
      activateListItems([1, ...ListActivation]);
      hideListItems([1, ...ListDisplay]);
      setItemsCount(prev => prev + 1);
      setNewText('');
    }
  }, [newText]);

  useEffect(() => {
    document.getElementById('BoxTextCandidate').value = '';
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
