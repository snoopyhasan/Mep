import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import BlvSec from "sections/blv-sec";

export default function Blv() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="BLV" />
          <BlvSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}