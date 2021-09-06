import fs from 'fs';

export const parseJsonFile = (datapath: string) => {
    let data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
    return data;
}

// class FileUtils{
//     parseJsonFile(datapath:string){
//         let data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
//         return data;
//     }
// }
// export default new FileUtils();