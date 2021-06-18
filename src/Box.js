
function Box({backgroundColor, width, height, remove, id}){

const handleRemove = () => {
  remove(id);
}

return(
  <div style={{background: backgroundColor, width: width, height: height}}>
  <button onClick={handleRemove}>x</button>
  </div>
);
}

export default Box;