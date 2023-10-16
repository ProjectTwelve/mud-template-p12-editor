// import CountModule from "../CountModule";
import { Entity, getComponentValue } from "@latticexyz/recs";
import MudModule from "../mud/mudModule";
import Board_Generate from "../ui-generate/Board_generate";
export class CountBoard extends Board_Generate {
    mudModule: MudModule;
    /**
     * UI 
     */
    public onStart() {
        let button = this.uiWidgetBase.findChildByPath("RootCanvas/StaleButton") as Button;
        let text = this.uiWidgetBase.findChildByPath("RootCanvas/Number") as TextBlock;

        this.mudModule = new MudModule();


        button.onClicked.add(() => {
            this.mudModule.systemCalls.increment();
        })


        setInterval(() => {
            const { Counter } = this.mudModule.components;
            const c = getComponentValue(Counter, "0x" as Entity)
            console.log("current count: ", JSON.stringify(c))
            text.text = String(Number(c.value))
        }, 500)
    }
}