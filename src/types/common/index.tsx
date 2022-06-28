import { LazyExoticComponent } from "react";

export interface IAppRoutes{
    name: string,
    route: string,
    baseRoute: string,
    public: boolean,
    component: LazyExoticComponent<any>
}