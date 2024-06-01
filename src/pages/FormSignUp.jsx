import FormSignUpComponent from "../components/formSignUp/FormSignUpComponent";
import FooterComponent from "../components/common/footer/FooterComponent";
export default function FormSignUp() {
  return (
    <>
      <h3 className="d-flex justify-content-center">Créer votre compte</h3>
      <FormSignUpComponent></FormSignUpComponent>
      <FooterComponent></FooterComponent>
    </>
  );
}
