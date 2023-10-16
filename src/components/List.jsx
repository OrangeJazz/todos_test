import ListItem from "./ListItem";
const List = (props) => {
  return (
    <div>
      {props.items.map((el) => (
        <ListItem item={el} key={el.id} />
      ))}
    </div>
  );
};

export default List;
