import { useHistory, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";

// Displays user info
export function ProfileInfo({ data }) {
  // Get id from route call
  const { id } = useParams();
  const history = useHistory();
  // Get user data using id
  const profile = data[id];

  return (
    <div className="profileCards">
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
        <Card sx={{ maxWidth: 1000 }}>
          <div className="list-profile">
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Name: {profile.name}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Email: {profile.email}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Phone No: {profile.phone}
              </Typography>
              <Typography gutterBottom variant="h5" component="div">
                Date Of Birth: {profile.DOB}
              </Typography>
              <Button
                variant="outlined"
                startIcon={<EditIcon />}
                onClick={() => history.push("/edit-profile/" + id)}
                sx={{ margin: "5px" }}
              >
                Edit
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  );
}
