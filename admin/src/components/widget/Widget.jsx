import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import StoreMallDirectoryOutlinedIcon from "@mui/icons-material/StoreMallDirectoryOutlined";

const Widget = ({ type, data }) => {
  let dataCase;

  //temporary

  const diff = 20;

  switch (type) {
    case "user":
      dataCase = {
        title: "USUÁRIOS",
        link: "Olhar todos os usuários",
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      dataCase = {
        title: "HOTÉIS",
        isMoney: false,
        link: "Olhar todos os hotéis",
        icon: (
          <StoreMallDirectoryOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "earning":
      dataCase = {
        title: "QUARTOS",
        isMoney: false,
        link: "Olhar todos os quartos",
        icon: (
          <CreditCardOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(100, 302, 300, 0.2)",
              color: "blue",
            }}
          />
        ),
      };
      break;
    case "balance":
      dataCase = {
        title: "TOTAL",
        isMoney: true,
        link: "Olhar detalhes",
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{dataCase.title}</span>
        <span className="counter">
          {dataCase.isMoney && "R$"} {data}
        </span>
        <span className="link">{dataCase.link}</span>
      </div>
      <div className="right">
        {/* <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div> */}
        {dataCase.icon}
      </div>
    </div>
  );
};

export default Widget;
