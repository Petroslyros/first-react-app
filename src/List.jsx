import PropTypes from 'prop-types'

const List = (props) => {

    const itemList = props.items;
    const category = props.category

    

    //  fruits.sort((a , b) => a.name.localeCompare(b.name))  //ALPHABETICAL
     
    //  fruits.sort((a, b) => b.calories - a.calories) // numeric order

    //  const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);


    const listItems = itemList.map(item => <li key={item.id}>{item.name}: &nbsp; <b>{item.calories}</b></li>)
    
    return (<>
    <h3>{category}</h3>
    <ol>{listItems}</ol> 
    </>)
}

 List.propTypes = {
    category : PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number})),
 }

List.defaultProps  = {
    category: "Category",
    items: []
}

export default List