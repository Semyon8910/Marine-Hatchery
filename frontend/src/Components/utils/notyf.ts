import { Notyf } from "notyf";

class Notyfi {
    private notyfication = new Notyf({duration: 4000, position:{x: "center", y:"top"}});
    public success(message: string){
        this.notyfication.success(message);
    }

    public error(message: string) {
        this.notyfication.error(message);
    }
}

const notyf = new Notyfi();
export default notyf;