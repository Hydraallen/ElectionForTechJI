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
        fetch('https://localhost/vote/api/data', {
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
            // https://localhost/vote/api
            fetch('https://localhost/vote/api/data', {
              method: 'POST',
              body: JSON.stringify({
                ListItems: result.ListItems,
                ListActivation: TmpActive,
                ListDisplay: Tmp,
                ItemsCount: tmpCount,
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
    ></button>
  );
}
