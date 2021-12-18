import React from "react";
import "./Form.css";
import { Typography, TextField, Button } from "@material-ui/core";
import storage from "./firebase.js";

const Form = () => {
  const [formData, setFormData] = React.useState({
    fName: "",
    lName: "",
    image: "",
  });
  const [uploaded, setUploaded] = React.useState("");

  const submitHandler = (e) => {
      const uploadTastk = storage.ref(`images/${formData.fname} ${formData.lname}`).put(formData.image);
      uploadTastk.on(
          "state_changed",
          snapshot => {},
          error => {
              console.log(error);
          },
      )

    let url = storage.ref().child("images").child(`${formData.fname} ${formData.lname}`).getDownloadURL().then((url)=>{return url});
    //   console.log("Uploaded successfully.");
    setUploaded("Uploaded Successfully");
  };

  const handleUpload = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        image: e.target.files[0],
      };
    });
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    // console.log(value);
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <div className="formDiv">
        <Typography style={{ margin: "5px" }} variant="h5">
          Form with Material UI
        </Typography>
        <form>
          <TextField
            style={{ margin: "5px" }}
            label="First Name"
            variant="outlined"
            onChange={changeHandler}
            name="fname"
          />
          <br></br>
          <TextField
            style={{ margin: "5px" }}
            label="Last Name"
            variant="outlined"
            onChange={changeHandler}
            name="lname"
          />
          <br></br>
          <br></br>

          <label style={{ margin: "5px" }}>{"Upload File : "}</label>
          <br></br>

          <input
            style={{ margin: "5px" }}
            disableunderline="true"
            color="primary"
            type="file"
            accept=".jpeg,.jpg,.png"
            onChange={handleUpload}
          />
          <br></br>
          <br></br>

          <Button
            onClick={submitHandler}
            style={{ margin: "5px" }}
            variant="contained"
            color="primary"
          >
            Upload
          </Button>
          <br></br>
          <br></br>
          {uploaded}
        </form>
      </div>
    </div>
  );
};

export default Form;
