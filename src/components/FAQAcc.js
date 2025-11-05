const FAQAcc = (props) => {
  const { title, body, showData } = props;
  function handleClick() {
    props.setIndex();
  }

  return (
    <div className="Acc border border-black" onClick={handleClick}>
      <div className="header border border-yellow-500 border-double">
        <span>{title}</span>
      </div>
      <div className="body">
        <span>{showData && body}</span>
      </div>
    </div>
  );
};

export default FAQAcc;
