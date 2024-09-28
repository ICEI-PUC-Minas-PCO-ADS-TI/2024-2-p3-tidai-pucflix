import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import GeneroEscolhido from "../components/GeneroEscolhido";
function Pucflix(){
    return (
      <div>
       <Header></Header>
       <GeneroEscolhido></GeneroEscolhido>
       <Main></Main>
       <Footer></Footer>
      </div>
    );  
}

export default Pucflix;