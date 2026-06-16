import Counter from "./Counter";
import ToggleText from "./ToggleText";
import ThemeToggle from "./ThemeToggle";
import ShowHidePassword from "./ShowHidePassword";
import CharacterCounter from "./CharacterCounter";
import UserForm from "./UserForm";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1> Task 1 : 5 useState examples</h1>

      <Counter />
      <hr />

      <ToggleText />
      <hr />

      <ThemeToggle />
      <hr />

      <ShowHidePassword />
      <hr />

      <CharacterCounter />
      <hr />

      <UserForm />
    </div>
  );
}

export default App;