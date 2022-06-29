import Process from './Process.js';
import CPU from './Cpu.js';

const state = {
    READY: 'R',
    RUNNING: 'E',
    BLOCKING: 'B'
}


/**
 *  sleep thread
 * @param {Ms} ms 
 * @returns  promiese reslove in ms
 */
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


class Processor {
    constructor(simulationTime = 100, //simulacin duracion
        MAX_time_next_process = 3, //siguiente proceso
        MAX_life_time_process = 20, //vida del proceso
        MAX_time_next_IO = 4,  //
        MAX_time_IO_execution = 10,
        quantum = 4) {
        this.clock = 0;
        this.simulationTime = simulationTime;
        this.MAX_time_next_processM = MAX_time_next_process;
        this.MAX_time_next_process = 0;
        this.MAX_life_time_process = MAX_life_time_process;
        this.MAX_time_next_IO = MAX_time_next_IO;
        this.MAX_time_IO_execution = MAX_time_IO_execution;
        this.quantum = quantum;
        this.readyListProcess = [];
        this.blockingListProcess = [];
        this.finishedProcessesList = [];
        this.cpu = new CPU();
        this.id = 1;
    }

    incrementClock = () => this.clock++;
    getClock = () => this.clock;
    decremetSimulationTime = () => this.simulationTime--;
    getSimulationTime = () => this.simulationTime;
    decrementTimeNextProcess = () => this.MAX_time_next_process--;
    resetTimeNextProcess = () => this.MAX_time_next_process = this.aleatGenerator(this.MAX_time_next_processM) //

    aleatGenerator = (max) => Math.floor((Math.random() * ((max + 1) - 1)) + 1);

    eventCreator(idB, idC, idA, idR, idF) {
        let aux = `The next process will be created in ${this.MAX_time_next_process}`
        if (idB) aux += `\n Status of process ${idB} is BLOCKED.`;
        if (idC) aux += `\n Process ${idC} was created.`;
        if (idA) aux += `\n Process ${idA} assigned to CPU.`;
        if (idR) aux += `\n Process ${idR} assigned to ready processes queue.`;
        if (idF) aux += `\n Process ${idF} assigned to finished processes queue.`;
        if (this.MAX_time_next_process > 0) this.decrementTimeNextProcess();
        else this.resetTimeNextProcess();
        return aux;
    }

    creatorProceess() {
        let stateP = this.cpu.getState() ? state.RUNNING : state.READY;
        let lt = this.aleatGenerator(this.MAX_life_time_process);
        let nextIO = this.aleatGenerator(this.MAX_time_next_IO);
        let IOTTL = this.aleatGenerator(this.MAX_time_IO_execution);
        let quantum = this.quantum;
        let process = new Process(this.id, stateP, lt, nextIO, IOTTL, quantum);
        if (stateP === 'R') {
            this.readyListProcess.push(process);
        } else {
            this.cpu.setProcess(process);
            this.cpu.changeState();
        }
        this.id++;
        return [process.getID(), stateP];
    }

    validator() {
        let result = [null, null, null, null, null]; //idB, idC, idA, idR 
        if (this.MAX_time_next_process === 0) {
            let created = this.creatorProceess();
            result[1] = created[0];
            if (created[1] === 'R') result[3] = created[0];
            else result[2] = created[0];
        }
        let pros = this.cpu.getProcessO();
        if (pros) {
            if (pros.getQuantum() > 0 && pros.getNextIOCurrent() > 0 && pros.getTtl() > 0) {
                pros.decrementLT();
                pros.decrementNextIO();
                pros.decrementQuantum();
            } else {
                pros.changeState(state.BLOCKING);

                this.blockingListProcess.push(pros);
                this.cpu.setProcess(null);
                this.cpu.changeState();

                //idB, idC, idA, idR 
                result[0] = pros.getID();
            }

        }

        for (let i = 0; i < this.blockingListProcess.length; i++) {
            this.blockingListProcess[i].decrementIOTTLCurrent();
        }

        let aux = this.blockingListProcess;
        this.blockingListProcess = [];

        for (let i = 0; i < aux.length; i++) {
            if (aux[i].getIOTTLCurrent() < aux[i].getIOTTL()) {
                this.blockingListProcess.push(aux[i]);
            } else {
                if (aux[i].getTtl() > 0) {
                    aux[i].resetNextIOCurrent();
                    aux[i].resetIOTTLCurrent();
                    aux[i].setQuantum(this.quantum);
                    aux[i].changeState(state.READY)
                    this.readyListProcess.push(aux[i]);
                    result[3] = aux[i].getID();
                } else {
                    this.finishedProcessesList.push(aux[i])
                    result[4] = aux[i].getID();
                }
            }

        }

        if (this.cpu.getState() && this.readyListProcess.length > 0) {
            let el = this.readyListProcess.shift();
            el.changeState(state.RUNNING);
            this.cpu.setProcess(el);
            this.cpu.changeState();
            result[2] = el.getID();
        }
        return result;
    }

    async runSimulaion() {
        while (this.clock <= this.simulationTime) {
            console.log(`Clock: ${this.clock}`)
            console.log('CPU:');
            console.log('-> Status: ', this.cpu.getState() ? 'IDLE' : 'BUSY');
            console.log('-> Process: ', this.cpu.getProcess() ? this.cpu.getProcess() : 'None');
            console.log('Ready process queue:')
            console.log('-> Process: ', this.readyListProcess.length !== 0 ? this.readyListProcess.map(i => i.show()) : 'None');
            console.log('Blocked process:')
            console.log('-> Process: ', this.blockingListProcess.length !== 0 ? this.blockingListProcess.map(i => i.show()) : 'None');
            console.log('Finished process:')
            console.log('-> Process: ', this.finishedProcessesList.length !== 0 ? this.finishedProcessesList.map(i => i.show()) : 'None');
            console.log('Events: ');
            let result = this.validator();
            console.log(this.eventCreator(result[0], result[1], result[2], result[3], result[4]));
            console.log('\n');
            this.incrementClock();
            await sleep(10);
        }
    }

    arrayCreator(arry) {
        if (arry.length !== 0) {
            let arr = arry;
            let arraux = []
            let obj = null
            for (let i = 0; i < arr.length; i++) {
                obj = {
                    id: arr[i].getID(),
                    lt: `${arr[i].getTtl()}/${arr[i].getLT()}`,
                    nextIO: `${arr[i].getNextIOCurrent()}/${arr[i].getNextIO()}`,
                    IO: `${arr[i].getIOTTLCurrent()}/${arr[i].getIOTTL()}`,
                    status: `${arr[i].getState()}`,
                    quantum: `${arr[i].getQuantum()}`
                }
                arraux.push(obj)
            }
            return arraux;
        }
        return 'None';
    }

    runInterface() {
        let arry = [];
        while (this.clock <= this.simulationTime) {
            let resultOB = {
                clock: this.clock,
                cpu: {
                    status: this.cpu.getState() ? 'IDLE' : 'BUSY',
                    process: this.cpu.getProcess() ? {
                        id: this.cpu.getProcessO().getID(),
                        lt: `${this.cpu.getProcessO().getTtl()}/${this.cpu.getProcessO().getLT()}`,
                        nextIO: `${this.cpu.getProcessO().getNextIOCurrent()}/${this.cpu.getProcessO().getNextIO()}`,
                        IO: `${this.cpu.getProcessO().getIOTTLCurrent()}/${this.cpu.getProcessO().getIOTTL()}`,
                        status: `${this.cpu.getProcessO().getState()}`,
                        quantum: `${this.cpu.getProcessO().getQuantum()}`
                    } : 'None'
                },
                readyQueue: this.arrayCreator(this.readyListProcess),
                blockedQueue: this.arrayCreator(this.blockingListProcess),
                finishedQueue: this.arrayCreator(this.finishedProcessesList),

            }
            let result = this.validator();
            let events = this.eventCreator(result[0], result[1], result[2], result[3], result[4]);
            events.replaceAll('+', '');
            events.replaceAll('"\n"', '\n');
            resultOB = {
                ...resultOB,
                events
            }
            arry.push(resultOB);
            this.incrementClock();
        }
        return arry;
    }
}


export default Processor;