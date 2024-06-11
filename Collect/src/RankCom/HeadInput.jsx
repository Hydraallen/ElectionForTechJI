export function HeadInput(props) {
  const { setNewText } = props;
  return (
    <input
      type="text"
      id="BoxTextCandidate"
      className="new-todo"
      placeholder="Input the Candidate Name"
      onBlur={() => {
        setNewText(document.getElementById('BoxTextCandidate').value);
        const TmpButton = document.getElementById('toggle-all');
        TmpButton.checked = false;
      }}
      onKeyDown={e => {
        if (e.keyCode === 13) {
          setNewText(document.getElementById('BoxTextCandidate').value);
          const TmpButton = document.getElementById('toggle-all');
          TmpButton.checked = false;
        }
      }}
    ></input>
  );
}
