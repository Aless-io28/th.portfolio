import BtnSimple from "../buttons/BtnSimple";
import CardPost from "./CardPost";

const dataLibraries = [
  { name: "Jose", link: "https://www.npmjs.com/package/jose" },
  { name: "Multer", link: "https://www.npmjs.com/package/multer" },
  { name: "Zod", link: "https://zod.dev/" },
  { name: "Xlsx", link: "https://www.npmjs.com/package/xlsx" },
  { name: "Dotenv", link: "https://www.npmjs.com/package/dotenv" },
  { name: "Mysql2", link: "https://www.npmjs.com/package/mysql2" },
  { name: "Axios", link: "https://axios-http.com/" },
  {
    name: "Cookie-parser",
    link: "https://www.npmjs.com/package/cookie-parser",
  },
  { name: "Bcrypt", link: "https://github.com/iamjose" },
  { name: "Nodemailer", link: "https://nodemailer.com/" },
  { name: "Nanoid", link: "https://www.npmjs.com/package/nanoid" },
  { name: "Styled Components", link: "https://styled-components.com/" },
  { name: "Emotion", link: "https://emotion.sh/docs/introduction" },
  { name: "Aos", link: "https://www.npmjs.com/package/aos" },
];

const Libraries = () => {
  return (
    <CardPost
      img="/catPerfil.png"
      name="Alessio"
      date="Octubre 2024"
      text="Algunas librerías que he utilizado en mis proyectos 👾"
    >
      <div className="flex flex-col w-full gap-5">
        <div className="flex flex-wrap gap-4">
          {dataLibraries.map((library, index) => (
            <BtnSimple key={index} href={library.link}>
              {library.name}
            </BtnSimple>
          ))}
        </div>
      </div>
    </CardPost>
  );
};

export default Libraries;
