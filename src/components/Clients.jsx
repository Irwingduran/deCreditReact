import styles from "../style";
import { cryptochicks, ETHvzla, mxweb3, send, shield, star, cryptoconexion, frutero, greenpill, manantialblanco, nacionabankless, womenbiz, } from "../assets";

const clients = [
  {
    id: "client-1",
    logo: cryptoconexion,
  },
  {
    id: "client-2",
    logo: cryptochicks,
  },
  {
    id: "client-3",
    logo: ETHvzla,
  },
  {
    id: "client-4",
    logo: mxweb3,
  },
  {
    id: "client-5",
    logo: frutero,
  },
  {
    id: "client-6",
    logo: greenpill,
  },
  {
    id: "client-7",
    logo: manantialblanco,
  },
  {
    id: "client-8",
    logo: nacionabankless,
  },
  {
    id: "client-9",
    logo: womenbiz,
  },



];

const Clients = () => (
  <section className={`${styles.flexCenter} my-4`}>
    <div className={`${styles.flexCenter} flex-wrap w-full `}>
      {clients.map((client) => (
        <div key={client.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
          <img src={client.logo} alt="client_logo" className="sm:w-[192px] w-[100px] object-contain" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
