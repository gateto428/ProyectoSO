class Process {
    constructor(ID, state, lt, nextIO, IOTTL, quantum){
        this.ID = ID;

        this.state = state;

        this.lt = lt;
        this.ttl = lt;

        this.nextIO = nextIO;
        this.nextIOCurrent = nextIO;

        this.IOTTL = IOTTL;
        this.IOTTLCurrent = 0;

        this.quantum = quantum;
    }

    getID = () => this.ID;

    getState = () => this.state;
    changeState = (state) => this.state = state; 

    getLT = () => this.lt;
    decrementLT = () => this.ttl--;
    getTtl = () => this.ttl;

    getNextIO = () => this.nextIO;
    decrementNextIO = () => this.nextIOCurrent--;
    getNextIOCurrent = () => this.nextIOCurrent;
    resetNextIOCurrent = () => this.nextIOCurrent = this.nextIO;

    getIOTTL = () => this.IOTTL;
    decrementIOTTLCurrent = () => this.IOTTLCurrent++;
    getIOTTLCurrent = () => this.IOTTLCurrent;
    resetIOTTLCurrent = () => this.IOTTLCurrent = 0 ;

    getQuantum = () => this.quantum;
    decrementQuantum = () => this.quantum--;
    setQuantum = (quantum ) => this.quantum = quantum;

    show = () => `Id: ${this.ID}, Life Time: ${this.ttl}/${this.lt}, Next IO: ${this.nextIOCurrent}/${this.nextIO}, IO: ${this.IOTTLCurrent}/${this.IOTTL}, Status: ${this.state}, Quantum: ${this.quantum}`
}

export default Process ;