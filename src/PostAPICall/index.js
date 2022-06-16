import Form from "./Form";

export default function PostAPICall() {
  const addNewCar = (newCarData) => {
    const payload = {
      ...newCarData,
      id: Math.random().toString(),
      // 0.06609611977160412 - need to fix later
    };
    console.log(payload);
    // send payload to backend to store to database
  };

  return (
    <div className="border border-success">
      <p className="fs-2">PostAPICall</p>
      <Form onFormSubmission={addNewCar}></Form>
    </div>
  );
}

// how to make post requests - https://www.udemy.com/course/react-the-complete-guide-incl-redux/learn/lecture/25599824#questions:~:text=183.-,Sending,-a%20POST%20Request