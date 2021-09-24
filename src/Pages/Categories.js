import Card from "./../Fragments/Card";
import MainContainer from "./../Fragments/MainContainer";



const Categories = (props) => {
  
  const handleClick = (e) => {
    e.preventDefault();
    console.log("I was clicked");

    }
    
  return (
    <div>
      <MainContainer>
        <Card>
          <button onClick={handleClick}>Action</button>
          <button onClick={handleClick}>Space</button>
          <button onClick={handleClick}>Ninja</button>
          <button onClick={handleClick}>Adventure</button>
          <button onClick={handleClick}>Drama</button>
        </Card>
      </MainContainer>
      ;
    </div>
  );
};

export default Categories;
