"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7232:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2},u="Maintenance Page",s={unversionedId:"aws-recipes/maintenance-page",id:"aws-recipes/maintenance-page",isDocsHomePage:!1,title:"Maintenance Page",description:"A GitHub Actions/Terraform deployable maintenace page with gov.uk branding and a configurable message.",source:"@site/docs/aws-recipes/maintenance-page.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/maintenance-page",permalink:"/docs/aws-recipes/maintenance-page",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/maintenance-page.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Ops Cookbook Intro",permalink:"/docs/intro"},next:{title:"Basic Networking Template",permalink:"/docs/aws-recipes/networking"}},p=[{value:"The Premise",id:"the-premise",children:[]},{value:"Configure a certificate",id:"configure-a-certificate",children:[]},{value:"Build and Run",id:"build-and-run",children:[]},{value:"Deploying from GitHub",id:"deploying-from-github",children:[]}],l={toc:p};function d(e){var t=e.components,c=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},l,c,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"maintenance-page"},"Maintenance Page"),(0,o.kt)("p",null,"A GitHub Actions/Terraform deployable maintenace page with gov.uk branding and a configurable message."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Maintenance Page",src:n(9602).Z})),(0,o.kt)("h2",{id:"the-premise"},"The Premise"),(0,o.kt)("p",null,"We will deploy a stand alone static webpage into AWS S3 and served via CloudFront with HTTPS."),(0,o.kt)("p",null,"The Maintenance Page is enabled by updating the A record for the domain in Route53."),(0,o.kt)("p",null,"You can create this as a standalone GitHub project for your service (e.g 'myservice maintenace page') or drop it into an existing project in a sub directory."),(0,o.kt)("h2",{id:"configure-a-certificate"},"Configure a certificate"),(0,o.kt)("p",null,"You will need to manually create a certificate and reference the arn created from the terraform."),(0,o.kt)("p",null,"You can use AWS to ",(0,o.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/acm/home?region=eu-west-2#/privatewizard/"},"request a certificate")," for your domain. e.g ",(0,o.kt)("a",{parentName:"p",href:"http://www.myservice.com."},"www.myservice.com.")," If your service is already running on AWS you might already have this available to use."),(0,o.kt)("p",null,"Make a note of the ARN that is assigned to your certificate as you will need to add this to your Terraform ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/struds/ops-cookbook/blob/main/example-code/maintenance-page/cloudfront.tf"},"code")," - of course you could extend the code to make it configurable or even use Terraform to provision a certificate."),(0,o.kt)("h2",{id:"build-and-run"},"Build and Run"),(0,o.kt)("p",null,"Instructions on how to setup and deploy can be found in this ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/struds/ops-cookbook/blob/main/example-code/maintenance-page/README.md"},"README"),"."),(0,o.kt)("p",null,"A fully working project can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/struds/ops-cookbook/blob/main/example-code/maintenance-page"},"here"),"."),(0,o.kt)("h2",{id:"deploying-from-github"},"Deploying from GitHub"),(0,o.kt)("p",null,"Make the deployment easier by adding a GitHub Workflow which builds and deploys the site while setting a message for your users."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/struds/ops-cookbook/blob/main/example-code/maintenance-page/workflows/maintenance-page.yml"},"GitHub Actions Workflow")))}d.isMDXComponent=!0},9602:function(e,t,n){t.Z=n.p+"assets/images/maintenance-page-472163bc0ebc8bf3726bc5522fa59918.png"}}]);