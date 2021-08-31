"use strict"

import * as path from "path"
import * as http from "http"
import { fileURLToPath } from "url"
import * as oas3Tools from "oas3-tools"
const __dirname = path.dirname(fileURLToPath(import.meta.url))

var serverPort = 8080

// swaggerRouter configuration
var options = {
  routing: {
    controllers: path.join(__dirname, "../controllers"),
  },
}

var expressAppConfig = oas3Tools.expressAppConfig(
  path.join(__dirname, "../api/openapi.yaml"),
  options
)
var app = expressAppConfig.getApp()

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, function () {
  console.log(
    "Your server is listening on port %d (http://localhost:%d)",
    serverPort,
    serverPort
  )
  console.log("Swagger-ui is available on http://localhost:%d/docs", serverPort)
})
