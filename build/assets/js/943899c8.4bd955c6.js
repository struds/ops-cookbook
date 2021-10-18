"use strict";(self.webpackChunkops_cookbook=self.webpackChunkops_cookbook||[]).push([[371],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return b}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),b=a,_=u["".concat(p,".").concat(b)]||u[b]||c[b]||i;return n?r.createElement(_,o(o({ref:t},l),{},{components:n})):r.createElement(_,o({ref:t},l))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6098:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={sidebar_position:3},p="RDS",d={unversionedId:"aws-recipes/rds",id:"aws-recipes/rds",isDocsHomePage:!1,title:"RDS",description:"Setup the variables",source:"@site/docs/aws-recipes/rds.md",sourceDirName:"aws-recipes",slug:"/aws-recipes/rds",permalink:"/docs/aws-recipes/rds",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/aws-recipes/rds.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Basic Networking Template",permalink:"/docs/aws-recipes/networking"},next:{title:"ECS with Fargate",permalink:"/docs/aws-recipes/ecs"}},l=[{value:"Setup the variables",id:"setup-the-variables",children:[]},{value:"Create the database",id:"create-the-database",children:[]},{value:"Set the tfvars for production",id:"set-the-tfvars-for-production",children:[]},{value:"Set the tfvars for dev",id:"set-the-tfvars-for-dev",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"rds"},"RDS"),(0,i.kt)("h2",{id:"setup-the-variables"},"Setup the variables"),(0,i.kt)("p",null,"Typically these would be in variables.tf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'variable "db_storage" {\n  type        = number\n  description = "Allocated storage, in GB, for the PostgreSQL instance"\n}\nvariable "db_max_storage" {\n  type        = number\n  description = "The upper limit, in GB, to which PostgreSQL can automatically scale the storage of the DB"\n}\nvariable "db_delete_protection" {\n  type        = bool\n  description = "Determines if the DB can be deleted. If true, the database cannot be deleted"\n}\nvariable "db_name" {\n  type        = string\n  description = "The name of the database to create when the db instance is created"\n  default     = "myservice"\n}\nvariable "db_username" {\n  type        = string\n  description = "The username for the master database user"\n  default     = "beacons_service"\n  sensitive   = true\n}\nvariable "db_password" {\n  type        = string\n  description = "The password used for the master database user"\n  sensitive   = true\n}\nvariable "db_instance_class" {\n  type        = string\n  description = "The database instance class"\n}\n# See: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html#Overview.Encryption.Availability for storage tiers that support encryption\nvariable "db_storage_encrypted" {\n  type        = bool\n  description = "Specifies whether the database instances data is encrypted"\n}\nvariable "db_logs_exported" {\n  type        = list(string)\n  description = "Set of logs types to enable for exporting to CloudWatch logs. If empty, no logs will be exported"\n  default     = ["postgresql", "upgrade"]\n\n  validation {\n    condition     = length(var.db_logs_exported) >= 0 && length(var.db_logs_exported) <= 2\n    error_message = "Exported log options are either: postgresql or upgrade."\n  }\n}\nvariable "db_skip_final_snapshot" {\n  type        = bool\n  description = "Determines whether a final DB snapshot is created before the DB instance is deleted"\n}\nvariable "backup_window" {\n  type        = string\n  description = "Time period e.g 23:00-23:55"\n  default     = ""\n}\nvariable "backup_retention_period" {\n  type        = number\n  description = "Days to retain backups"\n  default     = 0\n}\nvariable "performance_insights_enabled" {\n  type        = bool\n  description = "Enable performance insights"\n  default     = false\n}\nvariable "rds_multi_az" {\n  type        = bool\n  description = "Enable multiple availabilty zones for RDS"\n  default     = false\n}\nvariable "apply_immediately" {\n  type        = bool\n  description = "Apply changes to infrastrucure immediately"\n  default     = true\n}\n\n')),(0,i.kt)("h2",{id:"create-the-database"},"Create the database"),(0,i.kt)("p",null,"Typically these would be in rds.tf."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'resource "aws_db_instance" "postgres" {\n  identifier                      = "${terraform.workspace}-myservice-database"\n  allocated_storage               = var.db_storage\n  engine                          = "postgres"\n  engine_version                  = "12.7"\n  db_subnet_group_name            = aws_db_subnet_group.db.id\n  vpc_security_group_ids          = [aws_security_group.db.id]\n  deletion_protection             = var.db_delete_protection\n  name                            = var.db_name\n  username                        = var.db_username\n  password                        = var.db_password\n  instance_class                  = var.db_instance_class\n  storage_encrypted               = var.db_storage_encrypted\n  skip_final_snapshot             = var.db_skip_final_snapshot\n  enabled_cloudwatch_logs_exports = ["postgresql", "upgrade"]\n  allow_major_version_upgrade     = true\n  auto_minor_version_upgrade      = true\n  backup_window                   = var.backup_window\n  backup_retention_period         = var.backup_retention_period\n  copy_tags_to_snapshot           = true\n  performance_insights_enabled    = var.performance_insights_enabled\n  apply_immediately               = var.apply_immediately\n  multi_az                        = var.rds_multi_az\n}\n')),(0,i.kt)("h2",{id:"set-the-tfvars-for-production"},"Set the tfvars for production"),(0,i.kt)("p",null,"Typically these would be in production.tfvars."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'db_storage                              = 100\ndb_max_storage                          = 100\ndb_delete_protection                    = true\ndb_instance_class                       = "db.t3.large"\ndb_storage_encrypted                    = true\ndb_skip_final_snapshot                  = false\nbackup_window                           = "23:00-23:55"\nbackup_retention_period                 = 30\nperformance_insights_enabled            = true\napply_immediately                       = false\nrds_multi_az                            = true\n')),(0,i.kt)("h2",{id:"set-the-tfvars-for-dev"},"Set the tfvars for dev"),(0,i.kt)("p",null,"Typically these would be in dev.tfvars."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'db_storage                              = 50\ndb_max_storage                          = 50\ndb_delete_protection                    = false\ndb_instance_class                       = "db.t3.medium"\ndb_storage_encrypted                    = false\ndb_skip_final_snapshot                  = true\nnat_gateway_count                       = 1\nperformance_insights_enabled            = true\napply_immediately                       = true\nrds_multi_az                            = false\n')))}u.isMDXComponent=!0}}]);