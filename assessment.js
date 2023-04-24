class Thing {
    // TODO: Make the magic happen 
    constructor(name) {
        this.name = name
        this.is_a = {
            woman: this.verify('woman')
        };
        this.is_not_a = {
            man: this.verify('man')
        };
        this.is_the = {
            parent_of: {
                joe: 'joe'
            }
        }
        this.arms = []
        this.fingers = []
        this.head = Object.assign(this);
        this.can = Object.assign(this);
        this.eyes = []
        this.color = 'green'
        this.shape = 'round'
        this.spoke = []
        this.head.having = (numberOf) => {
            for (let i = 0; i < 2; i++)
                this.arms.push(new Thing('arm'))
            // for (let i = 0; i < 2; i++)
            //     this.eyes.push(new Thing('eye'))
            for (let i = 0; i < 5; i++)
                this.fingers.push(new Thing('finger'))
            return this;

        }
        this.eyes = {
            each: (eye) => {
                eye();
            },
            [0]: this,
            [1]: this,
        }
        this.hands = {
            each: (hand) => {
                hand();
            },
            length: 2,
            [0]: this,
            [1]: this,
        }
    }
    verify(caller) {
        if (caller.toLowerCase() === 'woman') {
            if (this.name.toLowerCase() === 'jane') return true;
            return false;
        } else if (caller.toLowerCase() === 'man') {
            if (this.name.toLowerCase() === 'jane') return false;
            return true;
        }
    }
    get parent_of() {
        return this.is_the.parent_of.joe
    }
    get is_a_woman() {
        if (this.name.toLowerCase() === 'jane') return true;
        return false;
    }
    get is_a_man() {
        if (this.name.toLowerCase() === 'jane') return false;
        return true;
    }
    has(numberOf) {
        if (numberOf === 1) {
            this.head.name = 'head'
            return this
        }
        for (let i = 0; i < 5; i++){
            this.fingers.push(new Thing('finger'))
        }
        for (let i = 0; i < numberOf; i++){
            this.arms.push(new Thing('arm'))
        }
        this.hands[0] = this;
        this.hands[1] = this;
        return this
    }
    having(numberOf) {
        for (let i = 0; i < numberOf; i++)
            this.arms.push(new Thing('arm'))
        return this.arms
    }
    change() {
        this.color = 'blue'
        for (let i = 0; i < 2; i++)
            this.eyes.push(this)
        return this;
    }
    speak(phrase, callback) {
        this.spoke.pop()
        const res = `Jane says: ${phrase}!`;
        this.spoke.push(res);
        return res;
    }
}
function having(number) {
    return { fingers: ''}
}
const being_the = {
    color: {
        green: '',
        blue: {
            and_the: {
                shape: {
                    round: ''
                }
            }
        }
    }
}

const jane = new Thing('Jane');
jane.has(1).head.having(2).eyes.each(eye => being_the.color.blue.and_the.shape.round);
console.log(jane.head.eyes[0].color)
console.log(jane.head.eyes[0].shape)
