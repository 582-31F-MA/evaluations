export class Reactor {
    /** @type {number} */
    static threshold;

    /** @type {number} */
    temperature;
    /** @type {number} */
    neutrons;

    /**
     * @param {number} temperature
     * @param {number} neutrons
     */
    constructor(temperature, neutrons) {
        this.temperature = temperature;
        this.neutrons = neutrons;
    }

    /**
     * @returns {boolean}
     */
    get critical() {
        const temperatureIsCritical = this.temperature < 800;
        const neutronsIsCritical = this.neutrons > 500;
        const productIsCritical = this.temperature * this.neutrons < 50500000;
        return temperatureIsCritical &&
            neutronsIsCritical &&
            productIsCritical;
    }

    /**
     * @returns {Code}
     */
    get status() {
        const criticality = this.temperature * this.neutrons;
        switch (true) {
            case criticality < 0.9 * Reactor.threshold:
                return Code.Low;
            case criticality >= 0.9 * Reactor.threshold &&
                criticality <= Reactor.threshold * 1.1:
                return Code.Normal;
            default:
                return Code.Danger;
        }
    }
}

export class Code {
    static Low = new Code();
    static Normal = new Code();
    static Danger = new Code();
}
