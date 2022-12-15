import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import FabricatedSec from "sections/fabricated-sec";

export default function Fabricated() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Fabricated" />
          <FabricatedSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}