import NewUser from "./NewUser";
import UpdateUser from "./UpdateUser";

export default function Parent() {
  const addNewUser = (newUserData) => {
    const payload = {
      ...newUserData,
      id: Math.random().toString(),
    };
    console.log(payload);
  };

  const updateUser = (updateUserData) => {
    const payload = {
      ...updateUserData,
      id: Math.random().toString(),
    };
    console.log(payload);
  };

  return (
    <div className="border border-success">
      <p className="fs-3">Adding and editing</p>
      <NewUser onFormSubmission={addNewUser}></NewUser>
      <UpdateUser onFormSubmission={updateUser}></UpdateUser>
    </div>
  );
}
