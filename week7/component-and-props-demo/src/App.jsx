
import './App.css' // with css include the .css extenstion
import Nav from './Nav'; // with js or jsx you dont need the extentsion
import { Page } from './page';

function App() {
  const navigationArray = [
    {label: "About", link: "https://google.com"},
    {label: "Portfolio", link: "https://disney.com"},
    {label: "Contact", link: "https://mpr.org"},
  ]
  const currentPage = "About";

  return (

    <>
    <Page>
      <>
        <Nav navArray={navigationArray} currentPage={currentPage} />
        <div> Hi</div>
      </>
    </Page>

    </>
  )
}

export default App
