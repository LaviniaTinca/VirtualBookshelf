// import AddForm from "../addForm";
// import Page from "../page/page";
import FormPage from "../page/FormPage";
import Page from "../page/HomePage";
import "./main.scss";

function Main() {
  return (
    <div id="main">
      {/* <Page pageTitle="Dahsboard" /> */}
      {/* <AddForm/> */}
      <Page  pageTitle="Dahsboard"/>
      <FormPage/>
    </div>
  );
}

export default Main;
