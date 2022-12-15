import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import AboutSec from "sections/about-sec";

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="About Us" />
          <AboutSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}