import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { NgModuleRef, PlatformRef } from "@angular/core";
import { AppModule } from "./app/app.module";

const platform: PlatformRef = platformBrowserDynamic();

const p = platform.bootstrapModule(AppModule)
p.then(
    (ref: NgModuleRef<AppModule>) => {
        console.log(ref.instance);
    },
    (err) => {
        console.log(err);
    }
)