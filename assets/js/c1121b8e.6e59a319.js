"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[838],{3905:function(e,t,a){a.d(t,{Zo:function(){return h},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},h=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,h=c(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,m=u["".concat(s,".").concat(d)]||u[d]||p[d]||o;return a?n.createElement(m,i(i({ref:t},h),{},{components:a})):n.createElement(m,i({ref:t},h))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8121:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return h},default:function(){return u}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=["components"],c={sidebar_position:10},s="Health Checks",l={unversionedId:"aws-recipes/health-check",id:"aws-recipes/health-check",isDocsHomePage:!1,title:"Health Checks",description:"A Route53 health check pings a url dozens of times from different locations around the world; this example shows how to setup a health check and attach a CloudWatch Alarm.",source:"@site/docs/aws-recipes/health-check.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/health-check",permalink:"/ops-cookbook/docs/aws-recipes/health-check",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/health-check.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Trello Notifications",permalink:"/ops-cookbook/docs/aws-recipes/trello-notifications"},next:{title:"Dashboard",permalink:"/ops-cookbook/docs/aws-recipes/dashboard"}},h=[{value:"Set the variables",id:"set-the-variables",children:[]},{value:"Create the health check",id:"create-the-health-check",children:[]},{value:"Create the alarm",id:"create-the-alarm",children:[]}],p={toc:h};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"health-checks"},"Health Checks"),(0,o.kt)("p",null,"A Route53 health check pings a url dozens of times from different locations around the world; this example shows how to setup a health check and attach a CloudWatch Alarm."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Health checks can only be provisioned in the us-east region. If you wish to connect the alarms to an SNS topic you will need to provision a us-east SNS topic specifically for these alarms."))),(0,o.kt)("h2",{id:"set-the-variables"},"Set the variables"),(0,o.kt)("p",null,"The enable_alerts variable is used to turn on/off notifications per environment."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'variable "webapp_fqdn" {\n  type        = string\n  description = "The URL of the web app, used for health checks"\n}\nvariable "enable_alerts" {\n  type        = bool\n  description = "When enabled CloudWatch alarm events are sent to the Alerts SNS Topic"\n  default     = false\n}\n')),(0,o.kt)("h2",{id:"create-the-health-check"},"Create the health check"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "aws_route53_health_check" "webapp_health_check" {\n  reference_name    = "webapp-health-check"\n  failure_threshold = 5\n  fqdn              = var.webapp_fqdn\n  port              = 443\n  request_interval  = "30"\n  resource_path     = var.webapp_health_check_path\n  type              = "HTTPS_STR_MATCH"\n  search_string     = "Ship shape and Bristol fashion"\n}\n')),(0,o.kt)("h2",{id:"create-the-alarm"},"Create the alarm"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'resource "aws_cloudwatch_metric_alarm" "webapp_health" {\n  namespace           = "AWS/Route53"\n  alarm_name          = "${aws_ecs_service.service.name}-webapp-health-alarm"\n  metric_name         = "HealthCheckStatus"\n  comparison_operator = "LessThanOrEqualToThreshold"\n  evaluation_periods  = "1"\n  period              = "60"\n  statistic           = "Minimum"\n  threshold           = "0"\n  treat_missing_data  = "breaching"\n  alarm_description   = "This metric monitors webapp health"\n  provider            = aws.us-east\n  alarm_actions       = var.enable_alerts == true ? [aws_sns_topic.sns_service_alerts.arn] : []\n  ok_actions          = var.enable_alerts == true ? [aws_sns_topic.sns_service_alerts.arn] : []\n\n  dimensions = {\n    HealthCheckId = aws_route53_health_check.webapp_health_check.id\n  }\n}\n')))}u.isMDXComponent=!0}}]);