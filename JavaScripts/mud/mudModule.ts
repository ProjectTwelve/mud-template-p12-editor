import { ClientComponents } from "./createClientComponents";
import { SystemCalls } from "./createSystemCalls";
import { setup } from "./setup";
import { SetupNetworkResult } from "./setupNetwork";

// singleton
export default class MudModule {

    private static instance;

    public network: SetupNetworkResult;
    public components: ClientComponents;
    public systemCalls: SystemCalls;

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