class CPU {
    constructor(){
        this.IsIDLE = true;
        this.process = null;
    }

    changeState = () => this.IsIDLE = !this.IsIDLE;
    setProcess(process){
        this.process = process;
    }
    getState = () => this.IsIDLE;
    getProcessO = () => this.process;
    getProcess = () => this.process?this.process.show():null;
}

export default CPU;