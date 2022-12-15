import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "contexts/app/app.provider";
import theme from "theme";
import SEO from "components/seo";
import Layout from "components/layout";
import { FaTimes } from "react-icons/fa";
import ProjectSec from "sections/project-sec";

export default function Project() {
  
  return (
    <ThemeProvider theme={theme}>
        <StickyProvider>
          <Layout>
            <SEO title="Projects" />
            <ProjectSec
            />
          </Layout>
        </StickyProvider>
    </ThemeProvider>
  );
}

const style = {
  complete:{
    padding: "40px",
  },
  head: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  card:{
    width:["500px","316px"],
    margin:"20px",
  },
  collectiveCard:{
    display: "flex",
    flexWrap: "wrap",
  }
};
