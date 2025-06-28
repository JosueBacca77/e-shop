import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <footer className="dark-background foot">
      <div>
        <h3>Get in touch with us!</h3>
        <div className="center">
          <ul>
            <li>
              <FacebookIcon color="secondary" />
            </li>
            <li>
              <EmailIcon color="secondary" />
            </li>
            <li>
              <InstagramIcon color="secondary" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
