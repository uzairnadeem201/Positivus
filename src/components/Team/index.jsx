import "./style.css";
import team1 from "../../assets/team/icon1.png";
import team2 from "../../assets/team/icon2.png";
import team3 from "../../assets/team/icon3.png";
import team4 from "../../assets/team/icon4.png";
import team5 from "../../assets/team/icon5.png";
import team6 from "../../assets/team/icon6.png";
import sociallogo from "../../assets/team/socialicon.png";
const Team = () => {
  const teams = [
    {
      id: "1",
      name: "John Smilga",
      designation: "CEO and Founder",
      img: team2,
      description:
        "10+ years of experience in digital marketing. Expertise in SEO,PPC, and content strategy",
    },
    {
      id: "2",
      name: "Julia Ain",
      designation: "UI UX Designer",
      img: team4,
      description:
        "7+ years of experience in digital design marketing. Expertise in SEO,PPC, and content strategy",
    },
    {
      id: "3",
      name: "John Doe",
      designation: "Software Engineer",
      img: team3,
      description:
        "3+ years of experience in digital design marketing. Expertise in SEO,PPC, and content strategy",
    },
     {
      id: "3",
      name: "Kashmala Harris",
      designation: "Software Engineer",
      img: team6,
      description:
        "3+ years of experience in digital design marketing. Expertise in SEO,PPC, and content strategy",
    },
     {
      id: "3",
      name: "Alsa Jeans",
      designation: "Software Engineer",
      img: team1,
      description:
        "3+ years of experience in digital design marketing. Expertise in SEO,PPC, and content strategy",
    }
    ,
     {
      id: "3",
      name: "Alsa Jeans",
      designation: "Software Engineer",
      img: team1,
      description:
        "3+ years of experience in digital design marketing. Expertise in SEO,PPC, and content strategy",
    }
  ];
  return (
    <div className="team">
      <div className="services__heading">
        <h2 className="services__h2">Team</h2>
        <p className="services__p">
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="team__container">
        {teams.map((team) => {
          return (
            <div className="team__item">
              <div className="team__title">
                <img className="item__title--img" src={team.img} alt="team"></img>
                <div className="item__title-content">
                  <h3 className="team__h3">{team.name}</h3>
                  <p className="team__p">{team.designation}</p>
                </div>

                <img
                  className="team__title--logo"
                  src={sociallogo}
                  alt="logo"
                ></img>
              </div>
              <div className="team__content">
                <p>
                  {team.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
