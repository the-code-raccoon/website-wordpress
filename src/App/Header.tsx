import { Container, Links, Toggle } from "./Header-style";

export default function Header(props: any) {
  const { toggleThemeMode } = props;

  return (
    <div>
      <Container>
        <div>F. Ho</div>
        <Links>
          <div>Work</div>
          <div>About</div>
          <div>Contact</div>
          <Toggle toggleThemeMode={toggleThemeMode} />
        </Links>
      </Container>
    </div>
  );
}
