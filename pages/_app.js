import ButtonWhatsapp from "../components/ButtonWhatsapp";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className='relative'>
      <Component {...pageProps} />
      <ButtonWhatsapp />
    </div>
  );
}

export default MyApp;
