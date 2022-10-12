import lume from "lume/mod.ts";
import postcss from "lume/plugins/postcss.ts";
import date from "lume/plugins/date.ts";
import attributes from "lume/plugins/attributes.ts";
import base_path from "lume/plugins/base_path.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import terser from "lume/plugins/terser.ts";
import lightningCss from "lume/plugins/lightningcss.ts";

const site = lume();

site.ignore(
  "runner",
  "README.md",
  "CHANGELOG.md",
  "node_modules",
  "img_source"
);
site.use(attributes());
site.use(base_path());
site.use(code_highlight());
site.use(postcss());
site.use(date());
site.use(lightningCss());
site.use(terser());
site.copy("img");
site.copy("CNAME");

export default site;
