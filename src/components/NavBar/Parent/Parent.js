const Parent = ({ children, esUnComponente }) => {
  return (
    <>
      {esUnComponente()}
      <div>{children} </div>
    </>
  );
};

export default Parent;
