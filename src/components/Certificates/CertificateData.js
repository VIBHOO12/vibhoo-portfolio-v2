import c1 from "../../assets/certificates/springboard.png";
import c2 from "../../assets/certificates/cetpa.png";
import c3 from "../../assets/certificates/VIBHOO VISHWAKARMA (1)-azure_page-0001.jpg";

const certificateData = [
  {
    id: 1,

    title: "Java Stack Technology Internship",
    issuer: "Infosys Springboard",

    date: "2024",

    description:
      "Completed a Java Stack Technology internship with hands-on exposure to Java development, Spring Boot, REST APIs, MySQL, and full-stack application development.",

    image: c1,

    credentialUrl: "",

    skills: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "MySQL",
      "Full Stack Development",
    ],
  },

  {
    id: 2,

    title: "Full Stack Java Development",
    issuer: "CETPA Infotech Pvt. Ltd.",

    date: "6 Months",

    description:
      "Completed a 6-month Full Stack Java Development program covering Core Java, Advanced Java, JDBC, Servlets, JSP, Spring Boot, Hibernate, MySQL, HTML, CSS, JavaScript, and React.",

    image: c2,

    credentialUrl: "",

    skills: [
      "Core Java",
      "Advanced Java",
      "Spring Boot",
      "Hibernate",
      "React",
      "JavaScript",
      "MySQL",
    ],

  },

  {
    id: 3,

    title: "Microsoft Azure Fundamentals",
    issuer: "Microsoft",

    date: "2026",

    description:
      "Completed Microsoft Azure fundamentals training covering core cloud concepts, Azure services, virtual machines, storage, networking, security, and cloud computing fundamentals.",

    image: c3,

    credentialUrl: "",

    skills: [
      "Microsoft Azure",
      "Cloud Computing",
      "Azure Services",
      "Virtual Machines",
      "Storage",
      "Networking",
      "Cloud Security",
    ],


  },
];

export default certificateData;