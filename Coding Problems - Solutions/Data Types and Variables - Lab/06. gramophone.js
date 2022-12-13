function songRotation(band, album, song) {

    let fullPlateRotation = 2.5;

    let songDuration = (album.length * band.length) * song.length / 2;
    let totalRotation = Math.ceil(songDuration / fullPlateRotation);

    console.log(`The plate was rotated ${totalRotation} times.`);

}

songRotation('Black Sabbath', 'Paranoid', 'War Pigs');