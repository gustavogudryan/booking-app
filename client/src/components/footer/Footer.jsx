import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Países</li>
          <li className="fListItem">Estados</li>
          <li className="fListItem">Cidades</li>
          <li className="fListItem">Aeroportos</li>
          <li className="fListItem">Hotéis</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Casas </li>
          <li className="fListItem">Apartamentos </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Lugares únicos </li>
          <li className="fListItem">Avaliações</li>
          <li className="fListItem">Aproveite um fim de semana </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Voos </li>
          <li className="fListItem">Aluguel de carros</li>
          <li className="fListItem">
            Ache por perto | Restaurantes, Atrações{" "}
          </li>
          <li className="fListItem">Clima </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Atendimento ao Cliente</li>
          <li className="fListItem">Ajuda</li>
          <li className="fListItem">Carreiras</li>
          <li className="fListItem">Sustentabilidade</li>
          <li className="fListItem">Termos & Condições</li>
        </ul>{" "}
      </div>
      <div className="fText">Copyright © 2022 Gudryan.</div>
    </div>
  );
};

export default Footer;
