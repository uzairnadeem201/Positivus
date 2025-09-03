import "./style.css";
import addbtn from "../../assets/workprocessicon/plusicon.png";
import minusbtn from "../../assets/workprocessicon/minusicon.png";
import { useState } from "react";

const WorkProcess = () => {
  const [openId, setOpenId] = useState(null);
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const items = [
    {
      id: "step-1",
      number: "01",
      title: "Consultation",
      content:
        "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
    },
    {
      id: "step-2",
      number: "02",
      title: "Strategy Planning",
      content:
        "Our team will develop a customized marketing strategy based on the insights gathered in the consultation phase. This includes selecting the best channels, messages, and tactics to achieve your goals.",
    },
    {
      id: "step-3",
      number: "03",
      title: "Implementation",
      content:
        "Our team will develop a customized marketing strategy based on the insights gathered in the consultation phase. This includes selecting the best channels, messages, and tactics to achieve your goals.",
    },
    {
      id: "step-4",
      number: "04",
      title: "Monitoring and Optimization",
      content:
        "Our team will develop a customized marketing strategy based on the insights gathered in the consultation phase. This includes selecting the best channels, messages, and tactics to achieve your goals.",
    },
    {
      id: "step-5",
      number: "05",
      title: "Reporting and Optimization",
      content:
        "Our team will develop a customized marketing strategy based on the insights gathered in the consultation phase. This includes selecting the best channels, messages, and tactics to achieve your goals.",
    },
    {
      id: "step-6",
      number: "06",
      title: "Continual Improvement",
      content:
        "Our team will develop a customized marketing strategy based on the insights gathered in the consultation phase. This includes selecting the best channels, messages, and tactics to achieve your goals.",
    },
  ];

  return (
    <div className="workprocess">
      <div className="casestudy__text" style={{ marginTop: "50px" }}>
        <h2 className="casestudy__h2">Our Work Process</h2>
        <p className="casestudy__p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="workprocess__items__container">
        {items.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className={`workprocess__items ${isOpen ? "workprocess__items--color" : ""}`}
            >
              <div className="workprocess__item" onClick={() => handleToggle(item.id)}>
                <div className="workprocess__title">
                  <div className="workprocess__text">
                    <h1 className="workprocess__h1">{item.number}</h1>
                    <p className="workprocess__p">{item.title}</p>
                  </div>
                  <img
                    className="addbtn"
                    src={isOpen ? minusbtn : addbtn}
                    alt={isOpen ? "collapse" : "expand"}
                  />
                </div>

                {isOpen && (
                  <div className="workprocess__ans">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
