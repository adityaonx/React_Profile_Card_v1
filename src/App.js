import myImage from "./images/Aditya_Sahu_Avatar.jpeg";
function App() {
  return (
    <div className="box">
      <Avatar></Avatar>
      <Intro></Intro>
      <SkillList></SkillList>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src={myImage} alt="Avatar" />;
}
function Intro() {
  return (
    <div>
      <h2 className="name">Aditya Sahu</h2>
      <p className="intro">
        Dedicated and adaptable Front-End Developer with a proven track record
        of delivering high-quality web experiences. Seeking a Front-End
        Developer role to harness my expertise in coding and commitment to
        enhancing user interfaces, collaborating with clients to create
        engaging, user-centric websites and applications.
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skilllist">
      <Skill skill="HTML" emoji="😊" color="red"></Skill>
      <Skill skill="CSS" emoji="❤️" color="blue"></Skill>
      <Skill skill="Javascript" emoji="💕" color="green"></Skill>
      <Skill skill="React" emoji="😘" color="skyblue"></Skill>
      <Skill skill="Redux" emoji="😒" color="crimson"></Skill>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{ color: "white", background: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
export default App;
