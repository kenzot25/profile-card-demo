import CallIcon from "./call.svg";
import ChatIcon from "./chat.svg";
import Contact from "./contact.svg";
import Insta from "./instagram.svg";
import LocationIcon from "./location.svg";
import FacebookIcon from "./facebook.svg";
import ZaloIcon from "./zalo.svg";
import AVATAR from "./avatar.jpg";
import "./styles.css";

const SocialButton = ({
  button,
  name,
  link
}: {
  button: any;
  name: any;
  link: any;
}) => {
  return (
    <a className="social_box" href={link}>
      <img src={button} alt="" />
      <p>{name}</p>
    </a>
  );
};

export default function App() {
  return (
    <div className="main">
      <div className="card">
        <div className="header">
          <div className="cover"></div>
          <div
            className="avatar_box"
            style={{
              backgroundImage: `url(${AVATAR})`
            }}
          ></div>
        </div>
        <h1>Lê Bá Toản</h1>
        <div className="postition">
          <img src={LocationIcon} alt="" />
          <p>Hà Nội</p>
        </div>
        <div className="actions">
          <a href="sms:+84383017053">
            <button className="chat">
              <img src={ChatIcon} alt="" />
              <p>Chat</p>
            </button>
          </a>
          <a href="tel:+84383017053">
            <button className="call">
              <img src={CallIcon} alt="" />
              <p>Call</p>
            </button>
          </a>
          <a href=" wtai://wp/ap;0383017053;ToanDz">
            <button className="contact">
              <img src={Contact} alt="" />
            </button>
          </a>
        </div>
        <div className="socials">
          <SocialButton
            button={Insta}
            name="Instagram"
            link="https://www.instagram.com/tl_max_"
          />
          <SocialButton
            button={FacebookIcon}
            name="Facebook"
            link="https://www.facebook.com/lbt258/"
          />
          <SocialButton
            button={ZaloIcon}
            name="Zalo"
            link="https://zalo.me/0383017053"
          />
        </div>
      </div>
    </div>
  );
}
