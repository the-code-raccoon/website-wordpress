import { Section, Wrapper, Title, Button, Toggle } from "./App-style";

import Theme from "./Theme";
import useDarkMode from "./useDarkMode";

export default function App() {
  const [themeMode, toggleThemeMode] = useDarkMode();

  return (
    <Theme themeMode={themeMode}>
      <Wrapper>
        <Title>bruhfdsfsf</Title>
      </Wrapper>
      <Button>Normal</Button>
      <Section></Section>
      <Toggle toggleThemeMode={toggleThemeMode} />
    </Theme>
  );
}
