class App extends React.Components{
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  render (){
    return (
      <form>
        <input type="input"> 
        <input type="submit">
      </form>
    );
  }

}
 
export default App;