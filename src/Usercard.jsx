const userData = [
  {
    name: "jeeva",
    city: "Theni",
    des: "Front-End_Developer",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "NODE",
      "FRONT END DEVELOPER",
    ],
    online: true,
    profile: "images/20.jpg",
  },
  {
    name: "indhu",
    city: "Theni",
    des: "Front-End_Developer",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "NODE",
      "FRONT END DEVELOPER",
    ],
    online: false,
    profile: "images/20.jpg",
  },
  {
    name: "jeeva",
    city: "Theni",
    des: "Front-End_Developer",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "NODE",
      "FRONT END DEVELOPER",
    ],
    online: true,
    profile: "images/20.jpg",
  },
  {
    name: "jeeva",
    city: "Theni",
    des: "Front-End_Developer",
    skills: [
      "UI/UX",
      "HTML",
      "CSS",
      "JAVASCRIPT",
      "REACT",
      "NODE",
      "FRONT END DEVELOPER",
    ],
    online: false,
    profile: "images/20.jpg",
  },
];
function User(props) {
  return (
    <div className="card-container">
      <span className={props.online ? "pro Online" : "pro Offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>
      <img
        src={props.profile}
        alt="USER"
        className="img"
        style={{ width: "75%" }}
      />
      <h3>{props.name}</h3>
      <h3>{props.city}</h3>
      <p>{props.des}</p>
      <div className="button">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>
      <div className="Fdc">
        <h6>Skills</h6>
        <ul>
          {props.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export const Usercard = () => {
  return (
    <>
      {userData.map((user, index) => (
        <User
          Key={index}
          name={user.name}
          city={user.city}
          des={user.des}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
};

{
  /* <User
      Fullname="Indhu"
      city="Theni"
      deg="Front-End-Developer"
      skills={[
        "UI/UX",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "REACT",
        "NODE",
        "FRONT END DEVELOPER",
      ]}
      online={false}
      profile="images/20.jpg"
    /> */
}
