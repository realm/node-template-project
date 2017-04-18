[![Build Status](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)](https://travis-ci.org/{{github-user-name}}/{{github-app-name}}.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/{{github-user-name}}/{{github-app-name}}/badge.svg?branch=master)](https://coveralls.io/github/{{github-user-name}}/{{github-app-name}}?branch=master)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

# Realm Cli

* To install the cli, you will do `npm install -g realm-cli`
* To aim the cli at a host you can do it either of 3 ways
    1. `realm-cli -h "localhost:9080" ..args`
    2. `realm-cli -host "localhost:9080"" ...args`
    3. To set a host for future commands simply call `realm-cli use "localhost:9080"`
    4. To clear a host `realm-cli use ""` or `realm-cli use`

## Controlling a Service
Services are hosted by a service host. Generally an express app that is running as a a simple http/websocket server. 

All services must have a way to:

1. start `realm-cli -host "localhost:9080"" -s "auth" start`
2. stop  `realm-cli -host "localhost:9080"" -s "auth" stop`
3. get status `realm-cli -host "localhost:9080"" -s "auth" status`
4. observe status `realm-cli -host "localhost:9080"" -s "auth" -watch status`
5. observe log `realm-cli -host "localhost:9080"" -s "auth" -watch log`

## Service Specific Commands
You can pass a service name to use or disuse 
`realm-cli -h "localhost:9080" -s "auth" -change-password -u "max.alexander@realm.io"  -p "ilovesushi"

## Setting travis and coveralls badges
1. Sign in to [travis](https://travis-ci.org/) and activate the build for your project.
2. Sign in to [coveralls](https://coveralls.io/) and activate the build for your project.
3. Replace {{github-user-name}}/{{github-app-name}} with your repo details like: "ospatil/generator-node-typescript".
