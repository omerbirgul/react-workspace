import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} width={250} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>

    <Card
      name="Beyonce"
      tel="+123 456 789"
      email="b@beyonce.com"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    />

<Card
      name="Tarkan"
      tel="+987 456 124"
      email="t@tarkan.com"
      img="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/22e12997-920e-472e-9515-fe54751be11c/dcmngxr-85631d0c-0369-45db-ac37-f256e15f03d5.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzIyZTEyOTk3LTkyMGUtNDcyZS05NTE1LWZlNTQ3NTFiZTExY1wvZGNtbmd4ci04NTYzMWQwYy0wMzY5LTQ1ZGItYWMzNy1mMjU2ZTE1ZjAzZDUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0._T93VZIbhkmp0MFkbPgatrCuzZ27F6wU3YMMe7yRDoM"
    />

<Card
      name="Eminem"
      tel="+123 456 789"
      email="e@eminem.com"
      img="https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"
    />
  </div>,
  document.getElementById("root")
);
