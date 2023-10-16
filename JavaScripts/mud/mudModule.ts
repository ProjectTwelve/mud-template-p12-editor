import { setup } from "./setup";

// singleton
export default class MudModule {

    private static instance;

    public network;
    public components;
    public systemCalls;

    constructor() {
        if (MudModule.instance) {
            return MudModule.instance;
        }

        MudModule.instance = this;

        setup().then(({
            network,
            components,
            systemCalls,
        }) => {
            this.network = network;
            this.components = components;
            this.systemCalls = systemCalls;
        }).catch(e => {
            console.error(e);
            console.log('set up mud fail')
        }).finally(() => {
            console.log("set up mud done")
        })


        return this;
    }




}