"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[725],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9579:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={sidebar_position:6},l="RDS CloudWatch",c={unversionedId:"aws-recipes/rds-cloudwatch",id:"aws-recipes/rds-cloudwatch",isDocsHomePage:!1,title:"RDS CloudWatch",description:"The Terraform module RDS Alarms provides a good set of basic alarms with sensible defaults.",source:"@site/docs/aws-recipes/rds-cloudwatch.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/rds-cloudwatch",permalink:"/ops-cookbook/docs/aws-recipes/rds-cloudwatch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/rds-cloudwatch.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Tags",permalink:"/ops-cookbook/docs/aws-recipes/tags"},next:{title:"ECS CloudWatch",permalink:"/ops-cookbook/docs/aws-recipes/ecs-cloudwatch"}},d=[{value:"Set the variables",id:"set-the-variables",children:[]},{value:"Set the RDS Alarms",id:"set-the-rds-alarms",children:[]},{value:"Set the variables per environment",id:"set-the-variables-per-environment",children:[]}],p={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"rds-cloudwatch"},"RDS CloudWatch"),(0,o.kt)("p",null,"The Terraform module ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/lorenzoaiello/terraform-aws-rds-alarms"},"RDS Alarms")," provides a good set of basic alarms with sensible defaults."),(0,o.kt)("h2",{id:"set-the-variables"},"Set the variables"),(0,o.kt)("p",null,"The enable_alerts variable is used to turn on/off notifications per environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'variable "enable_alerts" {\n  type        = bool\n  description = "When enabled CloudWatch alarm events are sent to the Alerts SNS Topic"\n  default     = false\n}\nvariable "low_disk_burst_balance_threshold" {\n  type        = number\n  description = "Alarm threshold for low RDS disk burst balance"\n  default     = 100\n}\n')),(0,o.kt)("h2",{id:"set-the-rds-alarms"},"Set the RDS Alarms"),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"low disk burst balance")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"in this example we override the default for 'low disk burst balance', you can also override the other defaults set by the Terraform module but in practise I found only the burst balance needed tweaking as it was too noisy whenever it dipped below 100."))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"enable_alerts")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The enable_alerts variable is used to link an action to something, in this case an SNS topic for technical alerts."))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'module "aws-rds-alarms" {\n  source                               = "lorenzoaiello/rds-alarms/aws"\n  version                              = "2.1.0"\n  db_instance_id                       = aws_db_instance.postgres.id\n  db_instance_class                    = var.db_instance_class\n  actions_alarm                        = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n  actions_ok                           = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n  disk_burst_balance_too_low_threshold = var.low_disk_burst_balance_threshold\n}\n')),(0,o.kt)("h2",{id:"set-the-variables-per-environment"},"Set the variables per environment"),(0,o.kt)("p",null,"Typically these would be in production.tfvars."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"enable_alerts                     = true\nlow_disk_burst_balance_threshold  = 75\n")))}u.isMDXComponent=!0}}]);