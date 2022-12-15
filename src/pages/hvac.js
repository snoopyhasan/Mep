import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import Banner from "sections/banner";
import HvacSec from "sections/hvac-sec";

export default function Hvac() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="HVAC" />
          <HvacSec />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}