import { WorkContainer, WorkLogo } from "./FeaturedWork-style";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function FeaturedWork(props: any) {
  const works = [
    {
      name: "Charcuterie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/Charcuterie.svg",
      bgcolor: "#ffffff",
    },
    {
      name: "Foodie",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/c0fea90a41bf7b8ad4c447bae694010b830499c7/assets/foodie.svg",
      bgcolor: "#DA4167",
    },
    {
      name: "GOTHREAU",
      link: "https://raw.githubusercontent.com/the-code-raccoon/website/ebca3ba315deb25ed16b66ab95e19bb07f4b6ac2/assets/GOTHREAU.svg",
      bgcolor: "#674EA7",
    },
    {
      name: "Interview Scheduler",
      link: "https://raw.githubusercontent.com/the-code-raccoon/scheduler/main/public/images/logo.png",
      bgcolor: "#222f3e",
    },
  ];

  return (
    <Row className="justify-content-center mt-5">
      {works.map((work) => {
        return (
          <Col md="auto" key={work.name}>
            <WorkContainer bgcolor={work.bgcolor}>
              <WorkLogo src={work.link} alt={work.name} />
            </WorkContainer>
          </Col>
        );
      })}
    </Row>
  );
}
