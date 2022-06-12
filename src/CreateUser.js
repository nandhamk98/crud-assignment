import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";

// Creating user
export function CreateUser({ data, setProfile }) {
  // States
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  return (
    <div className="create-user">
      <div className="header">
        <Button
          variant="outlined"
          startIcon={<ArrowBackIcon />}
          onClick={() => history.goBack()}
          sx={{ marginLeft: "20px" }}
        >
          Back
        </Button>
      </div>
      <div className="list-inputs">
        <TextField
          required
          id="outlined-required"
          label="Name"
          onChange={(event) => {
            setName(event.target.value);
          }}
          className="input-field"
          sx={{ margin: 1 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          className="input-field"
          sx={{ margin: 1 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Phone No"
          type="tel"
          onChange={(event) => {
            setPhone(event.target.value);
          }}
          className="input-field"
          sx={{ margin: 1 }}
        />
        <TextField
          required
          id="outlined-required"
          type="date"
          onChange={(event) => {
            setDate(event.target.value);
          }}
          helperText="Choose Date of Birth"
          className="input-field"
          sx={{ margin: 1 }}
        />
        <Button
          variant="outlined"
          startIcon={<PersonAddAltIcon />}
          onClick={() => {
            let id = data.length;
            let obj = {
              id: id,
              name: name,
              email: email,
              phone: phone,
              DOB: date,
            };
            setProfile([...data, obj]);
            history.push("/users");
          }}
        >
          Create User
        </Button>
      </div>
    </div>
  );
}
