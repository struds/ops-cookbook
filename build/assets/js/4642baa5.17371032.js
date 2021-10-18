"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[551],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return _}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=l(t),_=r,h=m["".concat(c,".").concat(_)]||m[_]||p[_]||s;return t?a.createElement(h,i(i({ref:n},u),{},{components:t})):a.createElement(h,i({ref:n},u))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,i=new Array(s);i[0]=m;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var l=2;l<s;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},8131:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return m}});var a=t(7462),r=t(3366),s=(t(7294),t(3905)),i=["components"],o={sidebar_position:7},c="ECS CloudWatch",l={unversionedId:"aws-recipes/ecs-cloudwatch",id:"aws-recipes/ecs-cloudwatch",isDocsHomePage:!1,title:"ECS CloudWatch",description:"Set the variables",source:"@site/docs/aws-recipes/ecs-cloudwatch.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/ecs-cloudwatch",permalink:"/docs/aws-recipes/ecs-cloudwatch",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/ecs-cloudwatch.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"RDS CloudWatch",permalink:"/docs/aws-recipes/rds-cloudwatch"},next:{title:"SNS Notifications",permalink:"/docs/aws-recipes/sns-notifications"}},u=[{value:"Set the variables",id:"set-the-variables",children:[]},{value:"Alarms",id:"alarms",children:[]}],p={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"ecs-cloudwatch"},"ECS CloudWatch"),(0,s.kt)("h2",{id:"set-the-variables"},"Set the variables"),(0,s.kt)("p",null,"The enable_alerts variable is used to turn on/off notifications per environment."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'variable "enable_alerts" {\n  type        = bool\n  description = "When enabled CloudWatch alarm events are sent to the Alerts SNS Topic"\n  default     = false\n}\nvariable "api_service_minimum_task_count" {\n  type        = number\n  description = "Minimum number of expected tasks to be running for the API Service"\n  default     = 1\n}\n')),(0,s.kt)("h2",{id:"alarms"},"Alarms"),(0,s.kt)("p",null,"Each ECS service has an expected number of tasks running, often this is just a single task (e.g the web server). It's a useful way to check if the ECS service is healthy and alert on it."),(0,s.kt)("p",null,"Your Docker image should also have a health check and the service itself a Health Check endpoint which you can hook Route53 Health Checks into."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},'resource "aws_cloudwatch_metric_alarm" "ecs_webapp_task_count_too_low" {\n  alarm_name          = "ecs-${aws_ecs_service.webapp.name}-lowTaskCount"\n  comparison_operator = "LessThanThreshold"\n  evaluation_periods  = 1\n  metric_name         = "CPUUtilization"\n  namespace           = "AWS/ECS"\n  period              = 60\n  statistic           = "SampleCount"\n  threshold           = var.webapp_minimum_task_count\n  treat_missing_data  = "breaching"\n  alarm_description   = "Task count is too low."\n  alarm_actions       = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n  ok_actions          = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n\n  dimensions = {\n    ClusterName = "${aws_ecs_cluster.main.name}"\n    ServiceName = "${aws_ecs_service.webapp.name}"\n\n  }\n}\n\nresource "aws_cloudwatch_metric_alarm" "ecs_webapp_cpu_too_high" {\n  alarm_name          = "ecs-${aws_ecs_service.webapp.name}-highCPUUtilization"\n  comparison_operator = "GreaterThanThreshold"\n  evaluation_periods  = 5\n  metric_name         = "CPUUtilization"\n  namespace           = "AWS/ECS"\n  period              = 300\n  statistic           = "Average"\n  threshold           = 80\n  treat_missing_data  = "breaching"\n  alarm_description   = "Average CPU utilization is too high."\n  alarm_actions       = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n  ok_actions          = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n\n  dimensions = {\n    ClusterName = "${aws_ecs_cluster.main.name}"\n    ServiceName = "${aws_ecs_service.webapp.name}"\n  }\n}\n\nresource "aws_cloudwatch_metric_alarm" "ecs_webapp_memory_too_high" {\n  alarm_name          = "ecs-${aws_ecs_service.webapp.name}-highMemoryUtilization"\n  comparison_operator = "GreaterThanThreshold"\n  evaluation_periods  = 5\n  metric_name         = "MemoryUtilization"\n  namespace           = "AWS/ECS"\n  period              = 300\n  statistic           = "Average"\n  threshold           = 80\n  treat_missing_data  = "breaching"\n  alarm_description   = "Average Memory utilization is too high."\n  alarm_actions       = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n  ok_actions          = var.enable_alerts == true ? [aws_sns_topic.sns_technical_alerts.arn] : []\n\n  dimensions = {\n    ClusterName = "${aws_ecs_cluster.main.name}"\n    ServiceName = "${aws_ecs_service.webapp.name}"\n  }\n}\n\n')))}m.isMDXComponent=!0}}]);