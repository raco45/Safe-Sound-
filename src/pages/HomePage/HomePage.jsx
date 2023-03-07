import { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import { Link } from "react-router-dom";
import {
  PAYMENT_PAGE,
  LOGIN_PAGE,
  REGISTER_PAGE,
  PROFILE_PAGE,
  CHAT_PAGE
} from "../../constants/url";

export function HomePage() {
  const [count, setCount] =
    useState(0); /*estado actual y una función que contiene el estado*/
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <div className={styles.homepage}>
      <h1>HOLA NYAMIGOS</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLICKEA
      </button>

      <h2>CONTADOR DE NYAAS {count}</h2>

      <button>
        <Link to={LOGIN_PAGE} className={styles.link}>
          Ir a LOGIN PAGE
        </Link>
      </button>
      <br />
      <button>
        <Link to={REGISTER_PAGE} className={styles.link}>
          Ir a REGISTER PAGE
        </Link>
      </button>
      <br />
      <button>
        <Link to={PROFILE_PAGE} className={styles.link}>
          Ir a PROFILE PAGE
        </Link>
      </button>
      <br/>
      <button>
        <Link to={PAYMENT_PAGE} className={styles.link}>
          Ir a PAYMENT PAGE
        </Link>
      </button>
      <br/>
      <button>
        <Link to={CHAT_PAGE} className={styles.link}>
          Ir a CHAT PAGE
        </Link>
      </button>

    </div>

    
  );
}
