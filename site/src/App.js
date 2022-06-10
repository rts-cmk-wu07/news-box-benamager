import Wrapper from "./templates/Wrapper"
import Colors from "./contexts/colors"
import Navigation from "./components/Navigation"

function App() {
  return (
    <Wrapper>
      <Navigation
        title="Newsbox"
        height="65px"
        iconSize="20px"
        iconLeft="AiOutlineInbox"
        iconRight="IoMdSettings"
      />
    </Wrapper>
  )
}

export default App
