// import CountModule from "../CountModule";
import { Entity, getComponentValue } from "@latticexyz/recs";
import MudModule from "../mud/mudModule";
import Board_Generate from "../ui-generate/Board_generate";
export class CountBoard extends Board_Generate {
    mudModule: MudModule;

    public onStart() {

        let button = this.uiWidgetBase.findChildByPath("RootCanvas/StaleButton") as Button;
        let text = this.uiWidgetBase.findChildByPath("RootCanvas/Number") as TextBlock;

        if (SystemUtil.isClient()) {
            this.mudModule = new MudModule();

            button.onPressed.add(() => {
                console.log("clicked")
                this.mudModule.systemCalls.increment().catch(e => console.error)
            })


            setInterval(() => {
                const { Counter } = this.mudModule.components;
                const c = getComponentValue(Counter, "0x" as Entity)
                text.text = String(Number(c?.value || 0))
            }, 500)
        }
    }
}