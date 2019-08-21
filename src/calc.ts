export class Calc {

    public static hash(name: string) {
        let acc = 0;
        for (let i = 0; i < name.length; i++) {
            acc += name.charCodeAt(i);
        }
        return acc;
    }

}