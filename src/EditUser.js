import { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import TextField from "@mui/material/TextField";

// Editing exsiting user
export function EditUser({ data, setProfile }) {
  // Getting id from route call
  const { id } = useParams();

  // Getting the user using id
  const profile = data[id];

  // State
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [date, setDate] = useState(profile.DOB);
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
          defaultValue={name}
          className="input-field"
          sx={{ margin: 1 }}
        />
        <TextField
          required
          id="outlined-required"
          label="Email"
          type="email"
          defaultValue={email}
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
          defaultValue={phone}
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
          defaultValue={date}
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
            let obj = {
              id: id,
              name: name,
              email: email,
              phone: phone,
              DOB: date,
            };
            data[id] = obj;
            setProfile(data);
            history.goBack();
          }}
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
