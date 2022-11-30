const caculateOee = function() {
    let a, p, q, oee
    
    const calculateA = () => {
        a = this.plannedTime ? (this.runtime / this.plannedTime) : 0;
    }

    const calculateP = () => {
        p = this.runtime ? (this.netRuntime / this.runtime) : 0;
    }

    const calculateQ = () => {
        q = this.total ? ((this.total - this.ng) / this.total) : 0;
    }

    const calculateOEE = () => {
        oee = a * p * q; 
    }

    calculateA()
    calculateP()
    calculateQ()
    calculateOEE()

    return {
        Oee: Math.floor(oee * 10000) / 100,
        A: Math.floor(a * 10000) / 100,
        P: Math.floor(p * 10000) / 100,
        Q: Math.floor(q * 10000) / 100,
    }    
}

module.exports = caculateOee