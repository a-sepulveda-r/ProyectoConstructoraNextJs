import Link from "next/link";
import iconoEmpresa from "../public/img/model-home.png";
import Image from "next/image";

const Header = () => {
  return (
    <header class="header">
      <Image
        height={99}
        width={68}
        src={iconoEmpresa}
        alt="icono empresa"
        className="img-header"
      />

      <nav class="nav">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/contacto">Contacto</Link>
          </li>
          <li>
            <Link href="/registro">Registro</Link>
          </li>
          <li>
            <Link href="/login">Iniciar sesión</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
