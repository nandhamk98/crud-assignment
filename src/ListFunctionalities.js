import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import PersonIcon from "@mui/icons-material/Person";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import Stack from "@mui/material/Stack";

// Listing Actions in home page
export function ListFunctionalities() {
  const history = useHistory();
  return (
    <div className="aligning-center">
      <Stack spacing={2} sx={{ width: "40%", textAlign: "center" }}>
        <Button
          variant="outlined"
          startIcon={<PersonAddAltIcon />}
          onClick={() => history.push("/create-users")}
        >
          Add Profile
        </Button>
        <Button
          variant="outlined"
          startIcon={<PersonIcon />}
          onClick={() => history.push("/users")}
        >
          List Users
        </Button>
      </Stack>
    </div>
  );
}
