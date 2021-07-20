function Props(props) {
  return (
    <div>
      <h1>Đây là props</h1>
      <h2>{props.children}</h2>
      <p>Tên: {props.name}</p>
      <p>Tuổi: {props.age}</p>
    </div>
  );
}

export default Props;
