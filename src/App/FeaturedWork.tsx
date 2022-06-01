import { Container, WorkContainer, WorkLogo } from "./FeaturedWork-style";

export default function FeaturedWork() {
  const works = [
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/main/assets/charcuterie-logo.png",
      bgcolor: "#ffffff",
    },
    {
      name: "Foodie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/c0fea90a41bf7b8ad4c447bae694010b830499c7/assets/foodie.svg",
      bgcolor: "#DA4167",
    },
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/8cf3d05e2149bc666d15f36bb20c4b07a829c538/assets/Charcuterie.svg",
      bgcolor: "#ffffff",
    },
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/main/assets/charcuterie-logo.png",
      bgcolor: "#ffffff",
    },
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/main/assets/charcuterie-logo.png",
      bgcolor: "#ffffff",
    },
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/main/assets/charcuterie-logo.png",
      bgcolor: "#ffffff",
    },
  ];

  return (
    <Container>
      {works.map((work) => {
        return (
          <WorkContainer key={work.name} bgcolor={work.bgcolor}>
            <WorkLogo src={work.link} alt={work.name} />
          </WorkContainer>
        );
      })}
    </Container>
  );
}
