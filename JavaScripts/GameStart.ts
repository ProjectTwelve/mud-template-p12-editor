// import { CountBoard } from "./ui/Board";

import {CountBoard} from "./ui/CountBoard";

@Component
export default class GameStart extends Script {

    /**  */
    protected onStart(): void {

        if (SystemUtil.isClient()) {
            UIService.show(CountBoard);
            console.log("load script successfully")
        }

    }

    /**
     *  
     * this.useUpdatetrue
     * @param dt  / 
     */
    protected onUpdate(dt: number): void {

    }

    /**  */
    protected onDestroy(): void {

    }
}