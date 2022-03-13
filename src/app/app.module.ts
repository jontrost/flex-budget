import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { InMemoryCache } from "@apollo/client/core";
import { APOLLO_OPTIONS, ApolloModule } from "apollo-angular";
import { HttpLink } from "apollo-angular/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
    declarations: [AppComponent],
    imports: [
        ApolloModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        BrowserModule,
        HttpClientModule
    ],
    providers: [
        {
            provide: APOLLO_OPTIONS,
            useFactory: (httpLink: HttpLink) => {
                return {
                    cache: new InMemoryCache(),
                    link: httpLink.create({
                        uri: "http://localhost:3000"
                    })
                };
            },
            deps: [HttpLink]
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
