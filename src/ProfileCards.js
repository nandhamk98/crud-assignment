import { useHistory } from "react-router-dom";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";

// Card holding user name
export function ProfileCards({ name, id }) {
  const history = useHistory();
  return (
    <div className="profileCards">
      <Card sx={{ maxWidth: 345 }}>
        <div className="list-profile">
          <CardActionArea>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardContent>
            <Button
              variant="outlined"
              startIcon={<VisibilityIcon />}
              onClick={() => history.push("/profile/" + id)}
              sx={{ margin: "5px" }}
            >
              View
            </Button>
            <Button
              variant="outlined"
              startIcon={<EditIcon />}
              onClick={() => history.push("/edit-user/" + id)}
              sx={{ margin: "5px" }}
            >
              Edit
            </Button>
          </CardContent>
        </div>
      </Card>
    </div>
  );
}
