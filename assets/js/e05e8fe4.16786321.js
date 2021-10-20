"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[534],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return l}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(r),l=o,b=u["".concat(c,".").concat(l)]||u[l]||h[l]||a;return r?n.createElement(b,s(s({ref:t},p),{},{components:r})):n.createElement(b,s({ref:t},p))}));function l(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var d=2;d<a;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},3868:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],i={sidebar_position:11},c="Dashboard",d={unversionedId:"aws-recipes/dashboard",id:"aws-recipes/dashboard",isDocsHomePage:!1,title:"Dashboard",description:"Dashboard",source:"@site/docs/aws-recipes/dashboard.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/dashboard",permalink:"/ops-cookbook/docs/aws-recipes/dashboard",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/dashboard.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{sidebar_position:11},sidebar:"tutorialSidebar",previous:{title:"Health Checks",permalink:"/ops-cookbook/docs/aws-recipes/health-check"}},p=[{value:"Prototype the dashboard",id:"prototype-the-dashboard",children:[]},{value:"Terraform the dashboard",id:"terraform-the-dashboard",children:[]}],h={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dashboard"},"Dashboard"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard",src:r(9025).Z})),(0,a.kt)("h2",{id:"prototype-the-dashboard"},"Prototype the dashboard"),(0,a.kt)("p",null,"A CloudWatch Dashboard is described by a large JSON data structure and the easiest way to build one is to protoype it within the AWS console."),(0,a.kt)("p",null,"From the ",(0,a.kt)("a",{parentName:"p",href:"https://eu-west-2.console.aws.amazon.com/cloudwatch/home?region=eu-west-2#dashboards:"},"Dashboards")," section in the AWS console create a new dashboard (any name you wish) and start using the UI to build widgets and sections. Once you have the dashboard as you want it then view/edit the source to access the JSON."),(0,a.kt)("h2",{id:"terraform-the-dashboard"},"Terraform the dashboard"),(0,a.kt)("p",null,"Take the JSON from the prototype and copy it into the Terraform but replace the hard coded ARN's with those generated by your terraform build code as per the example below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'resource "aws_cloudwatch_dashboard" "service_health" {\n  dashboard_name = "${terraform.workspace}-myservice-dashboard"\n\n  dashboard_body = <<-EOT\n{\n    "widgets": [\n        {\n            "height": 2,\n            "width": 24,\n            "y": 0,\n            "x": 0,\n            "type": "text",\n            "properties": {\n                "markdown": "# Service Health - ${terraform.workspace}\\n## Health Check Alarms"\n            }\n        },\n        {\n            "height": 3,\n            "width": 6,\n            "y": 2,\n            "x": 0,\n            "type": "metric",\n            "properties": {\n                "title": "Webapp Health",\n                "annotations": {\n                    "alarms": [\n                        "${aws_cloudwatch_metric_alarm.webapp_health.arn}"\n                    ]\n                },\n                "view": "singleValue",\n                "stacked": false,\n                "type": "chart"\n            }\n        }\n    ]\n}\nEOT\n}\n')))}u.isMDXComponent=!0},9025:function(e,t,r){t.Z=r.p+"assets/images/dashboard-f208d7e19c993ba394b59842b057426a.png"}}]);