import { useState } from 'react';
import { ItemChange } from '../TodoCom/ItemChange';
import { ItemCheckbox } from '../TodoCom/ItemCheckbox';

function classNames(props) {
  const { editing, completed } = props;
  if (editing) {
    return 'editing';
  } else if (completed) {
    return 'completed';
  } else {
    return 'view';
  }
}

export function ListItem(props) {
  const {
    Index,
    ListItems,
    setListItems,
    ListActivation,
    activateListItems,
    setItemsCount,
  } = props;
  const [IsEditing, setEditing] = useState(false);

  return (
    <li
      key={Index}
      className={classNames({
        editing: IsEditing,
        completed: ListActivation[Index] === 1 ? 0 : 1,
      })}
      id={`ListItem${Index}`}
    >
      <div className="view">
        <ItemCheckbox
          Index={Index}
          ListActivation={ListActivation}
          activateListItems={activateListItems}
          setItemsCount={setItemsCount}
        />
        <label
          onDoubleClick={() => {
            setEditing(true);
          }}
        >
          {ListItems[Index]}
        </label>
      </div>
      <ItemChange
        Index={Index}
        ListItems={ListItems}
        setListItems={setListItems}
        setEditing={setEditing}
      />
    </li>
  );
}
