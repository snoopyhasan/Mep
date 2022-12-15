import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import FireSystem from "sections/firesystem-sec";

export default function Fire() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Fire system" />
          <FireSystem />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}