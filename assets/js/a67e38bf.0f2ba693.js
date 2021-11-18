"use strict";(self.webpackChunkthemes_docs=self.webpackChunkthemes_docs||[]).push([[792],{8604:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return r},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var i=t(7462),l=t(3366),a=(t(7294),t(3905)),o=["components"],s={},r="How To Set Block Display Labels",p={unversionedId:"intro-guides/block-display-labels",id:"intro-guides/block-display-labels",isDocsHomePage:!1,title:"How To Set Block Display Labels",description:"Type",source:"@site/docs/intro-guides/block-display-labels.md",sourceDirName:"intro-guides",slug:"/intro-guides/block-display-labels",permalink:"/themes-docs/docs/intro-guides/block-display-labels",editUrl:"https://github.com/JackHowa/themes-docs/edit/main/docs/intro-guides/block-display-labels.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/themes-docs/docs/intro"}},d=[{value:"Type",id:"type",children:[],level:2},{value:"Description",id:"description",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2}],c={toc:d};function u(e){var n=e.components,t=(0,l.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-set-block-display-labels"},"How To Set Block Display Labels"),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("p",null,"label (Object or String)"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"The label field is used in the PageBuilder Editor instead of the actual component filename. The primary purpose of this value is to enable internationalization (i18n) for your Feature. If this Feature component will be used by publications in multiple languages, a label allows the PageBuilder Editor to use the translation provided for each locale."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"Providing a label as an Object is the preferred approach as it enables internationalization for any locales that are provided in the block implementation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/blocks/custom-byline-block/features/custom-byline/default.jsx"',title:'"/blocks/custom-byline-block/features/custom-byline/default.jsx"'},'import React from "react";\nimport PropTypes from "@arc-fusion/prop-types";\n\nconst BylineWithI18nLabel = (props) => {\n  const { customFields } = props;\n  const { showByline, byline } = customFields;\n\n  return (\n    <div>\n      {showByline && (\n        <div>\n          <p>{byline}</p>\n        </div>\n      )}\n    </div>\n  );\n};\n\nBylineWithI18nLabel.label = {\n  en: "Headline",\n  fr: "Le titre",\n};\n\nBylineWithI18nLabel.propTypes = {\n  customFields: PropTypes.shape({\n    showByline: PropTypes.bool,\n    byline: PropTypes.string,\n  }),\n};\n\nexport default HeadlineWithI18nLabel;\n')),(0,a.kt)("p",null,"Providing a label as a String is also supported for Features that should always have the same label in the PageBuilder Editor."),(0,a.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If a label is provided as a String, then the value will always be used even if the user is in a different locale."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="/blocks/custom-byline-block/features/custom-byline/default.jsx"',title:'"/blocks/custom-byline-block/features/custom-byline/default.jsx"'},'import React from "react";\nimport PropTypes from "@arc-fusion/prop-types";\n\nconst BylineWithI18nLabel = (props) => {\n  const { customFields } = props;\n  const { showByline, byline } = customFields;\n\n  return (\n    <div>\n      {showByline && (\n        <div>\n          <p>{byline}</p>\n        </div>\n      )}\n    </div>\n  );\n};\n\nBylineWithI18nLabel.label = `Le titre de l\'article`;\n\nBylineWithI18nLabel.propTypes = {\n  customFields: PropTypes.shape({\n    showByline: PropTypes.bool,\n    byline: PropTypes.string,\n  }),\n};\n\nexport default BylineWithI18nLabel;\n')))}u.isMDXComponent=!0}}]);