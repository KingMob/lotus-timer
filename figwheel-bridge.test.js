const rewire = require("rewire")
const figwheel_bridge = rewire("./figwheel-bridge")
const logDebug = figwheel_bridge.__get__("logDebug")
const isChrome = figwheel_bridge.__get__("isChrome")
const asyncImportScripts = figwheel_bridge.__get__("asyncImportScripts")
const syncImportScripts = figwheel_bridge.__get__("syncImportScripts")
const importJs = figwheel_bridge.__get__("importJs")
const interceptRequire = figwheel_bridge.__get__("interceptRequire")
const compileWarningsToYellowBox = figwheel_bridge.__get__("compileWarningsToYellowBox")
const serverBaseUrl = figwheel_bridge.__get__("serverBaseUrl")
const setCorrectWebSocketImpl = figwheel_bridge.__get__("setCorrectWebSocketImpl")
const loadApp = figwheel_bridge.__get__("loadApp")
const startApp = figwheel_bridge.__get__("startApp")
const withModules = figwheel_bridge.__get__("withModules")
const shimBaseGoog = figwheel_bridge.__get__("shimBaseGoog")
const shimJsLoader = figwheel_bridge.__get__("shimJsLoader")
// @ponicode
describe("logDebug", () => {
    test("0", () => {
        let callFunction = () => {
            logDebug("There is a mismatch")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logDebug("Error:")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logDebug("Missing FileUri configuration")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            logDebug("Grader id does not match submission id that was passed in")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            logDebug("Counterparty sent error: %s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            logDebug(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isChrome", () => {
    test("0", () => {
        let callFunction = () => {
            isChrome()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("asyncImportScripts", () => {
    test("0", () => {
        let callFunction = () => {
            asyncImportScripts(1, true, "error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            asyncImportScripts(-10, false, "ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            asyncImportScripts("https://", false, "too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            asyncImportScripts("https://croplands.org/app/a/confirm?t=", true, "ValueError")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            asyncImportScripts(1, false, "too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            asyncImportScripts(undefined, true, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("syncImportScripts", () => {
    test("0", () => {
        let callFunction = () => {
            syncImportScripts("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg", true, "too many arguments")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            syncImportScripts("Www.GooGle.com", true, "multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            syncImportScripts(10, false, "multiple errors occurred")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            syncImportScripts("ponicode.com", true, "error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            syncImportScripts("www.google.com", true, "error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            syncImportScripts(-Infinity, true, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("importJs", () => {
    test("0", () => {
        let callFunction = () => {
            importJs(0, true, "error\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            importJs(1, true, "Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            importJs("http://placeimg.com/640/480", "callback detected, not supported yet", "Message box: foo; bar\n")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            importJs("http://placeimg.com/640/480", "callback detected, not supported yet", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            importJs(0, "callback detected, not supported yet", "error")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            importJs(-Infinity, false, "")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("interceptRequire", () => {
    test("0", () => {
        let callFunction = () => {
            interceptRequire()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("compileWarningsToYellowBox", () => {
    test("0", () => {
        let callFunction = () => {
            compileWarningsToYellowBox()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("serverBaseUrl", () => {
    test("0", () => {
        let callFunction = () => {
            serverBaseUrl("smtp-relay.sendinblue.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            serverBaseUrl("smtp.gmail.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            serverBaseUrl(0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            serverBaseUrl(1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            serverBaseUrl(-10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            serverBaseUrl(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("setCorrectWebSocketImpl", () => {
    test("0", () => {
        let callFunction = () => {
            setCorrectWebSocketImpl()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("loadApp", () => {
    test("0", () => {
        let callFunction = () => {
            loadApp(-10, "smtp-relay.sendinblue.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            loadApp(0.0, "smtp-relay.sendinblue.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            loadApp(-1, "smtp.gmail.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            loadApp(10, "smtp.gmail.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            loadApp("1.0.0", "smtp.gmail.com", "callback detected, not supported yet")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            loadApp(NaN, "", undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("startApp", () => {
    test("0", () => {
        let callFunction = () => {
            startApp("bus_account.mpe", "^5.0.0", "smtp.gmail.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            startApp("Safari", "4.0.0-beta1\t", "smtp-relay.sendinblue.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            startApp("Safari", "v1.2.4", "smtp-relay.sendinblue.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            startApp("arizona_extend.wav", "^5.0.0", "smtp-relay.sendinblue.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            startApp("XCode", "v1.2.4", "smtp-relay.sendinblue.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            startApp(undefined, undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("withModules", () => {
    test("0", () => {
        let callFunction = () => {
            withModules(true)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            withModules(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            withModules(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("shimBaseGoog", () => {
    test("0", () => {
        let callFunction = () => {
            shimBaseGoog()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("shimJsLoader", () => {
    test("0", () => {
        let callFunction = () => {
            shimJsLoader()
        }
    
        expect(callFunction).not.toThrow()
    })
})
