import { saveAs } from 'file-saver';

export function createContractFile(text) {
    let blob = new Blob( [text], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "contract.txt");
}