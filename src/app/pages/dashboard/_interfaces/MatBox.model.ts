export interface MachineColor{
    colorMartin1228 :string,
    colorWARD15000  :string,
    colorLaminadora  :string,
    colorImpresora36  :string,
    colorJS  :string,
    color924  :string,
    colorSYS  :string,
}

export interface WipColor{
    colorST1 :string,
    colorST2  :string,
    colorST3  :string,
    colorST4  :string,
    colorST5 :string,
    colorST6  :string,
    colorST7  :string,
    colorST8 :string,
    colorST9  :string,
    colorST10  :string,
    colorST11  :string,
    colorST12  :string,
    colorST13  :string,
    colorST14  :string,
    colorST15  :string,
}

export interface PackagesWIP{
    id:number,
    order :string,
    description  :string,
    valor  :string,
    idMaquina: number,
    name:string,
    visible:boolean,
    cutLength:number,
    state:number,
    ngStyle:NgStyle
}

export interface NgStyle{
    fill:string,
    width:number,
    x:number,
    fillOpacity:number,
}


export const IdMaquinas = {
    Martin1228 :22,
    WARD15000  : 39,
    Laminadora : 40,
    Impresora36 : 41,
    JS  : 43,
    M924  : 44 ,
    SYS  : 45,
}

export const IdWip = {
ST1:20,
ST2:21,
ST3:23,
ST4:24,
ST5:25,
ST6:26,
ST7:30,
ST8:31,
ST9:32,
ST10:33,
ST11:34,
ST12:35,
ST13:36,
ST14:37,
ST15:38,
CT2:48,
CT1:49,
TM:54,
CT_1:51,
CT_2:52,
ID12:14,
ID22:18,
TF1:56,
TF2:58,
}

export interface OrderProcess{
    Id:number,
    Order:string,
}