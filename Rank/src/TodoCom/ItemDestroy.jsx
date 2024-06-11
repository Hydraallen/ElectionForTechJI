export function ItemDestroy(props) {
  const {
    Index,
    ListActivation,
    activateListItems,
    ListDisplay,
    hideListItems,
    setItemsCount,
  } = props;
  return (
    <button
      className="destroy"
      type="button"
      onClick={() => {
        const Tmp = ListDisplay;
        Tmp[Index] = 0;
        hideListItems(Tmp);
        const TmpActive = ListActivation;
        TmpActive[Index] = 0;
        const TmpThis = document.getElementById(`ListItem${Index}`);
        TmpThis.style.display = 'none';
        let tmpCount = 0;
        TmpActive.map(Item => {
          tmpCount += Item;
          return Item;
        });
        setItemsCount(tmpCount);
        activateListItems(TmpActive);
        fetch('http://localhost:8000/data', {
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
            fetch('http://127.0.0.1:8000/data', {
              method: 'POST',
              body: JSON.stringify({
                ListItems: result.ListItems,
                ListActivation: TmpActive,
                ListDisplay: Tmp,
                ItemsCount: tmpCount,
                CandidateList: result.CandidateList,
              }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
          });
      }}
    ></button>
  );
}
