import { Container, WorkContainer, WorkLogo } from "./FeaturedWork-style";

export default function FeaturedWork() {
  const works = [
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
