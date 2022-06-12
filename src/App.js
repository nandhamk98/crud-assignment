import "./App.css";
import { useState } from "react";
import { Switch, Route } from "react-router-dom";
import { ListFunctionalities } from "./ListFunctionalities";
import { ListProfiles } from "./ListProfiles";
import { CreateUser } from "./CreateUser";
import { EditUser } from "./EditUser";
import { ProfileInfo } from "./ProfileInfo";

function App() {
  // Initial Data
  const data = [
    {
      id: 0,
      name: "Nandhakumar M K",
      email: "nandhakumar@gmail.com",
      phone: 9876543210,
      DOB: "2008-08-15",
    },
    {
      id: 1,
      name: "Gautham K",
      email: "gauthamaan13@gmail.com",
      phone: 9876543210,
      DOB: "2015-02-10",
    },
    {
      id: 2,
      name: "Rakesh R",
      email: "gautham@gmail.com",
      phone: 9876543210,
      DOB: "1999-10-22",
    },
  ];
  // logo name
  const profile = "Profiles :)";
  // states
  const [profiles, setProfile] = useState(data);

  return (
    <div className="App">
      <div className="left">
        <h2>{profile}</h2>
      </div>

      <div className="right">
        <Switch>
          <Route path="/create-users">
            <CreateUser data={profiles} setProfile={setProfile} />
          </Route>
          <Route path="/users">
            <ListProfiles data={profiles} />
          </Route>
          <Route path="/edit-user/:id">
            <EditUser data={profiles} setProfile={setProfile} />
          </Route>
          <Route path="/profile/:id">
            <ProfileInfo data={profiles} />
          </Route>
          <Route path="/edit-profile/:id">
            <EditUser data={profiles} setProfile={setProfile} />
          </Route>
          <Route path="/">
            <ListFunctionalities />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
