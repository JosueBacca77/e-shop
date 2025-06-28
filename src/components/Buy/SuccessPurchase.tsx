import './SuccessPurchase.css'
import {useState} from "react";
import {blue} from "@mui/material/colors";
import {alpha} from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import FileCopyIcon from '@mui/icons-material/FileCopy';
import ActionAlert from "../General/Alerts";
import ReactClipboard from "react-clipboardjs-copy";

type SuccessPurchaseTypes = {
    purchaseId:string
}

const SuccessPurchase = ({purchaseId}: SuccessPurchaseTypes) => {

    const [showAlert, setShowAlert] = useState(false)

    // const handleCopy =()=> {
    //     setShowAlert(true)
    // }

    return (
      <section className="success-purchase">
        <img
          style={{ height: "130px", width: "130px", marginTop: "2%" }}
          src={"Icons/s.png"}
          alt="Success icon"
        />
        <p className="success-advice">
          Your purchase has been done successfully!!
        </p>
        <p className="label">
          Your purchase code is:
          <div style={{ display: "inline-block", justifyContent: "left" }}>
            <Toolbar>
              <div
                style={{
                  position: "relative",
                  borderRadius: "8px 0 0 8px",
                  width: "100%",
                  color: blue[700],
                  backgroundColor: alpha('#ffffff', 0.15),
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <InputBase
                  sx={{
                    color: "inherit",
                    borderRadius: "5px",
                    paddingLeft: "calc(1em + 8px)",
                    paddingRight: "calc(1em + 8px)",
                    transition: "width 0.2s",
                    width: "100%",
                    "@media (min-width: 600px)": {
                      width: "22ch",
                    },
                  }}
                  value={purchaseId}
                  inputProps={{ "aria-label": "purchase code", readOnly: true }}
                />
              </div>

              <div
                style={{
                  borderRadius: "0px 8px 8px 0",
                  width: "100%",
                  color: blue[700],
                  backgroundColor: alpha('#ffffff', 0.15),
                  height: "35px",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                {/* <CopyToClipboard text={purchaseId} onCopy={handleCopy}>
                  <FileCopyIcon />
                </CopyToClipboard> */}
                <ReactClipboard
                  text={purchaseId}
                  onSuccess={() => setShowAlert(true)}
                  onError={() => {}}
                >
                  <FileCopyIcon />
                </ReactClipboard>
              </div>
            </Toolbar>
          </div>
        </p>
        <ActionAlert
          text="Copied!"
          showAlert={showAlert}
          setShowAlert={setShowAlert}
        />
      </section>
    );
}

export default SuccessPurchase