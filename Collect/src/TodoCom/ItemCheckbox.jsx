export function ItemCheckbox(props) {
  const { Index, ListActivation, activateListItems, setItemsCount } = props;
  return (
    <input
      type="checkbox"
      id={`button${Index}`}
      className="toggle"
      checked={ListActivation[Index] === 0 ? 1 : 0}
      onChange={() => {
        const TmpThis = document.getElementById(`button${Index}`);
        if (ListActivation[Index] === 0) {
          TmpThis.checked = true;
          setItemsCount(prev => prev - 1);
        } else {
          TmpThis.checked = false;
          setItemsCount(prev => prev + 1);
        }
      }}
      onClick={() => {
        const Tmp = ListActivation;
        Tmp[Index] = Tmp[Index] === 0 ? 1 : 0;
        activateListItems(Tmp);
        // https://sjtu.yydbxx.cn/vote/api
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
                ListItems: result.ListItems,
                ListActivation: Tmp,
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
      }}
    ></input>
  );
}
