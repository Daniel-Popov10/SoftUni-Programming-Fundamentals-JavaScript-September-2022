function coneMeasure(radius, heigth) {

    let volume = ((1 / 3) * Math.PI * Math.pow(radius, 2) * heigth).toFixed(4);
    let slantHeigth = Math.sqrt(Math.pow(radius, 2) + Math.pow(heigth, 2));
    let totalSurfaceArea = ((Math.PI * radius * slantHeigth) + (Math.PI * Math.pow(radius, 2))).toFixed(4)

    console.log(`volume = ${volume}`);
    console.log(`area = ${totalSurfaceArea}`);
}

coneMeasure(3.3, 7.8);


