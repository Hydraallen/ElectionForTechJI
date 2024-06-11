export function ConfirmActive(props) {
  const { ListItems, ListActivation, setCandidateList } = props;
  return (
    <button
      className="clear-completed"
      type="button"
      onClick={() => {
        let TmpCandidate = [];
        for (let Index = 0; Index < ListItems.length; Index++) {
          if (ListActivation[Index] === 1) {
            TmpCandidate = [...TmpCandidate, ListItems[Index]];
          }
        }
        setCandidateList(TmpCandidate);
      }}
    >
      Confirm Active
    </button>
  );
}
