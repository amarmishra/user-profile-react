import { useAuth } from "../hooks";
import { useState } from "react";
import { useToasts } from "react-toast-notifications";

const Profile = () => {
  const auth = useAuth();
  const [editMode, setEditMode] = useState(false);
  const [name, setName] = useState(auth.user?.name ? auth.user.name : "");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [savingForm, setSavingForm] = useState(false);
  const { addToast } = useToasts();

  const clearForm = () => {
    setPassword("");
    setConfirmPassword("");
  };

  const updateProfile = async () => {
    setSavingForm(true);

    let error = false;
    if (!name || !password || !confirmPassword) {
      addToast("Please fill all the fields", {
        appearance: "error"
      });

      error = true;
    }

    if (password !== confirmPassword) {
      addToast("Password and confirm password does not match", {
        appearance: "error"
      });

      error = true;
    }

    if (error) {
      return setSavingForm(false);
    }

    const response = await auth.updateUser(
      auth.user._id,
      name,
      password,
      confirmPassword
    );

    console.log("settings response", response);
    if (response.success) {
      setEditMode(false);
      setSavingForm(false);
      clearForm();

      return addToast("User updated successfully", {
        appearance: "success"
      });
    } else {
      addToast(response.message, {
        appearance: "error"
      });
    }
    setSavingForm(false);
  };

  return (
    <div>
      <h1>My Profile</h1>
      <div>
        <div>Email</div>
        <div>{auth.user?.email}</div>
      </div>

      <div>
        <div>Name</div>
        {editMode ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        ) : (
          <div>{auth.user?.name}</div>
        )}
      </div>

      {editMode && (
        <>
          <div>
            <div>Password</div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div>
            <div>Confirm Password</div>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        </>
      )}
      <br />
      <div>
        {editMode ? (
          <>
            <button onClick={updateProfile} disabled={savingForm}>
              {savingForm ? "Saving profile..." : "Save profile"}
            </button>
            <button onClick={() => setEditMode(false)}>Go back</button>
          </>
        ) : (
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        )}
      </div>
    </div>
  );
};

export default Profile;
