import { Handler } from "../types/index";

export class Channel {
    private actionCallbacks: Record<string, Handler> = {};

    action(actionName: string, callback: Handler) {
        this.actionCallbacks[actionName] = callback;
        return this;
    }

    getActionHandler(action: string): Handler | undefined {
        return this.actionCallbacks[action]
    }

    getHandlers(): Record<string, Handler> {
        return this.actionCallbacks
    }
}
