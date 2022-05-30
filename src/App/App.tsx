import { Section, Wrapper, Title, Button, Page } from "./App-style";

import Header from "./Header";
import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

import "./App.css";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme themeMode={themeMode}>
      <Page>
        <Header toggleThemeMode={toggleThemeMode} />
        <Wrapper>
          <Title>bruhfdsfsf</Title>
        </Wrapper>
        <Button>Normal</Button>
        <Section></Section>
      </Page>
    </Theme>
  );
}
