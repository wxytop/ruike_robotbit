/*
Riven
modified from pxt-servo/servodriver.ts
load dependency
"robotbit": "file:../pxt-robotbit"
*/


//% color="#0f80ea" weight=10 icon="\uf1d1"
namespace robotbit {
    const PCA9685_ADDRESS = 0x40
    const MODE1 = 0x00
    const MODE2 = 0x01
    const SUBADR1 = 0x02
    const SUBADR2 = 0x03
    const SUBADR3 = 0x04
    const PRESCALE = 0xFE
    const LED0_ON_L = 0x06
    const LED0_ON_H = 0x07
    const LED0_OFF_L = 0x08
    const LED0_OFF_H = 0x09
    const ALL_LED_ON_L = 0xFA
    const ALL_LED_ON_H = 0xFB
    const ALL_LED_OFF_L = 0xFC
    const ALL_LED_OFF_H = 0xFD

    const STP_CHA_L = 2047
    const STP_CHA_H = 4095

    const STP_CHB_L = 1
    const STP_CHB_H = 2047

    const STP_CHC_L = 1023
    const STP_CHC_H = 3071

    const STP_CHD_L = 3071
    const STP_CHD_H = 1023

    // HT16K33 commands
    const HT16K33_ADDRESS = 0x70
    const HT16K33_BLINK_CMD = 0x80
    const HT16K33_BLINK_DISPLAYON = 0x01
    const HT16K33_BLINK_OFF = 0
    const HT16K33_BLINK_2HZ = 1
    const HT16K33_BLINK_1HZ = 2
    const HT16K33_BLINK_HALFHZ = 3
    const HT16K33_CMD_BRIGHTNESS = 0xE0

    export enum Servos {
        S1 = 0x01,
        S2 = 0x02,
        S3 = 0x03,
        S4 = 0x04,
        S5 = 0x05,
        S6 = 0x06,
        S7 = 0x07,
        S8 = 0x08
    }
    // export enum DigitalPin {
    //     P1 = 1,
    //     P2 = 2,
    //     P3 = 3,
    //     P4 = 4,
    //     P5 = 5,
    //     P6 = 6,
    //     P7 = 7,
    //     P8 = 8,
    //     P9 = 9,
    //     P10 = 10,
    //     P11 = 11,
    //     P12 = 12,
    //     P13 = 13,
    //     P14 = 14,
    //     P15 = 15,
    //     P16 = 16
    // }
    export enum Motors {
        M1A = 0x1,
        M1B = 0x2,
        M2A = 0x3,
        M2B = 0x4
    }

    export enum Steppers {
        M1 = 0x1,
        M2 = 0x2
    }

    export enum SonarVersion {
        V1 = 0x1,
        V2 = 0x2
    }

    export enum Turns {
        //% blockId="T1B4" block="1/4"
        T1B4 = 90,
        //% blockId="T1B2" block="1/2"
        T1B2 = 180,
        //% blockId="T1B0" block="1"
        T1B0 = 360,
        //% blockId="T2B0" block="2"
        T2B0 = 720,
        //% blockId="T3B0" block="3"
        T3B0 = 1080,
        //% blockId="T4B0" block="4"
        T4B0 = 1440,
        //% blockId="T5B0" block="5"
        T5B0 = 1800
    }
    export enum VoiceCode {
        //% blockId="Father" block="爸爸"
        Father = 0x01,
        //% blockId="Mother" block="妈妈"
        Mother = 0x02,
        //% blockId="GrandF" block="爷爷"
        GrandF = 0x03,
        //% blockId="GrandM" block="奶奶"
        GrandM = 0x04,
        //% blockId="Brother" block="哥哥"
        Brother = 0x05,
        //% blockId="Sister" block="姐姐"
        Sister = 0x06,
        //% blockId="Uncle" block="叔叔"
        Uncle = 0x07,
        //% blockId="aunt" block="阿姨"
        aunt = 0x08,
        //% blockId="Grandma" block="姥姥"
        Grandma = 0x09,
        //% blockId="Grandpa" block="姥爷"
        Grandpa = 0x0A,
        //% blockId="Teacher" block="老师"
        Teacher = 0x0B,
        //% blockId="Zero" block="0"
        Zero = 0x0C,
        //% blockId="One" block="1"
        One = 0x0D,
        //% blockId="Two" block="2"
        Two = 0x0E,
        //% blockId="Three" block="3"
        Three = 0x0F,
        //% blockId="Four" block="4"
        Four = 0x10,
        //% blockId="Five" block="5"
        Five = 0x11,
        //% blockId="Six" block="6"
        Six = 0x12,
        //% blockId="Seven" block="7"
        Seven = 0x13,
        //% blockId="Eight" block="8"
        Eight = 0x14,
        //% blockId="Nine" block="9"
        Nine = 0x15,
        //% blockId="Ten" block="十"
        Ten = 0x16,
        //% blockId="Hundred" block="百"
        Hundred = 0x17,
        //% blockId="Thousand" block="千"
        Thousand = 0x18,
        //% blockId="Spot" block="点"
        Spot = 0x19,
        //% blockId="Morning" block="早上"
        Morning = 0x1A,
        //% blockId="Noon" block="中午"
        Noon = 0x1B,
        //% blockId="Afternoon" block="下午"
        Afternoon = 0x1C,
        //% blockId="Night" block="晚上"
        Night = 0x1D,
        //% blockId="You" block="您"
        You = 0x1E,
        //% blockId="Good" block="好"
        Good = 0x1F,
        //% blockId="Thanks" block="谢谢"
        Thanks = 0x20,
        //% blockId="Welcome" block="欢迎光临"
        Welcome = 0x21,
        //% blockId="Year" block="新年快乐"
        Year = 0x22,
        //% blockId="Birthday" block="生日快乐"
        Birthday = 0x23,
        //% blockId="Healthy" block="身体健康"
        Healthy = 0x24,
        //% blockId="Happy" block="开开心心"
        Happy = 0x25,
        //% blockId="Please" block="请"
        Please = 0x26,
        //% blockId="Wish" block="祝"
        Wish = 0x27,
        //% blockId="Nextvisit" block="欢迎再来"
        Nextvisit = 0x28,
        //% blockId="Dear" block="亲爱的"
        Dear = 0x29,
        //% blockId="Walkslowly" block="慢走"
        Walkslowly = 0x2A,
        //% blockId="Watering" block="浇水"
        Watering = 0x2B,
        //% blockId="Redlight" block="红灯"
        Redlight = 0x2C,
        //% blockId="Greenlight" block="绿灯"
        Greenlight = 0x2D,
        //% blockId="Yellowlight" block="黄灯"
        Yellowlight = 0x2E,
        //% blockId="Hard" block="辛苦了"
        Hard = 0x2F,
        //% blockId="Congratulations" block="恭喜"
        CongratulationsYou = 0x30,
        //% blockId="OK" block="答对了"
        OK = 0x31,
        //% blockId="Again" block="再试一次"
        Again = 0x32,
        //% blockId="Forward" block="前方"
        Forward = 0x33,
        //% blockId="Obstacle" block="障碍物"
        Obstacle = 0x34,
        //% blockId="CM" block="厘米"
        CM = 0x35,
        //% blockId="Cell" block="分"
        Cell = 0x36,
        //% blockId="Second" block="秒"
        Second = 0x37,
        //% blockId="Centigrade" block="摄氏度"
        Centigrade = 0x38,
        //% blockId="Temperature" block="温度"
        Temperature = 0x39,
        //% blockId="Humidity" block="湿度"
        Humidity = 0x3A,
        //% blockId="Dis" block="距离"
        Dis = 0x3B,
        //% blockId="Current" block="当前"
        Current = 0x3C,
        //% blockId="IS" block="是"
        IS = 0x3D,
        //% blockId="Of" block="的"
        Of = 0x3E,
        //% blockId="Open" block="打开"
        Open = 0x3F,
        //% blockId="Close" block="关闭"
        Close = 0x40,
        //% blockId="Start" block="开始"
        Start = 0x41,
        //% blockId="Time" block="时间"
        Time = 0x42,
        //% blockId="Electriccurrent" block="电流"
        Electriccurrent = 0x43,
        //% blockId="Voltage" block="电压"
        Voltage = 0x44,
        //% blockId="Resistance" block="电阻"
        Resistance = 0x45,
        //% blockId="Ohm" block="欧姆"
        Ohm = 0x46,
        //% blockId="Volt" block="伏"
        Volt = 0x47,
        //% blockId="MA" block="毫安"
        MA = 0x48,
        //% blockId="Love" block="成为求真、有爱的追梦人"
        Love = 0x49,
        //% blockId="Left1" block="左"
        Left1 = 0x4A,
        //% blockId="Right1" block="右"
        Right1 = 0x4B,
        //% blockId="Forward1" block="前"
        Forward1 = 0x4C,
        //% blockId="Back1" block="后"
        Back1 = 0x4D,
        //% blockId="Trun" block="转"
        Trun = 0x4E,
        //% blockId="Towards" block="向"
        Towards = 0x4F,
        //% blockId="Near" block="靠近"
        Near = 0x50,
        //% blockId="Farfrom" block="远离"
        Farfrom = 0x51,
        //% blockId="Lookout" block="小心"
        Lookout = 0x52,
        //% blockId="Too" block="太"
        Too = 0x53,
        //% blockId="Heavy" block="重"
        Heavy = 0x54,
        //% blockId="Block" block="块"
        Block = 0x55,
        //% blockId="Slow" block="慢"
        Slow = 0x56,
         //% blockId="Light" block="轻"
         Light = 0x57,
         //% blockId="Lamp" block="灯"
         Lamp = 0x58,
         //% blockId="Quiet" block="安静"
         Quiet = 0x59,
         //% blockId="Answer" block="回答"
         Answer = 0x5A,
         //% blockId="Name" block="名"
         Name = 0x5B,
         //% blockId="First1" block="第"
         First1 = 0x5C,
         //% blockId="Classmate" block="同学"
         Classmate = 0x5D,
         //% blockId="People" block="们"
         People = 0x5E,
         //% blockId="Getset" block="预备"
         Getset = 0x5F,
         //% blockId="Setout" block="出发"
         Setout = 0x60,
         //% blockId="Dot" block="点"
         Dot = 0x61,
         //% blockId="Time1" block="时间"
         Time1 = 0x62,
         //% blockId="Number" block="数量"
         Number = 0x63,
         //% blockId="Ruike" block="欢迎使用睿客教育机器人"
         Ruike = 0x64,
    }

    let initialized = false
    let initializedMatrix = false
    let neoStrip: neopixel.Strip;
    let matBuf = pins.createBuffer(17);
    let distanceBuf = 0;
    let voice_s = DigitalPin.P0;
    let voice_b =  DigitalPin.P0;
    function voice_init(s: DigitalPin, b: DigitalPin)
    {
        voice_s = s;
        voice_b = b;
        pins.setPull(b, PinPullMode.PullUp)
        pins.setPull(s, PinPullMode.PullDown)
    }
    function voicePlayString(index: number)
    {
        pins.digitalWritePin(voice_s, 1);
        control.waitMicros(1000);
        pins.digitalWritePin(voice_s, 0);
        control.waitMicros(5000);
        for (let i = (0); i < 8; i = i + (1))
        {
            pins.digitalWritePin(voice_s, 1);
            if (index & 0x01)
            {
                control.waitMicros(1500);
                pins.digitalWritePin(voice_s, 0);
                control.waitMicros(500);
            }
            else
            {
                control.waitMicros(500);
                pins.digitalWritePin(voice_s, 0);
                control.waitMicros(1500);
            }
            index >>= 1;
        }
        pins.digitalWritePin(voice_s, 1);
        control.waitMicros(400);
        while (!pins.digitalReadPin(voice_b));
    }
    function voicePlayNumber(num: number)
    {
        let tmpTmp;
        let tmpNumber, result;
        tmpTmp = false;
        tmpNumber = num;
        tmpNumber = num - Math.floor(num / 10000) * 10000;
        for (let i = 3; i >= 1; i = i + (-1))
        {
            result = Math.floor(tmpNumber /Math.pow(10,i));
            tmpNumber = tmpNumber - result * Math.pow(10,i);
            if (result)
            {
                voicePlayString(result + 12);
                voicePlayString(21 + i);
                tmpTmp = true;
            }
            else if (tmpTmp)
            {
                voicePlayString(12);
            }
        } 
        if (tmpNumber)
        {
            voicePlayString(tmpNumber + 12);
        }
    }

    function i2cwrite(addr: number, reg: number, value: number) {
        let buf = pins.createBuffer(2)
        buf[0] = reg
        buf[1] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2ccmd(addr: number, value: number) {
        let buf = pins.createBuffer(1)
        buf[0] = value
        pins.i2cWriteBuffer(addr, buf)
    }

    function i2cread(addr: number, reg: number) {
        pins.i2cWriteNumber(addr, reg, NumberFormat.UInt8BE);
        let val = pins.i2cReadNumber(addr, NumberFormat.UInt8BE);
        return val;
    }

    function initPCA9685(): void {
        i2cwrite(PCA9685_ADDRESS, MODE1, 0x00)
        setFreq(50);
        for (let idx = 0; idx < 16; idx++) {
            setPwm(idx, 0, 0);
        }
        initialized = true
    }

    function setFreq(freq: number): void {
        // Constrain the frequency
        let prescaleval = 25000000;
        prescaleval /= 4096;
        prescaleval /= freq;
        prescaleval -= 1;
        let prescale = prescaleval; //Math.Floor(prescaleval + 0.5);
        let oldmode = i2cread(PCA9685_ADDRESS, MODE1);
        let newmode = (oldmode & 0x7F) | 0x10; // sleep
        i2cwrite(PCA9685_ADDRESS, MODE1, newmode); // go to sleep
        i2cwrite(PCA9685_ADDRESS, PRESCALE, prescale); // set the prescaler
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode);
        control.waitMicros(5000);
        i2cwrite(PCA9685_ADDRESS, MODE1, oldmode | 0xa1);
    }

    function setPwm(channel: number, on: number, off: number): void {
        if (channel < 0 || channel > 15)
            return;
        //serial.writeValue("ch", channel)
        //serial.writeValue("on", on)
        //serial.writeValue("off", off)

        let buf = pins.createBuffer(5);
        buf[0] = LED0_ON_L + 4 * channel;
        buf[1] = on & 0xff;
        buf[2] = (on >> 8) & 0xff;
        buf[3] = off & 0xff;
        buf[4] = (off >> 8) & 0xff;
        pins.i2cWriteBuffer(PCA9685_ADDRESS, buf);
    }


    function setStepper(index: number, dir: boolean): void {
        if (index == 1) {
            if (dir) {
                setPwm(0, STP_CHA_L, STP_CHA_H);
                setPwm(2, STP_CHB_L, STP_CHB_H);
                setPwm(1, STP_CHC_L, STP_CHC_H);
                setPwm(3, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(3, STP_CHA_L, STP_CHA_H);
                setPwm(1, STP_CHB_L, STP_CHB_H);
                setPwm(2, STP_CHC_L, STP_CHC_H);
                setPwm(0, STP_CHD_L, STP_CHD_H);
            }
        } else {
            if (dir) {
                setPwm(4, STP_CHA_L, STP_CHA_H);
                setPwm(6, STP_CHB_L, STP_CHB_H);
                setPwm(5, STP_CHC_L, STP_CHC_H);
                setPwm(7, STP_CHD_L, STP_CHD_H);
            } else {
                setPwm(7, STP_CHA_L, STP_CHA_H);
                setPwm(5, STP_CHB_L, STP_CHB_H);
                setPwm(6, STP_CHC_L, STP_CHC_H);
                setPwm(4, STP_CHD_L, STP_CHD_H);
            }
        }
    }

    function stopMotor(index: number) {
        setPwm((index - 1) * 2, 0, 0);
        setPwm((index - 1) * 2 + 1, 0, 0);
    }

    function matrixInit() {
        i2ccmd(HT16K33_ADDRESS, 0x21);// turn on oscillator
        i2ccmd(HT16K33_ADDRESS, HT16K33_BLINK_CMD | HT16K33_BLINK_DISPLAYON | (0 << 1));
        i2ccmd(HT16K33_ADDRESS, HT16K33_CMD_BRIGHTNESS | 0xF);
    }

    function matrixShow() {
        matBuf[0] = 0x00;
        pins.i2cWriteBuffer(HT16K33_ADDRESS, matBuf);
    }


    /**
     * Init RGB pixels mounted on robotbit
     */
    //% blockId="robotbit_rgb" block="RGB"
    //% weight=5
    export function rgb(): neopixel.Strip {
        if (!neoStrip) {
            neoStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
        }

        return neoStrip;
    }

    /**
     * Servo Execute
     * @param index Servo Channel; eg: S1
     * @param degree [0-180] degree of servo; eg: 0, 90, 180
    */
    //% blockId=robotbit_servo block="Servo|%index|degree %degree"
    //% weight=100
    //% degree.min=0 degree.max=180
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function Servo(index: Servos, degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = (degree * 1800 / 180 + 600) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000
        setPwm(index + 7, 0, value)
    }

    /**
     * Geek Servo
     * @param index Servo Channel; eg: S1
     * @param degree [-45-225] degree of servo; eg: -45, 90, 225
    */
    //% blockId=robotbit_gservo block="Geek Servo|%index|degree %degree"
    //% weight=99
    //% degree.min=-45 degree.max=225
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function GeekServo(index: Servos, degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        let v_us = ((degree - 90) * 20 / 3 + 1500) // 0.6 ~ 2.4
        let value = v_us * 4096 / 20000
        setPwm(index + 7, 0, value)
    }

        /**
     * GeekServo2KG
     * @param index Servo Channel; eg: S1
     * @param degree [0-360] degree of servo; eg: 0, 180, 360
    */
    //% blockId=robotbit_gservo2kg block="GeekServo2KG|%index|degree %degree"
    //% weight=98
    //% blockGap=50
    //% degree.min=0 degree.max=360
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function GeekServo2KG(index: Servos, degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        // 50hz: 20,000 us
        //let v_us = (degree * 2000 / 360 + 500)  0.5 ~ 2.5
        let v_us = (Math.floor((degree) * 2000 / 350) + 500) //fixed
        let value = v_us * 4096 / 20000
        setPwm(index + 7, 0, value)
    }

     //% blockId=robotbit_voicePlayNumber block="sc5080b play number |%num|"
    //% weight=90
    export function PlayVoiceNumber(num: number): void {
        voicePlayNumber(num);
    }

     //% blockId=robotbit_voicePlayString block="sc5080b play voice|%index|"
    //% weight=90
    export function PlayVoiceString(index: VoiceCode): void {
        voicePlayString(index);
    }
   
      //% blockId=robotbit_sc5080BVoice_init block="sc50b0b voice init S|%pin1|B %pin2"
    //% weight=90
    export function Sc5080BVoice_init(pin1: DigitalPin, pin2: DigitalPin): void {
        voice_init(pin1,pin2);
    }
   
    //% blockId=robotbit_stepper_degree block="Stepper 28BYJ-48|%index|degree %degree"
    //% weight=90
    export function StepperDegree(index: Steppers, degree: number): void {
        if (!initialized) {
            initPCA9685()
        }
        setStepper(index, degree > 0);
        degree = Math.abs(degree);
        basic.pause(10240 * degree / 360);
        MotorStopAll()
    }
    


    //% blockId=robotbit_stepper_turn block="Stepper 28BYJ-48|%index|turn %turn"
    //% weight=90
    export function StepperTurn(index: Steppers, turn: Turns): void {
        let degree = turn;
        StepperDegree(index, degree);
    }

    //% blockId=robotbit_stepper_dual block="Dual Stepper(Degree) |M1 %degree1| M2 %degree2"
    //% weight=89
    export function StepperDual(degree1: number, degree2: number): void {
        if (!initialized) {
            initPCA9685()
        }
        setStepper(1, degree1 > 0);
        setStepper(2, degree2 > 0);
        degree1 = Math.abs(degree1);
        degree2 = Math.abs(degree2);
        basic.pause(10240 * Math.min(degree1, degree2) / 360);
        if (degree1 > degree2) {
            stopMotor(3); stopMotor(4);
            basic.pause(10240 * (degree1 - degree2) / 360);
        } else {
            stopMotor(1); stopMotor(2);
            basic.pause(10240 * (degree2 - degree1) / 360);
        }

        MotorStopAll()
    }

    /**
     * Stepper Car move forward
     * @param distance Distance to move in cm; eg: 10, 20
     * @param diameter diameter of wheel in mm; eg: 48
    */
    //% blockId=robotbit_stpcar_move block="Car Forward|Distance(cm) %distance|Wheel Diameter(mm) %diameter"
    //% weight=88
    export function StpCarMove(distance: number, diameter: number): void {
        if (!initialized) {
            initPCA9685()
        }
        let delay = 10240 * 10 * distance / 3 / diameter; // use 3 instead of pi
        setStepper(1, delay > 0);
        setStepper(2, delay > 0);
        delay = Math.abs(delay);
        basic.pause(delay);
        MotorStopAll()
    }

    /**
     * Stepper Car turn by degree
     * @param turn Degree to turn; eg: 90, 180, 360
     * @param diameter diameter of wheel in mm; eg: 48
     * @param track track width of car; eg: 125
    */
    //% blockId=robotbit_stpcar_turn block="Car Turn|Degree %turn|Wheel Diameter(mm) %diameter|Track(mm) %track"
    //% weight=87
    //% blockGap=50
    export function StpCarTurn(turn: number, diameter: number, track: number): void {
        if (!initialized) {
            initPCA9685()
        }
        let delay = 10240 * turn * track / 360 / diameter;
        setStepper(1, delay < 0);
        setStepper(2, delay > 0);
        delay = Math.abs(delay);
        basic.pause(delay);
        MotorStopAll()
    }

    //% blockId=robotbit_motor_run block="Motor|%index|speed %speed"
    //% weight=85
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRun(index: Motors, speed: number): void {
        if (!initialized) {
            initPCA9685()
        }
        speed = speed * 16; // map 255 to 4096
        if (speed >= 4096) {
            speed = 4095
        }
        if (speed <= -4096) {
            speed = -4095
        }
        if (index > 4 || index <= 0)
            return
        let pp = (index - 1) * 2
        let pn = (index - 1) * 2 + 1
        if (speed >= 0) {
            setPwm(pp, 0, speed)
            setPwm(pn, 0, 0)
        } else {
            setPwm(pp, 0, 0)
            setPwm(pn, 0, -speed)
        }
    }


    /**
     * Execute two motors at the same time
     * @param motor1 First Motor; eg: M1A, M1B
     * @param speed1 [-255-255] speed of motor; eg: 150, -150
     * @param motor2 Second Motor; eg: M2A, M2B
     * @param speed2 [-255-255] speed of motor; eg: 150, -150
    */
    //% blockId=robotbit_motor_dual block="Motor|%motor1|speed %speed1|%motor2|speed %speed2"
    //% weight=84
    //% speed1.min=-255 speed1.max=255
    //% speed2.min=-255 speed2.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDual(motor1: Motors, speed1: number, motor2: Motors, speed2: number): void {
        MotorRun(motor1, speed1);
        MotorRun(motor2, speed2);
    }

    /**
     * Execute single motors with delay
     * @param index Motor Index; eg: M1A, M1B, M2A, M2B
     * @param speed [-255-255] speed of motor; eg: 150, -150
     * @param delay seconde delay to stop; eg: 1
    */
    //% blockId=robotbit_motor_rundelay block="Motor|%index|speed %speed|delay %delay|s"
    //% weight=81
    //% speed.min=-255 speed.max=255
    //% name.fieldEditor="gridpicker" name.fieldOptions.columns=4
    export function MotorRunDelay(index: Motors, speed: number, delay: number): void {
        MotorRun(index, speed);
        basic.pause(delay * 1000);
        MotorRun(index, 0);
    }



    //% blockId=robotbit_stop block="Motor Stop|%index|"
    //% weight=80
    export function MotorStop(index: Motors): void {
        MotorRun(index, 0);
    }

    //% blockId=robotbit_stop_all block="Motor Stop All"
    //% weight=79
    //% blockGap=50
    export function MotorStopAll(): void {
        if (!initialized) {
            initPCA9685()
        }
        for (let idx = 1; idx <= 4; idx++) {
            stopMotor(idx);
        }
    }

    //% blockId=robotbit_matrix_draw block="Matrix Draw|X %x|Y %y"
    //% weight=69
    export function MatrixDraw(x: number, y: number): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        x = Math.round(x)
        y = Math.round(y)
        
        let idx = y * 2 + Math.idiv(x, 8);
        
        let tmp = matBuf[idx + 1];
        tmp |= (1 << (x % 8));
        matBuf[idx + 1] = tmp;
    }

    //% blockId=robotbit_matrix_refresh block="Matrix Refresh"
    //% weight=69
    export function MatrixRefresh(): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        matrixShow();
    }

	/*
    //% blockId=robotbit_matrix_clean block="Matrix Clean|X %x|Y %y"
    //% weight=68
    export function MatrixClean(x: number, y: number): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        let idx = y * 2 + x / 8;
		// todo: bitwise not throw err 
        matBuf[idx + 1] &=~(1 << (x % 8));
        matrixShow();
    }
	*/

    //% blockId=robotbit_matrix_clear block="Matrix Clear"
    //% weight=65
    //% blockGap=50
    export function MatrixClear(): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        for (let i = 0; i < 16; i++) {
            matBuf[i + 1] = 0;
        }
        matrixShow();
    }

    //% blockId=robotbit_rgbultrasonic block="Ultrasonic|pin %pin"
    //% weight=10
    export function RgbUltrasonic(pin: DigitalPin): number {
        pins.setPull(pin, PinPullMode.PullNone);
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(pin, 0);

        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 25000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }
        distanceBuf = d;   

        return Math.floor(ret * 9 / 6 / 58);
    }

    //% blockId=robotbit_holeultrasonicver block="Ultrasonic|pin %pin|version %v"
    //% weight=10
    export function HoleUltrasonic(pin: DigitalPin): number {

        // send pulse
        pins.setPull(pin, PinPullMode.PullDown);
        pins.digitalWritePin(pin, 0);
        control.waitMicros(2);
        pins.digitalWritePin(pin, 1);
        control.waitMicros(10);
        pins.digitalWritePin(pin, 0);

        // read pulse
        let d = pins.pulseIn(pin, PulseValue.High, 25000);
        let ret = d;
        // filter timeout spikes
        if (ret == 0 && distanceBuf != 0) {
            ret = distanceBuf;
        }

        distanceBuf = d;

        return Math.floor(ret / 40 + (ret / 800));
    }

}
