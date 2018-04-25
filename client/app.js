//app.js
import { setLoginUrl } from "./vendor/wafer2-client-sdk/index";
import { service } from "./config";

App({
    onLaunch: function () {
        setLoginUrl(service.loginUrl)
    }
})