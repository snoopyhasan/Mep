import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import BuildingSec from "sections/buildingservices-sec";

export default function Building() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Building" />
          <BuildingSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}