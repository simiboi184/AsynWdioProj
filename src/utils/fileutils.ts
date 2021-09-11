import fs from 'fs';

export const parseJsonFile = (datapath: string) => {
    let data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
    return data;
}

export const deleteDirectory = (path:string) => {
    //after execution, want to clear them away. (to save the space)
    if (fs.existsSync(path)){
        // {recursive:true} ==> forcefully delete the files even it exists
        fs.rmdirSync(path, {recursive:true})
    }
}

// class FileUtils{
//     parseJsonFile(datapath:string){
//         let data = JSON.parse(fs.readFileSync(datapath, "utf-8"));
//         return data;
//     }
// }
// export default new FileUtils();