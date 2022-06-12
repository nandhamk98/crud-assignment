import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { ProfileCards } from "./ProfileCards";

// Listing profiles
export function ListProfiles({ data }) {
  const history = useHistory();
  return (
    <div>
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
      <div className="list-profile">
        {data.map((profile) => (
          <ProfileCards name={profile.name} key={profile.id} id={profile.id} />
        ))}
      </div>
    </div>
  );
}
