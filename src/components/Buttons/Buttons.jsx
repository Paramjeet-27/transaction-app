const Buttons = ({ btnName, onClickHandler, btnStyles }) => {
  return (
    <button onClick={onClickHandler} className={btnStyles}>
      {btnName}
    </button>
  );
};
export default Buttons;
