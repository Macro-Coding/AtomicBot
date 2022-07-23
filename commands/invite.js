const checkCommandParameterTypes = require("../lib/methods/checkCommandParameterTypes")

module.exports = (client, message, args, cmd) => {
    const parameterChecks = checkCommandParameterTypes(client, message, args, cmd)
}