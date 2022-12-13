function extractFile(input) {
    let fileArr = input.split('\\');
    let fileName = fileArr.pop();
    let indexOfDot = fileName.lastIndexOf('.');
    let name = fileName.substring(0, indexOfDot);
    let extension = fileName.substring(indexOfDot + 1);
    console.log(`File name: ${name}`);
    console.log(`File extension: ${extension}`);
}

extractFile('C:\\Projects\\Data-Structures\\LinkedList.bak.cs');