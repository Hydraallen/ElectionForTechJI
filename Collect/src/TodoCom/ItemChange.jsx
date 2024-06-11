export function ItemChange(props) {
  const { Index, ListItems, setListItems, setEditing } = props;
  return (
    <input
      className="edit"
      id={`edit${Index}`}
      onBlur={() => {
        const Tmp = ListItems;
        Tmp[Index] = String(document.getElementById(`edit${Index}`).value);
        if (Tmp[Index] === '') {
          return;
        }
        setListItems(Tmp);
        setEditing(false);
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          const Tmp = ListItems;
          Tmp[Index] = String(document.getElementById(`edit${Index}`).value);
          if (Tmp[Index] === '') {
            return;
          }
          setListItems(Tmp);
          setEditing(false);
          Update(Tmp);
        }
      }}
    ></input>
  );
}

function Update(Tmp) {
  fetch('https://sjtu.yydbxx.cn/vote/api/data', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => {
      return res.json();
    })
    .then(result => {
      // https://sjtu.yydbxx.cn/vote/api
      fetch('https://sjtu.yydbxx.cn/vote/api/data', {
        method: 'POST',
        body: JSON.stringify({
          ListItems: Tmp,
          ListActivation: result.ListActivation,
          ListDisplay: result.ListDisplay,
          ItemsCount: result.ItemsCount,
          CandidateList: result.CandidateList,
          code: localStorage.getItem('code'),
        }),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
    });
}
