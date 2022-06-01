import {
  Section,
  Title,
  TitleContainer,
  Button,
  Page,
  SubHeader,
} from "./App-style";

import Header from "./Header";
import FeaturedWork from "./FeaturedWork";
import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

import "./App.css";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme themeMode={themeMode}>
      <Page>
        <Header toggleThemeMode={toggleThemeMode} />
        <Section>
          <TitleContainer>
            <Title>
              Hi, I'm <span>Francesca Ho</span> and I'm a
              <span> Full-Stack Web Developer</span>
            </Title>
            <SubHeader>
              I'm currently looking for work and open for projects!
            </SubHeader>
          </TitleContainer>
        </Section>
        <Section>
          <SubHeader>Featured Works</SubHeader>
          <FeaturedWork />
        </Section>
      </Page>
    </Theme>
  );
}
